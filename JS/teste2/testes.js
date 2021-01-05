// currying
/*
function soma(a){
    return function(b){
        return a + b;
    }
}
 
const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(5));
*/

// hoisting variaves
/*
function fn(){
    console.log(text);

    var text = "Exemplo";
    console.log(text);
}

fn();*/

// hoisting funcoes
/*
function fn(){
    log("hoisting teste");

    function log(value){
        console.log(value);
    }
}
fn();*/

// imutabilidade 
/*
const user = {
    name: 'Kaique',
    lastName: 'Luz'
};

function getUserWithFullName(user){
    return {
        ...user,
        fullName:`${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);*/


