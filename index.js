// jQuery syntax : $(selector).action()

console.log($("h1").css("color"));
$("h1").addClass("big-title");

$("button").click(function () {
    // $("h1").css("color", "yellow");
    // $("h1").remove();
    // $("h1").hide();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideUp().slideDown();
    // $("h1").slideToggle();

    // or our own animation using css style:
    // you can provide onle numeric css values for animation
    $("h1").animate({
        opacity: 0.5,
    });
});

$("input").keypress(function (event) {
    console.log(event.key);
});

$(document).keypress(function (event) {
    $("h1").text(event.key);
});

// JS events
$("h1").on("mouseover", function () {
    $("h1").css("color", "yellow");
});
