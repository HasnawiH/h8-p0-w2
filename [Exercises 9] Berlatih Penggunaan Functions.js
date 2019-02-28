// Tugas 1

function shoutOut(){
    var string ='Halo function!'
    return string
}
console.log(shoutOut())

// Tugas 2

function calculateMultiply(){
    hasilPerkalian= num1*num2
    return hasilPerkalian
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian=calculateMultiply(num1,num2)
console.log(hasilPerkalian) // Menampilkan angka 30
 
// Tugas 3

function processSentence(){
    console.log("Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"! ")
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 