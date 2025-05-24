let roundQuestions = [
  [ // Rodada 1 - JavaScript
    {
      question: 'Qual é a principal diferença entre forEach() e map()?',
      options: [
          'forEach() retorna um novo array, map() não',
          'Ambos retornam novos arrays',
          'map() retorna um novo array, forEach() não',
          'Ambos não retornam nada'
      ],
      answer: 2,
      explanation: 'A resposta certa é a opção "3": map() cria e retorna um novo array com os resultados da função aplicada, já forEach() apenas executa a função para cada elemento sem retornar nada.'
    },
    {
      question: 'O que === verifica em JavaScript?',
      options: [
          'Igualdade de valor, apenas',
          'Igualdade de tipo, apenas',
          'Igualdade de valor e tipo',
          'Apenas comparação de strings'
      ],
      answer: 2,
      explanation: 'A resposta certa é a opção "3": O operador === compara tanto valor quanto tipo, diferente do == que faz coerção de tipos.'
    },
    {
      question: 'O que faz o método appendChild()',
      options: [
          'Substitui um elemento filho por outro',
          'Insere um novo elemento como primeiro filho',
          'Adiciona um novo elemento no final da lista de filhos',
          'Remove um elemento do DOM'
      ],
      answer: 2,
      explanation: 'A resposta certa é a opção "3": appendChild() adiciona um novo elemento como último filho de um elemento pai no DOM.'
    },
    {
      question: 'O que o código imprime no console?\n\nconsole.log(typeof null);',
      options: [
          'object',
          'undefined',
          'boolean',
          'null'
      ],
      answer: 0,
      explanation: 'A resposta certa é a opção "1": Por um erro histórico no JavaScript, typeof null retorna "object".'
    },
    {
      question: 'O que o método push() faz em um array?',
      options: [
          'Remove o último elemento',
          'Adiciona um elemento no início',
          'Adiciona um elemento no final',
          'Inverte os elementos'
      ],
      answer: 2,
      explanation: 'A resposta certa é a opção "3": push() adiciona um elemento ao final do array.'
    },
    {
      question: 'Como você cria uma função no Javascript?',
      options: [
          'function: minhaFuncao();',
          'function = minhaFuncao(){};',
          'function minhaFuncao(){};',
          'Nenhuma das alternativas'
      ],
      answer: 2,
      explanation: 'A resposta certa é a opção "3": A forma correta de declarar uma função é usando function seguida do nome da função, parênteses e colchetes.'
    },
    {
      question: 'Como chamar uma função chamada "minhaFuncao"?',
      options: [
          'call minhaFuncao();',
          'call function minhaFuncao();',
          'minhaFuncao();',
          'const minhafuncao();'
      ],
      answer: 2,
      explanation: 'A resposta certa é a opção "3": Para chamar uma função, basta usar seu nome seguido de parênteses, como minhaFuncao().'
    },
    {
      question: 'Como escrever uma condicional IF no Javascript?',
      options: [
          'if i = 5',
          'if i == 5 then',
          'if (i == 5)',
          'if i = 5 then'
      ],
      answer: 2,
      explanation: 'A resposta certa é a opção "3": A sintaxe correta do if é if (condição) { ... }, usando parênteses para a condição.'
    },
    {
      question: 'Como fazer um if que executa um código caso "i" for diferente de 5',
      options: [
          'if (i != 5)',
          'if (i <> 5)',
          'if i <> 5',
          'if i =! 5 then'
      ],
      answer: 0,
      explanation: 'A resposta certa é a opção "1": O operador para diferente é != e a sintaxe correta é if (i != 5).'
    },
    {
      question: 'Qual é o valor de x após a execução do código?\n\n let x = 10; \n x += 5;',
      options: [
          '5',
          '10',
          '15',
          '20'
      ],
      answer: 2,
      explanation: 'A resposta certa é a opção "3": x += 5 é uma forma curta de x = x + 5, então o valor final é 15.'
    },
  ],

  [ // Rodada 2 - Git/GitHub
    {
      question: 'Qual comando é usado para criar um novo repositório Git local?',
      options: [
        'git init',
        'git clone',
        'git start',
        'git new'
      ],
      answer: 0,
      explanation: 'A resposta certa é a opção "1": git init inicializa um novo repositório Git vazio na pasta atual.'
    },
    {
      question: 'Qual comando baixa um repositório remoto para sua máquina local?',
      options: [
        'git pull',
        'git fetch',
        'git clone',
        'git push'
      ],
      answer: 2,
      explanation: 'A resposta certa é a opção "3": git clone cria uma cópia local de um repositório remoto.'
    },
    {
      question: 'Qual comando envia suas alterações locais para o repositório remoto?',
      options: [
        'git commit',
        'git push',
        'git pull',
        'git merge'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": git push envia commits locais para o repositório remoto.'
    },
    {
      question: 'O que faz o comando "git status"?',
      options: [
        'Exibe o histórico de commits',
        'Mostra os arquivos modificados e o estado do repositório',
        'Desfaz as alterações feitas',
        'Cria uma nova branch'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": git status mostra o estado atual do diretório de trabalho e da área de stage.'
    },
    {
      question: 'Qual arquivo é usado para ignorar arquivos no Git?',
      options: [
        '.gitignore',
        '.gitkeep',
        '.gitconfig',
        'README.md'
      ],
      answer: 0,
      explanation: 'A resposta certa é a opção "1": .gitignore lista arquivos e pastas que o Git deve ignorar.'
    },
    {
      question: 'O que é um "branch" no Git?',
      options: [
        'Uma cópia do repositório remoto',
        'Uma linha paralela de desenvolvimento',
        'Um arquivo especial para merge',
        'Um comando para deletar arquivos'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": Branch é uma ramificação que permite desenvolver funcionalidades paralelas.'
    },
    {
      question: 'Como você combina mudanças de uma branch para outra?',
      options: [
        'git combine',
        'git merge',
        'git join',
        'git rebase'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": git merge integra alterações de uma branch na branch atual.'
    },
    {
      question: 'Qual comando desfaz um commit local (não enviado)?',
      options: [
        'git reset',
        'git revert',
        'git undo',
        'git checkout'
      ],
      answer: 0,
      explanation: 'A resposta certa é a opção "1": git reset pode desfazer commits locais antes de enviar para o remoto.'
    },
    {
      question: 'O que faz o comando "git fetch"?',
      options: [
        'Atualiza o repositório remoto',
        'Busca atualizações do repositório remoto sem aplicá-las',
        'Exclui arquivos locais',
        'Mostra o log do projeto'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": git fetch baixa as atualizações do remoto, mas não altera seu código local automaticamente.'
    },
    {
      question: 'Qual serviço NÃO é uma plataforma popular para hospedagem de repositórios Git?',
      options: [
        'GitHub',
        'GitLab',
        'Bitbucket',
        'Dropbox'
      ],
      answer: 3,
      explanation: 'A resposta certa é a opção "4": Dropbox não é uma plataforma para hospedagem de código Git.'
    },
  ],

  [ // Rodada 3 - Lógica de Programação
    {
      question: 'O que é um algoritmo?',
      options: [
        'Um tipo de linguagem de programação',
        'Um conjunto de instruções para resolver um problema',
        'Um programa pronto para ser executado',
        'Um erro no código'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": Um algoritmo é uma sequência finita de passos para resolver um problema.'
    },
    {
      question: 'Qual estrutura de repetição repete um bloco enquanto uma condição é verdadeira?',
      options: [
        'for',
        'while',
        'if',
        'switch'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": while executa um bloco repetidamente enquanto a condição for verdadeira.'
    },
    {
      question: 'O que faz a estrutura condicional "if"?',
      options: [
        'Executa código repetidamente',
        'Escolhe entre alternativas com base em uma condição',
        'Declara variáveis',
        'Interrompe a execução do programa'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": if executa um bloco de código dependendo do resultado de uma condição.'
    },
    {
      question: 'Qual o resultado da expressão lógica: !(true && false)?',
      options: [
        'true',
        'false',
        'null',
        'undefined'
      ],
      answer: 0,
      explanation: 'A resposta certa é a opção "1": true && false é false, então a negação !false é true.'
    },
    {
      question: 'O que é uma variável?',
      options: [
        'Um valor fixo',
        'Um espaço na memória para armazenar dados',
        'Um tipo de função',
        'Um erro de sintaxe'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": Variáveis armazenam dados em locais na memória durante a execução do programa.'
    },
    {
      question: 'Como declaramos uma variável em JavaScript?',
      options: [
        'var nome;',
        'int nome;',
        'let nome;',
        'Ambas 1 e 3'
      ],
      answer: 3,
      explanation: 'A resposta certa é a opção "4": Podemos declarar variáveis usando var ou let em JavaScript.'
    },
    {
      question: 'O que é um array?',
      options: [
        'Uma coleção ordenada de elementos',
        'Um tipo de variável que armazena números',
        'Uma função especial',
        'Uma instrução condicional'
      ],
      answer: 0,
      explanation: 'A resposta certa é a opção "1": Array é uma estrutura que armazena elementos em ordem.'
    },
    {
      question: 'Qual operador é usado para atribuição em JavaScript?',
      options: [
        '=',
        '==',
        '===',
        '!='
      ],
      answer: 0,
      explanation: 'A resposta certa é a opção "1": O operador = atribui um valor a uma variável.'
    },
    {
      question: 'Qual operador lógico representa "E" (AND)?',
      options: [
        '||',
        '&&',
        '!',
        '=='
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": && é o operador lógico "E" em JavaScript.'
    },
    {
      question: 'Qual comando usamos para imprimir algo no console?',
      options: [
        'console.print()',
        'console.log()',
        'print()',
        'echo()'
      ],
      answer: 1,
      explanation: 'A resposta certa é a opção "2": console.log() imprime mensagens no console do navegador ou ambiente Node.js.'
    },
  ]
];
