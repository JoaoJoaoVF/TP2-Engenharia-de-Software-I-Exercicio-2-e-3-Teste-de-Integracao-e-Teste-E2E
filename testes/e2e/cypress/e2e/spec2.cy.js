describe('Teste de cadastro de resposta', () => {
    it('Cadastra uma resposta e verifica se ela é listada', () => {

        cy.visit('http://localhost:3000');

        cy.get('#textarea-pergunta').type('13 * 0');
        cy.get('#btn-pergunta').click();

        cy.visit('http://localhost:3000/resposta/1');

        cy.get('#textarea-resposta').type('0');
        cy.get('#btn-resposta').click();

        cy.get('#tabela-respostas').contains('0');
    });
});
