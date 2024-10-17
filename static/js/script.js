 // Seleciona o botão
 let btnTop = document.getElementById("btnTop");

 // Mostrar o botão quando rolar 20px para baixo
 window.onscroll = function() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         btnTop.style.display = "block";
     } else {
         btnTop.style.display = "none";
     }
 };

 // Quando o usuário clicar no botão, rolar até o topo da página
 btnTop.onclick = function() {
     document.body.scrollTop = 0; // Para Safari
     document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
 };