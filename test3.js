const readline = require('readline');
var log = console.log;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Format : ', (answer1) => {
	var arr = answer1.split(' ').map(function(n){return parseInt(n)});
	//console.log(arr);
	var jmlbaris = arr[0];
	var inputurt = 0;
	
	const first_matrix = [];
	
	var recursiveAsyncReadLine = function () {
	  rl.question('row '+(inputurt+1)+': ', function (answer) {
	    //fill array
		//log(inputurt);
		if(answer.split(' ').length != arr[1]){
			log("Wrong format!!");
			return rl.close();
		}
		first_matrix[inputurt] = answer.split(' ').map(function(n){return parseInt(n)});
		
		if (answer == 'exit')
		  return rl.close();
		if (inputurt == (jmlbaris-1)){
		  //log(first_matrix);
		  let last_matrix = arrayClone(first_matrix);
		  for(let i = 0;i < arr[2];i++){
			last_matrix = arrayClone(rotated(last_matrix,arr[1]));
		  }
			var strpoint_before = ""
			var strpoint_after = ""
			for(let j = 0;j < first_matrix.length;j++){
				for(let i = 0;i < first_matrix[j].length;i++){
					strpoint_before = strpoint_before + " " + first_matrix[j][i];
					strpoint_after = strpoint_after + " " + last_matrix[j][i];
				}
				strpoint_before = strpoint_before + "\n";
				strpoint_after = strpoint_after + "\n";
			}
			log("first matrix : \n"+strpoint_before+"\nResult Matix : \n"+strpoint_after);
		  
		  return rl.close(); 
		}else{
			inputurt++;
		}
	 
		recursiveAsyncReadLine(); 
	  });
	};
	recursiveAsyncReadLine();
});
function arrayClone( arr ) {
    var i, copy;
    if( Array.isArray( arr ) ) {
        copy = arr.slice( 0 );
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = arrayClone( copy[ i ] );
        }
        return copy;
    } else if( typeof arr === 'object' ) {
        throw 'Cannot clone array containing an object!';
    } else {
        return arr;
    }

}
function rotated(first_matrix, colomn) {
	var fix = arrayClone(first_matrix);
	var firstlog ="";
	var lenj = first_matrix.length;
	var middle_j = first_matrix.length/2;
	var middle_i = Math.round(colomn/2);
	var point = first_matrix;
	var resultmatrix = first_matrix;
	let finishmatrix = arrayClone(first_matrix);
	var strpoint = "";
	
	strpoint = "First Matrix : \n";
	for(let j = 0;j < resultmatrix.length;j++){
		for(let i = 0;i < resultmatrix[j].length;i++){
			strpoint = strpoint+" "+first_matrix[j][i];
			resultmatrix[j][i] = '*';
		}
		strpoint = strpoint + "\n";
	}
	var x = 0;
	var y = 0;
	var arrow = "A";
	var in_ = true;
	var urut = 0;
	var stir_x = 1;
	var stir_y = 0;
	var new_content = "";
	
		batas = 0;
		while(in_){
			if(urut==9){urut=0;}
			urut++;
			resultmatrix[y][x] = arrow;
			
			//log("y:"+y+" x:"+x);
			x = x + stir_x;
			y = y + stir_y;
			if(stir_x == 1){
				arrow = "A";
			}
			if(typeof resultmatrix[y+stir_y] !== 'undefined'){
				if(typeof resultmatrix[y+stir_y][x+stir_x] === 'undefined' || resultmatrix[y+stir_y][x+stir_x] != '*'){
					if(stir_x == 1){
						stir_x = 0;
						stir_y = 1;
						arrow = "B";
					}else if(stir_y == 1){
						stir_x = -1;
						stir_y = 0;
						arrow = "C";
					}else if(stir_x == -1){
						stir_x = 0;
						stir_y = -1;
						arrow = "D";
					}else if(stir_y == -1){
						stir_x = 1;
						stir_y = 0;
						arrow = "D";
					}
					if(y>0 && x > 0 &&
					   (resultmatrix[y-1][x] != '*' || typeof resultmatrix[y-1][x] === 'undefined') &&
					   (resultmatrix[y+1][x] != '*' || typeof resultmatrix[y+1][x] === 'undefined') &&
					   (resultmatrix[y][x-1] != '*' || typeof resultmatrix[y][x-1] === 'undefined') &&
					   (resultmatrix[y][x+1] != '*' || typeof resultmatrix[y][x+1] === 'undefined')){
						resultmatrix[y][x] = arrow;
						in_ = false;
					}else  if(y==1 && x == 0 &&
					   (resultmatrix[y-1][x] != '*' || typeof resultmatrix[y-1] === 'undefined') &&
					   (typeof resultmatrix[y+1] === 'undefined' || resultmatrix[y+1][x] != '*') &&
					   (resultmatrix[y][x-1] != '*' || typeof resultmatrix[y][x-1] === 'undefined') &&
					   (resultmatrix[y][x+1] != '*' || typeof resultmatrix[y][x+1] === 'undefined')){
						resultmatrix[y][x] = arrow;
						in_ = false;
					}
				}
			}else{
					if(stir_x == 1){
						stir_x = 0;
						stir_y = 1;
						arrow = "B";
					}else if(stir_y == 1){
						stir_x = -1;
						stir_y = 0;
						arrow = "C";
					}else if(stir_x == -1){
						stir_x = 0;
						stir_y = -1;
						arrow = "D";
					}else if(stir_y == -1){
						stir_x = 1;
						stir_y = 0;
						arrow = "D";
					}
					if(y==0 && x == 0 &&
					   typeof resultmatrix[y-1]    === 'undefined' &&
					   typeof resultmatrix[y+1]    === 'undefined' &&
					   typeof resultmatrix[y][x-1] === 'undefined' &&
					   typeof resultmatrix[y][x+1] === 'undefined'){
						resultmatrix[y][x] = arrow;
						in_ = false;
					}
			}
		}
	strpoint = strpoint + "\nMatrix Result: \n";
	for(let j = 0;j < resultmatrix.length;j++){
		for(let i = 0;i < resultmatrix[j].length;i++){
			var ok = "";
			if(resultmatrix[j][i] == "A"){
				ok = fix[j][i+1];
				finishmatrix[j][i] = fix[j][i+1];
			}else if(resultmatrix[j][i] == "B"){
				ok = fix[j+1][i];
				finishmatrix[j][i] = fix[j+1][i];
			}else if(resultmatrix[j][i] == "C"){
				ok = fix[j][i-1];
				finishmatrix[j][i] = fix[j][i-1];
			}else if(resultmatrix[j][i] == "D"){
				ok = fix[j-1][i];
				finishmatrix[j][i] = fix[j-1][i];
			}
			strpoint = strpoint+" "+ok;
		}
		strpoint = strpoint + "\n";
	}
	return finishmatrix;
}