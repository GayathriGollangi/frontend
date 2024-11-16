const selectedVideo=()=>{
    const videoContainer=document.getElementById('video-container');
    const video= JSON.parse(localStorage.getItem("clicked_video"));
    console.log(video);
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${video.videoId}`;
    iframe.width="100%";
    iframe.height="500px";
    iframe.setAttribute("allowfullscreen",true);
    iframe.setAttribute("autoplay",true);

    videoContainer.append(iframe);
}
selectedVideo();