# PS2CD - Public open beta

## Index

- [What this release is](#what-this-release-is)
- [What is included](#what-is-included)
- [Integrity files](#integrity-files)
- [No proprietary assets](#no-proprietary-assets)
- [Compatibility feedback](#compatibility-feedback)
- [Source availability](#source-availability)
- [Quick start](#quick-start)
  - [Drag and Drop](#drag-and-drop)
  - [CLI](#command-line-interface-cli)
- [Commands](#commands)
- [Boot logo replacement](#boot-logo-replacement)
- [Links](#links)

## What this release is

`ps2cd` v0.1.0 is a public open beta for deterministic PS2 CD/DVD image building.

The purpose of this beta is to validate real-world compatibility before locking a broader public development surface.

## What is included

The release line includes:

- CLI builds for Windows, macOS, Linux, and Android userspace.
- A Web/WASM preview package for browser-based workflows.
- Documentation for usage, downloads, architecture, compatibility notes, and developer assets.
- A boot-logo replacement pipeline for local user-provided or developer-provided sources.
- Release checksums for artifact verification.

## Integrity files

Every release ZIP has SHA256 verification data:

```text
SHA256SUMS.txt
*.zip.sha256
```

Use these files to confirm that a downloaded artifact matches the published release.

## No proprietary assets

`ps2cd` does not include proprietary PlayStation assets, extracted boot-logo payloads, or protected logo sector dumps.

Users and project maintainers are responsible for providing their own legally allowed local files when using the tool.

## Compatibility feedback

Useful compatibility reports include:

```text
ps2cd version
platform used to build the image
output type
loader or emulator version
hardware model, when applicable
whether the boot logo appeared correctly
whether the target ELF started correctly
notes about audio, video, or loading behavior
```

## Source availability

This beta is distributed as compiled artifacts and a Web/WASM package first.

Source publication is planned after public beta validation and compatibility feedback. This keeps the initial release focused on testing, artifact quality, documentation, and compatibility reports before the development surface is opened more broadly.


## Quick start

### Drag and Drop

You can drag your folder onto ps2cd for the default conversion:

https://github.com/user-attachments/assets/5647c9ca-0eca-4b56-8962-0854e17593f2

The files used in this video are available in [examples](examples/index.md).

* If validation fails, drag-and-drop mode will not display the error. Use the CLI to view diagnostic output.

### Command-Line interface (CLI)

Build a CD image from a directory:

```bash
ps2cd ./disc
```

Example input:

```text
disc/
  SYSTEM.CNF
  SLUS_275.00
  IOPRP300.IMG
  MODULES/
  DATA/
```

Default output:

```text
disc.iml
disc.bin
disc.cue
```

Build a DVD ISO instead:

```bash
ps2cd ./disc --dvd
```

DVD output:

```text
disc.iml
disc.iso
```

## Commands

```bash
ps2cd <disc-root> [options]
ps2cd build --root <disc-root> --media <cd|dvd> --out <output> [options]
ps2cd emit-iml --root <disc-root> --media <cd|dvd> --out <file> [options]
ps2cd from-iml --iml <file> --out <output> [options]
ps2cd inspect --iml <file>
```

## Boot logo replacement

`ps2cd` can apply a local boot-logo source before the final CD/DVD image is emitted.

Supported local source names:

```text
boot.bin
boot.logo
boot.raw
boot.bmp
```

The replacement pipeline is not just extraction or removal. It exists to place a new local image/payload into the correct logical sector range, validate the protected result, and then emit CD/DVD output without corrupting the filesystem or CD sector metadata.

Demo:

- [Custom boot logo demonstration](https://www.youtube.com/watch?v=_xAPkhD85tU)

## Links

- [GitHub repository](https://github.com/jonnypaes/ps2cd)
- [GitHub Pages](https://jonnypaes.github.io/ps2cd/)
- [PS2CD Online](https://jonnypaes.github.io/ps2cd/web)
- [Latest release](https://github.com/jonnypaes/ps2cd/releases/latest)
- [Downloads](https://jonnypaes.github.io/ps2cd/docs/download/)
