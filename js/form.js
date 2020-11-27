/*funtion to validate form*/
function validate(){

    let inputs = document.querySelectorAll(".form-control");
    let button = document.querySelector(".btn-info");
    let empty;
    inputs.forEach( el =>{ 

        if(el.value === ""){
            empty = true 
        }else{
            empty = false  
        }
    });

    if(empty){
        button.disabled = true;
    }else{
        button.disabled = false;
    }

}

function btnClick(){
    let button = document.querySelector(".alert");
    button.style.opacity = 1;
    button.classList.add("alert-success-entry");
}