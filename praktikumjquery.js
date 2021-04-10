/**
 * Kode Vanilla Javascript(Javascript Murni) untuk Menambahkan Value
 * pada elemen HTML
 */
document.getElementById('nama').innerHTML = 'Annisa Yasfa Nabilla';

/**
 * Kode Jquery untuk menambahkan value
 * pada elemen HTML
 */
$('#nim').html('20190140043');

/**
 * Jquery menggunakan selector sama seperti css
 * . untuk class
 * #untuk id
 * kita dapat menuliskan tag html bila ingin memilih berdasarkan tag
 * misal: <button></button maka tinggal tulis button
 * Dalam kode berikut, kita akan menampilkan console.log saat document ready
 */
$(function(){
    console.log("Hello");
});

//Kode Jquery untuk menyembunyikan elemen
$("#hide").on("click", function(){
    $("#nama").hide();
});

//Kode Jquery untuk menampilkan kembali elemen
$("#show").on("click", function(){
    $("#nama").show();
});

//Coba Ini
$("#toggle").on("click", function(){
    $("#nama").toggle();
})

//Kode Jquery untuk Fade In Elemen HTML
$("#fadeIn").on("click", function(){
    $("#tanggal").fadeIn();
});

//Kode Jquery untuk Fade Out Elemen HTML
$("#fadeOut").on("click", function(){
    $("#tanggal").fadeOut();
});

//Coba Ini
$("#fadeToggle").on("click", function(){
    $("#tanggal").fadeToggle();
});

//Kode Jquery untuk Slide Up Elemen HTML
$("#slideUp").on("click", function(){
    $("#img").slideUp();
});

//Kode Jquery untuk Slide Up Elemen HTML
$("#slideDown").on("click", function(){
    $("#img").slideDown();
});

//Coba Ini
$("#slideToggle").on("click", function(){
    $("#img").slideToggle();
});