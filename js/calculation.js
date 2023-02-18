// it calculate triangle value in click

document.getElementById('triangle-btn').addEventListener('click',function(){
    const triangleName = innerTextTake('triangle-name')
    const b = inputValueToNumber("triangle-field-1");
    const h = inputValueToNumber("triangle-field-2")
    const area = 0.5 * b * h;
    if(isNaN(area) || area < 0){
        alert("Please Provide Valid Number");
        return;
    }
    displayData(area.toFixed(2),triangleName);
})
// it calculate rectangle value in click

document.getElementById('rectangle-btn').addEventListener('click',function(){
    const rectangleName = innerTextTake("rectangle-name");
    const w = inputValueToNumber("rectangleField-1");
    const l = inputValueToNumber("rectangleField-2");
    const area = w * l;
    if(isNaN(area) || area < 0){
        alert("Please Provide Valid Number");
        return;
    }
    displayData(area.toFixed(2),rectangleName)
})
// it calculate parallelogram value in click

document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const parallelogramName = innerTextTake('Parallelogram-name');
    const b = 10;
    const h = 12;
    const area = b * h;
    displayData(area,parallelogramName);
})
// it calculate rhombus value in click

document.getElementById('rhombus-btn').addEventListener('click',function(){
    const rhombusName = innerTextTake('rhombus-name');
    const d1 = 16;
    const d2 = 8;
    const area = 0.5 * d1 * d2;
    displayData(area,rhombusName)
})
// it calculate pentagon value in click

document.getElementById('pentagon-btn').addEventListener('click',function(){
    const pentagonName = innerTextTake('pentagon-name');
    const p = 6;
    const b = 10;
    const area = 0.5 * p * b;
    displayData(area,pentagonName)
})
// it calculate ellipse value in click

document.getElementById('ellipse-btn').addEventListener('click',function(){
    const ellipseName = innerTextTake('ellipse-name');
    const a = 10;
    const b = 4;
    const area = 3.14 * a * b;
    displayData(area.toFixed(2),ellipseName)
})


// 
function innerTextTake(id){
    const value = document.getElementById(id).innerText;
    return value;
}

// take input value string convert to number
function inputValueToNumber(id){
    const value = document.getElementById(id).value ;
    return parseFloat(value);
}

// common function to display data
let count = 0; 
function displayData(area,AngleName){
    count += 1;
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${count}.${AngleName}</td>
    <td>${area}<span>cm<sup>2</sup></span> </td>
    <td><button
    id="triangle-btn"
    class="bg-sky-500 font-semibold text-xs hover:bg-sky-700 text-white py-2 px-1 rounded">Covert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr);
}