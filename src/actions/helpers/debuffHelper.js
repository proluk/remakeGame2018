export const debuffConnectedFunctions = {
    removeHealthI: function(){
        this.health = this.health - 1
    },
    removeHealthII: function(){
        this.health = this.health - 2
    },
    removeHealthIII: function(){
        this.health = this.health - 3
    },

    removeMaxHealthI: function(){
        this.bonusStats.maxHealth = this.bonusStats.maxHealth - 1
        if ( this.health > this.maxHealth + this.bonusStats.maxHealth ) {
            this.health = this.maxHealth + this.bonusStats.maxHealth;
        }
    },
    removeMaxHealthII: function(){
        this.bonusStats.maxHealth = this.bonusStats.maxHealth - 2
        if ( this.health > this.maxHealth + this.bonusStats.maxHealth ) {
            this.health = this.maxHealth + this.bonusStats.maxHealth;
        }
    },
    removeMaxHealthIII: function(){
        this.bonusStats.maxHealth = this.bonusStats.maxHealth - 3
        if ( this.health > this.maxHealth + this.bonusStats.maxHealth ) {
            this.health = this.maxHealth + this.bonusStats.maxHealth;
        }
    },

    removeAttackI: function(){
        this.bonusStats.attack = this.bonusStats.attack - 2
    },
    removeAttackII: function(){
        this.bonusStats.attack = this.bonusStats.attack - 4
    },
    removeAttackIII: function(){
        this.bonusStats.attack = this.bonusStats.attack - 6
    },

    removeDefenceI: function(){
        this.bonusStats.defence = this.bonusStats.defence - 1
    },
    removeDefenceII: function(){
        this.bonusStats.defence = this.bonusStats.defence - 2
    },
    removeDefenceIII: function(){
        this.bonusStats.defence = this.bonusStats.defence - 3
    },
    
}
//TODO - remove defence, remove attack, steal attack, steal defence, steal health
//pickpocket - business man

export const removeHealthI = {
    name:'removeHealthI',
    icon:'removeHealthI',
    description:'Removes 1 health every round',
    connectedFunctionName:'removeHealthI',
}

export const removeHealthII = {
    name:'removeHealthII',
    icon:'removeHealthII',
    description:'Removes 2 health every round',
    connectedFunctionName:'removeHealthII',
}

export const removeHealthIII = {
    name:'removeHealthIII',
    icon:'removeHealthIII',
    description:'Removes 3 health every round',
    connectedFunctionName:'removeHealthIII',
}

export const removeMaxHealthI = {
    name:'removeMaxHealthI',
    icon:'removeMaxHealthI',
    description:'Removes max health by 1',
    connectedFunctionName:'removeMaxHealthI',
}

export const removeAttackI = {
    name:'removeAttackI',
    icon:'removeAttackI',
    description:'Removes attack by 2',
    connectedFunctionName:'removeAttackI',
}

export const removeDefenceI = {
    name:'removeDefenceI',
    icon:'removeDefenceI',
    description:'Removes defence by 1',
    connectedFunctionName:'removeDefenceI',
}
export const removeMaxHealthII = {
    name:'removeMaxHealthII',
    icon:'removeMaxHealthII',
    description:'Removes max health by 2',
    connectedFunctionName:'removeMaxHealthII',
}

export const removeAttackII = {
    name:'removeAttackII',
    icon:'removeAttackII',
    description:'Removes attack by 4',
    connectedFunctionName:'removeAttackII',
}

export const removeDefenceII = {
    name:'removeDefenceII',
    icon:'removeDefenceII',
    description:'Removes defence by 2',
    connectedFunctionName:'removeDefenceII',
}
export const removeMaxHealthIII = {
    name:'removeMaxHealthIII',
    icon:'removeMaxHealthIII',
    description:'Removes max health by 3',
    connectedFunctionName:'removeMaxHealthIII',
}

export const removeAttackIII = {
    name:'removeAttackIII',
    icon:'removeAttackIII',
    description:'Removes attack by 6',
    connectedFunctionName:'removeAttackIII',
}

export const removeDefenceIII = {
    name:'removeDefenceIII',
    icon:'removeDefenceIII',
    description:'Removes defence by 3',
    connectedFunctionName:'removeDefenceIII',
}