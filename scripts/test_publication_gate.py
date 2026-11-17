import unittest

from publication_gate import (
    GLOBAL_SCIENTIFIC_AUTO_REGISTRY,
    Publication,
    Authorization,
    assess,
    require_public_registry_activation,
)


class GateTests(unittest.TestCase):

    def test_default_disabled(self):
        self.assertFalse(GLOBAL_SCIENTIFIC_AUTO_REGISTRY)

    def test_empty_blocked(self):
        self.assertEqual(assess()["activation"], "BLOCKED")

    def test_unverified_publication_blocked(self):
        p = Publication("doi:test", "https://example.org", "a"*64)
        r = assess(p)
        self.assertFalse(r["publication_verified"])
        self.assertEqual(r["activation"], "BLOCKED")

    def test_verified_publication_alone_blocked(self):
        p = Publication(
            "doi:test", "https://example.org", "a"*64, True
        )
        self.assertEqual(assess(p)["activation"], "BLOCKED")

    def test_unmatched_approval_blocked(self):
        p = Publication(
            "doi:test", "https://example.org", "a"*64, True
        )
        a = Authorization("decision-1", True, "doi:other")
        self.assertFalse(assess(p, a)["human_approval_recorded"])

    def test_all_claimed_prerequisites_still_blocked(self):
        p = Publication(
            "doi:test", "https://example.org", "a"*64, True
        )
        a = Authorization("decision-1", True, "doi:test")
        r = assess(p, a)
        self.assertTrue(r["publication_verified"])
        self.assertTrue(r["human_approval_recorded"])
        self.assertFalse(r["automatic_registry_enabled"])
        self.assertEqual(r["activation"], "BLOCKED")

    def test_runtime_guard_denies(self):
        with self.assertRaises(PermissionError):
            require_public_registry_activation()


if __name__ == "__main__":
    unittest.main()
