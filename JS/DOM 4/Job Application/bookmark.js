
let bookMarksData = JSON.parse(localStorage.getItem("BookMarkList"));

// console.log(bookMarkArr);
bookMarksData.forEach(function(element,index) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = element.personName;
    let td2 = document.createElement("td");
    td2.innerText = element.personEmail;
    let td3 = document.createElement("td");
    td3.innerText = element.personRole;
    let td4 = document.createElement("td");
    td4.innerText = element.personSalary;
   tr.append(td1,td2,td3,td4);
   let td5 = document.createElement("td");
    td5.innerText = "Delete";
    td5.className ="delete";
    td5.addEventListener("click",function(){
        deleteItem(element,index);
    });
    tr.append(td1,td2,td3,td4,td5);
   document.querySelector("tbody").append(tr);
   
});
function deleteItem(element,index){
    bookMarksData.splice(index,1);
    localStorage.setItem("BookMarkList",JSON.stringify(bookMarksData));

    window.location.reload();
   }
