var elementList = document.querySelectorAll(".phone-screen");
var repeat = false;
var actual = 0;

setInterval(() => {

    let element;

    for(let i = 0; i < elementList.length; i++){
        
        element = elementList[i];

        if(actual + 1 === elementList.length){
            actual = 0;
            element = elementList[actual];
            element.classList.remove("not-visible");
            element.classList.add("transtion-screen");
            element = elementList[elementList.length - 1];
            element.classList.add("not-visible");
            element.classList.remove("transtion-screen");
            repeat = true;
            break;
        }

        if(i === actual){
            element.classList.add("not-visible");
            element.classList.remove("transtion-screen");
            repeat = false;
        }

        if(i === actual + 1){
            element.classList.remove("not-visible");
            element.classList.add("transtion-screen");
            repeat = false;
            break;
        }
        
    }

    if(repeat === false){
        actual++;
    }

}, 5500);



