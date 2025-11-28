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

  const STORAGE_KEY = 'pengunjung_mbi_surabaya';

  function getLocalData() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw) || [];
    } catch (e) {
      return [];
    }
  }

  function setLocalData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function renderTable(initialData, extraData) {
    const combined = [...initialData, ...extraData];
    $tbody.empty();

    if (combined.length === 0) {
      $tbody.append(
        `<tr><td colspan="4" class="text-center text-muted">Belum ada data pengunjung.</td></tr>`
      );
      return;
    }

    combined.forEach((item, index) => {
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

  let initialDataCache = [];

  function loadInitialData() {
    return $.getJSON('assets/data/pengunjung.json')
      .then(function (data) {
        if (Array.isArray(data)) {
          initialDataCache = data;
        } else {
          initialDataCache = [];
        }
      })
      .catch(function () {
        initialDataCache = [];
      });
  }

  function initTable() {
    const extra = getLocalData();
    renderTable(initialDataCache, extra);
  }

  loadInitialData().then(initTable);

  $('#reload-btn').on('click', function () {
    loadInitialData().then(initTable);
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

    const extra = getLocalData();
    extra.push({ nama, email, pesan });
    setLocalData(extra);

    renderTable(initialDataCache, extra);

    $alert
      .removeClass()
      .addClass('alert alert-success')
      .text('Terima kasih! Data kamu tersimpan di browser ini.');
    $form[0].reset();
  });
});
