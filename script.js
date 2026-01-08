var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".box")
var addpopup=document.getElementById("add_button")

addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbtn=document.getElementById("Cancel")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var continer=document.querySelector(".container")
var addbook=document.getElementById("add")
var titleinput=document.getElementById("title")
var authorinput=document.getElementById("Author_Name")
var descriptioninput=document.getElementById("description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${titleinput.value}</h2>
        <h5>${authorinput.value}</h5>
        <p>${descriptioninput.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
    continer.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}