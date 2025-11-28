document.querySelectorAll('a.nav-link[href^="#"], a.btn[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    }
  });
});

$(function () {
  const $form = $('#visitor-form');
  const $alert = $('#form-alert');
  const $tbody = $('#visitor-table-body');

  function renderTable(data) {
    $tbody.empty();

    if (!data || data.length === 0) {
      $tbody.append(
        `<tr><td colspan="4" class="text-center text-muted">Belum ada data pengunjung.</td></tr>`
      );
      return;
    }

    data.forEach((item, index) => {
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${item.nama}</td>
          <td>${item.email}</td>
          <td>${item.pesan}</td>
        </tr>`;
      $tbody.append(row);
    });
  }

  const dummyData = [
    { nama: 'Contoh Pengunjung', email: 'contoh@mail.com', pesan: 'Pengalaman sangat menyenangkan!' },
    { nama: 'Dosen PWEB', email: 'dosen@kampus.ac.id', pesan: 'Landing page ini sudah pakai JS, jQuery, AJAX, PHP & MySQL.' },
  ];

  function loadData() {
    $.ajax({
      url: 'ambil_pengunjung.php',
      method: 'GET',
      dataType: 'json',
      success: function (res) {
        if (res && Array.isArray(res)) {
          renderTable(res);
        } else {
          renderTable(dummyData);
        }
      },
      error: function () {
        renderTable(dummyData);
      },
    });
  }

  loadData();

  $('#reload-btn').on('click', function () {
    loadData();
  });

  $form.on('submit', function (e) {
    e.preventDefault();

    const nama = $('#nama').val().trim();
    const email = $('#email').val().trim();
    const pesan = $('#pesan').val().trim();

    if (!nama || !email || !pesan) {
      $alert
        .removeClass()
        .addClass('alert alert-warning')
        .text('Mohon lengkapi semua field sebelum mengirim.');
      return;
    }

    $.ajax({
      url: 'simpan_pengunjung.php',
      method: 'POST',
      data: { nama, email, pesan },
      dataType: 'json',
      success: function (res) {
        if (res && res.status === 'ok') {
          $alert
            .removeClass()
            .addClass('alert alert-success')
            .text('Data berhasil disimpan!');
          $form[0].reset();
          loadData();
        } else {
          $alert
            .removeClass()
            .addClass('alert alert-danger')
            .text(res.message || 'Terjadi kesalahan saat menyimpan data.');
        }
      },
      error: function () {
        $alert
          .removeClass()
          .addClass('alert alert-danger')
          .text('Gagal terhubung ke server. Pastikan PHP & MySQL aktif.');
      },
    });
  });
});
