# Buger eats - cypress


Este é um script de automação do site https://buger-eats.vercel.app/.



🚀 Começando Essas instruções permitirão que você seja uma cópia do projeto em operação na sua máquina local para fins de avaliação e teste.

📋 Pré-requisitos Voce precisa ter instalado e configurado em sua maquina:

-Node

-Git

Abra seu terminal de comando e rode o seguinte comando (escolha uma pasta para isso)

git clone https://github.com/Matimenezes/BuildBoxWebTest

🔧 Instalação:

npm init

npm install -D cypress

npx cypress open ( Para rodar os testes com interface)


⚙️Executando os testes

npx cypress open ( Para rodar os testes com interface)
npx cypress run (Para rodar os testes em modo headless)

⌨️ Sobre Evidências
npm i --save-dev cypress-mochawesome-reporter

Para gerar repots utilize o comando: npm run cypress:runReport

O arquivo sera gerado em:

cypress/reports

Na raiz também é gerado um arquivo de log após cada execução dos testes

🛠️construção Tecnologias utilizadas:

Node

JavaScript

Cypress

Mochawesome

## Cenários

### Cenário - Home page

* Validar botão tela home 

![Buger-Eats-Google-Chrome-2022-10-17-19-28-18](https://user-images.githubusercontent.com/108771074/196300427-7934541d-3b66-4196-9378-cc64af032f4e.gif)


