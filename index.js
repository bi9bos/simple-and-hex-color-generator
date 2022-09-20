const simpleBtn = document.querySelector('#simple'),
    hexBtn = document.querySelector('#hex'),
    generateBtn = document.querySelector('.button'),
    simpleColors = ['blue', 'red', 'green', 'lightblue', 'yellow', 'brown', 'tomato'],
hexCodeList = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let generated = document.querySelector('#color');

let currentChoice = simpleBtn;

simpleBtn.addEventListener('click', () => currentChoice = simpleBtn);
hexBtn.addEventListener('click', () => currentChoice = hexBtn);

generateBtn.addEventListener('click', function () {

    if (currentChoice == simpleBtn) {
        generated.textContent = simpleColors[Math.floor(Math.random() * simpleColors.length)];
        document.body.style.backgroundColor = generated.textContent;
    }
    else if (currentChoice == hexBtn) {

        let hexCode = '#';
        for (let i = 0; i < 6; i++) {
            const code = hexCodeList[i];
            hexCode += hexCodeList[Math.floor(Math.random() * hexCodeList.length)];
        }
        
        generated.textContent = hexCode;;
        document.body.style.backgroundColor = hexCode;
    }
})
