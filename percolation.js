//NxN graph that starts all black randomly toggle a cell
//check if percolates and return true, otherwise keep randomly toggling
//use weighted-quick-union


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

class Grid {
	constructor(n){
		this.size = n;
	}

	get1DIndex (row,column){
		return row*this.size+column; 
	}

	getNeighbors(i){
		let neighbors = [];
		const row = Math.floor(i / this.size);
		const column = i % this.size;
		if (row > 0){
			neighbors.push(this.get1DIndex(row-1, column));
		}
		if (row < this.size-1) {
			neighbors.push(this.get1DIndex(row+1, column));
		}
		if (column > 0){
			neighbors.push(i-1);
		}
		if (column < this.size-1){
			neighbors.push(i+1);
		}

		return neighbors;
	}
}

class Percolation {
	constructor (n) {
		this.grid = new Grid(n);
		this.uf = new WeightedQuickUnion(n*n+2);
		this.toggles = 0;

		for (let i = 0; i < this.grid.size; i++){
			this.uf.union(i, this.uf.n-2);
		}
		for (let i = this.grid.size*(this.grid.size-1); i < this.grid.size*this.grid.size; i++){
			this.uf.union(i, this.uf.n-1);
		}
	}

	percolates () {
		return this.uf.find(this.uf.n-2,this.uf.n-1);
	}

	randomToggle(){
		const i = Math.floor(Math.random()*(this.uf.n-2)); //not sure
		this.grid.getNeighbors(i).map(neighbor => this.uf.union(i, neighbor));
		this.toggles++;
	}

	run() {
		while (!this.percolates()){
			this.randomToggle();
		}
		return this.toggles;
	}
}

