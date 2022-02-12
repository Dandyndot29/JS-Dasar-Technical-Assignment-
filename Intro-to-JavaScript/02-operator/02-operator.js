/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

///Pengeluaran
let gundam = 750000
let makan = 2000000
let kost = 1000000
let subscription = 250000
let hasilPengeluaran = gundam + makan + kost + subscription;

///Gaji
let gajiPokok = 5000000 ;
let gajiBonus = gajiPokok * 10 / 100;
let gajiLembur = gajiPokok * 5 / 100;
let hasilGaji = gajiPokok + gajiBonus + gajiLembur;

///Sisa Gaji
const sisaGaji = hasilGaji-hasilPengeluaran;
console.log("Sisa Hasil Gaji : " + sisaGaji);

///sisaGaji should be 1.750.000


///Soal - 02
///Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame = Boolean;
console.log(isSame(oneInString == oneInNumber));

///isSame should be true



/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher = Boolean
console.log(isHigher(studentA >= studentB));

///isHigher should be false


/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final = oneInString === oneInNumber
console.log(final);

///final should be false