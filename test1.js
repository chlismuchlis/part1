const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
Number.prototype.noExponents= function(){
    var data= String(this).split(/[eE]/);
    if(data.length== 1) return data[0]; 

    var  z= '', sign= this<0? '-':'',
    str= data[0].replace('.', ''),
    mag= Number(data[1])+ 1;

    if(mag<0){
        z= sign + '0.';
        while(mag++) z += '0';
        return z + str.replace(/^\-/,'');
    }
    mag -= str.length;  
    while(mag--) z += '0';
    return str + z;
}
readline.question(`Give 1-100 number : `, (name) => {
  if (isNaN(name)) {
    console.log('This is not number');
  }else{
	console.log(`Your Number : ${name}`)
	  var temp = 1;
	  for(var i = 0; i <= name-1; i++){
		temp = temp * (name-i);
		//console.log(name-i);
		//name--;
	  }
	  
	  console.log('Result !N :' + temp.noExponents());
  }
  
  readline.close()
})