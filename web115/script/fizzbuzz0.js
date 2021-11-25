function fizzBuzz() {
	let firstName = document.getElementById('firstName').value;
    if(firstName == ""){
        alert("Please Enter Your First Name")
        return
    }
	let middleInit = document.getElementById('middleInit').value;	
	let lastName = document.getElementById('lastName').value;
    	document.getElementById('greeting').textContent = `Welcome to Manny Things, ${firstName} ${middleInit} ${lastName}!`;
	let counter = prompt(`How high do you want to count, ${firstName}?`);
    for(let i = 0; i <= counter; i++) {
        var evenNum;
        if (i % 2 === 0) {
            evenNum =  "The number is even";
        } else {
            evenNum = "The number is odd";
        }
        var node = document.createElement("p");
        var textnode = document.createTextNode(i + " Bazoom Bazang - " + evenNum);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        }  
}
