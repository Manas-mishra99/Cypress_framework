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
})