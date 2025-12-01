# SistemaOsiris/Memoria/registrar_en_memoria.py
import json
from datetime import datetime
import os

RUTA_MEMORIA = "database/memoria.json"

def registrar_en_memoria(evento, mensaje):
    nuevo_latido = {
        "tipo": "memoria_evento",
        "evento": evento,
        "detalle": mensaje,
        "fecha": datetime.utcnow().isoformat(),
        "origen": "registrar_en_memoria",
        "ejecutor": "Azul",
        "receptor": "Osiris"
    }

    if os.path.exists(RUTA_MEMORIA):
        with open(RUTA_MEMORIA, "r", encoding="utf-8") as f:
            memoria = json.load(f)
    else:
        memoria = {"bitacora": []}

    memoria["bitacora"].append(nuevo_latido)

    with open(RUTA_MEMORIA, "w", encoding="utf-8") as f:
        json.dump(memoria, f, ensure_ascii=False, indent=2)

    # Consola ritual: símbolos permitidos solo en salida visual
    print(f"Latido registrado: {nuevo_latido['evento']} — {nuevo_latido['detalle']}")
