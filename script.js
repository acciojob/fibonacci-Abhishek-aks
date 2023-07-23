function fibonacci(num) {
// your code here
	let prev = 0, curr = 1;
    if( num == 0) return a;
	if( num == 1) return curr;
	
    for(i = 2; i <= num; i++){
	    let next = prev + curr;   //next==1
		    prev = curr;          //prev==1
		    curr = next;         //curr==1
	}
    return curr;
}
module.exports = fibonacci;
