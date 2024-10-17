import 'cypress-iframe'
describe('WebTable Testing', () => {
    it('Verify Table content dynamically', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('tr td:nth-child(2)').each(($ele, index, $list) => {
            // cy.log($ele.text());
            if ($ele.text().includes('Python')) {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
                    const price1 = price.text();
                    expect(price1).to.equal('25');
                });
            }
        })

    })
    it('Mouse Hover', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click({ force: true });
        cy.url().should('include', 'top')

    })
    it('Handling Child Window', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').then((el) => {
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, () => {
                cy.get('#navbarSupportedContent [href*="about"]').click();
                cy.get('.mt-50 h2').should('contain', 'QAClick Academy');
            });
        })
    })
    it('Handling Frames', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })


})
