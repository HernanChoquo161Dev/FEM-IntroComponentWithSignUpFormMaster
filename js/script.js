const imageAlert = document.querySelectorAll(".input-check__image-alert");
const textAlert = document.querySelectorAll(".input-check__text-alert");
const sendForm =  document.querySelector(".form-master__sign-up");
const inputList = document.querySelectorAll(".input-check__input");

let activeAlert = [false, false,false, false];

function alertVisible(imageAlert, textAlert, index){
    imageAlert[index].classList.toggle("input-check__image-alert--visible");
    textAlert[index].classList.toggle("input-check__text-alert--visible");
    inputList[index].classList.toggle("input-check__input--alert");
}

sendForm.addEventListener('click', function (event) {
    for(a = 0; a < inputList.length; a++){
        if(inputList[a].value == "" && !activeAlert[a]){
            alertVisible(imageAlert, textAlert, a);

            activeAlert[a] = true;
        }
    }
});

function checkInputText(index){
    inputList[index].addEventListener("input", function(event){
        console.log(inputList[index].value != "");
        if(inputList[index].value != "" && activeAlert[index]){
            alertVisible(imageAlert, textAlert, index);

            activeAlert[index] = false;
        }

        if(inputList[index].value == "" && !activeAlert[index]){
            alertVisible(imageAlert, textAlert, index);

            activeAlert[index] = true;
        }
    });
}

for(a = 0; a < inputList.length; a++){
    checkInputText(a);
}

