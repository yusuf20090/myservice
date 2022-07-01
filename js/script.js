let Iframe = document.querySelector('iframe');
let Wrapper = document.querySelector('.wrapper')
Iframe.onload = function () {
    Wrapper.classList.add('wrapper_active');
    setTimeout(() => {
        document.forms.order.reset();
        Wrapper.classList.remove('wrapper_active');
    }, 3000);

}
