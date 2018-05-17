class WeightedQuickUnion {
	//sizes are only correct for roots, subtrees' sizes are meaningless.
	constructor(n) {
		this.n = n;
		this.size = [];
		this.id = [];
		for (let i = 0; i < n;i++){
			this.id.push(i);
			this.size.push(1);
		}
	}

	getRoot(a) {
		if (this.id[a] !== a){
			this.id[a] = this.getRoot(this.id[a]);
		}
		return this.id[a];
	}

	union(a,b) {
		const rootOfA = this.getRoot(a);
		const rootOfB = this.getRoot(b);
		this.id[a] = rootOfA;
		this.id[b] = rootOfB;
		if (this.size[rootOfA] >= this.size[rootOfB]){
			this.size[rootOfA] += this.size[rootOfB];
			this.id[rootOfB] = rootOfA;
		} else {
			this.size[rootOfB] += this.size[rootOfA];
			this.id[rootOfA] = rootOfB;
		}

	}

	find(a,b) {
		return (this.getRoot(a) === this.getRoot(b));
	}
}