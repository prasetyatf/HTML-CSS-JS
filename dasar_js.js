//dasar javascript by skillvul

// internal js <script></script>, external js <script src=""></script>

let namaVaribel = "Ini variabel yang dapat diubah";
const _namaVar = "Ini variabel yg tidak dapat diubah";

// aturan penulisan var: tidak boleh diawali angka, syntax js, @, !, #
// boleh diawali _, KayakGini, KayakGitu, kayak_begitu.
// jangan lupa titik koma
// tipe data: string, int, float, boolean, null(tidak ada), undefined(variabel kosong), symbol, object

console.log(namaVariabel); //ini untuk menampilkan hasil kodingan ke tool console di browser
// supaya tidak muncul di muka page

// operator aritmatika. sama kayak python + operator increment(++) & decrement(--)
/* assignment kyk python 
let bilangan += 1;
const angka **= 2; 
*/

//operator string +, +=
/* operator boolean sama kyk python

== berarti  sama dengan(cek nilai)

=== berarti  sama dengan(cek nilai & tipe data)

? : ternary
variabel = (kondisi true) ? nilai1 : nilai2;
Artinya apabila kondisi true, maka variabel akan diberi nilai1
Apabila kondisi false, maka variabel akan diberi nilai2
*/

// operator logika: &&, ||, ! (and, or, not)

// function
function iniFungsi(iniParameter){
  return iniParameter + "haha";
}
consol.log(iniFungsi("ini argument"));

iniJugaFungsi = function(){return "ini juga fungsi"};

// Function Hoisting adalah kita memanggil fungsi dulu, baru membuatnya. tidak berlaku jika fungsi di dalam variabel.

// Local Scope var & Global Scope var

