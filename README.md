# 🛒 Lista de Mercado 

## Descrição

Uma aplicação web simples para gerenciar uma lista de compras de supermercado. O foco é dispositivos móveis, sem backend, utilizando apenas **HTML, CSS e JavaScript**, armazenando os dados no **LocalStorage**.

## Próposito:
Facilitar o gerenciamento de listas de compras de supermercado de forma simples e acessível pelo celular.

## Objetivo:
Criar uma aplicação web minimalista que permita adicionar, visualizar, marcar como comprado e remover itens da lista, sem necessidade de login ou configurações complexas.

## Público alvo: 
Pessoas que fazem compras no supermercado e querem organizar sua lista de forma prática pelo celular, sem precisar logar ou mexer em aplicativos complexos! 


## Requisitos Funcionais 

- Adicionar itens à lista
- Visualizar todos os itens
- Marcar itens como comprados
- Remover itens da lista

## Requisitos Não Funcionais
- A aplicação deve ser responsiva, funcionando bem em dispositivos móveis.
- O tempo de resposta das ações do usuário deve ser inferior a 1 segundo.
- Os dados devem ser armazenados localmente no navegador, no LocalStorage, por exemplo, para facilitar o uso offline.
- A interface deve ser simples e intuitiva, priorizando a usabilidade.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **LocalStorage** (para persistência de dados no navegador)

## 📂 Estrutura do Projeto

```bash
📁 listademercado
├── 📄 index.html   # Estrutura
├── 📄 styles.css   # Estilos
└── 📄 script.js    # Lógica
```

## Documentação da API

### Descrição  
Apesar de o projeto da Lista de Mercado não ter integração com backend, foi feita a simulação de como isso funcionaria para fins de documentação.

### Base URL  
`listademercado.com`

### Tecnologias  
✅ HTML • ✅ CSS • ✅ JavaScript • ✅ LocalStorage

### Endpoints

| Método | Rota                  | Ação                | Body/Params                      | Status        |
|--------|-----------------------|---------------------|----------------------------------|---------------|
| `POST` | `/items`              | Adiciona item       | `{ "name": "Arroz", "quantity": 2 }` | `201 Created` |
| `GET`  | `/items`              | Lista itens         | -                                | `200 OK`      |
| `PUT`  | `/items/{id}/purchased` | Marca como comprado | `{ "purchased": true }`          | `200 OK`      |
| `DELETE` | `/items/{id}`         | Remove item         | -                                | `204 No Content` |

### Exemplos

**POST /items**  
Request:
```json
{ 
    "name": "Arroz", 
    "quantity": 2 
}
```  
`Response (201)`:
```json
{ 
    "id": 1, 
    "name": "Arroz", 
    "quantity": 2, 
    "purchased": false 
}
```

**GET /items**  
`Response (200)`:
```json
[
  { 
    "id": 1, 
    "name": "Arroz", 
    "quantity": 2, 
    "purchased": false 
    },
  { 
    "id": 2, 
    "name": "Feijão", 
    "quantity": 1, 
    "purchased": true 
    }
]
```

**PUT /items/1/purchased**  
Request:
```json
{ 
    "purchased": true 
}
```  
`Response (200)`:
```json
{ 
    "id": 1, 
    "name": "Arroz", 
    "quantity": 2, 
    "purchased": true 
}
```

**DELETE /items/1**  
Response: `204 No Content`

### Erros Comuns

| Código | Mensagem                     | Causa                  |
|--------|------------------------------|------------------------|
| `400`  | Campo 'name' é obrigatório   | Nome ausente           |
| `404`  | Item não encontrado          | ID inválido            |
| `500`  | Erro no LocalStorage         | Falha no armazenamento |

**Exemplo de Erro 400**  
```json
{
  "status": 400,
  "error": "Bad Request",
  "message": "Campo 'name' é obrigatório",
  "timestamp": "2025-03-18T10:16:00Z"
}
```

### 📦 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/lista-de-compras.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd lista-de-compras
   ```
3. Abra o **index.html** no navegador.

### 📖 Uso

1. Digite o nome de um item no campo de entrada.
2. Clique no botão **Adicionar** para incluí-lo na lista.
3. Clique no nome do item para marcá-lo como **comprado**.
4. Clique no **botão vermelho (❌)** para remover um item.
5. Os itens serão salvos automaticamente no navegador.

## 📌 Estrutura dos Dados (Simulando API REST)

Embora a aplicação não tenha backend na V1, simulamos os seguintes endpoint:

| **Método** | **Rota**      | **Descrição**               |
|------------|--------------|-----------------------------|
| **POST**   | `/items`      | Adiciona um novo item       |
| **GET**    | `/items`      | Retorna todos os itens      |
| **PUT**    | `/items/{id}` | Marca um item como comprado|
| **DELETE** | `/items/{id}` | Remove um item da lista    |

### 🛑 Tratamento de Erros

| **Código** | **Mensagem**              |
| ---------- | ------------------------- |
| 400        | "Item não pode ser vazio" |
| 404        | "Item não encontrado"     |

### 🚀 Próximos Passos

- Adicionar integração com Backend para persistência de dados;
- Adicionar opção de Login caso o usuário deseje;
- Adicionar usabilidade para computadores e tablets.

### 🎓 Principais Aprendizados

- Uso do LocalStorage para persistência de dados sem backend.
- Manipulação do DOM com JavaScript puro para criar uma interface interativa.
- Importância da responsividade para garantir uma boa experiência em dispositivos móveis.
- Estruturação de um projeto simples, mas funcional, com HTML, CSS e JS.


Por Angie Hempkmeier ❤️ 
 