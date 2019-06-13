function convert() {
    let t = document.getElementById("temp").value
    let o = t *3.785
    document.getElementById("out").innerHTML = o.toFixed(2) + " Litros "
}

function convertA() {
    let t = document.getElementById("temp").value
    let o = t*0.264
    document.getElementById("out").innerHTML = o.toFixed(2) + " Galones "
}