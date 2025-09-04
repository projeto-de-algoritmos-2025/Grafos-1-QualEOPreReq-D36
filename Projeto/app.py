from flask import Flask
import json
from pathlib import Path

app = Flask(__name__)

BASE = Path(__file__).resolve().parent
DATA_PATH = BASE / "disciplinas.json"

with open(DATA_PATH, "r", encoding="utf-8") as f:
    DISCIPLINAS = json.load(f)

LOWER_TO_CANON = {name.lower(): name for name in DISCIPLINAS.keys()}

if __name__ == "__main__":
    app.run(debug=True)

class CycleError(Exception):
    pass

def preReq_chain(disciplinas: dict, alvo: str):
    visited = set()
    visiting = set()
    ordem = []

    def dfs(node: str):
        if node in visiting:
            raise CycleError(f"Ciclo detectado envolvendo '{node}'.")
        
        if node in visited:
            return
        
        visiting.add(node)

        for pre in disciplinas.get(node, []):
            dfs(pre)

        visiting.remove(node)
        visited.add(node)
        ordem.append(node)

    dfs(alvo)
    ordem.remove(alvo)
    return ordem