import {
    removeHealthI,
    removeHealthII,
} from './debuffHelper'
//test for level 4
export const createAttackItem = (level) => {
    let minRange = ((level - 3) < 0 ? 0 : (level - 3));
    minRange = minRange > attackItem.length ? attackItem.length : minRange;
    const maxItemRange = level > attackItem.length ? attackItem.length : level;
    return {
        id: guid(),
        class: 'attack',
        strength: strength[Math.floor(Math.random() * strength.length)],
        item: attackItem[ Math.floor(Math.random() * (maxItemRange - minRange)) ],
    }
}

export const createDefenceItem = (level) => {
    let minRange = (level - 3) < 0 ? 0 : (level - 3);
    minRange = minRange > defenceItem.length ? defenceItem.length : minRange;
    const maxItemRange = level > defenceItem.length ? defenceItem.length : level;
    const maxDebuffRange = level > defenceDebuffs.length ? defenceDebuffs.length : level;
    return {
        id: guid(),
        class: 'defence',
        strength: strength[Math.floor(Math.random() * strength.length)],
        item: defenceItem[ Math.floor(Math.random() * (maxItemRange - minRange)) ],
        debuffs: [defenceDebuffs[ Math.floor(Math.random() * (maxDebuffRange - minRange)) ]]
    }
}

export const createMagicItem = (level) => {
    let minRange = (level - 3) < 0 ? 0 : (level - 3);
    minRange = minRange > magicItem.length ? magicItem.length : minRange;
    const maxItemRange = level > magicItem.length ? magicItem.length : level;
    const maxDebuffRange = level > magicDebuffs.length ? magicDebuffs.length : level;
    return {
        id: guid(),
        class: 'magic',
        strength: strength[Math.floor(Math.random() * strength.length)],
        item: magicItem[ Math.floor(Math.random() * (maxItemRange - minRange)) ],
        debuffs: [magicDebuffs[ Math.floor(Math.random() * (maxDebuffRange - minRange)) ]]
    }
}

export const createResourceItem = (level) => {
    return {
        id: guid(),
        class: 'resource'
    }
}

const strength = [
    {name: 'Destroyed', multiplier: 0},
    {name: 'Weak', multiplier: 1},
    {name: 'Regular', multiplier: 2},
    {name: 'Well done', multiplier: 3},
    {name: 'Masterpiece', multiplier: 4},
    {name: 'Legendary', multiplier: 5},
];

const attackItem = [
    {name: 'Sandal', bonus: {attack:2, price:2}, icon:'sandal'},
    {name: 'Wooden Sword', bonus: {attack:3, price:2}, icon:'woodenSword'},
    {name: 'Simple Sword', bonus: {attack:5, price:6}, icon:'simpleSword'},
    {name: 'Simple Hammer', bonus: {attack:7, defence: -1, price:6}, icon:'simpleHammer'},
    {name: 'Hunting Bow', bonus: {attack:10, defence: -4, price:8}, icon:'huntingBow'},
];

const defenceItem = [
    {name: 'Plank', bonus: {defence:1, price:5}, icon:'plank'},
    {name: 'Wooden Shield', bonus: {defence:2, price:5}, icon:'woodenShield'},
    {name: 'Big Wooden Shield', bonus: {defence:3, price:7}, icon:'bigWoodenShield'},
    {name: 'Simple Viking Shield', bonus: {attack: 2, defence:2, price:5}, icon:'simpleVikingShield'},
    {name: 'Reinforced Wooden Shield', bonus: {defence:6, price:12}, icon:'simpleVikingShield'},
];

const magicItem = [
    {name: 'Piece of Magic Paper', bonus: {price: 2}, icon:'magicPaper'},
    {name: 'Simple Wooden Wand', bonus: {price: 10}, icon:'simpleWoodenWand'},
    {name: 'Bone Dagger', bonus: {price: 15}, icon:'boneDagger'},
];

const resourceItem = [
    {name: 'Potato', bonus: {price: 1}, icon: 'potato'},
    {name: 'sandal', bonus: {price: 1}, icon: 'sandal'},
    {name: 'rock', bonus: {price: 1}, icon: 'rock'},
    {name: 'plank', bonus: {price: 1}, icon: 'plank'},
    {name: 'beer', bonus: {price: 1}, icon: 'beer'},
];

const magicDebuffs = [
    removeHealthI,
    removeHealthII,
];

const defenceDebuffs = [
    removeHealthI,
];

function guid() {
    if (!guid.cache) guid.cache = []
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    let newguid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    if ( guid.cache.includes(newguid) ){
        return guid()
    } else {
        guid.cache.push(newguid)
    }
    return newguid;
}