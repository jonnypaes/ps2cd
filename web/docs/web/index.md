# Web/WASM preview

## Index

- [Purpose](#purpose)
- [Hosted layout](#hosted-layout)
- [User workflow](#user-workflow)
- [Developer customization](#developer-customization)
- [Boot logo fallback](#boot-logo-fallback)
- [Checksums and release trust](#checksums-and-release-trust)
- [Limitations](#limitations)
- [Future source milestone](#future-source-milestone)

## Purpose

The Web/WASM preview provides a browser-based entry point for building PS2 CD/DVD images without requiring the user to install a local command-line tool.

The web package is designed around a simple contract:

```text
user files + optional site customization + ps2cd WASM exporter -> generated image
```

The public page should stay simple. Users upload a ZIP or select a folder, choose the output media, build the image, and download the result.

## Hosted layout

The web app is self-contained under `web/` so it can be hosted directly as a GitHub Pages root or copied into another project.

Expected layout:

```text
web/
  index.html
  boot.bmp              optional site-level boot-logo override
  dist/                 generated WASM bindings
  src/js/               browser logic
  src/css/              styling
  assets/               optional developer-owned assets
```

The generic app does not require `boot.bmp` to exist. If it is absent, the Rust/WASM core uses the BMP embedded at `src/boot_logo/assets/ps2cd_boot.bmp`. If that embedded BMP cannot be parsed, the core generates a small runtime `PS2CD` wordmark as the final non-file fallback.

## User workflow

The generic workflow expects the uploaded ZIP or selected folder to mirror the intended disc root.

Correct ZIP layout:

```text
directory.zip
  SYSTEM.CNF
  SLUS_123.45
  DATA/
  MODULES/
```

Incorrect ZIP layout:

```text
directory.zip
  dummy/
    SYSTEM.CNF
    SLUS_123.45
```

`SYSTEM.CNF` must exist at the uploaded project root for the generic web builder. Project-specific forks may generate or replace `SYSTEM.CNF` internally, but that is not the default public workflow.

## Developer customization

The `web/assets/` directory is a developer-owned layer. It is not intended to be edited by the end user.

Useful optional files:

```text
web/boot.bmp
web/assets/ps2cd.order
web/assets/ps2iml.order
```

A project fork may replace these files or add its own preprocessing layer before calling the WASM exporter.

The generic ps2cd web page does not include project-specific patching logic. It provides the fertile ground: file loading, optional site assets, ordering, boot-logo fallback, WASM export, and download.

## Boot logo fallback

Boot-logo source priority in the web preview:

```text
1. boot.bmp / boot.bin / boot.logo / boot.raw from the uploaded project root
2. web/boot.bmp as an optional site-level override
3. BMP embedded in the Rust/WASM core from `src/boot_logo/assets/ps2cd_boot.bmp`
4. runtime-generated `PS2CD` wordmark if the embedded BMP fails
5. no boot logo only if a Disc ID cannot be detected
```

The fallback is automatic. The user does not need to choose a boot-logo image. The embedded BMP is project-owned and non-proprietary; users who want another image must provide their own source file.

## Checksums and release trust

Release ZIP files are published with SHA256 checksums.

The release includes:

```text
SHA256SUMS.txt
*.zip.sha256
```

Checksums prove that a downloaded file matches the released artifact. They do not replace source review, but they are useful while this line is distributed as a public open beta.

## Limitations

The Web/WASM preview is experimental.

Known limitations:

- Very large projects may fail due to browser memory limits.
- Output streaming is not implemented yet.
- ZIP parsing happens in JavaScript before files are sent to WASM.
- Project-specific patching, asset conversion, and file transformation are outside the generic builder.
- Compatibility reports should include loader/version, target environment, image type, result, and notes.

## Future source milestone

The initial public line is distributed as a compiled public open beta to collect compatibility feedback and stabilize the release surface.

Source publication is planned after this beta validation phase.
