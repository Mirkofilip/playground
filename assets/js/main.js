jQuery(document).ready(function($){
    /** scroll header **/ 
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            $("header").addClass("scroll");
        } else {
            $("header").removeClass("scroll");
        }
    });

    $('.menu').click (function(){
        $(this).toggleClass('open');
        $('.menuMobile').toggleClass('active');
      });
      

    /** swiper **/ 
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 0,
        loop:true,
          // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      });

    /** chiamata ajax */
    $('.containerAjax__menuAjax--tab').on('click',function(e){
        e.preventDefault();
        $('.containerAjax__menuAjax--tab').removeClass('active');
        $(this).addClass('active');
        const tabAjax = $(this).find('a').attr('data-tab');
        $.ajax({
            url:'assets/ajax/'+tabAjax+'.json',
            method: 'GET',
            dataType: 'json',
        }).done(function(risposta){
            $('.containerAjax__ajaxText--text').text('');
            $('.load').addClass('visible');
            setTimeout(function(){
                $('.containerAjax__ajaxText--text').append(risposta.item.content);
                $('.load').removeClass('visible');
            },1000);
        })
    });
    $('.containerAjax__menuAjax--tab:first-child').trigger('click');
});

    /** cookie banner */
    document.addEventListener("DOMContentLoaded", function() {
        if (!localStorage.getItem("cookieConsent")) {
            mostraCookieBanner();
        }
    });

    function mostraCookieBanner() {
        var cookieBanner = document.getElementById("cookie-banner");
        cookieBanner.style.display = "flex";
    }
    
    function accettaCookie() {
        var cookieBanner = document.getElementById("cookie-banner");
        cookieBanner.style.display = "none";
        localStorage.setItem("cookieConsent", "accettato");
    }

/** validazione form */
    function validateForm() {
        let name = document.getElementById('name').value;
        let lastName = document.getElementById('lastName').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        if (name.trim() === '' || lastName.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Per favore, compila tutti i campi.');
            return false;
        }
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Inserisci un indirizzo email valido.');
            return false;
        }
        return true;
    }