
// Scroll Nav to container jquery
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 150;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

//  Scroll Top jquery
$('.scroll_top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1000);
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $('.scroll_top').addClass('active');
    }
    else {
        $('.scroll_top').removeClass('active');
    }
});


// Message form to telegram JS
const TOKEN = "5419899576:AAFtg85qDehgBmOFY-QHV9w_uKiAUMDyt2Y";
const CHAT_ID = "-1001624134319";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Заявка з сайту</b>\n`;
    message += `<b>Відправник: </b> ${this.name.value}\n`;
    message += `<b>Номер телефону: </b> ${this.telephone.value}\n`;
    message += `<b>Повідомлення: </b> ${this.message1.value}\n`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'HTML',
        text: message
    })

        .then((res) => {
            this.name.value = "";
            this.telephone.value = "";
            this.message1.value = "";
            success.innerHTML = "Повідомлення відправлено!";
            success.style.display = "block";

        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log('Відправлено')
        })
})

$("#nav_toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});







function addition() {
        var a = parseInt(document.getElementById("k-v").value);
        var b = parseInt(document.getElementById("ch-v").value);
        var d = parseInt(document.getElementById("type-m").value);
        var f = parseInt(document.getElementById("ch-m").value);
        var v = parseInt(document.getElementById("type-p").value);

        if (isNaN(a) == true) a = 0;
        if (isNaN(b) == true) b = 0;
        if (isNaN(d) == true) d = 0;
        if (isNaN(f) == true) f = 0;
        if (isNaN(v) == true) v = 0;

        var c = (v * a * b) + (d * f);

        document.getElementById("result").innerHTML = c + "  грн";
      }







      