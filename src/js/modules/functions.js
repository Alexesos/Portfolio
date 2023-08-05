import _, { each, forEach } from "lodash";

// Проверка поддежрки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
    function testWebp(callback) {
        let webp = new Image();

        webp.onload = webp.onerror = function () {
            callback(webp.height == 2);
        };

        webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebp(function(support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}

export function menuInit() {
    let menu = document.querySelector('.icon-menu');
    let menuBody = document.querySelector('.menu__body'); 

    menu.addEventListener('click', function() { 
        menu.classList.toggle('menu-open'); 
        menuBody.classList.toggle('menu-open');
    });
}

export function progressBar() {
    window.addEventListener('load', () => {
        let objects = document.querySelectorAll('.content-education__label');
        let lines = document.querySelectorAll('.content-education__line');
        let progresses = [];
        let skills = {
            'HTML': 75,
            'CSS': 85,
            'JS': 45,
            'REACT': 1
        };

        lines.forEach(item => {
            progresses.push(item.children[0]);
        });

        objects.forEach((item, index) => {
            if (item.textContent.trim().toUpperCase() == 'HTML, CSS') {
                progresses[index].style.width = `${skills.HTML}%`;
            }
            if (item.textContent.trim().toUpperCase() == 'JS') {
                progresses[index].style.width = `${skills.JS}%`;
            }
            if (item.textContent.trim().toUpperCase() == 'REACT') {
                progresses[index].style.width = `${skills.REACT}%`;
            }
        });
    });
}

export function autoText() {
    let textElement = document.querySelector('.title__value_span');
    let val = [...textElement.textContent];

    textElement.innerHTML = '';

    val.forEach((item, index) => {
        setTimeout(() => {
            textElement.innerHTML += `${item}`;
        }, 100 * index);
    });
}