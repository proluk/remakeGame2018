export const debuffConnectedFunctions = {
    removeHealthI: function(){
        this.health = this.health - 2
    },
    removeHealthII: function(){
        this.health = this.health - 4
    },
}

export const removeHealthI = {
    name:'removeHealthI',
    icon:'removeHealthI',
    description:'Removes 2 health every round',
    connectedFunctionName:'removeHealthI',
}

export const removeHealthII = {
    name:'removeHealthII',
    icon:'removeHealthII',
    description:'Removes 4 health every round',
    connectedFunctionName:'removeHealthII',
}