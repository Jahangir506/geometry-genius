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

    const area = rectangleLength * rectangleWidth;

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}


function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    
    const height = getInputValue('parallelogram-height')
    
    const area = base * height;
    
    setElementInnerText('parallelogram-area', area)
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