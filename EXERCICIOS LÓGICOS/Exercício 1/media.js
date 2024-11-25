/* 
    FAÇA UM ALGORÍTIMO QUE DADO AS 3 NOTAS TIRADAS POR UM ALUNO EM UM SEMESTRE DA FACULDADE CALCULE E IMPRIMA A SUA MÉDIA E A SUA CLASSIFICAÇÃO CONFORME A TABELA ABAIXO.

    Média = (n1 + n2 + n3) / 3;

    CLASSIFICAÇÃO:
    - MÉDIA MENOR QUE 5, REPROVAÇÃO;
    - MÉDIA ENTRE 5 E 7, RECUPERAÇÃO;
    - MÉDIA ACIMA DE 7, PASSOU DE SEMESTRE;
*/

const n1 = 7;
const n2 = 7;
const n3 = 8;

const media = (n1 + n2 + n3) / 3;

if(media < 5) {
    console.log('Reprovado!')
} else if (media === 5 || media <= 7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado!')
}