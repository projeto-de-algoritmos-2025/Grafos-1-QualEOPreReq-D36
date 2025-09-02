# 📚 Projeto de Algoritmos - Qual é o Pre Req?

## 👩‍💻 Integrantes

- Danielle Soares da Silva – 231012058
- Leticia Arisa Kobayashi Higa – 231012272 

---

## 🎯 Objetivo

Desenvolver um **sistema web** chamado **Qual é o Pre Req?** que auxilia estudantes a planejar sua jornada acadêmica, visualizando os pré-requisitos das disciplinas do curso de Engenharia de Software da Universidade de Brasília (UnB) Campus FCTE. O sistema utiliza algoritmos de grafos para encontrar relações entre as disciplinas do fluxo do curso e, assim, apresentar de forma clara todos os pré-requisitos de uma disciplina escolhida pelo usuário.

---

## 🔧 Tecnologias e Estruturas Utilizadas

- **Linguagens**: **JavaScript** (para a lógica), **HTML** (para a estrutura) e **CSS** (para o estilo).
- **Representação do grafo**: Lista de adjacência — Implementada manualmente como um **objeto em JavaScript**, uma estrutura otimizada para a busca de vizinhos.
- **Algoritmos de busca**:
  - **DFS (Depth-First Search)**: Para percorrer o grafo e encontrar todos os pré-requisitos necessários a partir de uma disciplina, seguindo o caminho até o final.
  - **BFS (Breadth-First Search)**: Para sugerir uma ordem de estudo por camadas, mostrando primeiro as disciplinas mais próximas do início do curso.

---

## 🧩 Modelagem do Grafo

### 🟢 Nós (Vértices)
Cada nó do grafo representa uma disciplina do curso, com os seguintes atributos:
- `nome`: Nome completo da disciplina (ex: "Cálculo II").
- `codigo`: Identificador único da disciplina (ex: "MAT123").

### 🔗 Arestas
As arestas direcionadas representam a relação de pré-requisito entre as disciplinas.
Exemplo: Se há uma aresta de **Cálculo I → Cálculo II**, significa que **Cálculo I** é pré-requisito para **Cálculo II**.

### 🧱 Estrutura de Dados

O grafo será representado como um objeto de listas de adjacência em **JavaScript**.

Exemplo:
```javascript
const graph = {
    "Cálculo I": ["Cálculo II"],
    "Cálculo II": ["Cálculo III"],
    "Algoritmos": ["Estruturas de Dados"]
};
```

-----

## 🧠 Funcionamento do Sistema

1.  O usuário interage com a interface web, digita o nome de uma disciplina e clica em um botão.

2.  A aplicação executa a lógica em **JavaScript** para aplicar o algoritmo DFS (e/ou BFS).

3.  O resultado do algoritmo é exibido na própria interface web, dentro de uma caixa de texto ou em um novo elemento HTML.

-----

## 🚀 Execução e Hospedagem

Para rodar o projeto localmente, basta abrir o arquivo `index.html` em qualquer navegador web.
