var url = document.URL + '?q='; // dir URL
var google = "http://google.com/search?q=";
var searchParams = new URLSearchParams(window.location.search);

var mouse = $("#mouse_container");
var message_box = $('#message-box');
var google_input = $("#google-input");
var search_submit = $("#search-submit");
var form = $("#form")
var link_input = $('#link-input');
var copy_button = $('#copy-link');

$(".googleImg-container a").attr("href", document.URL)

if (searchParams.has('q')) {
    var q = searchParams.get('q');
    setTimeout(function () {
        mouse.show()
        mouse.animate({
            top: google_input.offset().top + 10,
            left: google_input.offset().left + 50
        }, 1000, 'swing', function () {
            google_input.focus()
        });

        setTimeout(function () {
            mouse.animate({
                top: search_submit.offset().top + 10,
                left: search_submit.offset().left + 30
            }, 1000, function () {
                search_submit.addClass("gray")
            });

        }, 5000);
    }, 1000);


    message_box.html("قدم اول: سوالت رو بنویس");

    setTimeout(typeWriter, 4000);

    var i = 0;
    var speed = 100;

    function typeWriter() {
        if (i < q.length) {
            document.getElementById("google-input").value += q.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        message_box.addClass("green-bg");
        message_box.html("قدم دوم: دکمه جستجو فشار بده");
        setTimeout(function () {
            message_box.removeClass('green-bg');
            message_box.addClass("red-bg");
            message_box.html("همین!");
            setTimeout(function () {
                window.location = google + q;
            }, 4000)

        }, 4000)
    }

    form.submit(function (event) {
        window.location = google + encodeURIComponent(q);

        event.preventDefault()
    })
} else {
    form.submit(function (event) {
        link_input.val(url + encodeURIComponent($("#google-input").val()));
        link_input.removeClass("hide");
        $('#copy-link').removeClass("hide");
        link_input.select();
        message_box.addClass("green-bg");
        message_box.html("لینک رو کپی کن و برای طرف بفرست :)");
        event.preventDefault()
    });

    copy_button.click(function () {
        // کپی لینک
        link_input.select();
        document.execCommand("copy");
        // نمایش کپی شد
        $('#tooltiptext').addClass("tooltip-show");
        setTimeout(function () {
            $('#tooltiptext').removeClass("tooltip-show");
        }, 2000);
    })
}
