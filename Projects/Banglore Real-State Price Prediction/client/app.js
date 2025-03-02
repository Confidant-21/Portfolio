function showSection(id) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(id).classList.add('active');
}

// Show the Home section by default
document.addEventListener('DOMContentLoaded', function () {
    showSection('home');
});

function onClickedEstimatePrice() {
    const sqft = document.getElementById('uiSqft').value;
    const bhk = document.querySelector('input[name="uiBHK"]:checked').value;
    const bathrooms = document.querySelector('input[name="uiBathrooms"]:checked').value;
    const location = document.getElementById('uiLocations').value;

    // Example of displaying the estimated price
    document.getElementById('uiEstimatedPrice').innerHTML = `<h2>Estimated Price: ₹${(parseInt(sqft) + parseInt(bhk) + parseInt(bathrooms)) * 1000}</h2>`;
}



