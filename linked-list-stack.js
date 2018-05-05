class Node {

	constructor (item){

		this.item = item;
		this.next = null;
		
	}

}


class LinkedListStack {

	constructor (){
		this.head = null;
	}

	push(item){

		const node = new Node(item);

		if (this.head === null){
			this.head = node;
		}
		else {
			node.next = this.head;
			this.head = node;
		}
	}

	pop(){

		if (this.head === null){

			return;

		} else {

			const res = this.head.item;
			this.head = this.head.next

			return res;
		}
	}
}