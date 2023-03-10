// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",addmission)
let arr= [];
function addmission(){
    event.preventDefault()
    let obj={
        studentName:document.querySelector("#name").value,
        studentEmail:document.querySelector("#email").value,
        studentPhone:document.querySelector("#phone").value,
        studentGender:document.querySelector("#gender").value,
        studentCourse:document.querySelector("#course").value,
    }
    arr.push(obj)
    localStorage.setItem("addmissiondata",JSON.stringify(arr))
    document.querySelector("form").reset();
}
