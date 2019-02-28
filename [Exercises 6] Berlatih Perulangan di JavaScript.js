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