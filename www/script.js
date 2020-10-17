
var count = 0

var increase = document.getElementById("increase")

increase.addEventListener("click", () => {
    count++
    document.getElementById("count").innerHTML = count
})