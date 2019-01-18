const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Array length : ', (answer1) => {
    rl.question('the contents of (use space) : ', (answer2) => {
        var result = (+answer1) + (+answer2);
        //console.log(`The sum of above two numbers is ${result}`);
		
		//let line = answer2;
		//let line = "4 2";
		//let line = "3 1 2";
		let line = "1 5 4 3 2 6";
		parseLine(line);
	
        rl.close();
    });
});

function parseLine(lines) {
    //Enter your code here
    var arr = lines.split(" ");
    
        var sortedArr = arr.concat([]).sort(function(a, b) {
            return a - b;
        });
		
		//console.log(arr);
		//console.log(sortedArr);
		
        var diff = 0;
        var first;
        var last;
        for (var i = 0; i < arr.length; i++) {
		  console.log(i+'. '+arr[i]+'='+sortedArr[i]+'-----------------------------');
          if (arr[i] !== sortedArr[i]) {
			  console.log(i+'. typeof : '+typeof first);
              if (typeof first === "undefined") {
                  first = i;
			      console.log(i+'.first : '+first);
              }
              last = i;
			  console.log(i+'.last : '+last);
              diff++;
			  console.log(i+'.diff : '+diff);
          }
       } 
       if (diff === 0) {
           console.log("yes");
       } else if (diff === 2) {
           console.log("yes");
           console.log("swap "+ ++first + " " + ++last);
       } else {
           for (var i = 0; i <= last - first; i++) {
               if (arr[first + i] !== sortedArr[last - i]) {
                   console.log("no");
				   return;
               }
           }
           console.log("yes");
           console.log("reverse "+ ++first + " " + ++last);
       }
    //console.log(n);
    //console.log(arr);
} 