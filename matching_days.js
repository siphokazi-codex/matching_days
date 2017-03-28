
var match = document.querySelector('.btnMatch');
var firstDay = document.querySelector('.txtFirst');
var secondDay = document.querySelector('.txtSecond');
var list = document.querySelectorAll('td');
var diff = document.querySelector('.different');

function sameWeekday () {
var dateOne = new Date(firstDay.value);
var dateTwo = new Date(secondDay.value);

var dayOne = dateOne.getDay();
var dayTwo = dateTwo.getDay();

var ul = document.getElementsByTagName('ul')[0];
//var li = document.createElement('li');

//clear the background color on the fields
refreshDays ();

if (dayOne === dayTwo)
{
  list[dayOne].className = 'greenDay';
  ul.innerHTML = "The two selected dates, falls on the same week day, hence week day is in green color";
}
else if (dayOne !== dayTwo)
{
  list[dayOne].className = 'blueDay';
  list[dayTwo].className = 'redDay';
  ul.innerHTML = "The two selected dates, falls on different days, hence the days for each date is in a different color";
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
