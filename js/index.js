// GERAL ====
// 1
let header = document.getElementsByTagName('header');
header[0].style.backgroundColor = '#2E948A';
// 2
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)');
linkCursos.setAttribute('href', 'cursos.html');


// HOME =====
// 1
document.querySelector('#introducao').style.justifyContent = 'center';
// 2
document.querySelector(".titulo.depoimento h3").innerHTML = "O que falam sobre nós";
// 3
document.querySelectorAll('.titulo h3')[1].innerHTML = 'Mais conteúdo pra você';
// 4
titulos = document.querySelectorAll('.titulo');
titulos.forEach((titulo) => {
    titulo.style.textTransform = "uppercase";
});
//5
document.querySelector('#todos_posts').setAttribute('href', './blog.html');
//6
let cursos = document.querySelector('#investimentos_poupando_independencia');
let novoCurso = document.createElement('div');

novoCurso.innerHTML = `<div id="independencia">
<img src="/imagens/independencia_financeira.png"
width="180px" alt="Independência Financeira">
<h2>Independência Financeira</h2>
<p>Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore
eu fugiat nulla pariatur. </p>
<a class="comecar_agora" href="./curso.html">começar
agora</a>
</div>`;

cursos.appendChild(novoCurso);

// CONTATO ====
formulario = document.getElementsByTagName('form');

let celular = document.createElement("input")
celular.setAttribute("type", "telefone")
celular.setAttribute("required", "")
celular.setAttribute("placeholder", "telefone")
let posicao = document.querySelector("textarea")
posicao.insertAdjacentElement("beforebegin", celular)


document.querySelector("textarea").setAttribute("style", "box-sizing: border-box")

document.querySelector("#enviar").setAttribute("style", "width:100px")


let comentarios = document.createElement("section")
comentarios.innerHTML = `
<div class="depoimentos" style= "display: flex; width: 570px; align-items: center; padding: 10px 50px">
    <img src="imagens/icon-wally.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam.”
        <br>
        <br>
        Wally, 25
    </p>
</div>
<div class="depoimentos" style= "display: flex; width: 570px; align-items: center; padding: 10px 50px">
    <img src="imagens/icon-jaden.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Jaden Smith, 23
    </p>
</div>
<div class="depoimentos" style= "display: flex; width: 570px; align-items: center; padding: 10px 50px">
    <img src="imagens/icon-whoopi.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Whoopi Goldberg, 37
    </p>
</div>
<div class="depoimentos" style= "display: flex; width: 570px; align-items: center; padding: 10px 50px">
    <img src="imagens/icon-jane.png" width="80px" height="80px" alt="depoimentos da dindim">
    <p>
        ”Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam.”
        <br>
        <br>
        Janes Joplin, 29
    </p>
</div>
`
comentarios.style.display = "flex"
comentarios.style.flexWrap = "wrap"
comentarios.style.flexDirection = "row"
comentarios.style.margin = "10px auto"
comentarios.style.maxWidth = "1500px"

document.querySelector("footer").insertAdjacentElement("beforebegin", comentarios)