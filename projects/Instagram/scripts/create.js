import navbar from "../components/navbar.js";
const nav_div = document.getElementById("navbar");
nav_div.innerHTML = navbar();

let submit_btn = document.getElementById("submit_btn");
submit_btn.disabled = true;

//adding post
let images;
submit_btn.addEventListener("click",function(){
    addPost();
});

const addPost =async ()=>{
    let title = document.getElementById("title").value;
    
    let send_this_data={
        title,
        images

    }
    try{
        let response = await fetch("http://localhost:3000/posts",{
            method: "POST",
            body:JSON.stringify(send_this_data),
            headers:{
                "Content-Type": "application/json",
            },
        })
    }
    catch(error){
        console.log(error);
    }

}

const APIKEY = '9b67a7398c22b208e035f921fbe1cecc';
let input_image = document.getElementById("input_image");
input_image.addEventListener("change",function(){
    handleImage();
})

const handleImage = async()=>{
    let form = new FormData();
    // console.log(input_image.files[0]);
    form.append("image",input_image.files[0]);
    try{
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${APIKEY}`,{
            method: 'POST',
            body: form
        })
        const data = await response.json();
        console.log(data.data);
        // addPost(data.data);
        images = data.data.display_url;
        submit_btn.disabled = false;
    }
    catch(error)
    {
        console.log(error);
    }    
}

//delete post
const delete_btn = document.getElementById("delete_btn");
delete_btn.addEventListener("click",function(){
    deletePost();
})
const deletePost = async()=>{
    let delete_id = document.getElementById("delete_id").value;

    try{
        let response = await fetch(`http://localhost:3000/posts/${delete_id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
        })
    }
    catch(error){
        console.log(error);
    }
}

let update_btn = document.getElementById("update_btn");
update_btn.addEventListener("click",function(){
    updatePost();
})
const updatePost = async()=>{
    let update_id = document.getElementById("update_id").value;
    let update_title = document.getElementById("update_title").value;
    const send_this_data={
        title:update_title,
    }
    try{
        let response = await fetch(`http://localhost:3000/posts/${update_id}`,{
            method: "PATCH",
            body: JSON.stringify(send_this_data),
            headers:{
                "Content-Type": "application/json",
            }
    })
}
    catch(error){
        console.log(error);
    }
}

//replace post
let replace_btn = document.getElementById("replace_btn");
replace_btn.addEventListener("click",function(){
    replacePost();
})

//put
const replacePost =async()=>{
    let replace_id = document.getElementById("replace_id").value;
    let replace_title = document.getElementById("replace_title").value;
    const send_this_data = {
        title:replace_title
    }
    try{
        let response = await fetch(`http://localhost:3000/posts/${replace_id}`,{
            method: "PUT",
            body: JSON.stringify(send_this_data),
            headers:{
                "Content-Type": "application/json",
            }
    })
}
    catch(error){
        console.log(error);
    }
}