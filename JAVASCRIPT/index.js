let totalVendas = 0;
        let valorTotalVendas = 0;

        // Função para abrir o modal
        function abrirModal() {
            document.getElementById('modalNovaVenda').style.display = 'block';
        }

        // Função para fechar o modal
        function fecharModal() {
            document.getElementById('modalNovaVenda').style.display = 'none';
        }

        // Função para adicionar uma nova venda
        function adicionarVenda(valor, data, tipo, quantidade) {
            const vendasContainer = document.getElementById('vendas');
            const novaVenda = document.createElement('div');
            novaVenda.classList.add('venda');
            novaVenda.textContent = `Venda realizada: R$${valor.toFixed(2)} em ${new Date(data).toLocaleDateString()} - Tipo: ${tipo} - Quantidade: ${quantidade}`;
            vendasContainer.appendChild(novaVenda);

            const hoje = new Date().toISOString().split('T')[0]; // Data de hoje no formato yyyy-mm-dd
            if (data === hoje) {
                valorTotalVendas += valor * quantidade;
                totalVendas += quantidade;
                atualizarInfoVendas();
            }
        }

        // Função para atualizar as informações de vendas no retângulo
        function atualizarInfoVendas() {
            document.getElementById('valorTotal').textContent = `R$${valorTotalVendas.toFixed(2).replace('.', ',')}`;
            document.getElementById('totalVendas').textContent = totalVendas;
        }

        // Configura o evento de clique do botão após o DOM ser carregado
        document.addEventListener('DOMContentLoaded', () => {
            const btnNovaVenda = document.getElementById('btnNovaVenda');
            const modal = document.getElementById('modalNovaVenda');
            const spanClose = document.getElementsByClassName('close')[0];
            const formNovaVenda = document.getElementById('formNovaVenda');

            btnNovaVenda.addEventListener('click', abrirModal);
            spanClose.addEventListener('click', fecharModal);

            window.addEventListener('click', (event) => {
                if (event.target == modal) {
                    fecharModal();
                }
            });

            formNovaVenda.addEventListener('submit', (event) => {
                event.preventDefault();
                
                const valor = parseFloat(document.getElementById('valorVenda').value);
                const data = document.getElementById('dataVenda').value;
                const tipo = document.getElementById('tipoVenda').value;
                const quantidade = parseInt(document.getElementById('quantidadeVenda').value, 10);

                adicionarVenda(valor, data, tipo, quantidade);

                fecharModal();

                // Limpar o formulário
                formNovaVenda.reset();
            });
        });