const jadwal = [
  {
    id: 1,
    jam: "15:00 - 16:00",
    hari: "Senin-Jumat",
    nama: "Mempelajari dasar-dasar JavaScript seperti variabel, tipe data, dan operator.",
  },
  {
    id: 2,
    jam: "16:00 - 17:00",
    hari: "Senin-Jumat",
    nama: "Belajar tentang control flow seperti percabangan dan perulangan.",
  },
  {
    id: 3,
    jam: "19:00 - 20:00",
    hari: "Senin-Jumat",
    nama: "Mempelajari konsep function dan scope.",
  },
  {
    id: 4,
    jam: "20:00 - 21:00",
    hari: "Senin-Jumat",
    nama: "Mempelajari manipulasi DOM dan Event Handling.",
  },
  {
    id: 5,
    jam: "21:00 - 22:00",
    hari: "Senin-Jumat",
    nama: "Belajar tentang AJAX dan jQuery.",
  },
  {
    id: 6,
    jam: "22:00 - 23:00",
    hari: "Senin-Jumat",
    nama: "Praktek membuat projek sederhana dengan JavaScript.",
  },
  {
    id: 7,
    jam: "09:00 - 11:00",
    hari: "Sabtu-Minggu",
    nama: "Belajar tentang konsep Object Oriented Programming (OOP).",
  },
  {
    id: 8,
    jam: "11:00 - 13:00",
    hari: "Sabtu-Minggu",
    nama: "Mempelajari tentang framework JavaScript seperti React atau VueJS.",
  },
  {
    id: 9,
    jam: "13:00 - 14:00",
    hari: "Sabtu-Minggu",
    nama: "Istirahat dan makan siang.",
  },
  {
    id: 10,
    jam: "14:00 - 16:00",
    hari: "Sabtu-Minggu",
    nama: "Praktek membuat projek dengan menggunakan framework JavaScript.",
  },
  {
    id: 11,
    jam: "18:00 - 20:00",
    hari: "Sabtu-Minggu",
    nama: "Mempelajari konsep asinkronus dengan JavaScript.",
  },
  {
    id: 12,
    jam: "20:00 - 22:00",
    hari: "Sabtu-Minggu",
    nama: "Mempelajari tentang NodeJS dan ExpressJS.",
  },
  {
    id: 13,
    jam: "22:00 - 23:00",
    hari: "Sabtu-Minggu",
    nama: "Praktek membuat projek dengan menggunakan NodeJS dan ExpressJS.",
  },
];

// The code

const jadwalSeninJumat = document.querySelector("[data-jadwal-senin-jumat]");
const jadwalSabtuMinggu = document.querySelector("[data-jadwal-sabtu-minggu]");

jadwal.forEach((element) => {
  if (element.hari === "Senin-Jumat") {
    jadwalSeninJumat.innerHTML += `
          <div class="item-wrapper">
          <div class="jam-warpper">
            <p class="jam">${element.jam}</p>
            </div>
            <p class="item-jadwal">${element.nama}</p>
          </div>
    `;
  } else {
    jadwalSabtuMinggu.innerHTML += `
          <div class="item-wrapper">
          <div class="jam-warpper">
          <p class="jam">${element.jam}</p>
          </div>
            <p class="item-jadwal">${element.nama}</p>
          </div>
    `;
  }
});
