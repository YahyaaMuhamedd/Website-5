var burgericon = document.getElementById("burger");
var navbar = document.querySelector(" .links ul");


burgericon.onclick = function () {

    if (navbar.classList.contains('show')) {
        navbar.classList.remove('show')
        burgericon.style.left = '15px'
    } else {
        navbar.classList.add('show')
        burgericon.style.left = '35px'


    }
};
function selector(smallImg) {
    var BigImg = document.getElementById("image")
    BigImg.src = smallImg.src
}
function feedBack() {

    if (document.getElementById('comment').value === '') {
        document.getElementById('error-comment').innerHTML = "* Please enter comment";
    } else {
        document.getElementById('error-comment').innerHTML = "";
    }

    if ($("input[type=radio]:checked").val() === 'undefined') {
        document.getElementById('error-rating').innerHTML = "* Please choose any star";
        alert('Please choose any star');
    } else {
        document.getElementById('error-rating').innerHTML = "";
    }

    var rating_Count = document.querySelector("input[name=star]:checked").value;
    var comment = document.getElementById('comment').value;
    $("#simpleModal").modal('show');

    // alert(x);
    console.log(comment);
    console.log(rating_Count);
    document.getElementById('comment_text').innerHTML = comment;
    document.getElementById('star_count').innerHTML = rating_Count;
}