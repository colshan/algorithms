//uses too much memory.  can be done in place.

function shuffle(array){
	for (let i = 0; i < array.length; i++){
		const randomIndex =Math.floor(Math.random()*i);
		[array[i], array[randomIndex]] = [array[randomIndex], array[i]];

	}
}

function quicksort(array){
	shuffle(array);

	function partition(array){
		if (array.length <=1){
			return array;
		}
		let pivot = array[0];
		let left = [];
		let middle =[pivot];
		let right = [];
		for (let i = 0; i < array.length; i++){
			if (array[i] < pivot){
				left.push(array[i]);
			} else if (array[i] > pivot){
				right.push(array[i]);
			} else {
				middle.push(array[i]);
			}
		}
		return partition(left).concat(middle).concat(partition(right));

	}

	return partition(array);
}