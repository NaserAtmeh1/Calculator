let result = document.querySelector(".outcome")
let buttons = Array.from(document.querySelectorAll(".button")) 
let str ;
buttons.forEach((button) => button.addEventListener("click",() => {

    if(button.textContent === "Clear"){
        result.textContent = ""
        console.log(button.textContent);

    } 
    else if (button.textContent === "delete"){
         str = result.textContent;
        result.textContent = str.slice(0, str.length - 1);
    }
    else if(button.textContent === "="){

        try{
            result.innerHTML = `<span style='color:red'>${eval(result.textContent)}</span>`;
            
        }

        catch{
            let msg =  "Invalid Input .. Error";
            result.innerHTML = `<span style='color:red'>${msg}</span>` 
        }
    }
    else{
            result.innerHTML += `<span style='color:red'>${button.textContent}</span>`;
    }
}))

