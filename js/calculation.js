document.getElementById('triangle-btn').addEventListener('click',function(){
    const b = inputValueToNumber("triangle-field-1");
    const h = inputValueToNumber("triangle-field-2")
    const area = 0.5 * b * h;
    if(isNaN(area) || area < 0){
        alert("Please Provide Valid Number");
        return;
    }
    displayData(area.toFixed(2))
})
document.getElementById('rectangle-btn').addEventListener('click',function(){
    const w = inputValueToNumber("rectangleField-1");
    const l = inputValueToNumber("rectangleField-2")
    const area = w * l;
    if(isNaN(area) || area < 0){
        alert("Please Provide Valid Number");
        return;
    }
    displayData(area.toFixed(2))
})




// take input value string convert to number
function inputValueToNumber(id){
    const value = document.getElementById(id).value ;
    return parseFloat(value);
}

// common function to display data
let count = 0; 
function displayData(area){
    count += 1;
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML=`
    <td>${count}</td>
    <td>${area}<span>cm<sup>2</sup></span> </td>
    <td><button
    id="triangle-btn"
    class="bg-sky-500 font-semibold hover:bg-sky-700 text-white py-2 px-6 rounded">Covert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr);
}