const anonimbtn = document.querySelectorAll('.tick-mark');
anonimbtn.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        button.textContent = button.classList.contains('active') ? '✔' : '';
    });
});

let textareatwo = document.getElementById("ta-two");
let symbollimit = document.getElementById("symbol-limit");
let limitchar = 3000;
symbollimit.textContent = "Кількість символів: " + 0 + "/" + limitchar;

textareatwo.addEventListener("input",function(){
    let textlen = textareatwo.value.length;
    symbollimit.textContent = "Кількість символів: " + textlen + "/" + limitchar;

    if(textlen === limitchar){
        symbollimit.style.color = "#ff2851";
    }
    else {
        symbollimit.style.color = "#fcfafa";
    }
});