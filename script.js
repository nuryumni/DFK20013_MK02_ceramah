const borang = document.getElementById("borang");
const tableBody = document.getElementById("tablePendaftaran").querySelector("tbody");
const confirmation = document.getElementById("confirmation");

borang.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const kategori = document.getElementById("kategori").value;
    const slot = document.getElementById("slot").value;

    let resitInput = document.getElementById("resit");
    let resit = resitInput.files.length > 0 ? resitInput.files[0].name : "";

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${nama}</td>
        <td>${email}</td>
        <td>${telefon}</td>
        <td>${kategori}</td>
        <td>${slot}</td>
        <td>${resit}</td>
    `;
    tableBody.appendChild(row);

    confirmation.textContent = `Terima kasih ${nama}, pendaftaran anda berjaya!`;
    confirmation.style.display = "block";

    borang.reset();
});
