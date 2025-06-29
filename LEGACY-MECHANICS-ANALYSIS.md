# Legacy: Life Among the Ruins - Mechanical Analysis

This document provides a comprehensive analysis of all mechanical elements in the Legacy: Life Among the Ruins SRD that need to be implemented in the PbtA system configuration.

## Core System Overview

Legacy is a dual-scale PbtA game where players control both:
1. **Characters** - Individual heroes acting in the moment
2. **Families** - Groups of hundreds operating over months/years

## Character Mechanics

### Character Stats (4 stats, not 3)
- **Force**: Might and vigor. Used for Fiercely Assault
- **Sway**: Ability to forge lasting connections. Used for Find Common Ground  
- **Steel**: Wits and survival instinct. Used for Wasteland Survival
- **Lore**: Knowledge and intuition. Used for Unleash Power

### Core Character Moves
1. **Defuse** - De-escalate dangerous situations (uses any stat based on approach)
2. **Unleash Power** - Use Devices from the World Before (+Lore)
3. **Fiercely Assault** - Combat with weapons (+Force) 
4. **Wasteland Survival** - Navigate dangerous terrain (+Steel)
5. **Find Common Ground** - Ask someone to work with you (+Sway)
6. **Call For Aid** - Help another character after they roll
7. **Information is Power** - Spend Data for advantage

### Peripheral Character Moves
1. **Familiar Face** - Find old friends in settlements (+Sway)
2. **Forge a Path** - Cross dangerous terrain (+Force)
3. **Unearth Forgotten Lore** - Discover landmarks from the past (+Lore)

### Character Resources
- **Data**: Information currency spent for advantages and map details
- **Harm**: 5-box track with minor/major sections causing stat penalties
- **Devices**: One-use tech items that trigger Unleash Power

### Character Advancement System - Roles
Characters cycle through 4 roles for advancement:
- **Leader**: Providing guidance and protection
- **Agent**: On a specific mission 
- **Rebel**: Going against family orthodoxy
- **Outsider**: Rejected by or rejecting the family

**Advancement**: Gain new move or +1 stat when marking an unmarked role. Retire when all 4 roles marked.

### Character Playbook Structure
Each playbook needs:
- 3 stat arrays to choose from
- Looks (4 categories: gender, face, eyes, body)
- Backstory options (3 relationship questions)
- 5 playbook moves (choose 2 at creation)
- Gear specialization choices
- Role-specific triggers
- Death move
- Harm track with fictional conditions

## Family Mechanics (Separate Actor Type Required)

### Family Stats
- **Reach**: Diplomatic influence and trade networks (-1 to +3)
- **Grasp**: Military might and direct control (-1 to +3) 
- **Sleight**: Stealth and subtle manipulation (-1 to +3)

### Family Resources
**Surpluses** (positive resources - pick 2-3):
Artisans, Crops, Defences, Engineering, Energy, Fresh Water, Justice, Land, Leadership, Luxury, Medicine, Morale, Prestige, Progress, Rare Materials, Recruits, Safety, Scavengers, Scouts, Spies, Trade, Transport, Weaponry

**Needs** (negative conditions - get from moves/GM):
Same categories as Surpluses but representing lacking resources

### Family Resource Tracks
- **Tech**: Technology points (0-10+ scale) - spend for advantage
- **Mood**: Family morale (Surpluses - Needs, -3 to +3)
- **Treaty**: Relationship currency between families (spend for benefits)

### Family Configuration Options
- **Doctrine**: 3 philosophical stances per family playbook
- **Lifestyle**: Nomadic, Dispersed, or Settled
- **Assets**: 6 categories to choose from (pick 3)
  - Armoury, Outfit, Vehicles, Followers, Intel, Devices

### Family Moves
**Basic Family Moves** (all families get):
1. **Hold Together** - Resist hardship (+Mood)
2. **Claim By Force** - Seize resources (+Grasp)
3. **Conduct Diplomacy** - Get information/access (+Reach)
4. **Subterfuge** - Infiltrate and sabotage (+Sleight)

**Playbook Moves**: Each family playbook has 5 unique moves (choose 2)

### Family Playbooks
Based on SRD examples, families need:
- Stat packages (3 options for Reach/Grasp/Sleight)
- Traditional culture options
- Starting relationships/treaties
- Landmark contributions to the map
- Surplus/Need packages
- Asset selections
- 5 unique moves (choose 2)

## Gear System

### Armoury (Weapons)
**Base Tags**: Melee, Ranged
**Descriptive Tags**: Area, Aberrant, Brutal, Elegant, Far, Hidden, Many, Non-lethal, Silent, Unreliable

### Outfit (Armor/Clothing)
**Base Tags**: Camo, Regal, Utility  
**Descriptive Tags**: Comms, Hardened, Implanted, Mantle, Mobile, Powered, Sealed, Thermo, Tough

### Vehicles
**Base Environment**: Land/Water/Air/Space
**Descriptive Tags**: Canopy, Durable, Med bay, Mighty, Mount, Swift, Transport, Turret
**Harm Track**: Healthy → Dinged → Twisted (-1 to stats) → Busted (immobile)

### Followers
- **Quality**: +1 to +3 effectiveness bonus
- **Specialty**: Descriptive capability phrase

### Devices (Tech Items)
One-use items that trigger "Unleash Power" move for strange effects

## Special Game Mechanics

### Advantage/Disadvantage System
- **Advantage**: Roll 3d6, take highest 2
- **Disadvantage**: Roll 3d6, take lowest 2  
- **Fleeting Advantage**: One-use bonus vs ongoing advantage

### Hostile Grounds
Environmental hazards that impose disadvantage on rolls unless overcome with specific gear/devices

### Wonders System
Massive construction projects requiring:
- 5 specific Surplus investments
- Trigger age advancement when completed
- Create custom benefits for the homeland

### Age Advancement
**The Age Turns** move:
- Advances time by years/generations
- Roll +Mood for Fortunes (good) and Trials (bad)
- Players create new characters or advance existing ones
- Families evolve based on their choices

## Roll Results
Standard PbtA structure:
- 6-: GM reaction (complications)
- 7-9: Mixed success (partial or costly)
- 10+: Full success
- 12+: Critical success (rare, exceptional outcomes)

## Configuration Priority

### Phase 1 - Core Character System
1. Update character stats to Force/Sway/Steel/Lore
2. Replace placeholder moves with actual Legacy character moves
3. Implement proper harm system (5 boxes with penalties)
4. Add Data resource tracking
5. Set up role advancement mechanics

### Phase 2 - Family System  
1. Create family actor type with Reach/Grasp/Sleight
2. Implement Surplus/Need resource management
3. Add Tech and Treaty tracking
4. Configure family move types
5. Set up Mood calculation

### Phase 3 - Advanced Features
1. Gear tag system for weapons/armor/vehicles
2. Wonder project tracking
3. Age advancement mechanics
4. Treaty relationship system
5. Hostile grounds environmental rules

## Key Differences from Standard PbtA

1. **Dual Scale**: Both character and family-level play
2. **Resource Management**: Complex surplus/need economy
3. **Time Advancement**: Ages pass, characters retire/die
4. **Relationship Currency**: Treaty system between factions
5. **Environmental Hazards**: Hostile grounds mechanic
6. **Role-Based Advancement**: Characters gain XP through narrative roles
7. **Tech Integration**: Devices provide one-shot supernatural effects

This system requires significant customization beyond basic PbtA configuration due to its unique dual-scale gameplay and resource management systems.