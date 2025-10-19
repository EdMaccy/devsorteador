function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.ceil(document.querySelector(".input-max").value)


    if (isNaN(min) || isNaN(max) || min > max) {
        drawnNumber.innerHTML = "❌ Valores inválidos";
        return;
    }

    let count = 0;
    const interval = setInterval(() => {
        const random = Math.floor(Math.random() * (max - min + 1)) + min;
        drawnNumber.innerHTML = random;
        drawnNumber.classList.add("spin");

      
        setTimeout(() => drawnNumber.classList.remove("spin"), 100);

        count++;
        if (count > 20) { 
            clearInterval(interval);
            const final = Math.floor(Math.random() * (max - min + 1)) + min;
            drawnNumber.innerHTML = final;
        }
    }, 50);

    const drawnNumber = document.querySelector(".number")
    drawnNumber.innerHTML = result;
}



