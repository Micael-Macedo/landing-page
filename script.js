document.onload(function () => {
    $(".YEAR").hide()
})
function signature(option){
    $("button").closest(".selected").removeClass("selected");
    $(option).addClass("selected");
    if($(option).html() === "MONTHLY"){
        $(".YEAR").hide()
        $(".MONTHLY").show()
    }
    if($(option).html() === "YEARLY"){
        $(".MONTHLY").hide()
        $(".YEAR").show()
    }
}