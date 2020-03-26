// !!!!!!!!! ---- NAVBAR ------ !!!!!!!!!!!!!!!!!!!//

// Menu-toggle button
// Menu-toggle button

$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $(".un").toggleClass("showing");

    });
});

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('.navigation').addClass('black');
    }

    else {
        $('.navigation').removeClass('black');
    }
})
/////////////////////////////////////////////////////////////////////

// year count/////////////






// -------------------About us----------------/////////////////////


// ---See more --- Career Section----


function seeMoremyFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Details";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide";
        moreText.style.display = "inline";
    }
}

function seeMoremyFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Details";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Hide";
        moreText.style.display = "inline";
    }
}


