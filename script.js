const submit = document.getElementById("submit");
const primary = document.getElementById("primary");
const secondary = document.getElementById("secondary");
const buttons = document.getElementsByClassName("card--primary__button");
const rate = document.getElementById("rate");

let value;

for(let x of buttons){
    x.addEventListener("click",() => {
        value = x.innerHTML;
    });
}

submit.addEventListener("click",() => {
    primary.classList.add("hidden");
    secondary.classList.remove("hidden");
    if(value!=undefined){
        rate.innerHTML = value;
    }
    else{
        rate.innerHTML = "0";
    }
});
