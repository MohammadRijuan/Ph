const Buttons = document.querySelectorAll('.complete-btn');

// Buttons.forEach(button =>{
    for (const button of Buttons)
     button.addEventListener('click',
    function(){
        const tasks = document.getElementById('task').innerText
        const cnts = document.getElementById('cnt').innerText

        const convertMainTask= parseInt(tasks)
        const convertCount= parseInt(cnts)

        const sum = convertMainTask - 1;
        const subtract = convertCount + 1;
        document.getElementById('task').innerText = sum; 
        document.getElementById('cnt').innerText = subtract;
        
        
        // button.style.display = 'none'
        button.setAttribute('disabled',true)


    });
// });