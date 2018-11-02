export const debuffConnectedFunctions = {
    removeHealthI: function(){
        this.health = this.health - 1
    },
    removeHealthII: function(){
        this.health = this.health - 2
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