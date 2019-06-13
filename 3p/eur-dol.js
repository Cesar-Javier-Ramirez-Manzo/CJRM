function convert() {
    let t = document.getElementById("temp").value
    let o = (t*1.12)
    document.getElementById("out").innerHTML = o.toFixed(2) + " dolares "
}

function convertA() {
    let t = document.getElementById("temp").value
    let o = (t*0.89)
    document.getElementById("out").innerHTML = o.toFixed(2) + " euros "
}