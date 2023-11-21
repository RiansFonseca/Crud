document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formcliente").addEventListener("submit", (evt) => {
        let formData = new FormData(document.getElementById("formcliente"));

        if (formData.get("id").trim() == "") {
            methodType = "POST";
        }else{
            methodType = "PUT";
        }
        fetch("http://localhost:8080/clientes/cadastrar", {
            method: methodType,
            headers: [
                ["Content-Type", "application/json"],
            ],
            credentials: "include",
            body: JSON.stringify(Object.fromEntries(formData))
        }).then(() => {
            getClientes();
        }).catch(erro => {
            console.log("erro no submit");

        });
        document.getElementById("formcliente").reset();
        //enviar os dados para o sevidor
        evt.preventDefault();// evita o submit para não dar reload na tela já que os dados serão enviados pelo fetch
    });

    getClientes();
});

function getClientes(){
    fetch("http://localhost:8080/clientes/buscatodos", {
        method: "GET",
        headers: [
            ["Content-Type", "application/json"],
        ],
        credentials: "include"
    }).then(response => {
        response.json().then(clientes=>{
            let table = limparTabela();
            clientes.forEach((cliente) => {
                var newRow = table.insertRow();
                newRow.innerHTML = `
                    <tr>
                        <td>${cliente.nome}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.idade}</td>
                    </tr>
                `
            });    
        });        
    }).catch(erro => {
        console.log("erro no getClientes");
    });
}

function limparTabela() {
    let table = document.getElementById("tablecliente");
    var rowCount = table.rows.length;
    for (var x = rowCount - 1; x > 0; x--) {
        table.deleteRow(x);
    }
    return table;
}
