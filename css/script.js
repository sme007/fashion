function myFunction()
{
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    }else {
        x.style.display = "block";
    }
}
function bannerDisplay()
{
    var y = document.getElementById("textDisplay");
    if (y.style.display === "none") {
        y.style.display = "block";
    }else {
        y.style.display = "none"
    }
}
function preview() 
{
    var z = document.getElementById("previewBtn");
    if (z.style.display === "none") {
        z.style.display = "block";
    }else {
        z.style.display = "none"
    }
}

function explore()
{
    location.href="product.html";
}

