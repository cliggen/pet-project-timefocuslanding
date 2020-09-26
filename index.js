const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        minute = today.getMinutes(),
        seconds = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12 || 12;
    time.innerHTML = `${hour}<span>:</span>${addZero(minute)}<span>:</span>${addZero(seconds)}`;
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBg() {
    let today = new Date(),
        hour = today.getHours(),
        mode = '';
    hour >= 0 && hour <= 6 ? mode = 'night' : hour >= 7 && hour <= 12 ? mode = 'morning' : hour >= 13 && hour <= 18 ? mode = 'afternoon' : mode = 'evening';
    console.log(mode);

    switch (mode) {
        case 'night':
            greeting.textContent = 'Good Night';
            document.body.style.backgroundImage = "url('./assets/img/night/1.jpg')";
            document.body.style.backgroundSize = 'cover';
            document.body.style.color = "white";
            break;
        case 'morning':
            greeting.textContent = 'Good Morning';
            document.body.style.backgroundImage = "url('./assets/img/morning/1.jpg')";
            document.body.style.backgroundSize = 'cover'
            break;
        case 'afternoon':
            greeting.textContent = 'Good Afternoon';
            document.body.style.backgroundImage = "url('./assets/img/afternoon/1.jpg')";
            document.body.style.backgroundSize = 'cover'
            break;
        case 'evening':
            greeting.textContent = 'Good Evening';
            document.body.style.backgroundImage = "url('./assets/img/evening/1.jpg')";
            document.body.style.backgroundSize = 'cover';
            document.body.style.color = "white";
            break;
        default:
            return;
    }
}

function getName() {
    localStorage.getItem('name') === null ? name.textContent = '[Enter Name]' : name.textContent = localStorage.getItem('name')

}

function getFocus() {
    localStorage.getItem('focus') === null ? focus.textContent = '[Enter Focus]' : focus.textContent = localStorage.getItem('focus')
}

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        } else {
            console.log(123)
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }

}

function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        } else {
            console.log(123)
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }

}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


setBg();
showTime();
getName();
getFocus();