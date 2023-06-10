    const inputOneNode = document.querySelector(".js-input-One");
    const inputTwoNode = document.querySelector(".js-input-Two");
    const inputThreeNode = document.querySelector(".js-input-Three");
    const inputFourNode = document.querySelector(".js-input-Four");
    const btnresultNEXTNode = document.querySelector(".js-btn-resultNEXT");
    const inputoutputNEXTNode = document.querySelector(".js-input-outputNEXT");
        btnresultNEXTNode.addEventListener(`click`, function () {
            outputNext1 = inputOneNode.value
            outputNext2 = inputTwoNode.value
            outputNext3 = inputThreeNode.value
            outputNext4 = inputFourNode.value
            NextResult = outputNext1 + outputNext2 + outputNext3 + outputNext4;
            inputoutputNEXTNode.innerHTML = NextRusult;
        }   )