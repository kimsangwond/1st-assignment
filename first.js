const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(input_num) {
	const number=input_num
	let result=0
	for(let i=3; i<=number; i++){
		let y=String(i)
		if ((y.match(/3/g)|| []).length != 0 || (y.match(/6/g)|| []).length != 0 || (y.match(/9/g)|| []).length != 0) {
			result=result+(y.match(/3/g)|| []).length+(y.match(/6/g)|| []).length+(y.match(/9/g)|| []).length
		}
	}
	console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});