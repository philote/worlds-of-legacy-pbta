# PbtA Configuration Plan for Legacy: Life Among the Ruins

This document outlines the planned structure for the `module/helpers/pbta-config.mjs` file to implement Legacy's dual-scale gameplay system.

## Configuration Structure Overview

The configuration needs to support two distinct actor types:
1. **Character** - Individual heroes with Force/Sway/Steel/Lore stats
2. **Family** - Group entities with Reach/Grasp/Sleight stats and resource management

## Phase 1: Core Character Configuration

### Character Stats
```javascript
stats: {
    force: {
        label: game.i18n.localize("WOL.CharacterSheets.stats.force"),
        value: 0
    },
    sway: {
        label: game.i18n.localize("WOL.CharacterSheets.stats.sway"),
        value: 0
    },
    steel: {
        label: game.i18n.localize("WOL.CharacterSheets.stats.steel"),
        value: 0
    },
    lore: {
        label: game.i18n.localize("WOL.CharacterSheets.stats.lore"),
        value: 0
    }
}
```

### Character Attributes
```javascript
attributes: {
    // Experience through roles
    leader: {
        label: game.i18n.localize("WOL.CharacterSheets.roles.leader"),
        type: "Checkbox",
        value: false,
        position: "Top"
    },
    agent: {
        label: game.i18n.localize("WOL.CharacterSheets.roles.agent"),
        type: "Checkbox", 
        value: false,
        position: "Top"
    },
    rebel: {
        label: game.i18n.localize("WOL.CharacterSheets.roles.rebel"),
        type: "Checkbox",
        value: false,
        position: "Top"
    },
    outsider: {
        label: game.i18n.localize("WOL.CharacterSheets.roles.outsider"),
        type: "Checkbox",
        value: false,
        position: "Top"
    },
    
    // Resources
    data: {
        label: game.i18n.localize("WOL.CharacterSheets.attr.data"),
        type: "Number",
        value: 0,
        position: "Top"
    },
    
    // Harm system (5 boxes)
    harm: {
        label: game.i18n.localize("WOL.CharacterSheets.attr.harm"),
        type: "Clock",
        value: 0,
        max: 5,
        steps: Array(5).fill(false),
        position: "Left"
    }
}
```

### Character Move Types
```javascript
moveTypes: {
    basic: {
        label: game.i18n.localize("WOL.CharacterSheets.moveTypes.basic"),
        moves: [] // Core moves available to all characters
    },
    peripheral: {
        label: game.i18n.localize("WOL.CharacterSheets.moveTypes.peripheral"),
        moves: [] // Situational moves
    },
    playbook: {
        label: game.i18n.localize("WOL.CharacterSheets.moveTypes.playbook"),
        moves: [],
        playbook: true // Specific to character type
    }
}
```

### Character Equipment Types
```javascript
equipmentTypes: {
    armoury: {
        label: game.i18n.localize("WOL.CharacterSheets.equipment.armoury")
    },
    outfit: {
        label: game.i18n.localize("WOL.CharacterSheets.equipment.outfit")
    },
    vehicles: {
        label: game.i18n.localize("WOL.CharacterSheets.equipment.vehicles")
    },
    devices: {
        label: game.i18n.localize("WOL.CharacterSheets.equipment.devices")
    }
}
```

## Phase 2: Family Actor Type Configuration

### Family Stats
```javascript
family: {
    stats: {
        reach: {
            label: game.i18n.localize("WOL.FamilySheets.stats.reach"),
            value: 0
        },
        grasp: {
            label: game.i18n.localize("WOL.FamilySheets.stats.grasp"),
            value: 0
        },
        sleight: {
            label: game.i18n.localize("WOL.FamilySheets.stats.sleight"),
            value: 0
        }
    }
}
```

### Family Attributes
```javascript
attributes: {
    // Core Resources
    tech: {
        label: game.i18n.localize("WOL.FamilySheets.attr.tech"),
        type: "Number",
        value: 0,
        position: "Top"
    },
    mood: {
        label: game.i18n.localize("WOL.FamilySheets.attr.mood"),
        type: "Number",
        value: 0,
        position: "Top"
    },
    
    // Lifestyle
    lifestyle: {
        label: game.i18n.localize("WOL.FamilySheets.attr.lifestyle"),
        type: "ListOne",
        position: "Left",
        options: {
            nomadic: {
                label: game.i18n.localize("WOL.FamilySheets.lifestyle.nomadic"),
                value: false
            },
            dispersed: {
                label: game.i18n.localize("WOL.FamilySheets.lifestyle.dispersed"),
                value: false
            },
            settled: {
                label: game.i18n.localize("WOL.FamilySheets.lifestyle.settled"),
                value: false
            }
        }
    },
    
    // Doctrine
    doctrine: {
        label: game.i18n.localize("WOL.FamilySheets.attr.doctrine"),
        type: "Text",
        position: "Left"
    }
}
```

### Family Move Types
```javascript
moveTypes: {
    basic: {
        label: game.i18n.localize("WOL.FamilySheets.moveTypes.basic"),
        moves: [] // Hold Together, Claim by Force, etc.
    },
    playbook: {
        label: game.i18n.localize("WOL.FamilySheets.moveTypes.playbook"), 
        moves: [],
        playbook: true // Family-specific moves
    }
}
```

## Phase 3: Resource Management System

### Surplus/Need Tracking
This will require custom implementation beyond standard PbtA attributes:

```javascript
// Custom surplus/need tracking system
surpluses: {
    label: game.i18n.localize("WOL.FamilySheets.surpluses"),
    type: "Custom", // Will need special handling
    position: "Left"
},
needs: {
    label: game.i18n.localize("WOL.FamilySheets.needs"),
    type: "Custom", // Will need special handling  
    position: "Left"
}
```

### Treaty Relationships
This requires tracking relationships with other families:

```javascript
treaties: {
    label: game.i18n.localize("WOL.FamilySheets.treaties"),
    type: "Custom", // Relationship tracking system
    position: "Right"
}
```

## Roll Configuration

### Roll Results
```javascript
rollResults: {
    failure: {
        start: -Infinity,
        end: 6,
        label: game.i18n.localize("WOL.rollResults.miss")
    },
    partial: {
        start: 7,
        end: 9,
        label: game.i18n.localize("WOL.rollResults.partial")
    },
    success: {
        start: 10,
        end: 11,
        label: game.i18n.localize("WOL.rollResults.success")
    },
    critical: {
        start: 12,
        end: Infinity,
        label: game.i18n.localize("WOL.rollResults.critical")
    }
}
```

### Roll Formula
```javascript
rollFormula: "2d6",
rollShifting: true, // Allow advantage/disadvantage
```

## Tag Configuration

### Equipment Tags
```javascript
tagConfig: {
    item: {
        equipment: [
            // Armoury tags
            {value: "WOL.Tags.melee.value", editable: false},
            {value: "WOL.Tags.ranged.value", editable: false},
            {value: "WOL.Tags.area.value", editable: false},
            {value: "WOL.Tags.brutal.value", editable: false},
            // ... more weapon tags
            
            // Outfit tags  
            {value: "WOL.Tags.camo.value", editable: false},
            {value: "WOL.Tags.regal.value", editable: false},
            {value: "WOL.Tags.utility.value", editable: false},
            // ... more armor tags
            
            // Vehicle tags
            {value: "WOL.Tags.land.value", editable: false},
            {value: "WOL.Tags.swift.value", editable: false},
            {value: "WOL.Tags.durable.value", editable: false}
            // ... more vehicle tags
        ]
    }
}
```

## Implementation Notes

### Custom Systems Needed
1. **Surplus/Need Management** - Not standard PbtA, needs custom UI
2. **Treaty Relationships** - Relationship tracking between families
3. **Age Advancement** - Time passage and character retirement
4. **Wonder Projects** - Multi-surplus construction tracking
5. **Role Advancement** - Non-XP character progression

### Localization Keys Required
All text needs to be moved to `lang/en.json` with proper WOL namespace:
- Stats (force, sway, steel, lore, reach, grasp, sleight)
- Attributes (roles, harm, tech, mood, etc.)
- Move types and equipment categories
- Roll results and conditions
- Resource types (surpluses/needs)

### Phase Implementation Strategy
1. **✅ Phase 1**: Implement basic character system with correct stats
2. **✅ Phase 2**: Add family actor type with basic functionality  
3. **✅ Phase 3**: Add missing character basic moves
4. **✅ Phase 4**: Add missing family basic moves
5. **✅ Phase 5**: Implement Story & Scale moves
6. **✅ Phase 6**: Create equipment system with tags
7. **Phase 7**: Add resource systems (Tech, Data, Treaty)
8. **Phase 8**: Create example playbooks
9. **Phase 9**: Implement advanced mechanics (harm improvements, wonders, fronts)

## Phase 3 Completion Status ✅

**Character Basic Moves Implemented:**
- ✅ **Act Under Pressure** - Flexible stat usage for dangerous situations
- ✅ **Face Danger** - Navigate threats (+Steel)
- ✅ **Seek Insight** - Research and study (+Lore) 
- ✅ **Persuade** - Convince others (+Sway)
- ✅ **Clash** - Close combat (+Force)
- ✅ **Defuse** - De-escalate situations (flexible stat)
- ✅ **Unleash Power** - Use Devices from World Before (+Lore)
- ✅ **Fiercely Assault** - Savage combat (+Force)
- ✅ **Wasteland Survival** - Navigate dangerous terrain (+Steel)
- ✅ **Find Common Ground** - Ask for cooperation (+Sway)
- ✅ **Familiar Face** - Find contacts in settlements (+Sway)
- ✅ **Call For Aid** - Help other characters after failed rolls
- ✅ **Information is Power** - Spend Data for temporary advantages

**Character Move Coverage:** 13+ basic moves implemented, providing comprehensive character-level gameplay coverage.

## Phase 4 Completion Status ✅

**Family Basic Moves Implemented:**
- ✅ **Establish Control** - Expand influence and gain territory (+Grasp)
- ✅ **Maintain Control** - Defend territory and assets (+Grasp)
- ✅ **Forge Alliance** - Create diplomatic relationships (+Reach)
- ✅ **Survey the Landscape** - Gather intelligence through subterfuge (+Sleight)
- ✅ **Mobilize Forces** - Rally family strength (+Grasp)
- ✅ **Hold Together** - Resist hardship and infighting (roll +Mood manually)
- ✅ **Conduct Diplomacy** - Call on allies for support (+Reach)
- ✅ **Subterfuge** - Infiltrate other factions (+Sleight)

**Family Resource Management Moves:**
- ✅ **Lend Aid** - Support another family (roll +Treaty manually)
- ✅ **Call in a Debt** - Use Treaty relationships for advantages
- ✅ **Power Up** - Spend Tech for +1 Forward on family moves
- ✅ **Uncover Secrets** - Spend Data to discover information (roll +Data manually)

**Family Move Coverage:** 11+ family moves implemented, providing comprehensive family-level gameplay coverage including territory control, diplomacy, intelligence, unity, and resource management.

## Phase 5 Completion Status ✅

**Story & Scale Moves Implemented:**
- ✅ **Zoom In** - Transition from family to character-level play
- ✅ **Zoom Out** - Return from character to family-level play
- ✅ **The Age Turns** - Handle generational time passage (roll +Mood manually)
- ✅ **In Want** - Manage family crises and desperation (roll +Needs manually)

**Resource Management Moves:**
- ✅ **Finding a Surplus** - Add new resources to family
- ✅ **Right Tool for the Job** - Spend appropriate Surplus to solve problems without rolling

**Story Move Coverage:** 6 story moves implemented, providing the essential framework for Legacy's dual-scale gameplay and resource management systems.

## Phase 6 Completion Status ✅

**Equipment Tag System Implemented:**
- ✅ **Weapon Tags** - Melee, Ranged, Area, Aberrant, Brutal, Elegant, Far, Hidden, Many, Non-lethal, Silent, Unreliable
- ✅ **Armor Tags** - Camo, Regal, Utility, Comms, Hardened, Implanted, Mantle, Mobile, Powered, Sealed, Thermo, Tough
- ✅ **Vehicle Tags** - Land, Air, Water, Space, Swift, Transport, Medbay, Canopy

**Equipment Type System:**
- ✅ **Character Equipment Types** - Armoury, Outfit, Vehicles, Followers, Intel, Devices
- ✅ **Family Equipment Type** - Assets
- ✅ **Tag Configuration** - Full tag system with localized descriptions
- ✅ **Example Equipment** - Sample items demonstrating tag usage (Wasteland Blade, Scavenged Rifle, Hazmat Suit, Grav-Bike)

**Equipment Coverage:** Complete tag system with 24+ equipment tags covering all Legacy gear categories, plus proper equipment type categorization for both characters and families.

This configuration will provide the foundation for Legacy's unique dual-scale PbtA gameplay while maintaining compatibility with the base PbtA system structure.