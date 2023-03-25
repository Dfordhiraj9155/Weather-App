console.log("This is JS part of this project");
daysInWeek = ['SUN', 'MON', 'TUE', 'WES', 'THU', 'FRI', 'SAT'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentTimeStatus = ()=>{
    let now = new Date();
    console.log(now);
    let dyInd = now.getDay();
    // console.log(daysInWeek[dyInd]);
    let mnInd = now.getMonth();
    // console.log(months[mnInd]);
    let hr = now.getHours();
    let min = now.getMinutes();
    var periods = "AM";
    console.log(hr);
    var date = now.getDate();
    if(hr > 11)
    {
        periods = "PM";
    }
    if(min < 10)
    {
        min = "0" + min;
    }
    let yr = now.getFullYear();
    console.log(yr);
    return `${daysInWeek[dyInd]} | ${months[mnInd]} ${date} | ${hr}:${min} ${periods}  `;
}
console.log(currentTimeStatus());
var currDate = document.getElementById("date");
currDate.innerHTML = currentTimeStatus();