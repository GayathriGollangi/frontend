let APIKEY = "8c3vp5YHSMAvFR6ua3lnpqnLxDaQT2ke";

//fetching data based on id
const details = async()=>{
    let id = JSON.parse(localStorage.getItem("details"));

    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`);
        let data = await response.json();
        appendGifData(data.data);
        // console.log(data.data);
    }
    catch(err){
        console.log(err);
    }
}
details();

//render data to webpage
const appendGifData = (data)=>{
    let details = document.getElementById("detailsData");
    let image = document.createElement("img");
    image.src = data.images.downsized.url;
    image.id ="finalImage";
    details.append(image);

}
