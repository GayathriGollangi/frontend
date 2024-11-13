const slideShowArray =[
    "https://image-resizer-cloud-api.akamaized.net/image/2BCD75B6-0BBB-48F7-BEB0-6B934C60E193/0-3x1.jpg?width=2310&updatedTime=2024-11-08T18:28:43Z&dt=Web",
    "https://image-resizer-cloud-api.akamaized.net/image/7791A826-B06B-4B67-9B37-F44718A09450/0-16x9.jpg?width=1000&updatedTime=2024-11-08T06:28:26Z&dt=MWeb",
    "https://image-resizer-cloud-api.akamaized.net/image/9D13DDA3-E8DE-43E3-9837-2BBE2A02549B/0-16x9.jpg?width=1000&updatedTime=2024-11-08T06:31:00Z&dt=MWeb",
    "https://image-resizer-cloud-api.akamaized.net/image/2E015FBF-4B48-4769-B400-E94460C9DDA7/0-16x9.jpg?width=1000&updatedTime=2024-11-10T05:31:05Z&dt=MWeb",
    "https://image-resizer-cloud-api.akamaized.net/image/11A86D05-C927-44E4-A2DA-EB9A1C6A003C/0-16x9.jpg?width=1000&updatedTime=2024-11-08T06:34:46Z&dt=MWeb",
    "https://image-resizer-cloud-api.akamaized.net/image/3E153C8E-8C6E-47E9-8697-79644726744B/0-16x9.jpg?width=1000&updatedTime=2024-11-08T06:29:53Z&dt=MWeb",
    "https://image-resizer-cloud-api.akamaized.net/image/E6472706-E9F8-4B46-BB8B-73FC4DF35F9D/0-16x9.jpg?width=1000&updatedTime=2024-11-08T06:28:59Z&dt=MWeb",
];

const data = [
    {
        "rating": 8,
        "name": "Darling",
        "image": "1.jpg"
    },
    {
        "rating": 9,
        "name": "Darling",
        "image": "2.jpg"
    },
    {
        "rating": 8,
        "name": "Darling",
        "image": "3.jpg"
    },
    {
        "rating": 5,
        "name": "Darling",
        "image": "4.jpg"
    },
    {
        "rating": 7,
        "name": "Darling",
        "image": "5.jpg"
    }

];

function slideShow(){
    let carouselEle = document.getElementById("carousel");

        let slideIndex = 0;
        let img = document.createElement("img");
        img.src = slideShowArray[0];
        img.style.width = "100%";
        img.classList.add("slideImages");
        carouselEle.append(img);

        setInterval(function(){
            if(slideIndex==slideShowArray.length-1){
                slideIndex=0;
            }
            else{
                slideIndex++;
                img.src=slideShowArray[slideIndex];
            }
        },2000);

}
slideShow();

function appendMovies(data){
    console.log(data);
    let data_div = document.getElementById("loader");
    data_div.innerHTML = "";
    data_div.id= "movies";
    data.forEach(element => {
            let div = document.createElement("div");
            let p_name = document.createElement("p");
            p_name.innerHTML = `Name: ${element.name}`;
            let p_rating = document.createElement("p");
            p_rating.innerHTML = `Rating: ${element.rating}`
            let p_image = document.createElement("img");
            p_image.id = "poster";
            p_image.src = element.image;
            div.append(p_name,p_rating,p_image);
            data_div.append(div);
    });
}
appendMovies(data);