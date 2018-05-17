function merge(left, right){
	let res = [];
	while(left.length > 0 && right.length > 0){
		console.log(left,right);
		if (left[0] <= right[0]){
			res.push(left.shift());
		} else {
			res.push(right.shift());
		}
	}
	return res.concat(left).concat(right);
}

function mergeSort(array){
	if (array.length <= 1){
		return array;
	} else {
		const midpoint = Math.floor(array.length/2);
		const left = mergeSort(array.slice(0,midpoint));
		const right = mergeSort(array.slice(midpoint));
		return merge(left, right);
	}
}