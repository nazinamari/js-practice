const atTheOldToad = {
    potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
    ],

    getPotions() {
        return this.potions;
    },
    
    addPotion(newPotion) {
        for (const potion of this.potions) {
            if (potion.name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            };
        };

    this.potions.push(newPotion);
    },

    removePotion(potionName) {
        const { potions } = this;
        for (const potion of potions) {
            if(potion.name === potionName) {
                potions.splice(potions.indexOf(potion), 1)
            }
        };
    },
    
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if(potion.name === oldName ) {
                potion.name = newName
            }
        };
    },
};

console.table(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: "Invisibility", price: 620 })

console.table(atTheOldToad.getPotions());
