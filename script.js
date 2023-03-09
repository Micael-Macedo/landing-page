$(document).ready(function () {
    $(".YEARLY").hide()
})
function signature(option){
    $("button").closest(".selected").removeClass("selected");
    $(option).addClass("selected");
    if($(option).html() === "MONTHLY"){
        $(".YEARLY").hide()
        $(".MONTHLY").show()
    }
    if($(option).html() === "YEARLY"){
        $(".MONTHLY").hide()
        $(".YEARLY").show()
    }
}