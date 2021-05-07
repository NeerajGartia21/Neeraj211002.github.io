let navbar=document.querySelector('.navbar');
let i;
for(i=0;i<4;i++){

navbar.children[i].addEventListener('click',function(){
    for(j=0;j<4;j++){
        navbar.children[j].classList.remove('active');
        document.getElementsByClassName('same')[j].classList.remove('visibility');
    }
    this.classList.add('active');
    showsection(this.id);
})

}

function showsection(a){
    document.getElementById(a+"1").classList.add('visibility');
}


