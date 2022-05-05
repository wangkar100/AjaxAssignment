$(document).ready(function () {
    getData();
});
    
function getData() 
{
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#firstname").text(studentObj.firstname);
    $("#lastname").text(studentObj.lastname);
    $("#email").text(studentObj.email);
    $("#address").text(studentObj.address);
}

