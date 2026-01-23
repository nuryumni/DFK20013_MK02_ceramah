document.getElementById("borang").addEventListener("submit", function (e) {
    e.preventDefault();

    const harga = 100;

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let kategori = document.getElementById("kategori").value;
    let slot = Number(document.getElementById("slot").value);

    let jumlah = harga * slot;

    let paparan = `
        <h3>Pengesahan Pendaftaran</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>E-mel:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Kategori:</strong> ${kategori}</p>
        <p><strong>Bilangan Slot:</strong> ${slot}</p>
        <p><strong>Jumlah Yuran:</strong> RM ${jumlah.toFixed(2)}</p>
    `;

    let pengesahan = document.getElementById("pengesahan");
    pengesahan.innerHTML = paparan;
    pengesahan.style.display = "block";
});
