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
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Static drop down elements
        cy.get('select').select('option2').should('have.value', 'option2');

        //Dynamic drop down elements
        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item div').each(($ele, index, $list) => {
            if ($ele.text() === "India") {
                cy.wrap($ele).click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'India');



    })
    it('visible Elements ', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
    })
    it('Radio Button ', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('input[type="radio"]').check(['radio3']).should('be.checked');
    })
})