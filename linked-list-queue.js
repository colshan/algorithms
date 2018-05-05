class Node {

	constructor (item){
		this.item = item;
		this.next = null;
	}

}

class LinkedListQueue {

	constructor () {
		this.head = null;
		this.tail = null;
	}

	enqueue (item) {

		const node = new Node(item);
		const previous = this.tail;
		this.tail = node;

		if (this.head === null){
			this.head = this.tail;
		} else {
			previous.next = this.tail;
		}
	}

	dequeue () {

		let res = this.head;
		this.head = this.head.next;
		if (this.head === null){
			this.tail = null;
		}
		return res.item;
	}

}