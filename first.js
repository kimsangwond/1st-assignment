// Run by Node.js
// 369 게임
// node first.js 해보면 input output이 어떻게 되는지 알 수 있음

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	let clap = 0;
	let numList = "";
	
	for(let i = 1; i<=line; i++){
			numList += i
		}
	
	for(let i = 0; i < numList.length+1; i++) {
		if(numList[i] == 3 || numList[i] == 6 || numList[i] == 9 ){
			clap++;
		}
	} 
	
	console.log(clap);
	rl.close();
}).on("close", function() {
	process.exit();
});
