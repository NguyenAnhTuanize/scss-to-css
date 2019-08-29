showSlide(1);
loopSlide(1);
showFeedback(4);


var temp = 1;

function showInputSearch() {
    var inputTxt = document.querySelector(".nav-mobile input");

    if (temp % 2 != 0)
        inputTxt.style.display = "block";
    else if (temp % 2 != 0 || inputTxt.value == "")
        inputTxt.style.display = "none";
    temp++;
    console.log(inputTxt.value);
}
//// show menu


// function showMenu() {
//     var menu = document.querySelector(".menu");
//     if (menu.style.display == "none")
//         menu.style.display = "block";
//     else
//         menu.style.display = "none";
// };

// document.querySelector(".menu").addEventListener("mouseout", function() {
//     document.querySelector("ul.menu").style.display = "none";
// });

function imageHover() {
    var image = document.querySelector("ul.project-images>li>img");
    image.setAttribute("src", "images/image_hover.png");
};

// ramdom banner

function ramdomBanner() {
    var num = Math.floor(Math.random() * 3) + 1;
    var head = "../images/bg-banner";
    var tail = ".jpg";
    var urlImage = head + num.toString() + tail;
    //console.log(urlImage);
    var bgBanner = document.querySelector(".banner");
    bgBanner.style.backgroundImage = "url(" + urlImage + ")";
}
// ramdomBanner();
// function ramdomBanner() {
//     var num = Math.floor(Math.random() * 3) + 1;
//     var bgBanner = document.querySelector("section.banner");
//     switch (num) {
//         case 1:
//             bgBanner.style.backgroundImage = "url('../images/bg-banner1.jpg')";
//             break;
//         case 2:
//             bgBanner.style.backgroundImage = "url('../images/bg-banner2.jpg')";
//             break;
//         case 3:
//             bgBanner.style.backgroundImage = "url('../images/bg-banner3.jpg')";
//             break;
//         default:
//             break;
//     }



// }
setInterval(ramdomBanner, 3000);

// slide top

var slideIndex = 1;

var loops;

function loopSlide(n) {
    slideIndex = n;
    loops = setInterval(function() {
        if (slideIndex > 4) slideIndex = 1;
        showSlide(++slideIndex);
    }, 4000);
}

function stopSlide() {
    clearInterval(loops);
}

function currentSlides(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.querySelector(".slide");
    var arrDots = document.querySelectorAll(".slide .container .pointer div");
    if (n > 4) slideIndex = 1;
    if (n < 1) slideIndex = 4;
    switch (n) {
        case 1:
            slides.style.backgroundImage = "url('../images/slide1.jpg')";
            break;
        case 2:
            slides.style.backgroundImage = "url('../images/slide2.jpg')";
            break;
        case 3:
            slides.style.backgroundImage = "url('../images/slide3.jpg')";
            break;
        case 4:
            slides.style.backgroundImage = "url('../images/slide4.jpg')";
            break;

        default:
            break;
    }
    for (i = 0; i < arrDots.length; i++) {
        arrDots[i].className = arrDots[i].classList.remove("visited");
    }
    arrDots[slideIndex - 1].classList.add("visited");

}


/// list image 

function openModal() {
    document.getElementById("myModal").style.display = "block";
}
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
//showSlides(slideIndexs);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndexs += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndexs = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndexs = 1
    }
    if (n < 1) {
        slideIndexs = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexs - 1].style.display = "block";
    dots[slideIndexs - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


// feedback 
var feedbackIndex = 1;

function plusFeedback(n) {
    showFeedback(feedbackIndex += n)
}

function currentFeedback(n) {
    showFeedback(feedbackIndex = n);
}

function showFeedback(n) {
    var feedbackText = document.querySelectorAll(".feedback-content");
    var feedbackImage = document.querySelectorAll(".feedback-person>li>img");
    if (n > feedbackImage.length) {
        feedbackIndex = 1;
    }
    if (n < 1) {
        feedbackIndex = feedbackImage.length;
    }
    for (let i = 0; i < feedbackImage.length; i++) {
        feedbackImage[i].className = feedbackImage[i].className.replace("opimize", "");
    }
    for (let i = 0; i < feedbackText.length; i++) {
        feedbackText[i].style.display = "none";
    }
    feedbackImage[feedbackIndex - 1].className += "opimize";
    feedbackText[feedbackIndex - 1].style.display = "block";
}



var acc = document.querySelectorAll("li.awesome-tab-item.odd");


for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        for (let j = 0; j < acc.length; j++) {
            if (j != i) {
                let tmp = acc[j].nextElementSibling;
                tmp.style.maxHeight = null;
                acc[j].classList.remove("active");
            }
        }
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        console.log(panel);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// menu active 


function activeMenu(index) {
    var menu = document.querySelectorAll(".menu li:not(:last-child)");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("menu-active");
    }
    menu[index - 1].classList.add("menu-active");
}