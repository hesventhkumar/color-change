let colordata = {
    Red:"red",
    Green:"green",
    Yellow:"yellow",
    Blue:"blue",
    Orange:"orange"   
}


function change(){
    
    const values = Object.keys(colordata)
    const changes = values[Math.floor(Math.random() * values.length)]
    document.getElementById("colorname").innerText = changes
    document.getElementById("colorname").style.color = colordata[changes]
    document.querySelector("#bgcolor").style.backgroundColor = colordata[changes]
    
}

change();
          