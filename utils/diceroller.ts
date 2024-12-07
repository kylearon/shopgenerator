type DiceRoll = {
    success: number;
    failure: number;
    advantage: number;
    threat: number;
    triumph: number;
    despair: number;
};

export type ItemKeyAndRarity = {
    key: string; // Unique identifier for the item\
    rarity: number; // Rarity level of the item (numeric for computation)
    specializationBaseType: string;
}

export type ArmorBaseMod = {
    count: string; // Number as a string
    misc_desc: string; // Description
};

export type ItemArmor = {
    key: string;
    name: string;
    description: string;
    details: string;
    reference: string;
    categories: string; // Single category as a string
    encumbrance: string; // Encumbrance as a string
    hard_points: string; // Hard points as a string
    price: string; // Price as a string
    rarity: string; // Rarity as a string
    is_restricted: string; // Boolean as a string ("true"/"false")
    base_mods?: ArmorBaseMod[]; // Optional array of BaseMod objects
    defense: string; // Defense as a string
    soak: string; // Soak as a string
    sources: string[]; // Array of source strings
    image_filename: string; // Filename
    type: string; // Type of item
};


export type Quality = {
    key: string; // Represents the key of the quality
};

export type ItemBaseMod = {
    misc_desc: string; // Description of the modification
};

export type ItemWeapon = {
    key: string; // Unique identifier
    name: string; // Name of the weapon
    description: string; // Description text
    details: string;
    reference: string;
    type: string; // Type of weapon (e.g., "Energy Weapon")
    categories: string[]; // Array of categories
    encumbrance: string; // Encumbrance as a string
    hard_points: string; // Hard points as a string
    price: string; // Price as a string
    rarity: string; // Rarity as a string
    is_restricted: string; // Boolean as a string ("true"/"false")
    base_mods?: ItemBaseMod[]; // Optional array of base modifications
    skill_key: string; // Key for the associated skill
    damage: string; // Damage as a string
    damage_add: string; // Additional damage as a string
    crit: string; // Critical rating as a string
    range_value: string; // Range value
    qualities?: Quality[]; // Optional array of qualities
    sources: string[]; // Array of source strings
    image_filename: string; // Filename of the item's image
};


export type GearBaseMod = {
    key: string | null; // Can be a string or null
    count: string; // Number as a string
    misc_desc: string; // Description of the modification
};

export type ItemGear = {
    key: string; // Unique identifier
    name: string; // Name of the gear
    description?: string; // Description text
    details?: string;
    reference: string;
    type: string; // Type of gear
    categories: string[]; // Array of categories, may be empty
    encumbrance: string; // Encumbrance as a string
    hard_points: string; // Hard points as a string
    price: string; // Price as a string
    rarity: string; // Rarity as a string
    is_restricted: string; // Boolean as a string ("true"/"false")
    sources: string[]; // Array of source strings
    image_filename: string; // Filename of the item's image
    base_mods?: GearBaseMod[]; // Optional array of base modifications
};

export type Mod = {
    count: string; // Number as a string
    misc_desc: string; // Description of the modification
};

export type ItemAttachment = {
    key: string; // Unique identifier
    name: string; // Name of the attachment
    description: string; // Description text
    details: string;
    reference: string;
    type: string; // Type of item (e.g., "Vehicle")
    item_limit: string | null; // Nullable item limit
    skill_limit: string | null; // Nullable skill limit
    type_limit: string | null; // Nullable type limit
    category_limit: string | null; // Nullable category limit
    price: string; // Price as a string
    rarity: string; // Rarity as a string
    is_restricted: string; // Boolean as a string ("true"/"false")
    hard_points: string; // Hard points as a string
    jury_rigged: string; // Boolean as a string ("true"/"false")
    base_mods?: Mod[]; // Optional array of base modifications
    added_mods?: Mod[]; // Optional array of added modifications
    max_size: string; // Maximum size as a string
    sources: string[]; // Array of source strings
    image_filename: string; // Filename of the item's image
};


function rollDice(
    abilityDice: number,
    proficiencyDice: number,
    difficultyDice: number,
    setbackDice: number = 0,
    boostDice: number = 0
): DiceRoll {
    let success = 0, failure = 0, advantage = 0, threat = 0, triumph = 0, despair = 0;

    // Roll ability dice (d8)
    for (let i = 0; i < abilityDice; i++) {
        const roll = Math.ceil(Math.random() * 8);
        if (roll <= 3) success++;
        else if (roll === 4) success++;
        else if (roll === 5) advantage++;
        else if (roll === 6) success++, advantage++;
    }

    // Roll proficiency dice (d12)
    for (let i = 0; i < proficiencyDice; i++) {
        const roll = Math.ceil(Math.random() * 12);
        if (roll <= 5) success++;
        else if (roll === 6) success += 2;
        else if (roll === 7 || roll === 8) advantage++;
        else if (roll === 9) success++, advantage++;
        else if (roll === 10) advantage += 2;
        else if (roll === 12) {
            triumph++;
            success++;
        }
    }

    // Roll difficulty dice (d8)
    for (let i = 0; i < difficultyDice; i++) {
        const roll = Math.ceil(Math.random() * 8);
        if (roll <= 2) failure++;
        else if (roll === 3 || roll === 4) threat++;
        else if (roll === 5) failure++, threat++;
        else if (roll >= 6) threat++;
    }

    // Roll setback dice (d6)
    for (let i = 0; i < setbackDice; i++) {
        const roll = Math.ceil(Math.random() * 6);
        if (roll <= 2) failure++;
        else if (roll === 3 || roll === 4) threat++;
    }

    // Roll boost dice (d6)
    for (let i = 0; i < boostDice; i++) {
        const roll = Math.ceil(Math.random() * 6);
        if (roll === 1) advantage++;
        else if (roll === 2) success++;
        else if (roll === 3 || roll === 4) success++, advantage++;
        else if (roll === 5) advantage += 2;
    }

    return { success, failure, advantage, threat, triumph, despair };
}

export function rollForItems(
    items: ItemKeyAndRarity[],
    presence: number,
    negotiation: number,
    rarityModifier: number,
    numItems: number,
    setbackDice: number = 0,
    boostDice: number = 0,
    additionalDifficultyDice: number = 0
): ItemKeyAndRarity[] {
    const availableItems: ItemKeyAndRarity[] = [];

    for (const item of items) {
        const effectiveRarity = item.rarity + rarityModifier;

        // Calculate dice pools
        const abilityDice = Math.max(0, presence - negotiation); // Remainder after proficiency upgrades
        const proficiencyDice = Math.min(presence, negotiation); // Negotiation upgrades ability dice
        const difficultyDice = effectiveRarity + additionalDifficultyDice; // Rarity determines difficulty

        const diceRoll = rollDice(
            abilityDice,
            proficiencyDice,
            difficultyDice,
            setbackDice,
            boostDice
        );

        // Check if success exceeds failure or if a triumph is rolled
        if (diceRoll.success - diceRoll.failure > 0 || diceRoll.triumph > 0) {
            availableItems.push(item);
        }
    }

    console.log("availableItems")
    // console.log(availableItems)
    const itemsToPrint: string[] = [];
    availableItems.forEach(element => {
        // console.log(element.key);
        itemsToPrint.push(element.key)
    });
    const sorted = itemsToPrint.sort();
    console.log(sorted);


    // Shuffle and select the desired number of items
    const shuffled = availableItems.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numItems);
}

// // Example Usage
// const items: Item[] = [
//     // Items JSON as before
// ];

// const presence = 3;
// const negotiation = 2;
// const rarityModifier = 1;
// const numItems = 2;
// const setbackDice = 1; // External hindrance
// const boostDice = 1; // External help

// const selectedItems = getAvailableItems(
//     items,
//     presence,
//     negotiation,
//     rarityModifier,
//     numItems,
//     setbackDice,
//     boostDice
// );

// console.log(selectedItems);
