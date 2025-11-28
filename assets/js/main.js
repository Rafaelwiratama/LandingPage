function initMap() {
  const lokasiMuseum = { lat: -7.2275672, lng: 112.7425028 };

  const mapElement = document.getElementById("googleMap");
  if (!mapElement) return;

  const map = new google.maps.Map(mapElement, {
    zoom: 17,
    center: lokasiMuseum,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
  });

  new google.maps.Marker({
    position: lokasiMuseum,
    map: map,
    title: "Museum Bank Indonesia Surabaya",
    animation: google.maps.Animation.DROP,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.startsWith("#")) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = 70;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    });
  });

  const form = document.getElementById("visitor-form");
  const alertBox = document.getElementById("form-alert");
  const tbody = document.getElementById("visitor-table-body");
  const resetBtn = document.getElementById("reset-btn");

  function getRowCount() {
    return tbody ? tbody.querySelectorAll("tr").length : 0;
  }

  if (form && tbody && alertBox) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      const email = document.getElementById("email").value.trim();
      const pesan = document.getElementById("pesan").value.trim();

      if (!nama || !email || !pesan) {
        alertBox.textContent = "Mohon lengkapi semua field.";
        alertBox.classList.add("error");
        return;
      }

      const row = document.createElement("tr");
      const noCell = document.createElement("td");
      const namaCell = document.createElement("td");
      const emailCell = document.createElement("td");
      const pesanCell = document.createElement("td");

      noCell.textContent = getRowCount() + 1;
      namaCell.textContent = nama;
      emailCell.textContent = email;
      pesanCell.textContent = pesan;

      row.appendChild(noCell);
      row.appendChild(namaCell);
      row.appendChild(emailCell);
      row.appendChild(pesanCell);

      tbody.appendChild(row);

      form.reset();
      alertBox.textContent = "Terima kasih, data kamu telah ditambahkan ke tabel.";
      alertBox.classList.remove("error");
    });
  }

  if (resetBtn && tbody && alertBox) {
    resetBtn.addEventListener("click", function () {
      while (tbody.rows.length > 1) {
        tbody.deleteRow(1);
      }
      alertBox.textContent = "";
      alertBox.classList.remove("error");
    });
  }
});
