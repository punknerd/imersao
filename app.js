/**
 * Pesquisa por dados e exibe os resultados em uma seção HTML.
 *
 * Esta função itera sobre uma lista de dados, cria elementos HTML para cada item
 * e insere esses elementos em uma seção específica do DOM.
 *
 * param {Array} dados - Um array de objetos, onde cada objeto representa um resultado da pesquisa.
 *   Cada objeto deve ter as seguintes propriedades:
 *   - `titulo`: O título do resultado.
 *   - `descricao`: Uma breve descrição do resultado.
 *   - `link`: O link para mais informações sobre o resultado.
 */
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //console.log(campoPesquisa)

    //se o campoPesquisa for uma string vazia, eu nao mostro nada.

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo.</p>"
        return 
    } 

    campoPesquisa = campoPesquisa.toLowerCase();
    
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";
  
    // Itera sobre cada dado e constrói o HTML para cada item.
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        //tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
                //então faça...
                //cria um novo elemento
                resultados += `
                <div class="item-resultado">
                  <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                  </h2>
                  <p class="descricao-meta">${dado.descricao}</p>
                  <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
              `;

            }
            
        console.log(dado.titulo.includes(campoPesquisa));

        
    }

    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Insere o HTML construído na seção.
    section.innerHTML = resultados;
  }



/** 
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);
    
    let resultados = "";
    
    //para cada dado dentro da lista de dados
    for(let dado of dados){
    
        resultados += `
        <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
    
    }
    
    section.innerHTML = resultados;
}

**/
