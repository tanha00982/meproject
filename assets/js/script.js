$(document).ready(function () {
    $('.content-faq .ques-faq li .label').click(function () {
        if (!$(this).parent().hasClass('opened')) {
            $('.content-faq .ques-faq li').removeClass('opened');
            $('.content-faq .ques-faq li .description').slideUp();
        }
        $(this).parent().toggleClass('opened');
        $(this).next().slideToggle();
    });
    $('footer.footer .back-to-up').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 500);
    });
});
