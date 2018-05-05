class QuickUnion {
	
	constructor(n) {
		this.n = n;
		this.id = [];
		for (let i = 0; i < n;i++){
			this.id.push(i);
		}
	}

	getRoot(a) {
		return (this.id[a] === a ? a : this.getRoot(this.id[a]));

	}
	union(a,b) {

		this.id[this.getRoot(a)] = this.getRoot(b);

	}

	find(a,b) {
		return (this.getRoot(a) === this.getRoot(b));
	}
}