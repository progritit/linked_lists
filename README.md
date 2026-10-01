# 02template_build_quality_security_testing

A reusable **Vanilla JavaScript starter template** created during my progression through The Odin Project.

This repository preserves the previous build, quality, and security architecture and adds the next milestone: **automated testing with Jest and Babel support for ES modules**.

## Architecture

```text
Vanilla JavaScript
│
├── Build
│   └── Webpack
│
├── Quality
│   ├── ESLint
│   └── Prettier
│
├── Security
│   └── Semgrep
│
└── Testing
    ├── Jest
    └── Babel
```

## Tooling

* **npm** — dependency and script management
* **Webpack** — development server and production bundling
* **ESLint** — static code analysis
* **Prettier** — consistent code formatting
* **Semgrep** — static security analysis
* **Jest** — automated JavaScript testing
* **Babel** — enables the Jest environment to work with the project's ES module syntax

## Testing workflow

The template supports the basic TDD cycle:

```text
Write test
   ↓
RED
   ↓
Implement
   ↓
GREEN
   ↓
Refactor
```

Run the test suite with:

```bash
npm test
```

For continuous feedback while practicing TDD:

```bash
npm run test:watch
```

## Purpose

This repository is the second snapshot of my evolving JavaScript development architecture.

Each numbered template adds only tooling or concepts that I have reached and understood through the curriculum.

## Milestone

**02 — Build → Quality → Security → Testing**

Compared with milestone 01, this template adds only the testing layer while preserving the previous architecture.
