//tu código aquí
function mostrarNumeros (){
  let palabra1= "Fizz";
  let palabra2 = "Buzz";
  let palabra3 = "FizzBuzz"
  for(i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
      console.log(palabra3);
    }
    else if(i%3===0){
      console.log(palabra1);
    }
    else if(i%5===0){
      console.log(palabra2);
    }
    else {
      console.log(i);
    }
  }
}
mostrarNumeros();

function conversion() {
  let metros = parseFloat(prompt("cantidad de metros"));
  let pies = metros*3.281;
  let pulgadas = metros*39.37;
  console.log("La respectiva cantidad de pies es: ",pies)
  console.log("La respectiva cantidad de pulgadas es: ",pulgadas )
}
conversion();