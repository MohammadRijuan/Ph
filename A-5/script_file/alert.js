let clicked = 0;

function ButtonClick() {
 
    alert('Board Updated Successfully');
    clicked++;

    if (clicked === 6) {
        alert('Congratulations!! All tasks have been completed');
    }
}
const completeButtons = document.getElementsByClassName('complete-btn');

for (let i = 0; i < completeButtons.length; i++) {
    completeButtons[i].addEventListener('click', ButtonClick);
}