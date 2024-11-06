async function dataFetching(){
    try{
    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();
    let div = document.querySelector("#container");

    console.log(data);
    data.map(function(element){
        let country = document.createElement("div");
        let heading = document.createElement("h3");
        heading.innerText = element.name.common;
        country.append(heading);
        

        //creating image 
        let image = document.createElement("img");
        image.src = element.flags.png;
        country.append(image);


        //population
        let population = document.createElement("p");
        population.innerText = `Population:${element.population}`;
        country.append(population);

        let Region = document.createElement("p");
        Region.innerText = `Region:${element.region}`;
        country.append(Region);

        let Capital = document.createElement("p");
        Capital.innerText =`Capital:${element.capital}` ;
        country.append(Capital);

        div.append(country);
    })
    }
    catch(error){
        console.log(error);
    }
}
dataFetching();