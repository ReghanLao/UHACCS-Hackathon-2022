var sessionString = sessionStorage.getItem('myArray');
var myArray = JSON.parse(sessionString);
console.log(myArray);


fetch("http://localhost:3000/recipes")
.then(function(response){
    return response.json();
 })
 .then(function(products){
    const recipeArray = [];

    for(let product of products){
        var mybool = false;
        for (let x of product.Ingredients){
            console.log(x in myArray)
            if(myArray.includes(x) == true && mybool == false){
                mybool = true;
                recipeArray.push(product.Name)
            }
        }

    }


    function myInstruction(){
        console.log("hi")
    }
    
    let placeholder = document.querySelector(".recipes");
    let out = "";
    for(let product of products){
    if (recipeArray.includes(product.Name)){
        out += `
        <div class = "navigationButtonsDiv">
            <button id = "${product.Name}" class = "button" onClick="window.location.href='./instructions.html';"> 
                ${product.Name}
             </button> 
        </div>`;
    }
    
    }

    
    

    



    
    
    
    
    placeholder.innerHTML = out;

 });