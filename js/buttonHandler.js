document.addEventListener('DOMContentLoaded', function() {

    var insertBtn = document.getElementById("input");
    var resultComponent = document.getElementById("results");

    var inputdata = document.getElementById("textInput");

    insertBtn.addEventListener("click", function() {
        resultComponent.innerHTML = inputdata.innerText;

    });
})