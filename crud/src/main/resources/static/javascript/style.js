
var btnabrir = document.getElementsByClassName("btnabrir");
var btnfechar = document.getElementsByClassName("btnfechar");

for (var i = 0; i < btnabrir.length; i++) {
    btnabrir[i].addEventListener('click', function() {
        document.getElementsByClassName("menu")[0].style.width = "150px";
        document.getElementsByClassName("conteudo")[0].style.marginLeft="160px"
    });
}

for (var i = 0; i < btnfechar.length; i++) {
    btnfechar[i].addEventListener('click', function() {
        document.getElementsByClassName("menu")[0].style.width = "0px";
        document.getElementsByClassName("conteudo")[0].style.marginLeft="10px"
    });
}
var elementoParaMudarCor = document.getElementsByClassName("item")
for (var i = 0; i < elementoParaMudarCor.length; i++) {

    elementoParaMudarCor[i].addEventListener('mouseover', function() {
        this.style.backgroundColor = '#247ba0';
    });

    elementoParaMudarCor[i].addEventListener('mouseout', function() {
        this.style.backgroundColor = '#000035';
    });
}
