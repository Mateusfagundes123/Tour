 document.addEventListener("DOMContentLoaded", function () {
    const btnMenu = document.getElementById("btn-menu");
    const menu = document.getElementById("menu");
    const fecharMenu = document.getElementById("fechar-menu");

    const btnBlocos = document.getElementById("btn-blocos");
    const submenuBlocos = document.getElementById("submenu-blocos");

    btnMenu.addEventListener("click", function (event) {
      event.preventDefault();
      menu.classList.add("open");
    });

    fecharMenu.addEventListener("click", function () {
      menu.classList.remove("open");
      submenuBlocos.classList.add("oculto"); 
    });

    btnBlocos.addEventListener("click", function () {
      submenuBlocos.classList.toggle("oculto");
      btnBlocos.textContent = submenuBlocos.classList.contains("oculto") ? "Blocos ▾" : "Blocos ▴";
    });
  });