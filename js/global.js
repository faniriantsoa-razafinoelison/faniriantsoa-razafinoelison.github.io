$(document).ready(function () {
    $(".toggle-nav-js").click(function () {
        $("#mainHeader").toggleClass("show");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('#v-pills-tab .nav-link');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % tabs.length;

        const tab = new bootstrap.Tab(tabs[index]);
        tab.show();
    }, 5000); // 5 secondes
});

$(document).ready(function () {
    $('.scroll-link').on('click', function (e) {

        if (window.location.hash === target) {
            // Ne pas empêcher le comportement
            return;
        }

        e.preventDefault();

        const target = $(this).attr('href');

        if ($(target).length) {
            $('html, body').stop().animate(
                {
                    scrollTop: $(target).offset().top
                },
                800 // durée en ms
            );
        }
    });
});