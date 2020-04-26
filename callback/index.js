let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

function obtenerData(url_api, callback){

    let xhr = new XMLHttpRequest;
    xhr.open('GET',url_api)
    
    xhr.onreadystatechange = (event) =>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                callback(null, JSON.parse(xhr.responseText));
                
            }else{
                const error = new Error(`Error ${url_api}`);
                return callback(error,null)
            }
        }
    }
xhr.send();
}

obtenerData(URL_API,(error1,data1)=>{
    if(error1) return console.log(error1)
    return obtenerData(`${URL_API}1`,(error2,data2)=>{
        if(error2) return console.log(error2)
        console.log(data1.count);
        console.log(data2.name);
    })
})