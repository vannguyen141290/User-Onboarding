

describe('App testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('testing', () => {
        expect(1).to.equal(1)
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const dateOfBirthInput = () => cy.get('input[name=dateOfBirth]')
    const genderCheck = () => cy.get('[type=radio]')

    const roleSelect = () => cy.get('select')
    const termCheckbox = () => cy.get('[type="checkbox"]')
    const submitBtn = () => cy.get('button')

    it('check if elements exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        dateOfBirthInput().should('exist')
        genderCheck().should('exist')

        roleSelect().should('exist')
        termCheckbox().should('exist')
        submitBtn().should('exist')
    })

    it('date of birth box should not receive data that not date format', () => {
        nameInput().type('thihongvan')
        emailInput().type('vannguyen@gmail.com')
        passwordInput().type('Bichhfgfgfa2510@')
        dateOfBirthInput().type('abc')
        genderCheck().first().check()
        roleSelect().select('tl')
        termCheckbox().check()
        submitBtn().should('be.disabled')
        dateOfBirthInput().clear()
        dateOfBirthInput().type('12/14/2010')
        passwordInput().clear()
        passwordInput().type('rrytytyuD1S@sffcd')
        submitBtn().should('not.be.disabled')
    })

    it('should not be able to choose both male and female checkbox', () => {
        genderCheck().check('female')
        cy.get('input[value="male"]').check()
        cy.get('input[value="female"]').should('not.be.checked')
    })

    describe('button functionality', () => {
        it('btn get enabled when filling out all the proper fields', () => {
            cy.get('input').should('have.value', '')
            nameInput().type('thihongvan')
            emailInput().type('vannguyen@gmail.com')
            passwordInput().type('Bichhfgfgfa2510@')
            dateOfBirthInput().type('11/14/1990')
            genderCheck().first().check()
            roleSelect().select('tl')
            termCheckbox().check()
            submitBtn().should('not.be.disabled')
            submitBtn().click()
            cy.get('input').should('have.value', '')
        })
    })
})