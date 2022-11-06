let chooseBtn = document.getElementById('choose'),
    receiveBtn = document.getElementById('receive'),
    heading = document.getElementsByTagName('h2')[0],
    nameInput = document.getElementsByClassName('contactform_name')[0],
    phoneInput = document.querySelector('.contactform_phone'),
    mailInput = document.querySelectorAll('.contactform_mail')[0],
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close'),
    text = document.getElementsByName('message')[0];

function hover() {
    heading.textContent = "Дійсно все!";
}

chooseBtn.addEventListener('mouseenter', hover);
chooseBtn.addEventListener('mouseleave', () => {
    heading.textContent = "Все включено";
});

receiveBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});
console.log(nameInput);
nameInput.addEventListener('input', function() {
    text.value = `Мене звати ${nameInput.value}. Я хочу запитатися : `;
});