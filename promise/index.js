const obtenerData = require('../utils/obtenerData');
const API = 'https://pokeapi.co/api/v2/pokemon/';

obtenerData(API)
.then(data =>{
    console.log(data.count);
    return obtenerData(`${API}.results[1]`)
})
.then(data2 =>{
    console.log(data2.name);
})
.catch(
 error => console.error(error)
)