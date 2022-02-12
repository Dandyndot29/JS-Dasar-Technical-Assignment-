/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary){

         if(salary < 5000000)
         {
        let pajak = salary * 0;
        console.log("Salary : " + salary)
        console.log("total pajak yang harus di bayarkan : " + (pajak));
         }else if (salary >= 5000000 && salary < 10000000) {
        let pajak = salary * 5 / 100;
        console.log("Salary : " + salary);
        console.log("total pajak yang harus di bayarkan : " + (pajak));
        }else if (salary >= 10000000 && salary <20000000 ) {
            let pajak = salary * 10 / 100;
            console.log("Salary : " + salary);
            console.log("total pajak yang harus di bayarkan : " + (pajak));
        }else {
            let pajak = salary * 20 / 100 ;
            console.log("salary : " + salary);
            console.log( "total pajak yang harus di bayarkan : " + (pajak));
        }
        return taxCalc;
    }
    taxCalc (5000000);

    /// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
///function checkBMI(....) { .... }

function checkBMI (weight,height) {
    let BMI = checkBMI = (weight / (height * height) * 10000);
    if (BMI < 18.5 ) {
        console.log('under weight');
    }else if (BMI > 18.5 && BMI < 24.9 ) {
        console.log('normal');
     } else if (BMI > 25 && BMI < 29.9 ) {
            console.log('over wight');
       }  else if (BMI > 30 && BMI < 34.9) {
                console.log('obese');
         }  else if ( BMI > 35) {
                    console.log('extremely obese');
         }else {
                        return checkBMI()
                    }
                }
                checkBMI (80,160)


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE

///let text = "hello sumbawa";
///let result = text.toUpperCase() && str[i].substr(1);
///console.log(result);
///
//function uppercase(str)
//{
 // var array1 = str.split(' ');
 /// var newarray1 = [];
    
 // for(var x = 0; x < array1.length; x++){
 ///     newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
 /// }
 /// return newarray1.join(' ');
///}
////console.log(uppercase("hello sumbawa"));

function convToUpperCase (sentence)
{
    return sentence.replace (/\w\S*/g, function(text)
    {return text.charAt(0).toUpperCase()+ text.substr(1).toLowerCase()})
}
console.log(convToUpperCase("hello bandung"));

/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE

function firstNonRepeatedChar(checkWord) { 
    let huruf;
    for (let i = 0; i < checkWord.length; i++) {
        huruf = checkWord[i];
        if (huruf == " ") {
          return "Kata tidak boleh dipisah"
        } 
    }
    for (let i = 0; i < checkWord.length; i++) {
      huruf = checkWord[i];
      let checking = false;
      for (let j = 0; j < checkWord.length; j++) {
        if (huruf == checkWord[j] && j != i) {
          checking = true;
        }
        
      }
      if (checking == false) {
        return huruf;
      }
    } return "";

  }
console.log(firstNonRepeatedChar("hello world"));
console.log(firstNonRepeatedChar("alloha"));


