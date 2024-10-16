describe('Handling Window,Tab,Popups', () => {
    it('Handling Alert', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click();

        cy.get('[value="Confirm"]').click();
        //window:alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })


    })
    it('Handling Window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent [href*="about"]').click();
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy');
        });
    })
})