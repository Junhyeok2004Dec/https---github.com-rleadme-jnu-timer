document.addEventListener('DOMContentLoaded', function() {

    var insertBtn = document.getElementById("input");
    var resultComponent = document.getElementById("results");

    var inputdata = document.getElementById("textInput");

    const text = inputdata.innerText;

    console.log(text);

    insertBtn.addEventListener("click", function() {
        resultComponent.innerHTML = text;

    });
})