/*
Practicaremos cómo crear gráficas con las librerías vistas en clase

Pediremos las películas de Star Wars y pintaremos una gráfica de líneas en la que podamos ver cada una de las películas.
En el eje X el nombre de la película
En el eje Y año de publicación

*/



//Para sacar el titulo de las peliculas.
async function peliculas(){
    try {
        let response = await fetch('https://swapi.dev/api/films/')
        let data = await response.json();
        let filmNames = data.results;

        for (let i=0; i<data.results.length; i++){
            console.log(filmNames[i].title);
        }
    
    } catch (error) {
        console.log("Lo siento tenemos un error capturado");
    }
}

peliculas();

//Para sacar la fecha de las peliculas

async function estreno(){
    try {
        let response = await fetch('https://swapi.dev/api/films/')
        let datos = await response.json();
        let filDates = datos.results;

        for(let i =0; i<datos.results.length;i++){
            console.log(filDates[i].release_date);
        }
        
    } catch (error) {
        console.log("Sorry detectamos un error");
    }
}

estreno();



