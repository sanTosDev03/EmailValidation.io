let count = 0;
let valueContent = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach( btn => {
  btn.addEventListener('click', () => {
    const innerBtnTexts = btn.innerHTML.toLowerCase();
    
    if (innerBtnTexts === "decrease") {
      count--;
    } else if (innerBtnTexts === "increase") {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      valueContent.style.color = "green"; 
    } else if (count < 0) {
      valueContent.style.color = "red";
    } else if (count === 0) {
      valueContent.style.color = "#224";
    }

    valueContent.textContent = count;
    console.log(count);
  })
})
