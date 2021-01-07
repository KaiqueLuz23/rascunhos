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
