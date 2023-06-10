const Vibor23 = document.getElementById("select");
const Vibor231 = document.getElementById("select2");
const Vibor232 = document.getElementById("select3");
const Vibor233 = document.getElementById("select4");
const Vibor234 = document.getElementById("select5");
const Vibor235 = document.getElementById("select6");
const Vibor236 = document.getElementById("select7");
const Vibor237 = document.getElementById("select8");
const Vibor238 = document.getElementById("select9");
const Vibor239 = document.getElementById("select10");
const inputANode = document.querySelector(".js-input-a");
const inputBNode = document.querySelector(".js-input-b");
const inputCNode = document.querySelector(".js-input-c");
const inputDNode = document.querySelector(".js-input-d");
const inputENode = document.querySelector(".js-input-e");
const inputFNode = document.querySelector(".js-input-f");
const inputGNode = document.querySelector(".js-input-g");
const inputQNode = document.querySelector(".js-input-q");
const inputYNode = document.querySelector(".js-input-y");
const inputMNode = document.querySelector(".js-input-m");
const inputINode = document.querySelector(".js-input-i");
const inputONode = document.querySelector(".js-input-o");
const input212Node = document.querySelector(".js-input-2");
const input3Node = document.querySelector(".js-input-3");
const input4Node = document.querySelector(".js-input-4");
const input5Node = document.querySelector(".js-input-5");
const input6Node = document.querySelector(".js-input-6");
const input7Node = document.querySelector(".js-input-7");
const input8PNode = document.querySelector(".js-input-8");
const inputPNode = document.querySelector(".js-input-p");
const inputDDNode = document.querySelector(".js-input-dd");
const btnResultNode = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");
const outputNode23 = document.querySelector(".js-output23");
btnResultNode.onclick = (event) => {
    console.log(Vibor23.value), console.log(Vibor231.value),
    console.log(Vibor232.value), console.log(Vibor233.value),
    console.log(Vibor234.value), console.log(Vibor235.value),
    console.log(Vibor236.value), console.log(Vibor237.value),
    console.log(Vibor238.value), console.log(Vibor239.value);
};
btnResultNode.addEventListener(`click`, function () {
    output1 = (inputANode.value - inputDDNode.value) * Vibor23.value
    output2 = (inputCNode.value - inputBNode.value) * Vibor231.value
    output3 = (inputENode.value - inputDNode.value) * Vibor232.value
    output4 = (inputGNode.value - inputFNode.value) * Vibor233.value
    output5 = (inputYNode.value - inputQNode.value) * Vibor234.value
    output6 = (inputINode.value - inputMNode.value) * Vibor235.value
    output7 = (input212Node.value - inputONode.value) * Vibor236.value
    output8 = (input4Node.value - input3Node.value) * Vibor237.value
    output1232 = (input6Node.value - input5Node.value) * Vibor238.value
    output10 = (input8PNode.value - input7Node.value) * Vibor239.value
    output = (output1 + output2 + output3 + output4 + output5 + output6 + output7 + output8 + output1232 + output10);
    outputNode.innerHTML = output
})
const inputSSNode = document.querySelector(".js-input-ss")
const inputcsNode = document.querySelector(".js-input-cs")
const inputedaNode = document.querySelector(".js-input-eda")
const inputgafNode = document.querySelector(".js-input-gaf")
const inputyaNode = document.querySelector(".js-input-ya")
const inputiaNode = document.querySelector(".js-input-ia")
const inputpapNode = document.querySelector(".js-input-pap")
const input12Node = document.querySelector(".js-input-12");
const input13Node = document.querySelector(".js-input-13");
const input14Node = document.querySelector(".js-input-14");
const btnResult2Node = document.querySelector(".js-btn-result2");
const output2Node = document.querySelector(".js-output2");
const Vibor = document.querySelector(".js-input-fff");
btnResult2Node.addEventListener(`click`, function () {
    Vibor223 = Vibor.value
    output9 = inputSSNode.value /100
    output11 = inputcsNode.value /100
    output12 = inputedaNode.value /100
    output13 = inputgafNode.value /100
    output14 = inputyaNode.value /100
    output15 = inputiaNode.value /100
    output16 = inputpapNode.value /100
    output17 = input12Node.value /100
    output18 = input13Node.value /100
    output19 = input14Node.value /100
    output21 = (output9 + output11 + output12 + output13 + output14 + output15 + output16 + output17 + output18 + output19) * Vibor223;
    output2Node.innerHTML = output21
} )
const btnFinishResult = document.querySelector(".js-btn-finishresult");
const outputfinishNode = document.querySelector(".js-outputfinish");
btnFinishResult.addEventListener(`click`, function () {
    outputFinish = output + output21;
    outputfinishNode.innerHTML = outputFinish
} )


