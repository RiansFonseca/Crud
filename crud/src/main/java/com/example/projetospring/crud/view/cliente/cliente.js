document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formCliente").addEventListener("submit", function (event) {
        event.preventDefault();

        // Obter os dados do formulário
        var formData = new FormData(document.getElementById("formcliente"));
        var jsonData = {};

        formData.forEach(function (value, key) {
            jsonData[key] = value;
        });

        // Fazer a requisição POST
        fetch("http://127.0.0.1:8080/clientes/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData),
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log("Cliente cadastrado com sucesso:", data);
                // Adicionar lógica para atualizar a tabela ou fazer outras ações necessárias
            })
            .catch(function (error) {
                console.error("Erro ao cadastrar cliente:", error);
            });
    });
});