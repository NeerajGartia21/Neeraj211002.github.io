const addtxt = document.getElementById("addtxt");
const addtitle = document.getElementById("addtitle");
const addbtn = document.getElementById("addbtn");
var mynotes = document.getElementById("notes");
shownotes();


  addbtn.addEventListener("click", function (e) {
    
    var notes = localStorage.getItem("notes");
    var notestitle = localStorage.getItem("notestitle");
    //debugger

    if (notes == null) {
      notesObj = [];
      notestitleObj = [];
      //debugger
    } else {
      notesObj = JSON.parse(notes);
      notestitleObj = JSON.parse(notestitle);
      // debugger
    }
    notesObj.push(addtxt.value);
    notestitleObj.push(addtitle.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("notestitle", JSON.stringify(notestitleObj));
    addtxt.value = "";
    addtitle.value = "";

    shownotes();

  });


function shownotes() {
  var notes = localStorage.getItem("notes");
  var notestitle = localStorage.getItem("notestitle");
  if (notes == null) {
    notesObj = [];
    notestitleObj = [];
  } else {
    notesObj = JSON.parse(notes);
    notestitleObj = JSON.parse(notestitle);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="card my-3 mx-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="title card-title">${notestitleObj[index]}</h5>
                    <p id="notetext" class="card-text">${element}</p>
                    <button id="${index}"  onclick="deletenote(this.Id)" class="btn btn-primary">Delete Notes</button>
                </div>
        </div>`;
  });
  if (notesObj.length == 0) {
    mynotes.innerHTML = `<h4>Nothing to show!<h3>`;
  } else {
    mynotes.innerHTML = html;
  }
}
function deletenote(index) {
  var notes = localStorage.getItem("notes");
  var notestitle = localStorage.getItem("notestitle");
  if (notes == null && notestitle == null) {
    notesObj = [];
    notestitleObj = [];
  } else {
    notesObj = JSON.parse(notes);
    notestitleObj = JSON.parse(notestitle);
  }
  notesObj.splice(index, 1);
  notestitleObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("notestitle", JSON.stringify(notestitleObj));
  shownotes();
}



search.addEventListener('input', () => {
    let notesection = document.querySelector(".notelist");
    for (let i = 0; i < notesection.children.length; i++) {
      //const element = notesection.children[i].innerText;
      const element = notesection.children[i].children[0].children[0].innerText;
      if (element.indexOf(search.value) == -1) {
        notesection.children[i].style.display = "none";
      }
      else {
        notesection.children[i].style.display = "block";
      }
    }
    
  }) 