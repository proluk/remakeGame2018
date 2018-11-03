import {
    createAttackItem,
    createDefenceItem,
    createMagicItem,
} from './itemCreateHelper'

import Hobo from '../../components/game/graphics/hobo.gif'
import Skeleton from '../../components/game/graphics/skeleton.gif'
import Zombie from '../../components/game/graphics/zombie.gif'
import Goblin from '../../components/game/graphics/goblin.gif'
import Bandit from '../../components/game/graphics/bandit.gif'
import Mercenary from '../../components/game/graphics/mercenary.gif'
import Dwarf from '../../components/game/graphics/dwarf.gif'
import RedKingdomWarrior from '../../components/game/graphics/axe-warrior.gif'
import Crusader from '../../components/game/graphics/crusader.gif'
import BlackSwordsman from '../../components/game/graphics/magic-swordsman.gif'



export const pictures = [
    {name: 'Aggresive Hobo', line: 'I am agressive, wanna fight?', picture:Hobo},
    {name: 'Skeleton', line: 'Does skeletons can talk?', picture:Skeleton},
    {name: 'Zombie', line: 'Do you have some brains?', picture:Zombie},
    {name: 'Goblin', line: 'Ey, you are not green!', picture:Goblin},
    {name: 'Bandit', line: 'Give me your money', picture:Bandit},
    {name: 'Mercenary', line: 'Got paid to kill you', picture:Mercenary},
    {name: 'Dwarf', line: 'Hey, i am down here!', picture:Dwarf},
    {name: 'Red Kingdom Warrior', line: 'For the Red Kingdom', picture:RedKingdomWarrior},
    {name: 'Crusader', line: 'Sinners will die', picture:Crusader},
    {name: 'The Black Swordsman', line: 'Really want to fight with me?', picture:BlackSwordsman},
]

export const monsterCreateHelper = (level) => {
    const monsterNumber = level >= pictures.length ? pictures.length - 1 : level;
    return {
        name: pictures[monsterNumber].name,
        line: pictures[monsterNumber].line,
        maxHealth: 1 + (level * 3),
        health: 1 + (level * 3),
        attack: 1 + level + 2,
        defence: 0 + level,
        money: level + Math.floor(Math.random() * (10 * level) ),
        attackItem: createAttackItem(level),
        defenceItem: createDefenceItem(level),
        magicItem: createMagicItem(level),
        bonusStats: {
            attack: 0,
            defence: 0,
        },
        action: null,
        debuffs: [],
        picture: pictures[monsterNumber].picture,
        level: level,
    }
}