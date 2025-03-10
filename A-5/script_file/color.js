// document.getElementById('color-btn').addEventListener('click', function() {

//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);

//     var randomColor = "rgb(" + x + "," + y + "," + z + ")";
    
//     document.getElementById('body-color').style.backgroundColor = randomColor;
// });


let Colors = ["blue", "gray", "purple", "orange", "green", "yellow", "pink" ,"black"]; 
let index = 0;

document.getElementById("color-btn").addEventListener("click", 
    function() {
    document.body.style.backgroundColor = Colors[index]; 
    index = (index + 1) % Colors.length; 
});