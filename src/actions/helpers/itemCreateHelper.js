import _ from 'lodash'
import {
    removeHealthI,
    removeHealthII,
    removeHealthIII,
    removeMaxHealthI,
    removeAttackI,
    removeDefenceI,
    removeMaxHealthII,
    removeAttackII,
    removeDefenceII,
    removeMaxHealthIII,
    removeAttackIII,
    removeDefenceIII,
} from './debuffHelper'

export const createAttackItem = (level) => {
    const itemRange = countRange(level, attackItem);
    let item = {
        id: guid(),
        class: 'attack',
        strength: strengthDraw(),
        item: _.cloneDeep(attackItem[ Math.floor(Math.random() * (itemRange.max - itemRange.min) + itemRange.min) ] ),
    }
    for (const i in item.item.bonus) {
      item.item.bonus[i] = item.item.bonus[i] * item.strength.multiplier
    }
    return item;
}

export const createDefenceItem = (level) => {
    const itemRange = countRange(level, defenceItem);
    const debuffRange = countRange(level, defenceDebuffs);
    let item = {
        id: guid(),
        class: 'defence',
        strength: strengthDraw(),
        item: _.cloneDeep(defenceItem[ Math.floor(Math.random() * (itemRange.max - itemRange.min) + itemRange.min) ] ),
        debuffs: [ _.cloneDeep(defenceDebuffs[ Math.floor(Math.random() * (debuffRange.max - debuffRange.min) + debuffRange.min) ])]
    }
    for (const i in item.item.bonus) {
        item.item.bonus[i] = item.item.bonus[i] * item.strength.multiplier
    }
    return item;
}

export const createMagicItem = (level) => {
    const itemRange = countRange(level, magicItem);
    const debuffRange = countRange(level, magicDebuffs);
    let item = {
        id: guid(),
        class: 'magic',
        strength: strengthDraw(),
        item: _.cloneDeep(magicItem[ Math.floor(Math.random() * (itemRange.max - itemRange.min) + itemRange.min) ] ),
        debuffs: [ _.cloneDeep(magicDebuffs[ Math.floor(Math.random() * (debuffRange.max - debuffRange.min) + debuffRange.min) ])]
    }
    for (const i in item.item.bonus) {
        item.item.bonus[i] = item.item.bonus[i] * item.strength.multiplier
    }
    return item;
}

const countRange = (level, arr, range = 3) => {
    const max = level > arr.length ? arr.length : level
    const min = (max - range) < 0 ? 0 : (max - range);
    return { max, min }
}

const strengthDraw = () => {
    let rand = Math.floor(Math.random() * 1000);
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
    {name: 'Wooden Sword', bonus: {attack:2, price:3}, icon:'woodenSword'},
    {name: 'Simple Sword', bonus: {attack:3, price:5}, icon:'simpleSword'},
    {name: 'Simple Hammer', bonus: {attack:5, defence: -1, price:7}, icon:'simpleHammer'},
    {name: 'Hunting Bow', bonus: {attack:7, defence: -3, price:9}, icon:'huntingBow'},
    {name: 'Double Axe', bonus: {attack:7, price:11}, icon:'doubleAxe'},

    {name: 'Two Hand Sword', bonus: {attack: 8, price: 11}, icon: 'twoHandSword'},
];

const defenceItem = [
    {name: 'Plank', bonus: {defence:1, price:1}, icon:'plank'},
    {name: 'Wooden Shield', bonus: {defence:2, price:3}, icon:'woodenShield'},
    {name: 'Big Wooden Shield', bonus: {defence:3, price:5}, icon:'bigWoodenShield'},
    {name: 'Simple Viking Shield', bonus: {attack: 1, defence:2, price:7}, icon:'simpleVikingShield'},
    {name: 'Reinforced Wooden Shield', bonus: {defence:3, price:9}, icon:'reinforcedWoodenShield'},
];


// TODO - wands, daggers, staffs, hats, robes, books,
const magicItem = [
    {name: 'Magic Paper of Life', bonus: {maxHealth: 1, price: 1}, icon:'magicPaperOfLife'},
    {name: 'Magic Paper of Protection', bonus: {defence: 1, price: 3}, icon:'magicPaperOfProtection'},
    {name: 'Magic Paper of Death', bonus: {attack: 2, price: 5}, icon:'magicPaperOfDeath'},
    {name: 'Simple Wooden Wand', bonus: {attack: 1, maxHealth: 1, price: 7}, icon:'simpleWoodenWand'},
    {name: 'Bone Dagger', bonus: {attack: 3, price: 9}, icon:'boneDagger'},
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
    removeMaxHealthII,
    removeAttackII,
    removeDefenceII,
    removeMaxHealthIII,
    removeAttackIII,
    removeDefenceIII,
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