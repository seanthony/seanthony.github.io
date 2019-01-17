function displayChanges(button, bodyId) {
    console.log(button);
    document.querySelectorAll('button.body-selector').forEach(function (btn) {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
    });
    document.querySelectorAll('div.body-content').forEach(function (div) {
        div.classList.add('d-none');
    });
    document.querySelector(bodyId).classList.remove('d-none');
    button.classList.remove('btn-secondary');
    button.classList.add('btn-primary');

}

function addButtonEventListeners() {
    var buttons = document.querySelectorAll('button.body-selector')
    buttons.forEach(function (button) {
        let bodyId = '#' + button.innerHTML;
        button.onclick = function () {
            displayChanges(button, bodyId);
        };
    })
}

addButtonEventListeners();