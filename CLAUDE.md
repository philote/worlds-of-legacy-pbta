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
- `node tools/generate-uuids.mjs` - Generate 16-character UUIDs for all pack items

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

## Project Context

**Current Status**: Core system implementation completed through comprehensive development phases. The module now contains authentic Legacy: Life Among the Ruins content with proper dual-scale gameplay support.

**Primary Goal**: Create a complete Legacy: Life Among the Ruins system implementation using the PbtA framework.

**Key Resources**:
- Game rules: `raw-assets/book/Worlds-of-Legacy-SRD.md` (complete SRD document)
- PbtA system documentation: https://github.com/asacolips-projects/pbta/wiki
- Example finished modules for reference:
  - https://github.com/philote/pbta-rhapsodyofblood
  - https://github.com/philote/urban-shadows-pbta
  - https://github.com/philote/fellowship-pbta

**Implemented Features**:
1. ✅ Dual-scale gameplay: Character and Family actor types
2. ✅ Authentic Legacy stats and attributes 
3. ✅ Complete move system from SRD
4. ✅ Comprehensive equipment tag system
5. ✅ Resource tracking (Tech, Data, Treaty, Surplus/Need)
6. ✅ 16-character UUID system for all pack items

**Next Steps**:
- Phase 8: Create example playbooks (The Firebrand character, The Enclave family)
- Phase 9: Implement advanced harm system and role advancement mechanics

## Implementation Details

### Legacy-Specific System Design

**Dual-Scale Gameplay**:
- **Character Stats**: Force, Lore, Steel, Sway (not the typical PbtA stats)
- **Family Stats**: Reach, Grasp, Sleight (unique 3-stat system)
- **Character Attributes**: Only Harm (5 boxes) - no XP, stress, or conditions
- **Family Resources**: Tech, Data, Treaty (numbers), Surplus/Need (text), Mood, Age

**Move System Architecture**:
- **rollType** options: "stat", "ask", "prompt" ONLY (not "attribute")
- Legacy uses unique choice mechanics (player picks vs GM picks in Fiercely Assault)
- Some moves gain resources (Data from Conduct Diplomacy, Treaty costs)
- Story moves enable dual-scale transitions (Zoom In/Out)

**Equipment Tag System**:
- Legacy uses extensive tag-based equipment (24+ tags implemented)
- Tags define weapon/armor properties rather than static stats
- Equipment examples from SRD: Morphing Pistol, Weird Grenades, Blood-borne Nanomachines

### Critical Technical Learnings

**UUID Requirements**:
- All pack items MUST use exactly 16-character alphanumeric UUIDs
- Pattern: `_id: "AbC123Xyz789QRST"`, `_key: "!items!AbC123Xyz789QRST"`
- Filenames must include UUID: `move_Call_For_Aid_BLx1OPlRIUjKWBnK.json`

**Content Authenticity**:
- ALL content must be verified against `raw-assets/book/Worlds-of-Legacy-SRD.md`
- Common hallucination risks: inventing moves, attributes, equipment not in SRD
- Legacy has unique systems that differ from other PbtA games

**PbtA System Integration**:
- Configuration via `game.pbta.sheetConfig` in `pbta-config.mjs`
- Tag system uses JSON string format for equipment tags
- Family vs Character actors require separate move/equipment configurations

### Pack Structure

**Current Packs** (30 items total):
- `basic-moves/` - 9 character moves (verified against SRD)
- `family-moves/` - 7 family moves (verified against SRD)  
- `story-moves/` - 6 dual-scale transition moves (verified against SRD)
- `equipment/` - 7 example items with proper tags (verified against SRD)
- `playbooks/` - 1 placeholder (needs Phase 8 implementation)

### Development Phases Completed

**Phases 1-7**: Core system implementation
**Cleanup Phases 1-5**: Systematic removal of hallucinated content
- Removed 5 character moves that don't exist in Legacy
- Removed 5 family moves that don't exist in Legacy  
- Fixed 4 moves with incorrect implementations
- Removed 4 hallucinated equipment items
- Removed stress, conditions, XP, and character doctrine attributes

## Important Notes
- Never edit files in `packs/` directly - they're generated from `src/packs/`
- Never edit files in `css/` directly - they're generated from `src/scss/`
- The module heavily customizes the PbtA system - changes should respect this integration
- PbtA wiki examples are in TOML format, but this project uses JSON - research needed for conversion
- ALWAYS verify new content against the SRD to prevent hallucination
- Legacy uses unique mechanics that differ significantly from other PbtA games