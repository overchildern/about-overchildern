/* Menu Active Codes */

let targets = document.querySelectorAll('[data-target]')
targets.forEach(element => {
  element.addEventListener('click', () => {
    var target = document.querySelector(element.dataset.target)
    targets.forEach(element2 => {
      var target2 = document.querySelector(element2.dataset.target)
      element2.style.color = 'var(--menu_text_color)'
      target2.style.display = 'none'
    });
    element.style.color = 'var(--menu_active_text_color)'
    target.style.display= 'flex'
  })
})

//adding pop up ads
        // Menampilkan pop-up setelah halaman dimuat
        window.onload = function() {
            setTimeout(function() {
                document.getElementById("popup").style.display = "block";
            }, 3000); // Pop-up muncul setelah 3 detik
        };

        // Menutup pop-up ketika tombol "Tutup" diklik
        document.getElementById("close-btn").onclick = function() {
            document.getElementById("popup").style.display = "none";
        };
