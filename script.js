const buttonMapping = {
    'Make Transaction': ['Transfer to Foreign Account', 'Wallet Transaction'],
    'Check Balance': ['View Transaction History'],
    'View Transaction History': []
};

document.addEventListener('DOMContentLoaded', function() {
    const buttonBox = document.getElementById('buttonBox');

    function clearButtons() {
        buttonBox.innerHTML = '';
    }

    function createButton(label, options) {
        const button = document.createElement('button');
        button.innerText = label;
        button.onclick = function() {
            console.log(`Button "${label}" clicked.`);
            clearButtons();
            options.forEach(option => {
                createButton(option, []);
            });
        };
        buttonBox.appendChild(button);
    }

    // Create initial buttons
    Object.keys(buttonMapping).forEach(key => {
        createButton(key, buttonMapping[key]);
    });
});
