// function filling (){
//     var tab=[];
//     for (var i=0 ; i<5 ; i++){
//         for (var j=0 ; j<5 ; j++){
//             tab.push(Math.floor(Math.random()*2))
//         }
//     }

//     return tab

// }

/* -------------------- */


for (var i=0 ; i<100 ; i++){
    var div = document.createElement("div")
    var grid = document.querySelector(".grid")
    div.textContent = (Math.floor(Math.random()*2))
    div.classList.add('gridstyle')
    isHidden = div.hidden;
grid.appendChild(div)


}
// grid.setAttribute("id", "gd");


// for (var i=0 ; i<100 ; i++){
//      div = Math.floor(Math.random()*2)
// }

// const div1 = document.querySelector("div")
// var align = div1.getAttribute("wfd-id");
// console.log(align)
// document.getElementsByClassName('grid').value='100'

