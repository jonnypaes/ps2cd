# Web assets

This directory is reserved for project-specific web assets.

The generic ps2cd web page works without any required asset in this directory. The Rust/WASM core has a built-in boot-logo fallback embedded at compile time.

Useful optional files:

```text
boot.bmp        optional site-level boot-logo override
ps2cd.order     optional ordering rules used when the uploaded project does not provide one
ps2iml.order    legacy ordering rules used when ps2cd.order is absent
```

End users do not need to edit this directory. Project forks can replace or extend it.
