/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (https://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$("#mail").mouseover(function(){
    document.getElementById("title").innerHTML = 'Click to copy my email!';
    document.getElementById("title").classList.remove("neonText");
});

$("#mail").mouseout(function(){
    document.getElementById("title").innerHTML = 'I build things.';
    document.getElementById("title").classList.add("neonText");
});

$('#mail').click(function(){
    navigator.clipboard.writeText("shahanahbp@gmail.com");
    document.getElementById("title").innerHTML = 'Copied to clipboard!';
});

$("#linkedin").mouseover(function(){
    document.getElementById("title").innerHTML = 'Visit my LinkedIn profile!';
    document.getElementById("title").classList.remove("neonText");
});

$("#linkedin").mouseout(function(){
    document.getElementById("title").innerHTML = 'I build things.';
    document.getElementById("title").classList.add("neonText");
});

$("#github").mouseover(function(){
    document.getElementById("title").innerHTML = 'View some of my projects!';
    document.getElementById("title").classList.remove("neonText");
});

$("#github").mouseout(function(){
    document.getElementById("title").innerHTML = 'I build things.';
    document.getElementById("title").classList.add("neonText");
});
