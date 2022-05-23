

console.log(addInputOne)

var add =() => {
    var addInputOne = document.getElementById("addInputOne").value
    var addInputTwo = document.getElementById("addInputTwo").value
    var sum;
   sum = parseInt (addInputOne) + parseInt(addInputTwo)
    alert("The sum is" + sum)
    console.log(addInputOne)
    console.log(addInputTwo)
    console.log(sum)

}
var subtract =() => {
    var addInputOne = document.getElementById("subtractInputOne").value
    var addInputTwo = document.getElementById("subtractInputTwo").value
    var difference;
   difference = parseInt (addInputOne) - parseInt(addInputTwo)
    alert("The difference is" + difference)
    
}
var multiply =() => {
    var addInputOne = document.getElementById("multiplyInputOne").value
    var addInputTwo = document.getElementById("multiplyInputTwo").value
    var product;
   product = parseInt (addInputOne) * parseInt(addInputTwo)
    alert("The product of" + product)
   
}
var divide =() => {
    var addInputOne = document.getElementById("divideInputOne").value
    var addInputTwo = document.getElementById("divideInputTwo").value
    var quotient;
   quotient = parseInt (addInputOne) / parseInt(addInputTwo)
    alert("The dividend is" + quotient)
    
}
var average =() => {
    var addInputOne = document.getElementById("addInputOne").value
    var addInputTwo = document.getElementById("addInputTwo").value
    var sum;
   average = parseInt (addInputOne) + parseInt(addInputTwo)
    alert("The average is" + average)
}