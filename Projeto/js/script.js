const grafoEngenhariaSoftware = {
    // 1º Semestre
    "Algoritmos e programação de computadores": [],
    "Introdução à engenharia": [],
    "Desenho industrial assistido por computador": [],
    "Engenharia e ambiente": [],
    "Cálculo 1": [],

    // 2º Semestre
    "Probabilidade e estatística aplicado à engenharia": ["Cálculo 1"],
    "Física 1": [],
    "Física 1 experimental": [],
    "Cálculo 2": ["Cálculo 1"],
    "Introdução à álgebra linear": [],
    
    // 3º Semestre
    "Prática de eletrônica digital 1": ["Cálculo 1"],
    "Teoria de eletrônica digital 1": ["Introdução à álgebra linear"],
    "Matemática discreta 1": [],
    "Engenharia econômica": [],
    "Orientação a objetos": ["Algoritmos e programação de computadores"],
    "Métodos numéricos para engenharia": ["Cálculo 2"],
    "Humanidades e cidadania": [],

    // 4º Semestre
    "Matemática discreta 2": ["Matemática discreta 1"],
    "Fundamentos de arquitetura de computadores": ["Prática de eletrônica digital 1", "Teoria de eletrônica digital 1"],
    "Estruturas de dados 1": ["Algoritmos e programação de computadores"],
    "Projeto integrador de engenharia 1": [],
    "Gestão da produção e qualidade": ["Engenharia econômica"],
    "Métodos de desenvolvimento de software": ["Orientação a objetos"],

    // 5º Semestre
    "Compiladores 1": ["Estruturas de dados 1"],
    "Estruturas de dados 2": ["Estruturas de dados 1"],
    "Sistemas de banco de dados 1": ["Matemática discreta 2"],
    "Fundamentos de sistemas operacionais": ["Fundamentos de arquitetura de computadores"],
    "Interação humano computador": ["Métodos de desenvolvimento de software"],
    "Requisitos de software": ["Métodos de desenvolvimento de software"],

    // 6º Semestre
    "Sistemas de banco de dados 2": ["Sistemas de banco de dados 1"],
    "Projeto de algoritmos": ["Estruturas de dados 1"],
    "Arquitetura e desenho de software": ["Requisitos de software"],
    "Fundamentos de redes de computadores": ["Fundamentos de sistemas operacionais"],
    "Testes de software": ["Requisitos de software"],
    "Qualidade de software 1": [],

    // 7º Semestre
    "Fundamentos de sistemas embarcados": ["Fundamentos de sistemas operacionais"],
    "Paradigmas de programação": ["Orientação a objetos", "Compiladores 1"],
    "Técnicas de programação em plataformas emergentes": ["Testes de software", "Arquitetura e desenho de software"],
    "Programação para sistemas paralelos e distribuídos": ["Fundamentos de redes de computadores", "Estruturas de dados 2"],

    // 8º Semestre
    "Estágio supervisionado": [],
    "Engenharia de produto de software": ["Técnicas de programação em plataformas emergentes"],
    "Gerência de configuração e evolução de software": ["Testes de software"],

    // 9º Semestre
    "Trabalho de conclusão de curso 1": [],
    "Projeto integrador de engenharia 2": ["Projeto integrador de engenharia 1"],

    // 10º Semestre
    "Trabalho de conclusão de curso 2": ["Trabalho de conclusão de curso 1"],
    "Atividade de extensão engenharia de software": [],

    // Optativas
    "Introdução ao desenvolvimento de jogos": ["Estruturas de dados 1", "Orientação a objetos", "Arquitetura e desenho de software"],
    "Fenômenos de transporte": ["Cálculo 3", "Mecânica dos sólidos 1 para engenharia"],
    "Fundamentos lógicos de inteligência artificial": ["Estruturas de dados 1", "Matemática discreta 1"],
    "Paradigmas de solução de problemas": [],
    "Estruturas de dados para competições": [],
    "Matemática para competições": [],
    "Algoritmos em grafos": [],
    "Geometria computacional": [],
    "Algoritmos em strings": [],
    "Prática desportiva": [],
    "Fundamentos de equações diferenciais para engenharia": ["Introdução à álgebra linear", "Cálculo 3"],
    "Programação para competições": ["Algoritmos e programação de computadores"],
    "Tópicos especiais em matemática aplicada": ["Cálculo 2"],
    "Aerodinâmica de sistemas aeroespaciais": ["Dinâmica dos fluidos"],
    "Dinâmica dos gases para sistemas aeroespaciais": ["Aerodinâmica de sistemas aeroespaciais"],
    "Métodos e técnicas da escrita científica": [],
    "Tópicos especiais em programação": [],
    "Tópicos especiais em governança de tecnologia da informação": [],
    "Fundamentos de variável complexa para engenharia": ["Cálculo 3", "Introdução à álgebra linear"],
    "Prática de eletrônica digital 2": ["Teoria de eletrônica digital 1", "Prática de eletrônica digital 1"],
    "Teoria de eletrônica digital 2": ["Teoria de eletrônica digital 1", "Prática de eletrônica digital 1"],
    "Aprendizado de máquina": ["Introdução à álgebra linear", "Estruturas de dados 1", "Probabilidade e estatística aplicado à engenharia"],
    "Desenvolvimento de software": ["Algoritmos e programação de computadores"],
    "Ondulatória e física térmica para engenharia": ["Cálculo 1", "Física 1", "Física 1 experimental"],
    "Introdução à web semântica": ["Sistemas de banco de dados 1"],
    "Qualidade de software 2": ["Qualidade de software 1"],
    "Introdução à geometria analítica": [],
    "Tópicos especiais de engenharia de software": [],
    "Física moderna": ["Cálculo 3", "Física 1"],
    "Engenharia de segurança do trabalho": [],
    "Mecânica dos sólidos 1 para engenharia": ["Física 1"],
    "Introdução ao design e concepção de veículos": ["Desenho industrial assistido por computador"],
    "Elementos e métodos em eletrônica": [],
    "Sistemas automotivos": [],
    "Fontes de energia e tecnologias de conversão": [],
    "Técnicas de programação": ["Orientação a objetos"],
    "Desenvolvimento sustentável": [],
    "Mecânica dos sólidos 2 para engenharia": ["Mecânica dos sólidos 1 para engenharia"],
    "Inovação": [],
    "Eletricidade aplicada": [],
    "Métodos experimentais para engenharia": ["Física 1 experimental"],
    "Projeto de circuitos integrados digitais": ["Teoria de eletrônica digital 2", "Prática de eletrônica digital 2"],
    "Planejamento e gestão de energia": ["Economia de energia"],
    "Dinâmica dos fluidos": ["Fenômenos de transporte"],
    "Sistemas embarcados": ["Fundamentos de sistemas operacionais"],
    "Inteligência artificial": ["Engenharia econômica"],
    "Eletrônica veicular": [],
    "Ciências aeroespaciais": [],
    "Introdução à computação gráfica": ["Estruturas de dados 1"],
    "Economia de energia": [],
    "Produtividade e profissionalismo em engenharia de software": ["Humanidades e cidadania"],
    "Engenharia de software experimental": ["Métodos de desenvolvimento de software"],
    "Programação web": ["Sistemas de banco de dados 1", "Técnicas de programação"],
    "Governança em tecnologia da informação": [],
    "Felicidade": [],
    "Melhoria de processos de software": ["Testes de software"],
    "Introdução à gamificação": [],
    "Atividade complementar": [],
    "Introdução à atividade empresarial": [],
    "Língua de sinais brasileira - básico": [],
    "Cálculo 3": ["Cálculo 2"],
};

class CycleError extends Error {
  constructor(message) {
    super(message);
    this.name = "CycleError";
  }
}

function normalizeString(str) {
  return str
    .normalize("NFD")          // separa os caracteres de acento
    .replace(/[\u0300-\u036f]/g, "") // remove os acentos
    .toUpperCase();            // converte para maiúsculas
}

const disciplinasNormalizadas = {};
for (const key in grafoEngenhariaSoftware) {
  disciplinasNormalizadas[normalizeString(key)] = key;
}

function preReq_chain(disciplinas, alvo) {
  if(!disciplinas[alvo]) {
    return { prerequisites: [], error: `Disciplina '${alvo}' não encontrada.` };
  }

  const visitados = new Set();
  const ordem = [];

  function dfs(node) {
    for (const pre of disciplinas[node] || []) {
      if (!visitados.has(pre)){
        dfs(pre);
        visitados.add(pre);
        ordem.push(pre);
      }
    }
  }
  dfs(alvo);
  return {prerequisites: ordem.reverse(), error: null};
}

function mostrarPreReqs() {
  const disciplinaInput = document.getElementById('disciplina-input');
  const resultadoDiv = document.getElementById('resultado');
  const disciplinaAlvo = normalizeString(disciplinaInput.value.trim());

  resultadoDiv.innerHTML = '';

  if (disciplinaAlvo === '') {
    resultadoDiv.innerHTML = '<p style="color: red;">Por favor, insira o código de uma disciplina.</p>';
    return;
  }

  const chaveOriginal = disciplinasNormalizadas[disciplinaAlvo];
  if (!chaveOriginal) {
    resultadoDiv.innerHTML = `<p style="color: red;">Disciplina '${disciplinaInput.value}' não encontrada.</p>`;
    return;
  }

  try {
  const {prerequisites, error} = preReq_chain(grafoEngenhariaSoftware, chaveOriginal);

    if(error){
      resultadoDiv.innerHTML = `<p style="color: red;">${error}</p>`;
      return;
    }

    if (prerequisites.length === 0) {
      resultadoDiv.innerHTML = `<p>A disciplina <strong>${chaveOriginal}</strong> não possui pré-requisitos.</p>`;
    } else {
      resultadoDiv.innerHTML = `<p>Para cursar <strong>${chaveOriginal}</strong>, você precisa ter cursado:</p><ul>`;
      prerequisites.forEach(preReq => {
        resultadoDiv.innerHTML += `<li>${preReq}</li>`;
      });
      resultadoDiv.innerHTML += `</ul>`;
    }

  } catch (error) {
    if (error instanceof CycleError) {
      resultadoDiv.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
    } else {
      resultadoDiv.innerHTML = `<p style="color: red;">Ocorreu um erro inesperado: ${error.message}</p>`;
    }
  }
}

function mostrarSugestoes() {
  const disciplinaInput = document.getElementById('disciplina-input');
  const sugestoesDiv = document.getElementById('sugestoes');
  const valorInput = normalizeString(disciplinaInput.value.trim());

  sugestoesDiv.innerHTML = ''; 

  if (valorInput.length < 2) {  // começa a sugerir após 2 caracteres
    return;
  }

  const sugestoesFiltradas = Object.values(disciplinasNormalizadas)
    .filter(disciplinaOriginal =>
      normalizeString(disciplinaOriginal).includes(valorInput)
    )
    .slice(0, 5); // limita a 5 sugestões

  if (sugestoesFiltradas.length > 0) {
    sugestoesFiltradas.forEach(disciplina => {
      const divSugestao = document.createElement('div');
      divSugestao.textContent = disciplina;
      divSugestao.onclick = () => {
        disciplinaInput.value = disciplina;
        sugestoesDiv.innerHTML = '';
      };
      sugestoesDiv.appendChild(divSugestao);
    });
  }
}

document.getElementById('disciplina-input').addEventListener('input', mostrarSugestoes);


