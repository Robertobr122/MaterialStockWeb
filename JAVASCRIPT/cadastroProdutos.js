document.addEventListener('DOMContentLoaded', function() {
  function toggleDisplay(clickElementId, elementsToHide, elementsToShow) {

      document.getElementById(clickElementId).addEventListener('click', function(event) {
          event.preventDefault(); 
          elementsToHide.forEach(elementId => {
              document.getElementById(elementId).classList.add('esconder');
          });
          elementsToShow.forEach(elementId => {
              document.getElementById(elementId).classList.remove('esconder');
          });
      });
  }
  toggleDisplay('Form1', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['informaçõesGerais']);
  toggleDisplay('Form2', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['valores']);
  toggleDisplay('Form3', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['Estoque']);
  toggleDisplay('Form4', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['Fotos']);
  toggleDisplay('Form5', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['PesoDimencoes']);
  toggleDisplay('Form6', ['informaçõesGerais', 'valores', 'Estoque', 'Fotos', 'PesoDimencoes', 'DadosFiscais'], ['DadosFiscais']);
});
