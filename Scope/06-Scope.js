/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
///- ada berapa banyak jumlah variable scope pada Javascript?
///- jabawan ada 2 = Global Scope dan Local Scope 
///- jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// Global Scooe = Variabel yang kita buat dapat diakses di manapun dalam suatu file
/// agar menjadi Global Scope, suatu variabel harus dideklarasikan diluar blocks
/// Local Scope = Variabel yang di deklarasikan didalam blocks seperti function, conditional, dan looping.
/// maka variabel hanya bisa diakses didalam blocks saja, tidak bisa diakses diluar blocks.
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

///implemtasi Scope secara global scope
const myName = "Dandy";
function greeting () {
    return myName ;
}
console.log(myName);
/// implementasi Scope secara local scope
function greeting() {
    let myName = 'Dandy' ;
    return myName ;
}
console.log(greeting())



/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?
/// 

/// WRITE YOUR ANALYSIS HERE
///
///hasil console.log akan menampilkan nama "Mariah"
///karena pada console.log yang diinginkan adalah parameter yang terdapat pada function (printFirstName). 
///Mengapa tidak  John Watson karena tidak di panggil di console.log kecuali console.log(printFirstName("Mariah Carey")); di ganti dengan console.log (name);


const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));