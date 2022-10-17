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
