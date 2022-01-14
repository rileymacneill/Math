//Get values from page
function getValue() {
    //Get user values
    let firstValue = document.getElementById("firstValue").value;
    let secondValue = document.getElementById("secondValue").value;
    //Parse the numbers
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    //Check that the numbers are integers
    if (Number.isInteger(firstValue) && Number.isInteger(secondValue)) {
        numbers = generateXY(firstValue, secondValue);
        //We call generateXY
        let xyArray = generateXY(firstValue, secondValue);
        //Call displayData and write the values to the screen
        displayData(xyArray);
    } else {
        alert("You must enter integers");
    }
}

//Generate numbers
/*function generateXY(xValue, yValue) {
    //Initialize and return array
    let returnArray = [];
    //loop from 1-100 with if statements
    for (let i = 1; i <= 100; i++) {
        if (i % xValue == 0 && i % yValue == 0) {
            returnArray.push('XY');
        } else if (i % xValue == 0) {
            returnArray.push('X');
        } else if (i % yValue == 0) {
            returnArray.push('Y');
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}*/

/*function generateXY(xValue, yValue) {

    let returnArray = [];
    let X = false;
    let Y = false;

    for (let i = 1; i < 100; i++) {
        X = i % xValue == 0;
        Y = i % yValue == 0;

        switch (true) {
            case X && Y: {
                returnArray.push('XY');
                break;
            }
            case X:{
                returnArray.push('X');
                break;
            }
            case Y:{
                returnArray.push('Y');
                break;
            }
            default:{
                returnArray.push('i');
                break;
            }
        }
    }

    return returnArray;

}*/

function generateXY(xValue, yValue) {

    let returnArray = [];

    for (let i = 1; i <= 100; i++) {

        let value = ((i % xValue == 0 ? 'X' : '') + (i % yValue == 0 ? 'Y' : '') || i);
        returnArray.push(value);
    }
    return returnArray;
}

//Loop over array and create a tablerow for each item
function displayData(xyArray) {
    let tableBody = document.getElementById("results");
    //Get the template
    let templateRow = document.getElementById("xyTemplate");
    //Clear the table
    tableBody.innerHTML = "";
    for (let index = 0; index < xyArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);
        //Grab the 'td' and put into an array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(xyArray[index]);
        rowCols[0].textContent = xyArray[index];

        rowCols[1].classList.add(xyArray[index + 1]);
        rowCols[1].textContent = xyArray[index + 1];

        rowCols[2].classList.add(xyArray[index + 2]);
        rowCols[2].textContent = xyArray[index + 2];

        rowCols[3].classList.add(xyArray[index + 3]);
        rowCols[3].textContent = xyArray[index + 3];

        rowCols[4].classList.add(xyArray[index + 4]);
        rowCols[4].textContent = xyArray[index + 4];

        tableBody.appendChild(tableRow);
    }



    //Add all the rows  to the table.

}