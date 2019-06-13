function convert() {
    let t = document.getElementById("temp").value
    let o = (t *Math.PI)/180
    document.getElementById("out").innerHTML = o.toFixed(2) + " Radianes "
}

function convertA() {
    let t = document.getElementById("temp").value
    let o = (t*180)/Math.PI
    document.getElementById("out").innerHTML = o.toFixed(2) + " Grados "
}