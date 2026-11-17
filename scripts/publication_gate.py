"""BH-RESEARCH-SYNC: public scientific registry activation gate.

Policy v0.1: fail-closed, no activation permitted.
This module does not publish, ingest or modify remote data.
"""

from dataclasses import dataclass
from typing import Optional

GLOBAL_SCIENTIFIC_AUTO_REGISTRY = False
POLICY_VERSION = "BH-PUBLICATION-ACTIVATION-GATE-v0.1"


@dataclass(frozen=True)
class Publication:
    identifier: str
    persistent_url: str
    source_sha256: str
    independently_verified: bool = False


@dataclass(frozen=True)
class Authorization:
    decision_id: str
    approved: bool = False
    publication_identifier: Optional[str] = None


def assess(
    publication: Optional[Publication] = None,
    authorization: Optional[Authorization] = None,
) -> dict:
    """Report readiness, never grant activation under policy v0.1."""
    has_publication = (
        publication is not None
        and bool(publication.identifier.strip())
        and bool(publication.persistent_url.strip())
        and len(publication.source_sha256) == 64
        and all(c in "0123456789abcdef"
                for c in publication.source_sha256)
        and publication.independently_verified
    )

    has_approval = (
        authorization is not None
        and authorization.approved
        and bool(authorization.decision_id.strip())
        and publication is not None
        and authorization.publication_identifier
            == publication.identifier
    )

    return {
        "policy": POLICY_VERSION,
        "publication_verified": bool(has_publication),
        "human_approval_recorded": bool(has_approval),
        "automatic_registry_enabled": False,
        "activation": "BLOCKED",
        "reason": "PUBLICATION_ACTIVATION_NOT_AUTHORIZED",
    }


def require_public_registry_activation() -> None:
    """Guard for future public publishing entrypoints."""
    raise PermissionError(
        "GLOBAL_SCIENTIFIC_AUTO_REGISTRY=DISABLED; "
        "explicitly qualified policy revision required"
    )


if __name__ == "__main__":
    result = assess()
    for key, value in result.items():
        print(f"{key.upper()}={value}")
