const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(input) {
	let input_array = input.split(" ");
	let result = (input_array[0]*Math.pow((1+input_array[1]*0.01),input_array[2])).toFixed(2)
	console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});