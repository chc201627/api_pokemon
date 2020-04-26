let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const obtenerData = (url_api)=>{
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url_api);
        xhr.onreadystatechange = (event)=>{
            if(xhr.readyState ===4){
        
                (xhr.status === 200)
                ? resolve(JSON.parse(xhr.responseText))
                : reject(new Error(`Url Api ${url_api}`))
            }
        }
        xhr.send();
    })

}
module.exports = obtenerData
