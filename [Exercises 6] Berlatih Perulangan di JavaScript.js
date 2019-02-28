//No 1. Melakukan Looping Menggunakan While

var judul1="LOOPING PERTAAMA"
var judul2="LOOPING KEDUA"
var i= 1
var j= 20

console.log(judul1)
while(i<=20){
  if(i%2==0){
    console.log(''+ i +' -love coding')
  }
  i++;
}

console.log(judul2)
while(j>=2){
  if(j%2==0){
    console.log(''+ j +' -I will become fullstack developer')
  }
  j--;
}

//No 2. Melakukan Looping Menggunakan For
console.log(judul1)
for (var a = 1; a <= 20; a++) {
  console.log(''+ a +' -love coding')
}

console.log(judul2)
for (var b=20; b>=1; b--){
  console.log(''+ b +' -I will become fullstack developer')
}

//No 3. Angka Ganjil dan Genap

    // contoh Ganjil-Genap

for (var c=1; c<=100; c++){
  if (c%2===0){
    console.log(''+c+' GENAP')
  }
  else{
    console.log(''+c+' GANJIL')
  }
}

    //contoh  - untuk pertambahan counter 2
for (var d=1; d<=100; d+=2){
  if(d%3===0){
    console.log(''+d+' KELIPATAN 3')
  }  
  else{
    console.log(d)
  }
}

    //contoh - untuk pertambahan counter 5
for (var e=1; e<=100; e+=5){
  if(e%6===0){
    console.log(''+e+' KELIPATAN 6')
  }  
  else{
    console.log(e)
  }
}

    //contoh - untuk pertambahan counter 9
for (var f=1; f<=100; f+=9){
  if(f%10===0){
    console.log(''+f+' KELIPATAN 10')
  }  
  else{
    console.log(f)
  }
}