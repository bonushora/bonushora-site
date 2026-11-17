"""MT-WEB-28: fail-closed publishing boundary for future BH-RESEARCH-SYNC.

A deliberately narrow integration point. No live registry activation, network, or
remote deployment. Future publishers must use this boundary and be qualified.
"""
from __future__ import annotations

import hashlib
import os
from pathlib import Path
import tempfile

from publication_gate import require_public_registry_activation


class BlockedPublication(PermissionError):
    pass


def publish_qualified_snapshot(
    payload: bytes,
    destination: Path,
) -> None:
    """Only future, separately authorized publishers may write after the gate.

    The production default is the permanently-denying v0.1 activation gate.
    The gate is mandatory; callers cannot replace it through this API.
    """
    if not isinstance(payload, bytes) or not payload:
        raise BlockedPublication('BLOCKED: invalid payload')
    if not isinstance(destination, Path):
        raise BlockedPublication('BLOCKED: invalid destination')
    # Guard MUST run before checking/creating the target and before filesystem writes.
    require_public_registry_activation()
    # A later authorized version still requires target policy, schema validation,
    # source provenance checks and atomic publication qualification. Stay closed.
    raise BlockedPublication('BLOCKED: publication writer not implemented')


def export_candidate_to_public_portal(*_args: object, **_kwargs: object) -> None:
    """Explicitly reject promotion of unqualified candidate projections."""
    require_public_registry_activation()
    raise BlockedPublication('BLOCKED: candidate is not qualified')
