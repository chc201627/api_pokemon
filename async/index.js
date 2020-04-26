let obtenerData = require('../utils/obtenerData');
const API = 'https://pokeapi.co/api/v2/pokemon/';
const obtener = async(API)=>{
    try {
    const data1 = await obtenerData(API)
    const data2 = await obtenerData(`${API}1`)
    console.log(data1.results[1]);
    console.lo(data2.name)
            
    } catch (error) {
        console.error(error)
    }
}

obtener(API)