function isCreditCard(card) {
    var card_bilgisi = "" + card        //girilen kart bilgisi string e yaziyoruz
    var check = false
    let length = card_bilgisi.length
    let sonRakam = parseInt(card_bilgisi[length - 1]) % 2   // son rakam 2 ye gore modunu aliyoruz ki cift mi kontrol edebilelim
    var toplam = 0
    let sayac = 1
    
    for (let i = 0; i < length; i++) {
        toplam += parseInt(card_bilgisi[i])     //rakamlarin toplamini hesapliyoruz
        for (let j = 1; j < length - 1; j++) {  //rakamlardan birden fazla olmasi durumunda sayaci bir arttirdik
            if (card_bilgisi[i] != card_bilgisi[j]) {
                sayac += 1
            }
        }

    }
    
    // kosullari kontrol ediyoruz; tum rakamlar int mi? uzunluk 16 mi? son rakam cift mi? birden fazla rakam mevcut mu?
    // ve rakamlar toplami 16 dan buyuk mu?
    if (Number.isInteger(card) && length == 16 && sonRakam == 0
        && sayac >= 2 && toplam > 16) {
        check = true
        return check
    }
    if (Number.isInteger(card) == false) {      // rakam disinda bir karakter icermesi durumunda verilicek mesaj
        console.log("Geçersiz karakterler.")
        return check
    }
    if (sayac == 1) {       //Tum rakamlarin ayni olmasi durumunda verilicek mesaj
        console.log("Tüm rakamlar aynı olamaz.")
        return check
    }
    if (toplam <= 16) {     //Rakamlarin toplami 16 dan kucuk olmasi durumunda verilecek mesaj
        console.log("Rakamların toplamı 16 dan büyük olmalıdır.")
        return check
    }
    if (sonRakam != 0) {    //Son rakamin cift olmamasi durumunda verilecek mesaj
        console.log("Son rakam çift olmalıdır.")
        return check
    }
}

isCreditCard(9999777788880002)
