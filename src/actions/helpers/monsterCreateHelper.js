import {
    createAttackItem,
    createDefenceItem,
    createMagicItem,
} from './itemCreateHelper'

import Hobo from '../../components/game/graphics/hobo.gif'
import Skeleton from '../../components/game/graphics/skeleton.gif'
import Zombie from '../../components/game/graphics/zombie.gif'
import Goblin from '../../components/game/graphics/goblin.gif'




const pictures = [
    {name: 'Aggresive Hobo', line: 'I am agressive, wanna fight?', picture:Hobo},
    {name: 'Skeleton', line: 'Does skeletons can talk?', picture:Skeleton},
    {name: 'Zombie', line: 'Do you have some brains?', picture:Zombie},
    {name: 'Goblin', line: 'Ey, you are not green!', picture:Goblin},
]
export const monsterCreateHelper = (level) => {
    const monsterNumber = level >= pictures.length ? pictures.length - 1 : level;
    return {
        name: pictures[monsterNumber].name,
        line: pictures[monsterNumber].line,
        maxHealth: 10 + level,
        health: 10 + level,
        attack: 1 + level,
        defence: 0 + level,
        money: level + Math.floor(Math.random() * level),
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
    }
}