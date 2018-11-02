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

    removeAttackI: function(){
        this.bonusStats.attack = this.bonusStats.attack - 1
    },

    removeDefenceI: function(){
        this.bonusStats.defence = this.bonusStats.defence - 1
    }
    
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
    icon:'removeHealthI',
    description:'Removes bonus max health by 1',
    connectedFunctionName:'removeMaxHealthI',
}

export const removeAttackI = {
    name:'removeAttackI',
    icon:'removeHealthI',
    description:'Removes bonus attack by 1',
    connectedFunctionName:'removeAttackI',
}

export const removeDefenceI = {
    name:'removeDefenceI',
    icon:'removeHealthI',
    description:'Removes bonus defence by 1',
    connectedFunctionName:'removeDefenceI',
}