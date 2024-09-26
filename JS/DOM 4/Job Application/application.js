let data = JSON.parse(localStorage.getItem("jobList"));

let bookMarkArr = JSON.parse(localStorage.getItem("BookMarkList")) || [];
displayData(data);

function bookMarkFun(element){
    bookMarkArr.push(element);
    localStorage.setItem("BookMarkList",JSON.stringify(bookMarkArr));
   }
//filtering based on role
document.querySelector("#filterRole").addEventListener("change",function(){
    let selectedValue = document.querySelector("#filterRole").value;
    // console.log(selectedValue);

    let filteredData = data.filter(function(ele){
        return ele.personRole === selectedValue;
    });
    console.log(filteredData);
    document.querySelector("tbody").innerHTML = "";
  displayData(filteredData);
});

// sorting Salary 
function handleSalary(){
    let selectedValue = document.querySelector("#sortSalary").value;
    if (selectedValue === "HTL"){
        data.sort(function(a,b){
            return b.personSalary - a.personSalary;
    })
    displayData(data);
    
}
if (selectedValue === "LTH"){
    data.sort(function(a,b){
        return a.personSalary - b.personSalary;
})
displayData(data);
}
}

// sorting Names 
function handleNames(){
    let selectedName = document.querySelector("#sortNames").value;

    if(selectedName === "asc"){
        data.sort(function(a,b){
            let x = a.personName.toUpperCase();
            let y = b.personName.toUpperCase();
            if(x>y){
                return 1;
            }
            if(x<y){
                return -1;
            }
            return 0;
        });
        displayData(data);
    }
    if(selectedName === "dsc"){
        data.sort(function(a,b){
            let x = a.personName.toUpperCase();
            let y = b.personName.toUpperCase();
            if(x>y){
                return -1;
            }
            if(x<y){
                return 1;
            }
            return 0;
        });
        displayData(data);
    }
   
   
}


// Display Data
function displayData(data){
    document.querySelector("tbody").innerHTML = "";
    data.forEach(function(element){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = element.personName;
        let td2 = document.createElement("td");
        td2.innerText = element.personEmail;
        let td3 = document.createElement("td");
        td3.innerText = element.personRole;
        let td4 = document.createElement("td");
        td4.innerText = element.personSalary;
        let td5 = document.createElement("td");
        td5.innerText = "Bookmark";
        td5.addEventListener("click",function(){
            bookMarkFun(element);
        })
        tr.append(td1,td2,td3,td4,td5);
        document.querySelector("tbody").append(tr);
        
})
}