# crud-gazin
Processo seletivo Gazin
## Descrição:
Aplicação do processo seletivo Gazin com API REST com uso de Node.Js em TypeScript e FrontEnd com uso de React.Js

## Funcionalidades:
- Adicionar desenvolvedor
- Editar desenvolvedor
- Deletar desenvolvedor
- Listar todos desenvolvedores
- Listar todos desenvolvedores por página e query params
- Página Web que consuma estas rotas

## Pré-requisitos:
- Instalar o Docker Desktop.
- Instalar o Node.

## Funcionamento:
O projeto roda o Node localmente e o React e MongoDB no Docker, os comandos são:
Rodando o Docker
```
docker-compose up -d
```
Rodando o Node
```
cd server/
npm start
```

## Acesso: 
Servidor web rodando em http://localhost:3000

## Testes: 
Para rodar os testes basta usar os comandos abaixo
```
cd ./server/
npm test
```
