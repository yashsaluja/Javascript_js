// given a linked list and integer n, return the element 'n' spaces from the last node int he list. donot call the'size method of the linked list.assume that 'n' will always be less than the length of the list,

function fromLast(list,n){
	
	let slow=get.First();
	let fast=get.First();

	while(n>0){

		fast= fast.next;	//This will move 'fast' n element forward
		n--;      	     
	}

	while(fast.next){
		slow=slow.next;
		fast=fast.next;
	}

	return slow;
}
