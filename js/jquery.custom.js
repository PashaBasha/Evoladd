

$(document).ready(function () {
    window.addEventListener('scroll', function () {
        if ($(window).width() > 990) {
            var topNav = document.querySelector("#topNav");
            topNav.classList.toggle('sticky2', window.scrollY > 0);
        }

    });

});


// Прокрутка
$(document).ready(function () {
    function scrollNav() {
        $('.navbar a').click(function () {
            //Toggle Class
            $(".active", $("#navbarNav")).removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.' + theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({

                scrollTop: $($(this).attr('href')).offset().top - 60
            }, 1000);

            return false;
        });

    }
    scrollNav();

});

$(document).ready(function () {

    // $('.first-button').on('click', function () {

    //     $('.animated-icon1').toggleClass('open');
    // });
    // $('.second-button').on('click', function () {

    //     $('.animated-icon2').toggleClass('open');
    // });
    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });
});



// счетчик на страничке 


$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 900 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 12800
            });

            show = false;
        }
    });

});

// jQuery(function ($) {
//     $("#tel").mask("+38(999) 999-9999");
// });



// gallery my custom cod

$(document).ready(function () {
    new WOW().init();
});


$(function () {
    categoryBut = $('.category-button')
    categoryBut.on("click",function(){
        categoryBut.removeClass('activeCat')
        $(this).toggleClass('activeCat')
    })
    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();
        let cat = $(this).data('filter');
        if(cat=='all'){
            $('[data-cat]').removeClass('hide');
     
        } else{

       
        $('[data-cat]').each(function () {
            let workCat = $(this).data('cat');
            if (workCat != cat) {
                $(this).addClass('hide');
        
            }
            else {
                $(this).removeClass('hide');
           

            }
        })
    }
    });

});
// gallery my custom cod

$(document).ready(function () {
    $('.gallery-container-scoll').find("a").addClass('animated fadeInDown');
});

// Прелоадер
$(document).ready(function () {
    $('body').removeClass('prelod')
    $('body').css({ "overflow-y": "auto" });
    $('.wrapper-preloader').css({ "display": "none" });

});
// $(document).ready(function () {
//     $('body').removeClass('prelod')
//     $('body').css({ "overflow-y": "auto" });
//     $('.wrapper-preloader').css({ "opacity": "0","transition":'1s'});
//     $('.wrapper-preloader').css({"display": "none"}.delay(3000));


// });

// $('#email').tooltip();
