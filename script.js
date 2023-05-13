


// A method to count all the characters, count the number of vowels and number of words in a string.
function words(str){
	let wcount = 0
	let vcount = 0
	let chcount = 0
    let strs = str.toLowerCase()

	while(i < strs.length){
		let ch = strs[i]
		
		// condition checking for word count
		if (ch == " " || ch == ".") {
			wcount += 1
		}
			
			
		// condition checking for vowels
		if(ch == "a" || ch == "e" ||
		ch == "i" || ch == 'o' || ch == "u") {
			vcount += 1
		}
			
	}
	chcount += 1
}

console.log("number of characters = " + "chcount")
console.log ("number of words = " + "wcount")
console.log("number of vowels = " + "vcount")

console.log(words("football"))
    // console.log ("number of words = " + "wcount")
	// console.log("number of vowels = " + "vcount")