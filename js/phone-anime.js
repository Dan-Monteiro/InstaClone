
var elementList = document.querySelectorAll(".phone-screen");

/*vars to control phone animation*/
var repeat = false;
var current = 0;

setInterval(() => {

    let element;

    for(let i = 0; i < elementList.length; i++){
        
        element = elementList[i];

        /*reseting array ends*/
        if(current + 1 === elementList.length){
            current = 0;
            element = elementList[current];
            element.classList.remove("not-visible");
            element.classList.add("transtion-screen");
            element = elementList[elementList.length - 1];
            element.classList.add("not-visible");
            element.classList.remove("transtion-screen");
            repeat = true;
            break;
        }

        /*Setting current as default*/
        if(i === current){
            element.classList.add("not-visible");
            element.classList.remove("transtion-screen");
            repeat = false;
        }

        /*Setting next as current*/
        if(i === current + 1){
            element.classList.remove("not-visible");
            element.classList.add("transtion-screen");
            repeat = false;
            break;
        }
        
    }

    if(repeat === false){
        current++;
    }

}, 5500);



