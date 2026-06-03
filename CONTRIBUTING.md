# Contributing to Codalect Desktop

Codalect Desktop is currently a solo project. External contributions are not being accepted at this stage.

If you've found a bug or have a feature suggestion, [open an issue](https://github.com/Praevisio-Labs/codalect-for-desktop/issues) on GitHub.

## Development Setup

See [README.md](README.md) for build requirements and commands.

All Codalect-specific behavior lives in `theia-extensions/`. The correct pattern for overriding Theia framework behavior is `rebind()` in a `ContainerModule` — never fork or patch `@theia/*` packages directly. See `.claude/CLAUDE.md` for architecture details.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
