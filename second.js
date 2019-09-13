// Run by Node.js
// 은행 예금 이자 구하기
// node second.js 해보면 input output이 어떻게 되는지 알 수 있음

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	
	let valueArr = line.split(" ");
	let totalMoney = valueArr[0]*Math.pow(1+(valueArr[1]/100), valueArr[2]);
	console.log(totalMoney.toFixed(2));
	
	rl.close();
}).on("close", function() {
	process.exit();
});
