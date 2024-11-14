let APIKEY = "8c3vp5YHSMAvFR6ua3lnpqnLxDaQT2ke";

const main = async () => {
    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=50`);
        let data = await response.json();
        appendData(data.data);
        // console.log(data.data);
    }
    catch(err){
        console.log(err);
    }
 
};

const appendData = (data)=>{
    let gifContent = document.getElementById("gif");
    let stickerContent = document.getElementById("sticker");
    let main = document.getElementById("main");

    
  gifContent.innerHTML = "";
  stickerContent.innerHTML = "";    

    data.forEach((element)=>{
    
        let image = document.createElement("img");
        image.src = element.images.downsized.url;
        image.addEventListener('click',()=>{
            detailGifData(element.id);
        })
        main.append(image);

    });
};
main();

const detailGifData =(id)=>{
    let details = localStorage.setItem("details",JSON.stringify(id));
    window.location.href ="./details_gif.html";
}
