const anime = Array.of('Naruto', 'Sasuke', 'Sakura')
console.log(anime);

const jogadores = Array('Messi', 'Neymar', 'Suarez')
console.log(jogadores);

const numberAndStrings = Array.of(23, 'Jordan');

// Transformar divs em array
/*
const divs = document.querySelectorAll('div');
*/


const frutas = ['Uva', 'Manga'];

console.log(frutas);
// Inserir fim
frutas.push('Limao');
// Inserir inicio
frutas.unshift('Goiaba');
console.log(frutas);
// Remover
frutas.pop();
console.log(frutas);
// Remover inicio
frutas.shift();
console.log(frutas);

// Contatenar listas
const legumes = ['Abobora', 'Cenoura'];

const alimestos = frutas.concat(legumes);
console.log(alimestos);


frutas.forEach(frutas => console.log(frutas));

frutas.map((frutas, index) => '${index} - ${frutas}')

const frutas = ["amora", "laranja", "melancia", "acerola"];

frutas.sort();
frutas.reverse();
console.log(frutas);

const frutas = ["amora", ["laranja", ["melancia"], "acerola"]];
console.log(frutas.flat(2));


const familiaPai = ["Avó Zeca", "Avô Aroldo"];
const familiaMae = ["Avô Carlos", "Primo João Paulo"];

const familiaFilho = familiaPai.concat(familiaMae);

console.log(familiaPai);
console.log(familiaMae);
console.log(familiaFilho);



const colaboradores = [
    { nome: "Cris", horasTrabalhadas: 220 },
    { nome: "Rebeca", horasTrabalhadas: 210 }
  ];
  
  function adicionaSalario(colaborador) {
    const salario = colaborador.horasTrabalhadas * 50;
    colaborador.salario = salario;
  
    return {
      salario: salario
    };
  }
  
  const colaboradoresComSalario = colaboradores.map(adicionaSalario);
  
  console.log(colaboradoresComSalario);

const person = ["Cris"];

person.push("James", "Jenny");
person.push("John");

console.log(person);


const frutas = ["melancia", "laranja", "acerola"];
frutas.splice(2, 1);
console.log(frutas);


const pessoas = ["Cris", "Alexandre", "Pablo", "Cris"];

console.log(pessoas.indexOf("Cris"));
console.log(pessoas.findIndex(nome => nome === "Cris"));
console.log(pessoas.lastIndexOf("Cris"));
console.log(pessoas.find(nome => nome === "Cris"));


const alunos = [
    { nome: "Cris", nota: 10 },
    { nome: "Alexandre", nota: 7 },
    { nome: "Pablo", nota: 4 }
  ];
  
  function alunoAprovado(aluno) {
    return aluno.nota >= 7;
  }
  
  console.log(alunos.filter(alunoAprovado));
  console.log(alunos.some(alunoAprovado));
  console.log(alunos.every(alunoAprovado));