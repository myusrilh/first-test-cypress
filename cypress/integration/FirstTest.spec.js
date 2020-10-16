/// <reference types="Cypress" />

describe('My first test suite',()=>{

    beforeEach('visit url, open form and form layouts',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

    })

    it('Inline form test',()=>{
        cy.get('.form-inline').within(()=>{
            cy.get('input[placeholder = "Jane Doe"]').type('Muhammad Yusril Hasriansyah').should('have.value','Muhammad Yusril Hasriansyah')
            cy.get('input[placeholder = "Email"]').type('yusrilhasriansyah@gmail.com').should('have.value','yusrilhasriansyah@gmail.com')
            cy.get('.custom-checkbox').click()
        })
    })

    it('Using the grid test',()=>{
        cy.get('#inputEmail1').type('yusrilhasriansyah@gmail.com').should('have.value','yusrilhasriansyah@gmail.com')
        cy.get('#inputPassword2').should('have.attr','type','password')
        cy.get('#inputPassword2')
        .type('113333')
        .should('have.value','113333')
        .parents('form')
        .find('.inner-circle')
        .first()
        .click()
        .parents('form')
        .contains('Option 2')
        .parents('nb-radio')
        .find('.inner-circle')
        .click()
        .parents('form')
        .contains('Disabled Option')
        .parents('nb-radio')
        .should('have.attr','disabled')
    });

    it('Form without label test',()=>{
        cy.get('input[placeholder = "Recipients"]').type('tuantakur.uhuy@gmail.com').should('have.value','tuantakur.uhuy@gmail.com')
        cy.get('input[placeholder = "Subject"]').type('Surat Lamaran Kerja').should('have.value','Surat Lamaran Kerja')
        cy.get('textarea[placeholder = "Message"]').type('Selamat siang, Tuan Takur. Semoga surat ini bisa tembus.').should('contain.value','Selamat siang, Tuan Takur. Semoga surat ini bisa tembus.')
    });

    it('Basic form test',()=>{
        cy.get('#exampleInputEmail1')
        .type('yusrilhasriansyah@gmail.com')
        .should('have.value','yusrilhasriansyah@gmail.com')
        cy.get('#exampleInputPassword1').should('have.attr','type','password')
        cy.get('#exampleInputPassword1')
        .type('113333')
        .should('have.value','113333')
        .parents('form')
        .find('nb-checkbox')
        .click()
    });
    
    it('Block form test',()=>{
        cy.get('#inputFirstName[placeholder = "First Name"]').type('Muhammad Yusril').should('have.value','Muhammad Yusril')
        cy.get('#inputLastName[placeholder = "Last Name"]').type('Hasriansyah').should('have.value','Hasriansyah')
        cy.get('#inputEmail[placeholder = "Email"]').type('yusrilhasriansyah@gmail.com').should('have.value','yusrilhasriansyah@gmail.com')
        cy.get('#inputWebsite[placeholder = "Website"]').type('https://github.com/myusrilh').should('have.value','https://github.com/myusrilh')
    });

});