describe('Handel UI Web Elements', () => {
    it('CheckBox Elements', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //checkBox 
        cy.get('#checkBoxOption1').check().should('be.checked');
        //get value of the checkBox
        cy.get('#checkBoxOption1').should('have.value', 'option1');
        //The Above 2 lines can be written as
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2');
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
        //Multiple checkboxes 

        cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked');

    })
    it('Drop Down Elements', () => {
        //Static drop down elements


    })

})