const imageAlert = document.querySelectorAll(".input-check__image-alert");
const textAlert = document.querySelectorAll(".input-check__text-alert");
const sendForm =  document.querySelector(".form-master__sign-up");
const inputList = document.querySelectorAll(".input-check__input");

const emailList = ["@gmail.com","@outlook.com"];
let activeAlert = [false, false,false, false];

function alertVisible(imageAlert, textAlert, index){
    imageAlert[index].classList.toggle("input-check__image-alert--visible");
    textAlert[index].classList.toggle("input-check__text-alert--visible");
    inputList[index].classList.toggle("input-check__input--alert");
}

function checkEmail(inputText, emailList){
    for(b = 0; b < emailList.length; b++){
        if(inputText.value.indexOf(emailList[b]) != -1){
            return true;
        }
    }
    return false;
}

sendForm.addEventListener('click', function (event) {
    for(a = 0; a < inputList.length; a++){
        if(inputList[a].value == "" && !activeAlert[a]){
            alertVisible(imageAlert, textAlert, a);

            activeAlert[a] = true;
        }

        if(a == 2 && inputList[a].value != "" && !activeAlert[a]){
            if(!checkEmail(inputList[a], emailList)){
                alertVisible(imageAlert, textAlert, a);

                activeAlert[a] = true;
            }
        }
    }
});

function checkInputText(index){
    inputList[index].addEventListener("input", function(event){
        if(inputList[index].value != "" && activeAlert[index]){
            alertVisible(imageAlert, textAlert, index);

            activeAlert[index] = false;
        }

        if(inputList[index].value == "" && !activeAlert[index]){
            alertVisible(imageAlert, textAlert, index);

            activeAlert[index] = true;
        }
    });
    
    /*text input validation*/
    if(index == 0 || index == 1){
        inputList[index].onkeypress = function(e) {
            if ((e.keyCode < 65 || (e.keyCode > 90 && e.keyCode < 97) || e.keyCode > 122) && e.keyCode != 32)
                return false;
        };
    }
}

for(c = 0; c < inputList.length; c++){
    checkInputText(c);
}

