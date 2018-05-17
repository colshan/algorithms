function selectionSort(array){
	for (let i = 0; i < array.length; i++){
		let min = array[i];
		let minIndex = i;
		for(let j = i; j < array.length; j++){
			if (array[j] < min){
				min = array[j];
				minIndex = j;
			}
		}
		[array[i], array[minIndex]] = [array[minIndex], array[i]];
	}
}


function insertionSort(array){
	for(let i = 1; i < array.length; i++){
		for(let j = i-1; j >= 0; j--){
			if (array[j+1] < array[j]){
				[array[j+1], array[j]] = [array[j], array[j+1]];
			}
		}
		console.log(array);
	}
}

function hSort(array, h){
	for(let i = h-1; i < array.length; i++){
		for(let j = i-h; j >= 0; j-=h){
			if (array[j+h] < array[j]){
				[array[j+h], array[j]] = [array[j], array[j+h]];
			}
		}
	}
}


function shellSort(array){
	[10,5,3,1].map(h => hSort(array, h));
	console.log(array);
}


function shuffle(array){
	for (let i = 0; i < array.length; i++){
		const randomIndex =Math.floor(Math.random()*i);
		[array[i], array[randomIndex]] = [array[randomIndex], array[i]];

	}
}