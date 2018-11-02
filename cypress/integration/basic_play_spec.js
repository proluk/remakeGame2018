describe('Tests that just play game', () => {
    it('should open game', () => {
        cy.visit('localhost:3000');
    });
    it('should start new game', () => {
        cy.get('.Main__section__nav__NavLink').contains('Start playing').click();
        cy.url().should('include', '/game')        
    });
    it('should heal himself', () => {
        cy.get('.Tavern__section__div').as('characters');
        cy.get('@characters').then((characters) => {
            characters.eq(2).click()
            cy.get('.Character__nav__div').click();
        })

        cy.get('.Player__div__span').as('stats')
        cy.get('@stats').should((stats) => {
            
            expect(stats.eq(0)).to.contain('10')
        })         
    })
    it('should start new fight', () => {
        cy.get('.Tavern__section__div').as('characters');
        cy.get('@characters').then((characters) => {
            characters.eq(1).click()
            cy.get('.Character__nav__NavLink').click();
        })

        cy.url().should('include', '/game/fight')

        cy.get('.Character__nav__div').contains('Fight').click();        
    })

    it('should pick action', () => {
        cy.get('.Fight__section__ul__li').as('actions');

        cy.get('@actions').then((actions) => {
            let rand = Math.floor(Math.random() * 3)
            actions.eq(rand).click();
        })
    })

    it('should check if player or monster is dead', () => {
        cy.get('.Monster__div__span').as('monsterStats');
        cy.get('.Player__div__span').as('playerStats');

        
        cy.get('@playerStats').then((pStats) => {
            cy.get('@monsterStats').then((mStats) => {
                if ( parseInt(mStats.eq(0).text()) <= 0 || parseInt(mStats.eq(0).text() <= 0)) {
                    
                } else {
                    cy.get('.Fight__section__ul__li').as('actions');

                    cy.get('@actions').then((actions) => {
                        let rand = Math.floor(Math.random() * 3)
                        actions.eq(rand).click();
                    })
                }
            })        
        });        

    })
})

