const addtxt = document.getElementById('addtxt');
const addbtn = document.getElementById('addbtn');
var mynotes = document.getElementById("notes");
shownotes();
console.log(addtxt.value);

addbtn.addEventListener("click", function (e) {
    var notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";

    shownotes();


})




function shownotes() {
    var notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {

        html += `
        <div class="card my-3 mx-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p id="notetext" class="card-text">${element}</p>
                    <button id="${index}"  onclick="deletenote(this.Id)" class="btn btn-primary">Delete Notes</button>
                </div>
        </div>`;

    })
    if (notesObj.length==0) 
    { mynotes.innerHTML = `<h4>Nothing to show!<h3>`;
      
         }
    else {
        mynotes.innerHTML = html;
    }
}
function deletenote(index){
    var notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();

}
let search=document.getElementById("search");
   search.addEventListener("input",function(){
    let searchtxt=search.value;
    
    let notelist=document.getElementsByClassName("notelist");
    Array.from(notelist).forEach(function(element){
    
   let notetxt= element.getElementsByTagName("p").innerText;
  
if(notetxt.includes(searchtxt)){
    console.log("flame");
}
else{

}
})

    
})

