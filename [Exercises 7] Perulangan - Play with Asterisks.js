// No. 1. Menyusun Barisan Bintang
for (var i=1;i<=5;i++){
  console.log('*')
}

// No. 2. Menyusun Barisan Bintang Dengan Nested Looping
var s='';

for(var k=0; k<5; k++){
    for(var l=0; l<5; l++){
      s += '*'
    }  
  s += '\n'
}
console.log(s);

// No. 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var s='';

for(var m=0; m<5; m++){
    for(var n=0; n<=m; n++){
      s += '*'
    }  
  s += '\n'
}
console.log(s);
