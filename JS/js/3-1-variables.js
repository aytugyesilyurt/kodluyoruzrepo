// ************ let ve const ile değişken tanımlama **********

// var ile değişken tanımlama
// var serverName = "kodluyoruz.org";

// let ile değişkeni boş tanımlamak
let serverName;
console.log(serverName);

// let ile değişkene bilgi almak
serverName = "http://www.google.com.tr";
console.log(serverName);

// let ile değişkene bilgi atayarak tanımlamak
let password = "password.123";
console.log(password);

// değişken ataması yapmadan kullanmaya çalışmak
// console.log(fullName);  // HATA VERİR
// let fullName = "Aytuğ YEŞİLYURT";

let fullName = "Aytuğ YEŞİLYURT";

// let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek
fullName = "Göktuğ YEŞİLYURT";
console.log(fullName);

// birleştirme veya ekleme işlemi
fullName + "Yeni Eklenen Bilgi"; // BU BİLGİYİ BİRŞEYE ATAMAK LAZIM
console.log(fullName + " Test Bilgisi");

fullName = fullName + " Yeni Bilgi";
console.log(fullName);

fullName = "Sıfırlandı";
fullName += " ve Yeni Bilgi eklendi";
console.log(fullName);

// const ile değişkeni boş tanımlamaya çalışmak
// const serverPassword; // sadece değişken tanımlandı HATALI KULLANIM

// const ile değişken tanımlamak
const SERVER_PASSWORD = "asdasdasd";
console.log(SERVER_PASSWORD);

SERVER_PASSWORD = "1234"; // CONST DEĞER DEĞİŞTİRİLEMEZ
console.log(SERVER_PASSWORD);
