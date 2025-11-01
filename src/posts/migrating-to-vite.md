---
title: "Migrating from Create React App to Vite"
date: "2025-11-01"
description: "How I migrated my portfolio from CRA to Vite and achieved 10x faster builds."
slug: "migrating-to-vite"
---

# Migrating from Create React App to Vite

Recently, I migrated this portfolio site from Create React App to Vite, and the results were impressive.

## Why Migrate?

Create React App (CRA) served me well, but it had some issues:

- Slow development server startup (10+ seconds)
- Deprecation warnings from webpack
- Large dependency tree (1600+ packages)
- No longer actively maintained

## The Migration Process

The migration was surprisingly straightforward:

1. **Install Vite** and plugins
2. **Move index.html** to project root
3. **Update package.json** scripts
4. **Configure JSX support** for `.js` files
5. **Remove react-scripts**

## Results

The improvements were immediate:

- Dev server starts in **~100ms** (vs 10+ seconds)
- Build time: **440ms** (vs 30+ seconds)
- Package count: **294** (vs 1,616)
- Zero deprecation warnings

## Would I Recommend It?

Absolutely. If you have a CRA project, migrating to Vite is worth the effort. The development experience improvement alone makes it worthwhile.

## Resources

- [Vite Documentation](https://vitejs.dev)
- [Migration Guide](https://vitejs.dev/guide/migration.html)

Happy coding!
