describe('Calendar Module', () => {
    it('Calendar Date Verification', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('a[href*="offers"]').invoke('removeAttr', 'target').click();
        cy.get('label[for*="deliveryDate"]').as('deliveryDate').click();
        cy.get('@deliveryDate').then((el) => {
            cy.log(el.text());
        })
        const year = "2027";
        const month = "6"
        const day = "22"
        cy.get('div.react-date-picker').click();
        cy.get('span[class*="react-calendar__navigation"]').as('yearPicker').click();
        cy.get('@yearPicker').click();
        cy.contains('button', year).click();
        cy.get('.react-calendar__year-view__months button').eq(month - 1).click();
        cy.get('.react-calendar__month-view__days button').eq(day).click();
        cy.get('input[name="date"]').should('have.value', '2027-06-22');

    })
})