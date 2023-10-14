const dialog= document.getElementById("dialog")
const openBtn = document.getElementById("openBtn")
const closeBtn = document.getElementById("closeBtn")
const body = document.getElementById("body")

openBtn.addEventListener("click", function(){
    dialog.setAttribute("open", true)
    body.classList.add("bg-red-500")
})

closeBtn.addEventListener("click", function(){
    dialog.removeAttribute("open")
    body.classList.remove("bg-red-500")
});