//Cypreess -Spec File (all Test File will be called as spec file)
describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').click();
        cy.get('.search-keyword').type('ca');

        //get all the 4 products
        cy.wait(2000);
        cy.get('.product:visible').should('have.length', 4);
        //alias command
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length', 4);

        //Parent Child chaining
        cy.get('.products').find('.product').should('have.length', 4);
        //
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        //Iterate through all the products
        cy.get('.products').find('.product').
            each(($el, index, $list) => {
                const textVeg = $el.find('h4.product-name').text();
                console.log(textVeg);
                if (textVeg.includes('Cashews')) {
                    cy.wrap($el).find("button").click();
                }

            })
        cy.get('.brand').should('have.text', 'GREENKART');
        //promise handeling 
        cy.get('.brand').then((logElement) => {
            cy.log(logElement.text());
        });
        //text() is not a cypress command so need to resolve the promise 
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

    })

})