let clearBtn = document.querySelector('.clear');
const container = document.querySelector('.container');
childrenContainer = document.querySelectorAll('new');
clearBtn.addEventListener('click', () => {
    eraserBtn.classList.remove('hover');
    colorModeBtn.classList.remove('hover');
    rainbowBtn.classList.remove('hover');
    createGrid();
});
let eraserBtn = document.querySelector('.eraser');
let rainbowBtn = document.querySelector('.rainbow-mode');
let colorModeBtn = document.querySelector('.color-mode');
let rainbow = false;
let erase = false;
let colorM = false;


eraserBtn.addEventListener('click', function () {
    eraserBtn.classList.add('hover');
    rainbowBtn.classList.remove('hover');
    colorModeBtn.classList.remove('hover');
    rainbow = false;
    erase = true;
    colorM = false;
})
rainbowBtn.addEventListener('click', function () {
    rainbowBtn.classList.add('hover');
    eraserBtn.classList.remove('hover');
    colorModeBtn.classList.remove('hover');
    rainbow = true;
    erase = false;
    colorM = false;
})


colorModeBtn.addEventListener('click', function () {
    colorModeBtn.classList.add('hover');
    eraserBtn.classList.remove('hover');
    rainbowBtn.classList.remove('hover');
    rainbow = false;
    erase = false;
    colorM = true;
})

function createGrid() {
    let slider = document.getElementById("range");
    let output = document.getElementById("value");

    let initialValue = 1;

    let colorPick = document.getElementById("color-pick");

    output.innerHTML = slider.value + 'x' + slider.value;
    slider.addEventListener('input', createGrid);
    let numInput = Number(slider.value);
    let totalDivs = numInput * numInput;
    if (slider.value !== initialValue) {
        eraserBtn.value = 'stopErase';
        container.innerHTML = '';

        for (let i = 0; i < totalDivs; i++) {
            gridAuto = 500 / numInput;
            container.style.cssText = `display: grid; grid-template-columns: repeat(${numInput}, 1fr);
    grid-auto-rows: ${gridAuto};`
            window['div' + i] = document.createElement('div');
            window['div' + i].classList.add('new');
            window['div' + i].style.cssText = 'margin: 0; padding: 0;'
            window['div' + i].addEventListener('mouseover', function (event) {
                if (event.buttons == 1 || event.buttons == 3) {
                    event.target.classList.add('hover');
                    if (colorM === true) {

                        event.target.style.backgroundColor = `${colorPick.value}`;
                    } else if (erase === true) {

                        event.target.style.backgroundColor = '#fff';
                    } else if (rainbow === true) {

                        let randomA = [...Array(255).keys()][Math.floor(Math.random() * [...Array(255).keys()].length)];
                        let randomB = [...Array(255).keys()][Math.floor(Math.random() * [...Array(255).keys()].length)];
                        let randomC = [...Array(255).keys()][Math.floor(Math.random() * [...Array(255).keys()].length)];
                        event.target.style.backgroundColor = `rgb(${randomA}, ${randomB}, ${randomC})`;
                    }
                }
            })


            window['div' + i].addEventListener('click', function (event) {
                event.target.classList.add('hover');
                if (colorM === true) {
                    event.target.style.backgroundColor = `${colorPick.value}`;
                } else if (erase === true) {
                    event.target.style.backgroundColor = '#fff';
                } else if (rainbow === true) {
                    let randomA = [...Array(255).keys()][Math.floor(Math.random() * [...Array(255).keys()].length)];
                    let randomB = [...Array(255).keys()][Math.floor(Math.random() * [...Array(255).keys()].length)];
                    let randomC = [...Array(255).keys()][Math.floor(Math.random() * [...Array(255).keys()].length)];
                    event.target.style.backgroundColor = `rgb(${randomA}, ${randomB}, ${randomC})`;
                }
            })
            container.appendChild(window['div' + i]);
        }

    } else {
        for (let i = 0; i < 1; i++) {
            gridAuto = 500 / numInput;
            container.style.cssText = `display: grid; grid-template-columns: repeat(${numInput}, 1fr);
        grid-auto-rows: ${gridAuto};`
            window['div' + i] = document.createElement('div');
            window['div' + i].classList.add('new');
            window['div' + i].style.cssText = 'border: solid 2px red; margin: 0; padding: 0;'
            container.appendChild(window['div' + i]);
        }
    }
}




createGrid();