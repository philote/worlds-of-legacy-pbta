export const configSheet = async () => {
    // Pass module sheet object to sheetConfig
    game.pbta.sheetConfig = {
        // skipAttributeGrant: true,
        rollFormula: "2d6",
        // rollShifting: true,
        // statShifting: {
        //     label: game.i18n.localize("WOL.CharacterSheets.shiftStats.label"),
        //     img: "systems/pbta/assets/icons/svg/back-forth.svg",
        //     value: 1,
        //     labels: {
        //         stat: game.i18n.localize("WOL.CharacterSheets.shiftStats.statLabel"),
        //         stats: game.i18n.localize("WOL.CharacterSheets.shiftStats.statsLabel"),
        //     },
        // },
        statToggle: {
            label: game.i18n.localize("WOL.CharacterSheets.statToggle"),
            modifier: 0
        },
        minMod: -3,
        maxMod: 4,
        rollResults: {
            failure: {
                start: -Infinity,
                end: 6,
                label: game.i18n.localize("WOL.CharacterSheets.rollResults.complications")
            },
            partial: {
                start: 7,
                end: 9,
                label: game.i18n.localize("WOL.CharacterSheets.rollResults.partialSuccess")
            },
            success: {
                start: 10,
                end: 12,
                label: game.i18n.localize("WOL.CharacterSheets.rollResults.success")
            },
            critical: {
                start: 13,
                end: Infinity,
                label: game.i18n.localize('WOL.CharacterSheets.rollResults.critical'),
            }
        },
        actorTypes: {
            character: {
                stats: {
                    force: {
                        label: game.i18n.localize("WOL.CharacterSheets.stats.force"),
                        value: 0
                    },
                    lore: {
                        label: game.i18n.localize("WOL.CharacterSheets.stats.lore"),
                        value: 0
                    },
                    steel: {
                        label: game.i18n.localize("WOL.CharacterSheets.stats.steel"),
                        value: 0
                    },
                    sway: {
                        label: game.i18n.localize("WOL.CharacterSheets.stats.sway"),
                        value: 0
                    }
                },
                attributes: {
                    xp: {
                        label: game.i18n.localize("WOL.CharacterSheets.attr.xpLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "Xp",
                        value: 0,
                        max: 5,
                        steps: Array(5).fill(false),
                        position: "Top"
                    },
                    harm: {
                        label: game.i18n.localize('WOL.CharacterSheets.attr.harmLabel'),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: 'Clock',
                        value: 0,
                        max: 4,
                        steps: Array(4).fill(false),
                        position: 'Top',
                    },
                    stress: {
                        label: game.i18n.localize('WOL.CharacterSheets.attr.stressLabel'),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: 'Clock',
                        value: 0,
                        max: 4,
                        steps: Array(4).fill(false),
                        position: 'Top',
                    },
                    conditions: {
                        label: game.i18n.localize("WOL.CharacterSheets.attr.conditions.label"),
                        description: game.i18n.localize("WOL.CharacterSheets.attr.conditions.description"),
                        customLabel: false,
                        userLabel: false,
                        type: "ListMany",
                        condition: true,
                        position: "Left",
                        options: {
                            0: {
                                label: game.i18n.localize("WOL.CharacterSheets.attr.conditions.options.0"),
                                value: false,
                            },
                            1: {
                                label: game.i18n.localize("WOL.CharacterSheets.attr.conditions.options.1"),
                                value: false,
                            },
                            2: {
                                label: game.i18n.localize("WOL.CharacterSheets.attr.conditions.options.2"),
                                value: false,
                            },
                            3: {
                                label: game.i18n.localize("WOL.CharacterSheets.attr.conditions.options.3"),
                                value: false,
                            },
                        },
                    },
                    doctrine: {
                        label: game.i18n.localize("WOL.CharacterSheets.attr.doctrineLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "Number",
                        value: 0,
                        position: "Left"
                    },
                },
                details: {
                    looks: {
                        label: game.i18n.localize("WOL.CharacterSheets.details.looksLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        playbook: true,
                    },
                    biography: {
                        label: game.i18n.localize("WOL.CharacterSheets.details.biographyLabel"),
                        value: ""
                    },
                },
                moveTypes: {
                    basic: {
                        label: game.i18n.localize("WOL.CharacterSheets.moveTypes.basicLabel"),
                        moves: [],
                        creation: true
                    },
                    playbook: {
                        label: game.i18n.localize("WOL.CharacterSheets.moveTypes.playbookLabel"),
                        moves: [],
                        playbook: true
                    }
                },
                equipmentTypes: {
                  armoury: {
                    label: game.i18n.localize('WOL.CharacterSheets.equipmentTypes.armouryLabel'),
                  },
                  outfit: {
                    label: game.i18n.localize('WOL.CharacterSheets.equipmentTypes.outfitLabel'),
                  },
                  vehicles: {
                    label: game.i18n.localize('WOL.CharacterSheets.equipmentTypes.vehiclesLabel'),
                  },
                  followers: {
                    label: game.i18n.localize('WOL.CharacterSheets.equipmentTypes.followersLabel'),
                  },
                  intel: {
                    label: game.i18n.localize('WOL.CharacterSheets.equipmentTypes.intelLabel'),
                  },
                  devices: {
                    label: game.i18n.localize('WOL.CharacterSheets.equipmentTypes.devicesLabel'),
                  },
                },
            },
            npc: {
                attributes: {
                    fly: {
                        label: game.i18n.localize('WOL.NPCSheets.attr.flyLabel'),
                        description: null,
                        customLabel: null,
                        userLabel: null,
                        type: 'checkbox',
                        default: false,
                        position: 'Top',
                    },
                    injury: {
                        label: game.i18n.localize('WOL.NPCSheets.attr.injuryLabel'),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: 'Clock',
                        value: 0,
                        max: 4,
                        steps: [false, false, false, false],
                        position: 'Top',
                    },
                    faction: {
                        type: 'Text',
                        label: game.i18n.localize('WOL.NPCSheets.attr.factionLabel'),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        position: 'Left',
                    },
                    age: {
                        label: game.i18n.localize('WOL.NPCSheets.attr.ageLabel'),
                        description: null,
                        customLabel: null,
                        userLabel: false,
                        type: 'Number',
                        default: 1,
                        position: 'Left',
                    },
                },
                details: {
                    biography: {
                        label: game.i18n.localize("WOL.NPCSheets.details.biographyLabel"),
                        value: ""
                    }
                },
                moveTypes: {
                    basic: {
                        label: game.i18n.localize("WOL.NPCSheets.moveTypes.basicLabel"),
                        moves: []
                    }
                },
                equipmentTypes: {
                    loot: {
                        label: game.i18n.localize('WOL.NPCSheets.lootLabel'),
                    },
                },
            },
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
                },
                attributes: {
                    mood: {
                        label: game.i18n.localize("WOL.FamilySheets.attr.moodLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "Number",
                        value: 0,
                        position: "Top"
                    },
                    tech: {
                        label: game.i18n.localize("WOL.FamilySheets.attr.techLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "Number",
                        value: 0,
                        position: "Top"
                    },
                    data: {
                        label: game.i18n.localize("WOL.FamilySheets.attr.dataLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "Number",
                        value: 0,
                        position: "Top"
                    },
                    treaty: {
                        label: game.i18n.localize("WOL.FamilySheets.attr.treatyLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "Number",
                        value: 0,
                        position: "Top"
                    },
                    surplus: {
                        label: game.i18n.localize("WOL.FamilySheets.attr.surplusLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "Text",
                        value: "",
                        position: "Left"
                    },
                    need: {
                        label: game.i18n.localize("WOL.FamilySheets.attr.needLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "Text",
                        value: "",
                        position: "Left"
                    },
                    age: {
                        label: game.i18n.localize("WOL.FamilySheets.attr.ageLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "ListOne",
                        position: "Left",
                        options: {
                            0: {
                                label: game.i18n.localize("WOL.FamilySheets.attr.age.options.0"),
                                value: false
                            },
                            1: {
                                label: game.i18n.localize("WOL.FamilySheets.attr.age.options.1"),
                                value: false
                            },
                            2: {
                                label: game.i18n.localize("WOL.FamilySheets.attr.age.options.2"),
                                value: false
                            }
                        }
                    }
                },
                details: {
                    doctrine: {
                        label: game.i18n.localize("WOL.FamilySheets.details.doctrineLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        playbook: true,
                    },
                    traditions: {
                        label: game.i18n.localize("WOL.FamilySheets.details.traditionsLabel"),
                        description: null,
                        customLabel: false,
                        userLabel: false,
                        type: "LongText",
                        playbook: true,
                    },
                    biography: {
                        label: game.i18n.localize("WOL.FamilySheets.details.biographyLabel"),
                        value: ""
                    }
                },
                moveTypes: {
                    basic: {
                        label: game.i18n.localize("WOL.FamilySheets.moveTypes.basicLabel"),
                        moves: [],
                        creation: true
                    },
                    playbook: {
                        label: game.i18n.localize("WOL.FamilySheets.moveTypes.playbookLabel"),
                        moves: [],
                        playbook: true
                    }
                },
                equipmentTypes: {
                    assets: {
                        label: game.i18n.localize("WOL.FamilySheets.assetsLabel"),
                    }
                }
            }
        }
    }
};

/**
 * Settings for the PbtA system
 */
export function pbtaSettings() {
    // Hides forward input on character sheets.
    game.settings.set('pbta', 'hideForward', true);
    // Hides ongoing input on character sheets.
    game.settings.set('pbta', 'hideOngoing', true);
    // Hides uses remaining for each move on the move's summary for characters and NPCs.
    game.settings.set('pbta', 'hideUses', true);
    // Hides custom roll formula input on character sheets.
    game.settings.set('pbta', 'hideRollFormula', true);
    // Hides roll mode override (normal/advantage/disadvantage) on character sheets.
    game.settings.set('pbta', 'hideRollMode', false);
    // If enabled, advantage and disadvantage choices on the character sheet will be reset to normal after each roll (similar to Forward).
    game.settings.set('pbta', 'advForward', true);
    // Hides hold input on character sheets.
    game.settings.set('pbta', 'hideHold', false);
    if (game.settings.settings.has('pbta.hideAdvancement')) {
        //Hides the Advancements in the actor sheet. Any option that isn't \"None\" also hides the \"(Advancement #)\" on the Actors sidebar.
        game.settings.set('pbta', 'hideAdvancement', true);
    }
};

/**
 * Tag configuration for the PbtA system
 */
export const tagConfig = {
    actor: {
        all: '',
        character: '',
        npc: '',
        family: ''
    },
    item: {
        all: '',
        // Equipment tags for all gear types
        equipment:
            // Armoury (Weapon) Tags
            '[{"value":"WOL.Tags.equipment.melee.value", "editable":false, "description":"WOL.Tags.equipment.melee.description"}, ' +
            '{"value":"WOL.Tags.equipment.ranged.value", "editable":false, "description":"WOL.Tags.equipment.ranged.description"}, ' +
            '{"value":"WOL.Tags.equipment.area.value", "editable":false, "description":"WOL.Tags.equipment.area.description"}, ' +
            '{"value":"WOL.Tags.equipment.aberrant.value", "editable":false, "description":"WOL.Tags.equipment.aberrant.description"}, ' +
            '{"value":"WOL.Tags.equipment.brutal.value", "editable":false, "description":"WOL.Tags.equipment.brutal.description"}, ' +
            '{"value":"WOL.Tags.equipment.elegant.value", "editable":false, "description":"WOL.Tags.equipment.elegant.description"}, ' +
            '{"value":"WOL.Tags.equipment.far.value", "editable":false, "description":"WOL.Tags.equipment.far.description"}, ' +
            '{"value":"WOL.Tags.equipment.hidden.value", "editable":false, "description":"WOL.Tags.equipment.hidden.description"}, ' +
            '{"value":"WOL.Tags.equipment.many.value", "editable":false, "description":"WOL.Tags.equipment.many.description"}, ' +
            '{"value":"WOL.Tags.equipment.non-lethal.value", "editable":false, "description":"WOL.Tags.equipment.non-lethal.description"}, ' +
            '{"value":"WOL.Tags.equipment.silent.value", "editable":false, "description":"WOL.Tags.equipment.silent.description"}, ' +
            '{"value":"WOL.Tags.equipment.unreliable.value", "editable":false, "description":"WOL.Tags.equipment.unreliable.description"}, ' +
            // Outfit (Armor/Clothing) Tags
            '{"value":"WOL.Tags.equipment.camo.value", "editable":false, "description":"WOL.Tags.equipment.camo.description"}, ' +
            '{"value":"WOL.Tags.equipment.regal.value", "editable":false, "description":"WOL.Tags.equipment.regal.description"}, ' +
            '{"value":"WOL.Tags.equipment.utility.value", "editable":false, "description":"WOL.Tags.equipment.utility.description"}, ' +
            '{"value":"WOL.Tags.equipment.comms.value", "editable":false, "description":"WOL.Tags.equipment.comms.description"}, ' +
            '{"value":"WOL.Tags.equipment.hardened.value", "editable":false, "description":"WOL.Tags.equipment.hardened.description"}, ' +
            '{"value":"WOL.Tags.equipment.implanted.value", "editable":false, "description":"WOL.Tags.equipment.implanted.description"}, ' +
            '{"value":"WOL.Tags.equipment.mantle.value", "editable":false, "description":"WOL.Tags.equipment.mantle.description"}, ' +
            '{"value":"WOL.Tags.equipment.mobile.value", "editable":false, "description":"WOL.Tags.equipment.mobile.description"}, ' +
            '{"value":"WOL.Tags.equipment.powered.value", "editable":false, "description":"WOL.Tags.equipment.powered.description"}, ' +
            '{"value":"WOL.Tags.equipment.sealed.value", "editable":false, "description":"WOL.Tags.equipment.sealed.description"}, ' +
            '{"value":"WOL.Tags.equipment.thermo.value", "editable":false, "description":"WOL.Tags.equipment.thermo.description"}, ' +
            '{"value":"WOL.Tags.equipment.tough.value", "editable":false, "description":"WOL.Tags.equipment.tough.description"}, ' +
            // Vehicle Tags
            '{"value":"WOL.Tags.equipment.land.value", "editable":false, "description":"WOL.Tags.equipment.land.description"}, ' +
            '{"value":"WOL.Tags.equipment.air.value", "editable":false, "description":"WOL.Tags.equipment.air.description"}, ' +
            '{"value":"WOL.Tags.equipment.water.value", "editable":false, "description":"WOL.Tags.equipment.water.description"}, ' +
            '{"value":"WOL.Tags.equipment.space.value", "editable":false, "description":"WOL.Tags.equipment.space.description"}, ' +
            '{"value":"WOL.Tags.equipment.swift.value", "editable":false, "description":"WOL.Tags.equipment.swift.description"}, ' +
            '{"value":"WOL.Tags.equipment.transport.value", "editable":false, "description":"WOL.Tags.equipment.transport.description"}, ' +
            '{"value":"WOL.Tags.equipment.medbay.value", "editable":false, "description":"WOL.Tags.equipment.medbay.description"}, ' +
            '{"value":"WOL.Tags.equipment.canopy.value", "editable":false, "description":"WOL.Tags.equipment.canopy.description"}]',
        // Move tags (if needed for future expansion)
        move: '',
        // Other item types can be added here
        playbook: ''
    },
};  