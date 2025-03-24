const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

// Sidebar toggle islemi
menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// Sayfa y�klendiginde ve boyut degisimlerinde sidebar durumunu ayarlama
function adjustSidebar() {
    if (window.innerWidth <= 576) {
        sidebar.classList.add('hide');  // 576px ve alti i�in sidebar gizli
        sidebar.classList.remove('show');
    } else {
        sidebar.classList.remove('hide');  // 576px'den b�y�kse sidebar g�r�n�r
        sidebar.classList.add('show');
    }
}

// Sayfa y�klendiginde ve pencere boyutu degistiginde sidebar durumunu ayarlama
window.addEventListener('load', adjustSidebar);
window.addEventListener('resize', adjustSidebar);

// Arama butonunu toggle etme
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 768) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})

// Dark Mode Switch
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})

// Notification Menu Toggle
document.querySelector('.notification').addEventListener('click', function () {
    document.querySelector('.notification-menu').classList.toggle('show');
    document.querySelector('.profile-menu').classList.remove('show'); // Close profile menu if open
});

// Profile Menu Toggle
document.querySelector('.profile').addEventListener('click', function () {
    document.querySelector('.profile-menu').classList.toggle('show');
    document.querySelector('.notification-menu').classList.remove('show'); // Close notification menu if open
});

// Close menus if clicked outside
window.addEventListener('click', function (e) {
    if (!e.target.closest('.notification') && !e.target.closest('.profile')) {
        document.querySelector('.notification-menu').classList.remove('show');
        document.querySelector('.profile-menu').classList.remove('show');
    }
});

// Men�lerin a�ilip kapanmasi i�in fonksiyon
    function toggleMenu(menuId) {
      var menu = document.getElementById(menuId);
      var allMenus = document.querySelectorAll('.menu');

      // Diger t�m men�leri kapat
      allMenus.forEach(function(m) {
        if (m !== menu) {
          m.style.display = 'none';
        }
      });

      // Tiklanan men� varsa a�, yoksa kapat
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    }

    // Baslangi�ta t�m men�leri kapali tut
    document.addEventListener("DOMContentLoaded", function() {
      var allMenus = document.querySelectorAll('.menu');
      allMenus.forEach(function(menu) {
        menu.style.display = 'none';
      });
    });