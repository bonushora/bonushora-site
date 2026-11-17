from pathlib import Path
import json
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]

class PublicationSurfacePolicyTests(unittest.TestCase):
    def test_no_injectable_gate_on_public_api(self):
        import inspect
        from publication_boundary import publish_qualified_snapshot
        self.assertNotIn('gate', inspect.signature(publish_qualified_snapshot).parameters)

    def test_boundary_remains_denied(self):
        from publication_boundary import publish_qualified_snapshot
        with self.assertRaises(PermissionError):
            publish_qualified_snapshot(b'{}', ROOT / 'some-nonexistent-output.json')
        self.assertFalse((ROOT / 'some-nonexistent-output.json').exists())

    def test_atlas_provenance_unqualified(self):
        data=json.loads((ROOT/'docs/city/BH-CARTOGRAPHY-PROVENANCE-v0.1.json').read_text())
        self.assertEqual(data['status'],'UNPINNED_NOT_QUALIFIED')
        self.assertEqual(data['public_scientific_registry'],'DISABLED_BY_POLICY')
        self.assertTrue(data['data_sources'])
        for item in data['data_sources']:
            self.assertIsNone(item['content_sha256'])
            self.assertIsNone(item['immutable_revision'])
            self.assertEqual(item['reproducibility'],'NOT_QUALIFIED')

    def test_manifest_urls_match_unchanged_atlas(self):
        from hashlib import sha256
        data=json.loads((ROOT/'docs/city/BH-CARTOGRAPHY-PROVENANCE-v0.1.json').read_text())
        source=(ROOT / data['atlas_source_file']).read_bytes()
        self.assertEqual(sha256(source).hexdigest(),data['atlas_source_sha256'])
        text=source.decode()
        for item in data['data_sources']:
            const=item['code_constant']
            url=item['url']
            self.assertRegex(text,re.escape(const)+r'\s*=\s*[\"\']'+re.escape(url))

if __name__ == '__main__': unittest.main()
