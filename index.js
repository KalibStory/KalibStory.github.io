var selb = document.getElementById("selectionBar")
var selp = document.getElementById("selectionPreview")
var p_artg = document.getElementById("page_artgallery")
var selectedPage = p_artg

function pc(value) {
    return value + "%"
}

function setT(value) {
    if (typeof(value) == "boolean") {
        if (value == true) {
            selp.style.backgroundColor = "transparent"
        } else {
            selp.style.backgroundColor = "rgba(255,255,255,0.2)"
        }
    }
}

selb.style.top = pc(4)
setT(true)

selp.style.backgroundColor = "transparent"

p_artg.addEventListener("click", () => {
    console.log("cool beans")
})

p_artg.addEventListener("mouseenter", () => {
  selectedPage = p_artg  
})

selectedPage = p_artg