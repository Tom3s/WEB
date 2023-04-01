// function setup() {
//     var text = $("#text").text();
//     var words = text.split(/(\s+|[.,!?;:])/);
//     var html = "";
//     for (var i = 0; i < words.length; i++) {
//         html += "<span class='word'>" + words[i] + "</span>";
//     }
//     $("#text").html(html);
//     $(".word").dblclick(function() {
//         highlight($(this));
//     });
//     $(".word").css("user-select", "none");
// }

function setup() {
    var text = $("#text").text();
    var words = text.split(/(\s+|[.,!?;:])/);
    var html = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].match(/^[.,!?;:\s]+$/)) {  
            // if the word is punctuation or whitespace, add it to the html and skip the rest of the loop
            html += "<span class='word punctuation'>" + words[i] + "</span>";
            continue;
        }
        html += "<span class='word'>" + words[i] + "</span>";
    }
    $("#text").html(html);
    $(".word").dblclick(function() {
        highlight($(this));
    });
    $(".word").css("user-select", "none");
    animationSetup();
}

function highlight(span) {
    // return if the word is punctuation or whitespace
    if (span.text().match(/^[.,!?;:\s]+$/)) {
        return;
    }
    var word = span.text().toLowerCase(); // convert the word to lowercase
    $(".word").removeClass("highlighted");
    $(".word").each(function() {
        if ($(this).text().toLowerCase() === word) { // compare case-insensitively
            $(this).addClass("highlighted");
        }
    });
}

function clearHighlits() {
    $(".word").removeClass("highlighted");
}

function animationSetup(){
    // add random animation-delay to each word
    $(".word").each(function() {
        $(this).css("animation-delay", Math.random() * 2 + "s");
    });
}