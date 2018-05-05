class QuickFind {

	constructor(n) {
		this.n = n;
		this.id = [];
		for (let i = 0; i < n;i++){
			this.id.push(i);
		}
	}

	union(a,b) {
		const idA = this.id[a];

		for (let i = 0; i < this.n;i++){
			if (this.id[i] === idA){
				this.id[i] = this.id[b];
			}
		}
	}

	find(a,b) {
		return (this.id[a] === this.id[b]);
	}
}