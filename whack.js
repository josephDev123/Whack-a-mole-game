

var result = document.querySelector('#result');
var timeLeft = document.querySelector('#timeLeft');
var square = document.querySelectorAll('.square');
var grid = document.querySelector('#grid');

var outPut = 0;
var currentTime = timeLeft.textContent;


function randomiseImg(){
	square.forEach(item => item.classList.remove('mole'))
	//randomly moving round the div
	var randomposition = square[Math.floor(Math.random() * square.length)];
	//add class attribute value
	randomposition.classList.add('mole');
	//div id
	 randomposition_id = randomposition.id;
	// console.log(randomposition_id);
}


// event
square.forEach(item =>{
	item.addEventListener('click', ()=>{
	
// const box_id = (e.target.id);
// if (box_id == randomposition_id) {
// 	result.textContent =  ++outPut;
// }
		
		// OR

		if (item.id == randomposition_id) {
			result.textContent =  ++outPut;
		}

	})
})
	

//set time interval to randomise the div
function randomTimer(){
	let randomiseDivAtTime =null;
	randomiseDivAtTime = setInterval(randomiseImg, 500);
	
}
randomTimer()

function timer(){
	--currentTime;
	timeLeft.textContent = currentTime; 
	if (currentTime == 0) {	
		alert('Game Over. Your total score is ' +outPut );
		result.classList.add('disabled');
		clearInterval(decreaseTime);
	
	}
}
timer()

const decreaseTime = setInterval(timer, 1000);
	



	














 

























// 	function removeMole(){
// 		square.forEach(className => {
// 			className.classList.remove('mole');

// 		});

// 		var randonPosition = square[Math.floor(Math.random() *9)];
// 		randonPosition.classList.add('mole');

// 		hitPosition = randonPosition.id;
// }


// 	square.forEach(id => {
// 		id.addEventListener('mouseup', () => {
// 		if (id.id === hitPosition) {
// 			outPut = outPut + 1;
// 			result.textContent = outPut;
// 		}

// 	})
// })


// function moveMole(){
// 	var timerId = null;
// 	timerId = setInterval(removeMole, 500);
// }
// moveMole();

// function countDown(){
// 	currentTime--;
// 	timeLeft.textContent = currentTime;

// 	if (currentTime === 0) {
// 		clearInterval(timerId);
// 		alert('The Game is over!. Your total score is '+ outPut +' make sure u refresh your game to start afresh'+"." + ' failure to result, will stop the time reading');
// 	}
// }


// var timerId = setInterval(countDown, 1000);
