$(document).ready(function () {
    // structure
    $(".open").on("click", function () {
        $(".overlay, .modal").addClass("active");
    });

    $(".close, .overlay").on("click", function () {
        $(".overlay, .modal").removeClass("active");
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $(".overlay, .modal").removeClass("active");
        }
    });
    // a propos
    $(".open-about").on("click", function () {
        $(".overlay-about, .modal-about").addClass("active");
    });

    $(".close, .overlay-about").on("click", function () {
        $(".overlay-about, .modal-about").removeClass("active");
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $(".overlay-about, .modal-about").removeClass("active");
        }
    });
    // mise en page
    // $(".open-mep").on("click", function () {
    //     $(".overlay-mep, .modal-mep").addClass("active");
    // });

    // $(".close, .overlay-mep").on("click", function () {
    //     $(".overlay-mep, .modal-mep").removeClass("active");
    // });

    // $(document).keyup(function (e) {
    //     if (e.keyCode === 27) {
    //         $(".overlay-mep, .modal-mep").removeClass("active");
    //     }
    // });


    // hide and show
    $("input[name=definitions]").on('click', function (e) {
        if ($('input[name=definitions]').is(':checked')) {
            $(".definition").addClass("hide");
        } else {
            $(".definition").removeClass("hide");
        }
    })
    $("input[name=axiomes]").on('click', function (e) {
        if ($('input[name=axiomes]').is(':checked')) {
            $(".axiome").addClass("hide");
        } else {
            $(".axiome").removeClass("hide");
        }
    })
    $("input[name=propositions]").on('click', function (e) {
        if ($('input[name=propositions]').is(':checked')) {
            $(".proposition > h2, .proposition > p").addClass("hide");
        } else {
            $(".proposition > h2, .proposition > p").removeClass("hide");
        }
    })
    $("input[name=demonstrations]").on('click', function (e) {
        if ($('input[name=demonstrations]').is(':checked')) {
            $(".demonstration").addClass("hide");
        } else {
            $(".demonstration").removeClass("hide");
        }
    })
    $("input[name=scolies]").on('click', function (e) {
        if ($('input[name=scolies]').is(':checked')) {
            $(".scolie").addClass("hide");
        } else {
            $(".scolie").removeClass("hide");
        }
    })
    $("input[name=corollaires]").on('click', function (e) {
        if ($('input[name=corollaires]').is(':checked')) {
            $(".corollaire").addClass("hide");
        } else {
            $(".corollaire").removeClass("hide");
        }
    })
    $("input[name=appendices]").on('click', function (e) {
        if ($('input[name=appendices]').is(':checked')) {
            $(".appendice").addClass("hide");
        } else {
            $(".appendice").removeClass("hide");
        }
    })

    // sticky header
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
        myFunction()
    };

    // Get the header
    var header = document.getElementById("options");
    var open = document.getElementsByClassName("open");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky");
            $(".open").html("<img src=\"../assets/icons/burger.svg\" alt=\"Structure texte\">");
        } else {
            header.classList.remove("sticky");
            $(".open").html("Structure");
        }
    }
});