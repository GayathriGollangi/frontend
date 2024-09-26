document.querySelector("#form").addEventListener("submit",jobDetails); 
let jobArr;
if(localStorage.getItem("jobList") !== null){
    jobArr = JSON.parse(localStorage.getItem("jobList"));
}
else{
    jobArr = [];
}
function jobDetails(){
    event.preventDefault();
    let jobObj = {
        personName:form.username.value,
        personEmail:form.email.value,
        personRole:form.role.value,
        personSalary:form.salary.value
    }
    jobArr.push(jobObj);
    // console.log(jobObj);
    // console.log(jobArr)
    localStorage.setItem("jobList",JSON.stringify(jobArr));
    window.location.href = "application.html";

}