document.getElementById('color-btn').addEventListener('click', function() {

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);

    var randomColor = "rgb(" + x + "," + y + "," + z + ")";
    
    document.getElementById('body-color').style.backgroundColor = randomColor;
});