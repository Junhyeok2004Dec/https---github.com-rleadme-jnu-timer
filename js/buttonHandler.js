document.addEventListener('DOMContentLoaded', function() {

    var insertBtn = document.getElementById("input");
    var resultComponent = document.getElementById("results");


    const text = document.getElementById
    ('textInput').value; // 값 불러오기 안 됨

    console.log(text);
    insertBtn.addEventListener("click", function() {
        resultComponent.innerText = text;

    });
})