const logo = document.querySelector('.hand');

function setHighFive() {
    logo.src = "/assets/hand.png";
    logo.title = "HIGH FIVE!"
    const tooltip = new bootstrap.Tooltip(logo, {
        boundary: document.body,
        customClass: 'high-five-tooltip',
        delay: {'show': 100, 'hide': 200},
        offset: [20, 0],
        placement: 'bottom',
        trigger: 'hover focus'
    });
    tooltip.show();
}

function unsetHighFive() {
    logo.src = "/assets/logo256.png";
}

logo.addEventListener('mouseover', setHighFive);
logo.addEventListener('mouseleave', unsetHighFive);