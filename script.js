
const messages = [
 "Halooo Sayangkuu cantikku ",
      "pesan ini buat kamuu",
      "iyaa kamu doang pake nanya☺️",
      "sayaangg meskipun kisah kita terbilang baru namun akan ku pastikan",
      "kisah kita akan menjadi kisah yang sangat indah yang bisa diceritakan kelak.",
      "Aku Mencintaimu Sepertihalnya Langit Yang Selalu Indah Di segala Cuacanya",
      "Bagi Dunia Kamu memang Satu, Namun Bagiku Kamulah Dunia Itu sendiri",
      "Kita Kenal secara Tidak segaja,( yaa meskipun aku sendiri yang cari gara gara kadang kan :v)",
      "namun perasaanku kepadamu Memang benar adanya dan sangat sangat tulus (no fek fek)",
      "jangan pernah ragu menceritakan segala hal yang terjadi di sepanjang hidupmu",
      "asalkan kamu tau setiap hal aku adalah tentangmu dan akan selalu begitu",
      "maafkan laki lakimu ini yang masih belum bisa memenuhi ekspetasimu"
      "Terimakasih Telah kembali mewarnai hari hari gelapku",
      "Terimakasih sayangkuu",
      "harapanku kita akan selalu bersama hingga menjadi satu",
      "memang kata orang itu hal yang mustahil",
      "namun akan ku perjuangkan dengan sungguh-sungguh",
      "semoga setiap langkahmu diberikan kemudahan",
      "Lovee You three thousand moree sayanggg :)"
];

let index = 0;

function startWebsite() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('bg-music').play();
  showMessage();
}

function showMessage() {
  if (index < messages.length) {
    document.getElementById('text').innerText = messages[index];
    index++;
    setTimeout(showMessage, 3000);
  } else {
    document.getElementById('gallery').style.display = 'block';
  }
}
