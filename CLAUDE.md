# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Foundry VTT module for the "Worlds of Legacy" PbtA (Powered by the Apocalypse) system. It provides custom character sheets and compendium content based on the Legacy: Life Among the Ruins SRD. The module extends the PbtA system with specific configurations for the Worlds of Legacy setting.

## Build Commands

- `npm run build` - Compile SCSS to CSS (expanded, no source maps)
- `npm run watch` - Watch and compile SCSS with source maps during development
- `npm run pushLDBtoJSON` - Extract FoundryVTT LevelDB packs to JSON files in src/packs/
- `npm run pullJSONtoLDB` - Compile JSON files from src/packs/ back to LevelDB format
- `npm run createSymlinks` - Create symlinks for development workflow

## Architecture

### Module Structure
- **Main Entry**: `module/worlds-of-legacy-pbta.mjs` - Primary module initialization and hooks
- **PbtA Configuration**: `module/helpers/pbta-config.mjs` - Custom sheet configuration for the PbtA system
- **Styling**: SCSS in `src/scss/` compiled to `css/worlds-of-legacy-pbta.css`
- **Compendium Content**: JSON source in `src/packs/`, compiled to LevelDB in `packs/`

### Key Components

**Module Hooks**:
- `init` hook registers world settings including first-time setup and login image toggle
- `pbtaSheetConfig` hook overrides PbtA system configuration with module-specific settings
- `ready` hook handles first-time setup dialog and world background image configuration
- `renderSettings` hook adds custom buttons to game settings panel

**Pack Management**:
- Uses `@foundryvtt/foundryvtt-cli` for pack extraction/compilation
- JSON source files in `src/packs/` are the source of truth for compendium content
- LevelDB packs in `packs/` are generated from JSON sources

**System Integration**:
- Depends on the `pbta` system (minimum version 1.0.0)
- Overrides PbtA sheet configuration via `game.pbta.sheetConfig`
- Compatible with Foundry VTT v12-v13

## Development Workflow

1. Edit JSON files in `src/packs/` for compendium content changes
2. Run `npm run pullJSONtoLDB` to compile changes to LevelDB format  
3. Use `npm run pushLDBtoJSON` to extract existing packs back to JSON if needed
4. Edit SCSS files in `src/scss/` for styling changes
5. Run `npm run watch` during development for automatic SCSS compilation

## Configuration Files

- `foundry-config.yaml` - Contains Foundry installation path for CLI tools
- `module.json` - Foundry module manifest with metadata and dependencies
- Package defines custom move and playbook compendium packs

## Documentation

### FoundryVTT API Reference
The `foundry/` directory contains symlinked files from the target FoundryVTT installation's source code. These files provide essential API documentation and type definitions since FoundryVTT's APIs are poorly documented outside of the source code itself. Key resources include:
- `foundry/client/` - Client-side API definitions and documentation
- `foundry/common/` - Shared API structures and utilities
- Use these files as reference when implementing FoundryVTT integrations or troubleshooting API usage

### Game PDFs & working files
- The `raw-assets` folder has several files:
    - Game documents are found in `raw-assets/book/`, here you will find the original PDF and a Markdown version. You should be able to use `tools/pdf-processor.mjs` and `pdf-splitter` to read the PDF files. (These are in gitignore because I don't want them on github, you have full access to them when you need them)

## Important Notes
- Never edit files in `packs/` directly - they're generated from `src/packs/`
- Never edit files in `css/` directly - they're generated from `src/scss/`
- The module heavily customizes the PbtA system - changes should respect this integration