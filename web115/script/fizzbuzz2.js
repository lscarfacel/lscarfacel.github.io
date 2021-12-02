function fizzBuzz() {
	let firstName = document.getElementById('firstName').value;
    if(firstName == ""){
        alert("Please Enter Your First Name")
        return
    }
	let middleInit = document.getElementById('middleInit').value;	
	let lastName = document.getElementById('lastName').value;
    	document.getElementById('greeting').textContent = `Welcome to Manny Things, ${firstName} ${middleInit} ${lastName}!`;
    
    let firstDivisor = 3;
    let secondDivisor = 5;

    let counter = 140;
    for(let i = 1; i <= counter; i++) {
        let numPhrase = "";

        if(fizzBuzz(counter, ))



        // if(i % 3 == 0 && i % 5 == 0 ){
        //     numPhrase = "Hey! Ho!"
        // }
        // else if (i % 3 === 0) {
        //     numPhrase =  "Hey!";
        // }
        // else if(i % 5 === 0){
        //     numPhrase = "Ho!"
        // }
        // else {
        //     numPhrase ="Santa Claus";
        // }
        let node = document.createElement("li");
        let textnode = document.createTextNode(i + " - " + numPhrase);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        
        } 
         
}