let valorTotalVendido = 0;
        let quantidadeVendas = 0;

        function lancarVenda() {
            // Obter o valor do input
            const valorVenda = document.getElementById('valorVenda').value;

            // Converter para número
            const valorVendaNum = Number(valorVenda);

            // Verificar se é um número válido
            if (isNaN(valorVendaNum) || valorVendaNum <= 0) {
                document.getElementById('resultadoNegativo').textContent = "Por favor, digite um valor de venda válido.";
            } else {
                // Atualizar os valores globais
                valorTotalVendido += valorVendaNum;
                quantidadeVendas += 1;

                // Exibir os resultados
                document.getElementById('valorTotalVendido').textContent = "R$ " + valorTotalVendido.toFixed(2);
                document.getElementById('totalVendas').textContent = quantidadeVendas;
                document.getElementById('resultadoNegativo').textContent = "Venda registrada com sucesso!";
            }
        }