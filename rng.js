randomNum = document.getElementById("randomNum");
onClick = ()=>{
    let randomNumber = Math.floor(Math.random() * 10);
    document.getElementById("rn").innerHTML = "Random Number: "+ randomNumber;
}