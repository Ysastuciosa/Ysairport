function limparTelas() {
    document.querySelectorAll(".tela").forEach(t => {
        t.classList.remove("ativa");
    });
}

function mostrarTela(num) {
    limparTelas();
    document.getElementById("cardapio" + num).classList.add("ativa");
}

function voltarInicio() {
    limparTelas();
    document.getElementById("inicio").classList.add("ativa");
}
