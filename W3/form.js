// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    document.getElementById('theyear').textContent = new Date().getFullYear();
});

function validateForm() {
    const principle = document.getElementById('principle').value;
    const confirmPrinciple = document.getElementById('confirmprinciple').value;

    if (principle !== confirmPrinciple) {
        alert("Principle amounts do not match. Please enter them again.");
        document.getElementById('principle').value = "";
        document.getElementById('confirmprinciple').value = "";
        return false; // Prevent form submission
    }

    doFV(); 
    return false; 
}

function doFV() {
    // Ensure the principle amounts match before proceeding
    const principle = document.getElementById('principle').value;
    const confirmPrinciple = document.getElementById('confirmprinciple').value;
    if (principle !== confirmPrinciple) {
        alert("Principle amounts do not match. Please enter them again.");
        return;
    }

    // INPUT
    let p = parseFloat(principle);
    let r = parseFloat(document.getElementById("annualrate").value);
    let n = parseInt(document.getElementById("periods").value);
    let y = parseInt(document.getElementById("years").value);

    
    if (isNaN(p) || isNaN(r) || isNaN(n) || isNaN(y)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    
    let output = computeFutureValue(p, r, n, y);

    
    if (isNaN(output)) {
        alert("Invalid input. Please check your entries.");
        return;
    }

    // OUTPUT with formatting
    document.getElementById("output").innerHTML = `$${output.toFixed(2)}`;
}

// Compute future value function
// p = principal, r = annual rate, y = number of years, n = periods of year.
function computeFutureValue(p, r, n, y) {
    let er = r / n; // effective rate per period
    let totalperiods = n * y;
    return p * Math.pow(1 + er, totalperiods);
}
