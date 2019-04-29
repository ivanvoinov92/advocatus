$('.ba-slider').slick({


    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
});



var buttonPlus = document.querySelectorAll('.fa-plus');


    buttonPlus.forEach(function (item) {
        item.addEventListener('click', function (event){
            console.log(event.target);
            
            if (event.target.className == 'fas fa-plus'){
                event.target.className = 'fas fa-minus';
            }
            else if (event.target.className == 'fas fa-minus'){
                event.target.className = 'fas fa-plus';
            }

        })
    });


    var burgerButton = document.querySelector('.ba-burger-menu-open'),
    burgerCloseButton = document.querySelector('.ba-burger-menu-close'),
    menuToggle = document.querySelector('.ba-menu-mob'),
    body = document.getElementsByTagName('body')[0];

        burgerButton.addEventListener('click', function () {
            menuToggle.classList.add('ba-show');
            body.classList.add('ba-del-srcoll');
        });

        burgerCloseButton.addEventListener('click', function () {
            menuToggle.classList.remove('ba-show');
            body.classList.remove('ba-del-srcoll');
        });

        var mobUl = document.querySelectorAll('.ba-menu-mob a');
        //console.log(mobUl);

        mobUl.forEach(function (item) {
            item.addEventListener('click', function () {
                menuToggle.classList.remove('ba-show');
                body.classList.remove('ba-del-srcoll');
            });
        });

  
        $(function () {

            $(window).scroll(function () {
        
                if ($(this).scrollTop() != 0) {
        
                    $('.ba-to-top').fadeIn();
        
                } else {
        
                    $('.ba-to-top').fadeOut();
        
                }
        
            });
        
            $('.ba-to-top').click(function () {
        
                $('body,html').animate({
                    scrollTop: 0
                }, 200);
        
            });
        
        });

        $(document).ready(function () {
            $("a[href^='#']:not([href='#'])").on("click", function (event) {
                event.preventDefault();
                var id = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({
                    scrollTop: top
                }, 100);
            });
        });
        
    