document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formproduto").addEventListener("submit", (evt) => {
        let formData = new FormData(document.getElementById("formproduto"));

        if (formData.get("id").trim() == "") {
            methodType = "POST";
        }else{
            methodType = "PUT";
        }
        fetch("http://localhost:8080/produtos/cadastrar", {
            method: methodType,
            headers: [
                ["Content-Type", "application/json"],
            ],
            credentials: "include",
            body: JSON.stringify(Object.fromEntries(formData))
        }).then(() => {
            getprodutos();
        }).catch(erro => {
            console.log("erro no submit");

        });
        document.getElementById("formproduto").reset();
        //enviar os dados para o sevidor
        evt.preventDefault();// evita o submit para não dar reload na tela já que os dados serão enviados pelo fetch
    });

    getprodutos();
});

function getprodutos(){
    fetch("http://localhost:8080/produtos/buscatodos", {
        method: "GET",
        headers: [
            ["Content-Type", "application/json"],
        ],
        credentials: "include"
    }).then(response => {
        response.json().then(produtos=>{
            let table = limparTabela();
            produtos.forEach((produto) => {
                var newRow = table.insertRow();
                newRow.innerHTML = `
                    <tr>
                        <td>${produto.nome}</td>
                        <td>${formatarPreco(produto.preco)}</td>
                        <td>${formatarData(produto.validade)}</td>
                    </tr>
                `
            });    
        });        
    }).catch(erro => {
        console.log("erro no getprodutos");Epydemia
    });
}

function formatarData(data) {

    let df = new Date(data);
    let dataFormatada = (df.getUTCDate()) + "/" + (df.getUTCMonth() + 1) + "/" + df.getUTCFullYear();
    return dataFormatada;
}

function formatarPreco(preco) {
    let precoFormatado = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(preco);
    return precoFormatado;
}

function limparTabela() {
    let table = document.getElementById("table");
    var rowCount = table.rows.length;
    for (var x = rowCount - 1; x > 0; x--) {
        table.deleteRow(x);
    }
    return table;
}
