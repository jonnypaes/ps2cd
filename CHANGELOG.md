# Changelog

## v0.1.0

Initial public open beta release.

### Added

- `ps2cd` CLI.
- Directory-to-CD `.bin/.cue` output.
- Directory-to-DVD `.iso` output.
- IML sidecar generation.
- Existing IML input through `from-iml`.
- Deterministic file ordering.
- `ps2cd.order` allocation manifest.
- Legacy `ps2iml.order` fallback.
- Optional local boot-logo source handling.
- Web/WASM preview package.
- Windows, macOS, Linux, and Android userspace release artifacts.
- SHA256 checksum sidecars for release ZIP files.
- `SHA256SUMS.txt` for release verification.
- Tag-based GitHub Release workflow.
- Windows PE icon and version metadata when build inputs are available.
- Root `ps2cd.manifest.json` for project metadata.

### Notes

- This is a public open beta intended for compatibility validation.
- Source publication is planned after beta validation and compatibility feedback.
- Dynamic library artifacts are not included in this release line.
- No proprietary PlayStation assets are included.
- This release is intended for homebrew-oriented workflows.
