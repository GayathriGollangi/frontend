
import navbar from "../components/navbar.js";
import { addingData } from "../components/addingData.js";
const nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

let post_div = document.getElementById("post");
const getData = async()=>{
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    console.log(data);
    addingData(data,post_div);
}
getData();