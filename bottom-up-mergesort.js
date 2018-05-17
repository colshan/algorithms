function merge(left, right){
	let res = [];
	while(left.length > 0 && right.length > 0){
		if (left[0] <= right[0]){
			res.push(left.shift());
		} else {
			res.push(right.shift());
		}
	}
	return res.concat(left).concat(right);
}

function mergeSort(array){
	for(let i=2; i < 2*array.length; i*=2){
		for (let j=0; j < array.length; j+=i) {
			const left = array.slice(j, j+i/2);
			const right = array.slice(j+i/2, j+i);
			const sorted = merge(left, right);
			array.splice(j, i, ...sorted);
		}
	}
}