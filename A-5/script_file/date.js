//
function updateDate() {
    const today = new Date();
    const option = { weekday: 'short',  month: 'short', day: 'numeric', year: 'numeric' };
    const DateFormat = today.toLocaleDateString('en-US', option);
    const f_Date = DateFormat.replace(',', '');
    
    document.getElementById("date").innerText = f_Date;
}

updateDate(); 