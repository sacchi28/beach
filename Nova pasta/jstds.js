
// Selecione os botões de escolha de cor
const colorButtons = document.querySelectorAll(".color-button");

// Selecione o elemento da imagem do produto que será atualizado
const productImage = document.getElementById("product-image");

// Adicione um evento de clique a cada botão
colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Obtenha a cor e a imagem do botão selecionado
    const color = button.dataset.color;
    const image = button.dataset.image;

    // Atualize a imagem do produto com a imagem correspondente à cor selecionada
    productImage.src = image;
    productImage.alt = `Imagem do Produto (${color})`;
  });
});


var carrinho = [];

function adicionarAoCarrinho() {
  var produto = {
    nome: "Nome do Produto",
    tamanho: document.getElementById("tamanho").value,
    quantidade: parseInt(document.getElementById("quantidade").value),
    valor: 80 // Valor do produto
  };

  carrinho.push(produto);
  exibirItensCarrinho();
  calcularValorASerPago();
}

function exibirItensCarrinho() {
  var itensCarrinho = document.getElementById("itens-carrinho");
  itensCarrinho.innerHTML = "";

  for (var i = 0; i < carrinho.length; i++) {
    var item = carrinho[i];
    var li = document.createElement("li");
    li.className = "item-carrinho";
    li.innerHTML = item.nome + " - Tamanho: " + item.tamanho + " - Quantidade: " + item.quantidade + ' <button onclick="removerDoCarrinho(' + i + ')">X</button>';
    itensCarrinho.appendChild(li);
  }
}

function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  exibirItensCarrinho();
  calcularValorASerPago();
}

function calcularValorASerPago() {
  var total = 0;

  for (var i = 0; i < carrinho.length; i++) {
    var item = carrinho[i];
    total += item.valor * item.quantidade;
  }

  var valorASerPagoElement = document.getElementById("valor-a-ser-pago");
  valorASerPagoElement.innerHTML = "Valor a ser pago: $" + total.toFixed(2);
}

function finalizarCompra() {
  alert("Compra finalizada!");
  carrinho = [];
  exibirItensCarrinho();
  calcularValorASerPago();
}
