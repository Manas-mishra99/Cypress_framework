describe('Hooks Concept', () => {
    let jsondata
    before(() => {
        //Before runs before all tests
        cy.fixture('example').then((data) => {
            jsondata = data;

        })

    })
    it('My first Test case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(jsondata.name)
        cy.get('select').select(jsondata.gender);




    })
})