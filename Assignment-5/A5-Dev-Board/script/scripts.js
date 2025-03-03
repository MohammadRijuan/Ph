//date 
function updateDate() {
    const now = new Date();
    const options = { weekday: 'short',  month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    const finalDate = formattedDate.replace(',', '');
    
    document.getElementById("date").innerText = finalDate;
}

updateDate(); 




// task assign

doc