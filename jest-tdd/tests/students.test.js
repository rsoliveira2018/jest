const student = require('../src/student');

describe('testes para alunos', () =>{
    it('Deve retornar 10 quando as notas forem 5, 3 e 2', () => {
        const notes = [5, 3, 2];
        expect(student.sum(notes)).toEqual(10);
    });

    it('Deve retornar zero quando uma das notas for zero', () =>{
        const notes = [1, 3, 0];
        expect(student.sum(notes)).toEqual(0);
    });

    it('Deve dobrar a nota quando o aluno tiver mais de 05 notas', () => {
        const notes = [1, 2, 3, 4, 5, 6, 7];
        expect(student.sum(notes)).toEqual(56);
    })

    it('Deve dobrar a nota quando ela for maior que 9', () => {
        const notes = [10,5,3];
        expect(student.sum(notes)).toEqual(28);
    })

    it('Deve retornar 3 quando a média aritmética simples for 3', () =>{
        const notes = [3, 5, 1];
        expect(student.avg(notes)).toEqual(3);
    })

    it('Deve retornar média 0 quando o aluno tiver ao menos uma nota 0', () => {
        const notes = [10, 9, 0];
        expect(student.avg(notes)).toEqual(0);
    })
})