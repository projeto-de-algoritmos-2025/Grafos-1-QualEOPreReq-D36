const grafoEngenhariaSoftware = {
    // 1º Semestre
    "MAT0025": [],
    "CIC0004": [],
    "FGA0168": [],
    "FGA0302": [],
    "FGA0163": [],

    // 2º Semestre
    "MAT0026": ["MAT0025"],
    "IFD0171": [],
    "IFD0173": [],
    "MAT0031": [],
    "FGA0157": ["MAT0025"],
    "FGA0084": ["CIC0004"], // optativa
    
    // 3º Semestre
    "FGA0160": ["MAT0026"],
    "FGA0133": [],
    "FGA0164": [],
    "FGA0073": ["CIC0004"],
    "FGA0085": ["FGA0157"],
    "FGA0158": ["FGA0084"],

    // 4º Semestre
    "FGA0196": ["FGA0169"],
    "FGA0172": ["FGA0169"],
    "FGA0191": ["FGA0169"],
    "FGA0086": ["FGA0154"],
    "FGA0108": ["FGA0073"],
    "FGA0193": ["FGA0158"],

    "FGA0173": ["FGA0196"],
    "FGA0313": ["FGA0172"],
    "FGA0093": ["CIC0004"],
    "FGA0176": ["FGA0086"],
    "FGA0187": ["FGA0108"],
    "FGA0030": ["FGA0073"],

    "FGA0209": ["FGA0196"],
    "FGA0238": ["FGA0313"],
    "FGA0289": ["FGA0191"],
    "FGA0211": ["FGA0176"],
    "FGA0069": ["FGA0187"],
    "FGA0124": ["FGA0030", "FGA0108"],

    "FGA0242": ["FGA0209"],
    "FGA0214": ["FGA0238"],
    "FGA0269": ["FGA0211"],
    "FGA0244": ["FGA0211"],
    "FGA0228": ["FGA0214"],
    "FGA0287": ["FGA0193"],

    "FGA0316": ["FGA0209"],
    "FGA0317": ["FGA0316", "FGA0238", "FGA0289"],
    "FGA0290": ["FGA0287"],

    "FGA0118": ["FGA0316", "FGA0317"]
};


class CycleError extends Error {
  constructor(message) {
    super(message);
    this.name = "CycleError";
  }
}

function preReq_chain(disciplinas, alvo) {
  const visited = new Set();
  const visiting = new Set();
  const ordem = [];

  function dfs(node) {
    if (visiting.has(node)) {
      throw new CycleError(`Ciclo detectado envolvendo '${node}'.`);
    }

    if (visited.has(node)) {
      return;
    }

    visiting.add(node);

    const preRequisitos = disciplinas[node] || [];
    for (const pre of preRequisitos) {
      dfs(pre);
    }

    visiting.delete(node);
    visited.add(node);
    ordem.push(node);
  }

  dfs(alvo);

  const orderedPreReqs = [];
  const visitedForTarget = new Set();
  const visitingForTarget = new Set();

  function dfsForTarget(node) {
      if (visitingForTarget.has(node)) {
          throw new CycleError(`Ciclo detectado envolvendo '${node}'.`);
      }
      if (visitedForTarget.has(node)) {
          return;
      }
      visitingForTarget.add(node);

      const prereqs = disciplinas[node] || [];
      for (const prereq of prereqs) {
          dfsForTarget(prereq);
      }
      visitingForTarget.delete(node);
      visitedForTarget.add(node);
  }

  if (!disciplinas[alvo]) {
      return { prerequisites: [], error: `Disciplina '${alvo}' não encontrada.` };
  }

  dfsForTarget(alvo);

  const directPrerequisites = disciplinas[alvo] || [];
  const validPrerequisites = directPrerequisites.filter(prereq => visitedForTarget.has(prereq) || prereq === alvo);
  const chain = [];

  for(const disc of ordem) {
      if (disciplinas[alvo] && disciplinas[alvo].includes(disc)) {
          chain.push(disc);
      }
  }

  if (disciplinas[alvo]) {
      return { prerequisites: disciplinas[alvo], error: null };
  } else {
      return { prerequisites: [], error: `Disciplina '${alvo}' não encontrada.` };
  }
}

// Função para interagir com o HTML

function mostrarPreReqs() {
  const disciplinaInput = document.getElementById('disciplina-input');
  const resultadoDiv = document.getElementById('resultado');
  const disciplinaAlvo = disciplinaInput.value.trim().toUpperCase();

  resultadoDiv.innerHTML = '';

  if (disciplinaAlvo === '') {
    resultadoDiv.innerHTML = '<p style="color: red;">Por favor, insira o código de uma disciplina.</p>';
    return;
  }

  try {
    const disciplinasRequeridas = grafoEngenhariaSoftware[disciplinaAlvo];

    if (disciplinasRequeridas === undefined) {
      resultadoDiv.innerHTML = `<p style="color: red;">Disciplina '${disciplinaAlvo}' não encontrada.</p>`;
      return;
    }

    if (disciplinasRequeridas.length === 0) {
      resultadoDiv.innerHTML = `<p>A disciplina <strong>${disciplinaAlvo}</strong> não possui pré-requisitos.</p>`;
    } else {
      resultadoDiv.innerHTML = `<p>Para cursar <strong>${disciplinaAlvo}</strong>, você precisa ter cursado:</p><ul>`;
      disciplinasRequeridas.forEach(preReq => {
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

