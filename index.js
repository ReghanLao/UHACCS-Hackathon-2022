fetch("http://localhost:3000/ingredients")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector(".ingredients");
   let out = "";
   for(let product of products){

    out += `
         <label> ${product.Name.replace(/_/g, " ")}
            <input id = "${product.Name}" class = "cbox" type="checkbox">
            
            </label><br>
      `;
   }
   
   function myFunction() {
    const testArray = [];
    for(let product of products){
        console.log(document.querySelector("#".concat(product.Name)).checked)
        if(document.querySelector("#".concat(product.Name)).checked){
            testArray.push(product.Name);
        }

    }
        sessionStorage.setItem('myArray', JSON.stringify(testArray));
       

        window.location.href="./recipes.html";
        
    }


   document.getElementById("btn").onclick = function() {myFunction()};

   
    

   placeholder.innerHTML = out;

});