// Retonar tamanho de uma string 
const textoSize = 'Kaique'.length;
console.log('A quantidade de letras: ' + textoSize);

//Retonar um array quebrando a string por um delimitador
const splittedTexto = 'Kaique_Luz'.split('_');
console.log('\nArray com as posições separadas pelo demilitador: ', splittedTexto);

//Buscar por um substiuir por outro 
const replaceTexto = 'Kaique Luz'.replace('Luz', 'Emanuel');
console.log('\nSubstituição: ', replaceTexto );

//Retornar a "fatia" de um valor
const lastChar = 'Kaique'.slice(-1);
console.log('\nUltima letra de uma string:  ', lastChar);


const myNumber = 12.4032;
//Transformar numero para string
const numberAsString = myNumber.toString();
console.log('Numero transformado em string: ', typeof numberAsString);

//Retornar numero com um numero de casa decimais
const fixedDoisDecimeias = myNumber.toFixed(2);
console.log('\nNumero com duas casas decimais: ', fixedDoisDecimeias);

//Transformar uma string em float
console.log('\nString para float: ', parseFloat('13.22'));

//Transfomar uma string em inteiro
console.log('\nString para int: ', parseInt(myNumber));


let user = {
    name: 'Kaiqque'
};

//Alterar propriedade de um objeto 
user.name = 'Kaique';
user['name'] = 'Kaique Luz';

console.log('\nObjeto: ', user);

//Criando uma propriedade 
user.idade = '21';
user.teste = 'a';
console.log(user);
//Deletando uma propriedade
delete user.teste;
console.log(user);

//Recupear chaves
console.log(Object.keys(user));
//Recuperar valores
console.log(Object.values(user));

//Retornar array de array 
console.log(Object.entries(user));

// mergear propriedades do objects (não recomen)
Object.assign(user, {teste2: 'b'});
console.log(user);
// mergear propriedades do objects (recomen)
console.log(Object.assign({}, user, { name: 'Kaique Luz', idade: '21', teste3: 'c' }));
console.log(user);

//Predefine todas as alterações eem um objeto
const novoObj = { foo: 'bar'};
Object.freeze(novoObj);

novoObj.foo = 'teste';
delete novoObj.foo;
novoObj.bar = 'foo';

console.log(novoObj);

//Permite apenas troca de valor existente

const carro = {nome: 'Ferrari'};
Object.seal(carro)

carro.nome = 'Lamborghini';
delete carro.nome;
carro.age = '2021';

console.log(carro);


//Symbols sãoo unicos 

const sy1 = Symbol('a');
const sy2 = Symbol('a');

console.log('symbol 1 é igual ao symbol 2 ? ', sy1 === sy2);