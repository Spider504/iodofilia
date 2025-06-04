# Analisador de Exames Laboratoriais

Esta é uma aplicação web simples, desenvolvida em HTML, CSS e JavaScript puro, que permite aos usuários inserir resultados de exames laboratoriais, compará-los com valores de referência e ideais, e gerar um relatório personalizado.

## Funcionalidades

*   **Entrada de Dados Pessoais:** Campos para inserir nome, idade e sexo do paciente.
*   **Seleção de Exames:** Exames organizados por categorias (baseadas no documento "Valores Ideais de Exames").
*   **Busca de Exames:** Campo de busca para encontrar exames rapidamente.
*   **Entrada de Resultados:** Interface intuitiva para adicionar os valores dos exames realizados.
*   **Cálculos Automáticos:** Cálculo automático de índices e relações importantes (ex: HOMA-IR, Relação CT/HDL, etc.) quando os exames dependentes são preenchidos.
*   **Verificação de Status:** Indicação visual (Ideal, Atenção, Alerta) para cada exame com base nos valores de referência e ideais, ajustados por sexo quando aplicável.
*   **Interface Responsiva:** Design adaptado para funcionar em desktops, tablets e smartphones.
*   **Modal Mobile:** Em dispositivos móveis, a entrada de valores é feita através de um modal para melhor usabilidade.
*   **Geração de Relatório:** Criação de um relatório detalhado com os dados do paciente e os resultados dos exames, formatado para visualização e impressão.
*   **Impressão Otimizada:** Opção de imprimir apenas o relatório, ocultando os elementos da interface da aplicação.
*   **Persistência de Dados:** Os dados inseridos (pessoais e de exames) são salvos localmente no navegador (localStorage), permitindo que o usuário feche e reabra a aplicação sem perder as informações.
*   **Limpeza de Dados:** Botão para limpar todos os exames adicionados ou todos os dados salvos.
*   **Funcionamento Offline:** A aplicação funciona completamente offline após o carregamento inicial no navegador.

## Estrutura dos Arquivos

O projeto está organizado da seguinte forma:

```
/analisador_exames_organizado/
|-- index.html       # Arquivo principal da estrutura HTML da aplicação.
|-- style.css        # Arquivo contendo todos os estilos CSS.
|-- script.js        # Arquivo contendo toda a lógica JavaScript (banco de dados de exames, funções, interações).
|-- README.md        # Este arquivo, com a descrição e instruções.
```

## Como Usar

1.  **Descompacte o arquivo ZIP:** Extraia o conteúdo do arquivo `analisador_exames_organizado.zip` para uma pasta no seu computador.
2.  **Abra o `index.html`:** Dê um duplo clique no arquivo `index.html` ou abra-o diretamente em um navegador web moderno (Google Chrome, Firefox, Safari, Edge, etc.).
3.  **Preencha os Dados:** Insira o nome, idade e selecione o sexo.
4.  **Adicione Exames:** Navegue pelas categorias ou use a busca para encontrar os exames desejados. Clique em um exame para adicioná-lo à tabela.
5.  **Insira os Valores:** Digite o resultado de cada exame no campo correspondente na tabela "Exames Adicionados". Em dispositivos móveis, um modal aparecerá para facilitar a digitação.
6.  **Verifique os Resultados:** O status (Ideal, Atenção, Alerta) será atualizado automaticamente.
7.  **Gere o Relatório:** Clique no botão "Gerar Relatório" para visualizar o resumo completo.
8.  **Imprima (Opcional):** Dentro da seção do relatório, clique no botão "Imprimir Relatório" para obter uma versão impressa ou em PDF apenas com os resultados.

## Requisitos

*   Um navegador web moderno com suporte a HTML5, CSS3 e JavaScript ES6.
*   Nenhuma instalação adicional ou conexão com a internet é necessária após o download.

## Observações

*   Os valores de referência e ideais foram baseados no documento "Valores Ideais de Exames" fornecido. É crucial que estes valores sejam revisados e validados por profissionais de saúde qualificados.
*   Esta ferramenta é para fins informativos e educacionais, **não substituindo** a avaliação e o diagnóstico médico profissional.
*   Em caso de problemas com dados salvos (ex: seleção de sexo fixa), limpe o `localStorage` do navegador para esta aplicação (instruções podem ser fornecidas se necessário).

