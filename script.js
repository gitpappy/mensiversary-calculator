function suffix(passeddate) {
	lastcharacter = parseInt(passeddate.toString().slice(-1));
	secondtolastcharacter = parseInt(passeddate.toString().slice(0, -1));

	console.log(lastcharacter);
	console.log(secondtolastcharacter);
	
	if (lastcharacter < 1 || lastcharacter > 3 || secondtolastcharacter == 1) {
		return "th";
	} else if (lastcharacter == 1) {
		return "st";
	} else if (lastcharacter == 2) {
		return "nd";
	} else if (lastcharacter == 3) {
		return "rd";
	}
}

function monthString(passedmonth) {
	if (passedmonth == 1) {
	return "January";
  } else if (passedmonth == 2) {
	return "February"
  } else if (passedmonth == 3) {
	return "March"
  } else if (passedmonth == 4) {
	return "April"
  } else if (passedmonth == 5) {
	return "May"
  } else if (passedmonth == 6) {
	return "June"
  } else if (passedmonth == 7) {
	return "July"
  } else if (passedmonth == 8) {
	return "August"
  } else if (passedmonth == 9) {
	return "September"
  } else if (passedmonth == 10) {
	return "October"
  } else if (passedmonth == 11) {
	return "November"
  } else if (passedmonth == 12) {
	return "December"
  }
}

function niceDay(passeddate) {
	lastcharacter = parseInt(passeddate.toString().slice(-1));
	secondtolastcharacter = parseInt(passeddate.toString().slice(0, -1));

  if (secondtolastcharacter == 0) {
	return lastcharacter
  } else {
	return secondtolastcharacter + "" + lastcharacter;
  }
}

document.querySelector('.print').addEventListener("click", function() { 
  newmonth = document.querySelector('select.month').value;
  newday = document.querySelector('select.day').value;
  newyear = document.querySelector('select.year').value;

  if (newmonth && newday && newyear) {
    newdate = "New Date = " + newmonth + "/" + newday + "/" + newyear;
    //document.querySelector('.output1').innerHTML = newdate;
    //----
    date = new Date();
    date.setDate(date.getDate());
    nowmonth = ("0" + (date.getMonth()+1)).slice(-2);
    nowday = ("0" + date.getDate()).slice(-2);
    nowyear = date.getFullYear();

    nowdate =  "Now Date = " + nowmonth + "/" + nowday + "/" + nowyear;
    //document.querySelector(".output2").innerHTML = nowdate;
    //----
    diffmonth = nowmonth - newmonth;
    diffday = nowday - newday;
    diffyear = nowyear - newyear;

    diffdate = "Difference = " + diffmonth + " " + diffday + " " + diffyear;
    //document.querySelector(".output3").innerHTML = diffdate;

    mensiversarycount = (diffyear*12)+diffmonth;

    if (newday < nowday) {
    	nowmonth++;
      mensiversarycount++;
    }

    document.querySelector(".output4").innerHTML = "Your " + mensiversarycount + suffix(mensiversarycount) + " Mensiversary will be <br>on the " + niceDay(newday) + suffix(newday) + " of " + monthString(nowmonth) + " " + nowyear;
    document.querySelector(".output4").className="output4 message";
  }
});

