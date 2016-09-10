var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var months = document.getElementById("month").children
var days = document.getElementById("day").children
var years = document.getElementById("year").children

var date = new Date()

for(i = 0; i < months.length; i++) {
  if(months[i].innerHTML == monthNames[date.getMonth()]) {
    months[i].selected = true
  }
}

for(i = 0; i < days.length; i++) {
  if(days[i].innerHTML == date.getDate()) {
    days[i].selected = true
  }
}
