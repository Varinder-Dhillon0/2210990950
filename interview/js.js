
const birthdate = document.getElementsByClassName("birthdate");
const display = document.getElementsByClassName("display");

function calculateAge(){
    const date = birthdate.birthdate.valueAsDate;
    const cur_date = new Date();

    const years = cur_date.getFullYear() - date.getFullYear();
    // const months = 
    console.log("hello")
    console.log(display);
    display.innerHtml += ("Years : " + years);
}