function GetNav(){
        var menubar=document.querySelector(' .menubar');
        var menu=document.querySelector(' .menu');
        if (menu.style.display=="block"){
            menu.style.display="none";
        } else{
            menu.style.display="block";
        }
    }


const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');

let current = 0;

function goTo(index) {
    if (index < 0) {
        current = slides.length - 1;
    } else if (index >= slides.length) {
        current = 0;
    } else {
        current = index;
    }

    track.style.transform = `translateX(-${current * 100}%)`;
}

document.querySelector('.prev').addEventListener('click', function() {
    goTo(current - 1);
});

document.querySelector('.next').addEventListener('click', function() {
    goTo(current + 1);
});

goTo(0);