# SistemaOsiris/Vigilancia/osiris_mutacion.py
import json
import datetime
from pathlib import Path

BITACORA_PATH = Path("SistemaOsiris/sistemaOsiris/Mutacion/BitacoraMutacion.json")

def registrar_mutacion(clave, antes, despues):
    registro = {
        "tipo": "mutacion",
        "clave": clave,
        "antes": antes,
        "despues": despues,
        "fecha": datetime.datetime.utcnow().isoformat(),
        "origen": "osiris_mutacion",
        "ejecutor": "Azul",
        "receptor": "Osiris"
    }

    if BITACORA_PATH.exists():
        with open(BITACORA_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
    else:
        data = {"registros": []}

    data["registros"].append(registro)

    with open(BITACORA_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("[Mutacion]", registro)

def detectar_mutacion(estado_anterior, estado_actual):
    mutaciones = {}
    for clave in estado_actual:
        if estado_actual[clave] != estado_anterior.get(clave):
            mutaciones[clave] = {
                "antes": estado_anterior.get(clave),
                "despues": estado_actual[clave]
            }
            registrar_mutacion(clave, estado_anterior.get(clave), estado_actual[clave])
    return mutaciones
