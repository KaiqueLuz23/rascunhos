// Retonar tamanho de uma string 
const textoSize = 'Kaique'.length;
console.log('A quantidade de letras: ' + textoSize);

//Retonar um array quebrando a string por um delimitador
const splittedTexto = 'Kaique_Luz'.split('_');
console.log('\nArray com as posições separadas pelo demilitador: ', splittedTexto);

//Buscar por um substiuir por outro 
const replaceTexto = 'Kaique Luz'.replace('Luz', 'Emanuel');
console.log('\nSubstituição: ', replaceTexto );