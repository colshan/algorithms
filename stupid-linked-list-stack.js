class Node {

	constructor (item){
		this.item = item;
		this.next = null;
	}

}


class StupidLinkedListStack {

	constructor (){
		this.head = null;
	}

	push(item){

		const node = new Node(item);

		if (this.head === null){
			this.head = node;
		}
		else {
			let currentNode = this.head;
			while (currentNode.next !== null){
				currentNode = currentNode.next;
			}
			currentNode.next = node;
		}
	}

	pop(){

		if (this.head === null){

			return;

		} else if (this.head.next === null){

			const res = this.head.item;
			this.head = null;
			return res;

		} else {

			let currentNode = this.head.next;
			let previousNode = this.head;

			while (currentNode.next !== null){
				previousNode = currentNode;
				currentNode = currentNode.next;
			}
			previousNode.next = null;

			return currentNode.item;
		}
	}
};