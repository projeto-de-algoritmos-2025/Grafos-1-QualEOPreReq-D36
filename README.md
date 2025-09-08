# Qual é o Pre Req?

**Número da Lista**: 36
**Conteúdo da Disciplina**: FGA0124 - PROJETO DE ALGORITMOS - T01  

---


## 👩‍💻 Alunos


<div align = "center">
<table>
  <tr>
    <td align="center"><a href="https://github.com/danielle-soaress"><img style="border-radius: 50%;" src="https://github.com/danielle-soaress.png" width="190;" alt=""/><br /><sub><b>Danielle Soares</b></sub></a><br /><a href="Link git" title="Rocketseat"></a></td>
    <td align="center"><a href="https://github.com/Leticia-Arisa-K-Higa"><img style="border-radius: 50%;" src="https://github.com/Leticia-Arisa-K-Higa.png" width="190px;" alt=""/><br /><sub><b>Leticia Arisa</b></sub></a><br />
  </tr>
</table>

| Matrícula   | Aluno                             |
| ----------- | ---------------------------------- |
| 23/1012058  | Danielle Soares da Silva         |
| 23/1012272  | Leticia Arisa Kobayashi Higa   |
</div>

---

## 🎬 Apresentação do Projeto

<div align="center">
<a href="https://youtu.be/UFUj0rDUyyU"><img src="https://i.imgur.com/2LNlNYO.png" width="50%"></a>
</div>

<font size="3"><p style="text-align: center">Autor: [Danielle Soares](https://github.com/danielle-soaress) e [Leticia Arisa](https://github.com/Leticia-Arisa-K-Higa).</p></font>

---

## 🎯 Objetivo

O **Qual é o Pre Req?** é um **sistema web** que ajuda estudantes do curso de Engenharia de Software da UnB (Campus FCTE) a planejar sua trajetória acadêmica.

Ele permite visualizar **pré-requisitos de disciplinas** de forma clara, utilizando **algoritmos de grafos**, para que o aluno possa se organizar melhor no semestre.

---

## 🔧 Tecnologias e Estruturas Utilizadas

- **Linguagens**: **JavaScript** (para a lógica), **HTML** (para a estrutura) e **CSS** (para o estilo).
- **Representação do grafo**: Lista de adjacência — Implementada manualmente como um **objeto em JavaScript**, uma estrutura otimizada para a busca de vizinhos.
- **Algoritmos de busca**:
  - **DFS (Depth-First Search)**: Para percorrer o grafo e encontrar todos os pré-requisitos necessários a partir de uma disciplina, seguindo o caminho até o final.

---

## 🧩 Modelagem do Grafo

- **Nós (Vértices):** Cada disciplina é um nó com o atributo **nome** (ex: "Cálculo II").
- **Arestas:** Conexões direcionadas que representam pré-requisitos.
  - Exemplo:
```javascript
const graph = {
    "Cálculo I": ["Cálculo II"],
    "Cálculo II": ["Cálculo III"],
    "Algoritmos": ["Estruturas de Dados"]
};
```

-----

## 🧠 Como funciona

1. O usuário digita o nome de uma disciplina na interface.
2. O sistema aplica **DFS** para descobrir todos os pré-requisitos da disciplina.
3. O resultado é exibido na interface web, de forma clara para o estudante.

---

## 🚀 Como executar

1. Clone o repositório.
2. Abra o arquivo index.html em qualquer navegador.
3. Explore as disciplinas e veja seus pré-requisitos instantaneamente.

---

## 💡 Observações

- Sistema desenvolvido para o **curso de Engenharia de Software** da UnB-FCTE.