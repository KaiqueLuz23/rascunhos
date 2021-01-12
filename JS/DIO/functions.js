function Pessoa(customProperties){
    return{
        name:'Caique',
        lastname: 'Luz',
        ...customProperties
    }
}
const p = Pessoa({name: 'Kaique', age: 21});
console.log(p);

/*
function MyApp(){
    if (!MyApp.instance){
        MyApp.instance = this;
    }

    return Pessoa.instance;
}

const m = MyApp.call({name: 'Kaique App'});

const m2 = MyApp.call({name: 'Luz App'});

console.log(m);
console.log(m2);

*/
