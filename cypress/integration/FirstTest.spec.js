/// <reference types="Cypress" />

describe('My first test suite',()=>{



    it('First Test',()=>{
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        cy.get('.form-inline').within(()=>{
            cy.get('input[placeholder = "Jane Doe"]').type('Jane Doe').should('have.value','Jane Doe');
            cy.get('input[placeholder = "Email"]').type('jane.doe@gmail.com').should('have.value','jane.doe@gmail.com');
            cy.get('.custom-checkbox').click();
        });
        cy.get('#inputEmail1').type('jane.doe@gmail.com').should('have.value','jane.doe@gmail.com');
        cy.get('#inputPassword2').should('have.attr','type','password');
        cy.get('#inputPassword2').type('12345').should('have.value','12345');
        cy.contains('Radios').within(()=>{
            
        });
    });

});