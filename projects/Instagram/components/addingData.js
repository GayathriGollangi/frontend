export const addingData = (data,parent_div)=>{
    parent_div.innerHTML = "";
    data.forEach(({title,images}) => {
        const div = document.createElement('div');
        let image_ele = document.createElement("img");
        image_ele.src = images;
        let title_ele = document.createElement("h3");
        title_ele.innerHTML = title;
        image_ele.id = "posted_images";
        div.append(image_ele,title_ele);
        parent_div.append(div);
    });
}

