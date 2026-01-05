const medButton = document.getElementById('med-button')
const timeDisplay = document.getElementById('time-display')
const statusMsg = document.getElementById('status-msg')
console.log(medButton);
console.log(timeDisplay);

// 1. Check nany saved time previously
window.onload = () =>{
const savedTime = localStorage.getItem('lastMedTime');
if (savedTime) {
    timeDisplay.innerText = savedTime;
    timeDisplay.style.color = "blue";
}
};

medButton.addEventListener('click',()=>{
    const now = new Date();

    const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const date = now.toLocaleDateString('en-GB', dateOptions); 
    const time = now.toLocaleTimeString('en-IN');

    const fullDateTime = `${date} | ${time}`;

    timeDisplay.innerText = fullDateTime;
    timeDisplay.className = "completed";

    localStorage.setItem('lastMedTime', fullDateTime);   /* Save to permanent memory */

    statusMsg.innerText = "Saved successfully! ✅"; 
    setTimeout(function(){
        statusMsg.innerText=""
    },1000);   
});





