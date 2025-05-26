# Projeto: Drag and Drop com Validação de Sequência

Este projeto consiste em uma interface interativa com itens arrastáveis (drag and drop) desenvolvida em HTML, CSS e JavaScript puro. O objetivo é posicionar os itens em áreas específicas de forma a formar uma sequência correta. Quando a combinação está certa, a interface responde visualmente, sinalizando sucesso.

## Objetivo do Projeto

Simular uma lógica de desbloqueio visual, semelhante a uma senha de cofre. O usuário deve arrastar os itens disponíveis para as áreas corretas, respeitando a sequência definida no código. Quando a ordem estiver correta, uma validação é disparada e a área muda de cor para indicar sucesso.

## Funcionalidades

- Interface arrastável com três áreas de destino (a, b e c).
- Área neutra onde os itens permanecem quando não estão posicionados.
- Permite arrastar apenas um item por área.
- Validação automática da sequência correta.
- Feedback visual quando a ordem é atingida corretamente.

## Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (sem bibliotecas externas)

## Estrutura do Código

- **`areas`**: objeto que armazena o conteúdo atual de cada uma das três áreas.
- **Eventos**:
  - `dragstart` e `dragend`: aplicados aos itens para controlar o início e fim do arraste.
  - `dragover`, `dragleave`, `drop`: aplicados às áreas de destino e à área neutra.
- **Função `updateAreas()`**:
  - Atualiza o objeto `areas` com base na posição atual dos itens.
  - Verifica se a sequência está correta.
  - Adiciona ou remove a classe `.correct` para indicar o resultado.

## O Que Eu Aprendi

- Manipulação completa de eventos de drag and drop com JavaScript puro.
- Validação de lógica condicional com base em DOM.
- Uso de classes dinâmicas para feedback visual.
- Organização de código por responsabilidade (eventos, lógica, UI).
