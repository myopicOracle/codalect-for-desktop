# Publishing Guide for Codalect Desktop

> This document is a stub. A full release process will be defined when CI/CD is actively set up.

## Versioning

Codalect Desktop follows the Theia IDE version it is built on, with a Codalect patch suffix:

- Format: `THEIA_MAJOR.THEIA_MINOR.CODALECT_PATCH` (e.g., `1.67.100`)
- Development branches: `desktop-v*`
- Release tags: `vMAJOR.MINOR.PATCH`

## Building for Release

```bash
# Full production build
yarn && yarn build && yarn download:plugins

# Package Electron app (outputs to applications/electron/dist/)
yarn electron package
```

Outputs:
- macOS: `.dmg` (x64 + arm64)
- Windows: `.exe` (NSIS installer)
- Linux: `.AppImage`, `.deb`

## Tagging a Release

```bash
git tag vX.Y.Z <commit-sha>
git push origin vX.Y.Z
```

## Known Gaps

- CI/CD pipeline not yet configured for Codalect (GitHub Actions workflows are stubs)
- macOS code signing and notarization not yet set up
- Windows `.ico` icon is a placeholder (see CLAUDE.md known issues)
- Auto-update publish URLs (`download.codalect.com`) are not yet active
