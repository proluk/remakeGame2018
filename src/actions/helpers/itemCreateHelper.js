import _ from 'lodash'
import {
    removeHealthI,
    removeHealthII,
    removeHealthIII,
    removeMaxHealthI,
    removeAttackI,
    removeDefenceI,
} from './debuffHelper'

export const createAttackItem = (level) => {
    let minRange = ((level - 3) < 0 ? 0 : (level - 3));
    minRange = minRange > attackItem.length ? attackItem.length - 1 : minRange;
    const maxItemRange = level > attackItem.length ? attackItem.length : level;
    let item = {
        id: guid(),
        class: 'attack',
        strength: strengthDraw(),
        item: _.cloneDeep(attackItem[ Math.floor(Math.random() * (maxItemRange - minRange)) ] ),
    }
    for (const i in item.item.bonus) {
      item.item.bonus[i] = item.item.bonus[i] * item.strength.multiplier
    }
    return item;
}

export const createDefenceItem = (level) => {
    let minItemRange = (level - 3) < 0 ? 0 : (level - 3);
    minItemRange = minItemRange > defenceItem.length ? defenceItem.length - 1 : minItemRange;
    let minDebuffRange = (level -3) < 0 ? 0 : (level - 3)
    minDebuffRange = minDebuffRange > defenceDebuffs.length ? defenceDebuffs.length - 1 : minDebuffRange;
    const maxItemRange = level > defenceItem.length ? defenceItem.length : level;
    const maxDebuffRange = level > defenceDebuffs.length ? defenceDebuffs.length : level;
    let item = {
        id: guid(),
        class: 'defence',
        strength: strengthDraw(),
        item: _.cloneDeep(defenceItem[ Math.floor(Math.random() * (maxItemRange - minItemRange)) ] ),
        debuffs: [ _.cloneDeep(defenceDebuffs[ Math.floor(Math.random() * (maxDebuffRange - minDebuffRange)) ])]
    }
    for (const i in item.item.bonus) {
        item.item.bonus[i] = item.item.bonus[i] * item.strength.multiplier
    }
    return item;
}

export const createMagicItem = (level) => {
    let minItemRange = (level - 3) < 0 ? 0 : (level - 3);
    minItemRange = minItemRange > magicItem.length ? magicItem.length - 1 : minItemRange;
    let minDebuffRange = (level -3) < 0 ? 0 : (level - 3)
    minDebuffRange = minDebuffRange > magicDebuffs.length ? magicDebuffs.length - 1 : minDebuffRange;
    const maxItemRange = level > magicItem.length ? magicItem.length : level;
    const maxDebuffRange = level > magicDebuffs.length ? magicDebuffs.length : level;
    let item = {
        id: guid(),
        class: 'magic',
        strength: strengthDraw(),
        item: _.cloneDeep(magicItem[ Math.floor(Math.random() * (maxItemRange - minItemRange)) ] ),
        debuffs: [ _.cloneDeep(magicDebuffs[ Math.floor(Math.random() * (maxDebuffRange - minDebuffRange)) ])]
    }
    for (const i in item.item.bonus) {
        item.item.bonus[i] = item.item.bonus[i] * item.strength.multiplier
    }
    return item;
}

const strengthDraw = () => {
    let rand = Math.floor(Math.random() * 1000);
    console.log(rand);
    if ( rand < 700 ) {
        return strength[0];
    } else if ( rand < 900 ) {
        return strength[1];
    } else if ( rand < 990 ) {
        return strength[2];
    } else if ( rand < 995 ) {
        return strength[3];
    } else if ( rand < 1000) {
        return strength[4];
    }
}
const strength = [
    {name: 'Weak', multiplier: 1},
    {name: 'Regular', multiplier: 2},
    {name: 'Well done', multiplier: 3},
    {name: 'Masterpiece', multiplier: 4},
    {name: 'Legendary', multiplier: 5},
];

const attackItem = [
    {name: 'Sandal', bonus: {attack:1, price:1}, icon:'sandal'},
    {name: 'Wooden Sword', bonus: {attack:2, price:2}, icon:'woodenSword'},
    {name: 'Simple Sword', bonus: {attack:3, price:4}, icon:'simpleSword'},
    {name: 'Simple Hammer', bonus: {attack:4, defence: -1, price:4}, icon:'simpleHammer'},
    {name: 'Hunting Bow', bonus: {attack:6, defence: -3, price:4}, icon:'huntingBow'},
];

const defenceItem = [
    {name: 'Plank', bonus: {defence:1, price:1}, icon:'plank'},
    {name: 'Wooden Shield', bonus: {defence:2, price:2}, icon:'woodenShield'},
    {name: 'Big Wooden Shield', bonus: {defence:3, price:4}, icon:'bigWoodenShield'},
    {name: 'Simple Viking Shield', bonus: {attack: 1, defence:2, price:4}, icon:'simpleVikingShield'},
    {name: 'Reinforced Wooden Shield', bonus: {defence:3, price:4}, icon:'reinforcedWoodenShield'},
];


// TODO - wands, daggers, staffs, hats, robes, books,
const magicItem = [
    {name: 'Magic Paper of Life', bonus: {maxHealth: 1, price: 4}, icon:'magicPaperOfLife'},
    {name: 'Magic Paper of Protection', bonus: {defence: 1, price: 4}, icon:'magicPaperOfProtection'},
    {name: 'Magic Paper of Death', bonus: {attack: 2, price: 4}, icon:'magicPaperOfDeath'},
    {name: 'Simple Wooden Wand', bonus: {attack: 1, maxHealth: 1, price: 8}, icon:'simpleWoodenWand'},
    {name: 'Bone Dagger', bonus: {attack: 3, price: 12}, icon:'boneDagger'},
];

const magicDebuffs = [
    removeHealthI,
    removeHealthII,
    removeHealthIII,
];

const defenceDebuffs = [
    removeMaxHealthI,
    removeAttackI,
    removeDefenceI,
];

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    let newguid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    return newguid;
}