/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// Type Error : TypeError muncul jika user menggunakan nilai yang berada di luar kisaran tipe yang diharapkan.
/// ReferenceError : muncul ketika variable reference yang tidak dideklarasikan terlebih dahulu.
/// RangeError : muncul jika penggunaan angka diluar range atau jangkauan nilai yang ada.
/// SyntaxError : muncul jika kita mencoba untuk mengimplimentasikan syntax yang salah.
///
/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// baris kode ini akan memunculkan kata undefined ketika di inspect console.
/// termasuk dalam ReferenceError
/// karena variablenya belum di deklerasikan

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;