function calculateTriangleArea(){
    const triangleBaseField = document.getElementById('triangle-base');
    const triangleBaseFieldText = triangleBaseField.value;
    const triangleBase  = parseFloat(triangleBaseFieldText)
    triangleBaseField.value = '';

    const triangleHeightField = document.getElementById('triangle-height');
    const triangleHeightFieldText = triangleHeightField.value;
    const triangleHeight = parseFloat(triangleHeightFieldText)
    triangleHeightField.value = '';

    const area = 0.5 * triangleBase * triangleHeight;
    
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

    addCalculationEntry('Triangle', area)
}

function calculateRectangleArea(){
    const rectangleWidthField = document.getElementById('rectangle-width');
    const rectangleWidthFieldText = rectangleWidthField.value;
    const rectangleWidth = parseFloat(rectangleWidthFieldText)
    rectangleWidthField.value = '';

    const rectangleLengthField = document.getElementById('rectangle-length');
    const rectangleLengthFieldText = rectangleLengthField.value;
    const rectangleLength = parseFloat(rectangleLengthFieldText)
    rectangleLengthField.value = '';

    if(isNaN(rectangleWidth && rectangleLength)){
        alert('Please insert a number');
        return;
    }

    const area = rectangleLength * rectangleWidth;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addCalculationEntry('Rectangle', area)
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    
    const height = getInputValue('parallelogram-height')

    if(isNaN(base) || isNaN(height)){
        alert('please insert a number')
        return;
    }
    
    const area = base * height;
    
    setElementInnerText('parallelogram-area', area)

    addCalculationEntry('Parallelogram', area)
}

function calculateEllipseArea(){
   const majorRadius = getInputValue('ellipse-major-radius');
   const minorRadius = getInputValue('ellipse-minor-radius');
   const areaTwoDecimal = Math.PI * majorRadius + minorRadius
   const areaTwoDecimalString = areaTwoDecimal.toFixed(2)
   const area = parseFloat(areaTwoDecimalString)
   
   setElementInnerText('ellipse-area', area)
}

function getInputValue (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value = '';
    return value;
}

function setElementInnerText (elementId, area){
   const element = document.getElementById(elementId)
   element.innerText = area;
}

function addCalculationEntry(areaType, area){
    const areaCalculation = document.getElementById('area-calculation');
    areaCalculation.style.textAlign = 'center'

    const count = areaCalculation.childElementCount
    
    const p = document.createElement('p');
    p.classList.add('my-5')
    p.innerHTML = `
       ${count + 1}.  ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm bg-rose-500 text-white">Convert</button>
    `

    areaCalculation.appendChild(p)
}