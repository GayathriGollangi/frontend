let APIKEY = "AIzaSyAyFr1jk0r5zme1UHM5WcHTW4gHLKH1skc";
let search_result = document.getElementById("results");
const searchVideo = async()=>{
    let query = document.getElementById("search").value;

    try{
        let url =`https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&part=snippet&q=${query}&type=video&maxResults=30`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data.items);
        appendVideos(data.items);
    }
    catch(error){
        console.log(error);
    }
}

const appendVideos = (data)=>{
    
    search_result.innerHTML = "";
    data.forEach((element) => {
        const {snippet,id:{videoId}} = element;
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src= snippet.thumbnails.default.url;
        let title = document.createElement("h3");
        title.innerHTML = snippet.title

        div.append(image,title);
        let data ={
            videoId,
            snippet
        }
        div.onclick=()=>{
            showVideo(data);
        }
        search_result.append(div);
    });
}

const showVideo =(data)=>{
    window.location.href="video.html";
    localStorage.setItem("clicked_video",JSON.stringify(data));

    

}

