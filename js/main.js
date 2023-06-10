const checked2 = document.querySelector('.js-input-dd1') == 0;
var checked = document.querySelector('.js-input-dd1') == 0;
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
btnResultNode.addEventListener(`click`, function(){
    console.log(checked)
    if (checked == true) {
        Vibor23 = 130;
    }
    else {
        Vibor23 = 150;
    }
    })
btnResultNode.addEventListener(`click`, function () {
    output1 = inputANode.value - inputDDNode.value
    output2 = inputCNode.value - inputBNode.value
    output3 = inputENode.value - inputDNode.value
    output4 = inputGNode.value - inputFNode.value
    output5 = inputYNode.value - inputQNode.value
    output6 = inputINode.value - inputMNode.value
    output7 = input212Node.value - inputONode.value
    output8 = input4Node.value - input3Node.value
    output1232 = input6Node.value - input5Node.value
    output10 = input8PNode.value - input7Node.value
    output = (output1 + output2 + output3 + output4 + output5 + output6 + output7 + output8 + output1232 + output10) * Vibor23;
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


