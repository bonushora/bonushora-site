from pathlib import Path
import tempfile
import unittest

from publication_boundary import (
    BlockedPublication,
    export_candidate_to_public_portal,
    publish_qualified_snapshot,
)
from publication_gate import Publication, Authorization, assess


class PublicationBoundaryTests(unittest.TestCase):
    def test_default_deny_no_file(self):
        with tempfile.TemporaryDirectory() as d:
            target = Path(d) / 'public.json'
            with self.assertRaises(PermissionError):
                publish_qualified_snapshot(b'{}', target)
            self.assertFalse(target.exists())

    def test_no_directory_created(self):
        with tempfile.TemporaryDirectory() as d:
            target = Path(d) / 'public' / 'data.json'
            with self.assertRaises(PermissionError):
                publish_qualified_snapshot(b'{}', target)
            self.assertFalse(target.parent.exists())

    def test_preexisting_file_not_modified(self):
        with tempfile.TemporaryDirectory() as d:
            target = Path(d) / 'published.json'
            target.write_bytes(b'BASELINE')
            with self.assertRaises(PermissionError):
                publish_qualified_snapshot(b'changed', target)
            self.assertEqual(target.read_bytes(), b'BASELINE')

    def test_explicit_candidate_deny(self):
        with self.assertRaises(PermissionError):
            export_candidate_to_public_portal({'qualification': 'CANDIDATE_ONLY'})

    def test_invalid_payload_deny(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(BlockedPublication):
                publish_qualified_snapshot(b'', Path(d) / 'x')

    def test_verified_and_approved_still_denied(self):
        p = Publication('doi:example', 'https://example.org', 'a' * 64, True)
        a = Authorization('decision-1', True, p.identifier)
        r = assess(p, a)
        self.assertFalse(r['automatic_registry_enabled'])
        self.assertEqual(r['activation'], 'BLOCKED')

    def test_caller_cannot_inject_bypass_gate(self):
        with tempfile.TemporaryDirectory() as d:
            target = Path(d) / 'published.json'
            with self.assertRaises(TypeError):
                publish_qualified_snapshot(b'{}', target, gate=lambda: None)
            self.assertFalse(target.exists())

    def test_gate_called_before_disk(self):
        from unittest.mock import patch
        calls=[]
        def deny():
            calls.append('gate')
            raise PermissionError('denied')
        with tempfile.TemporaryDirectory() as d:
            target=Path(d)/'missing'/'file.json'
            with patch('publication_boundary.require_public_registry_activation', deny):
                with self.assertRaises(PermissionError):
                    publish_qualified_snapshot(b'{}', target)
            self.assertEqual(calls, ['gate'])
            self.assertFalse(target.parent.exists())


if __name__ == '__main__':
    unittest.main()
