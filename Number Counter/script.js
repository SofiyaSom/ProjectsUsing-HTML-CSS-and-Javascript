
const counter = document.getElementById("counter");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const style = event.currentTarget.classList;

        if(style.contains('increase')){
            count++;
        }else if(style.contains('decrease')){
            count--;
        }else {
            count = 0;
        }
        // textContent property is used to get or set the text content of an element. 
        counter.textContent = count;
    });
});
