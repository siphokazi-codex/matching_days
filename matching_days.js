
var match = document.querySelector('.btnMatch');
var firstDay = document.querySelector('.txtFirst');
var secondDay = document.querySelector('.txtSecond');
var list = document.querySelectorAll('td');

function sameWeekday () {
var dateOne = new Date(firstDay.value);
var dateTwo = new Date(secondDay.value);

var dayOne = dateOne.getDay();
var dayTwo = dateTwo.getDay();

//clear the background color on the fields
refreshDays ();

if (dayOne === dayTwo)
{
  list[dayOne].className = 'greenDay';
  //console.console.log(list[dayOne]);
  //list[dayOne].classList.add('greenDay');
  //console.log("date is " + dayOne);
}
else if (dayOne !== dayTwo)
{
  list[dayOne].className = 'blueDay';
  list[dayTwo].className = 'redDay';
}
}

function refreshDays () {
  for (i = 0; i < list.length; i++)
  {
    list[i].classList.remove('greenDay');
    list[i].classList.remove('blueDay');
    list[i].classList.remove('redDay');
  }

}

firstDay.addEventListener('change', sameWeekday);
secondDay.addEventListener('change', sameWeekday);
