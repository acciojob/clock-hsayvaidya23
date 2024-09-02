//your JS code here. If required.
let timeDis = document.getElementById('timer');
let currDate = new Date();
setInterval(
	() => {
		currDate = new Date();
		timeDis.innerHTML = currDate.toLocaleString();
	}
, 1000)