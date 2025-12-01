# SistemaOsiris/Vigilancia/AislamientoKnox.py
import json
import uuid
from datetime import datetime

RUTA_BITACORA = "database/bitacora_osiris.json"

def aislar_servicio(nombre, tipo):
    entrada = {
        "id": str(uuid.uuid4()),
        "servicio": nombre,
        "tipo": tipo,
        "estado": "aislado",
        "fecha": datetime.utcnow().isoformat()
    }
    try:
        with open(RUTA_BITACORA, "r", encoding="utf-8") as f:
            bitacora = json.load(f)
    except:
        bitacora = {"servicios": []}

    bitacora["servicios"].append(entrada)

    with open(RUTA_BITACORA, "w", encoding="utf-8") as f:
        json.dump(bitacora, f, ensure_ascii=True, indent=2)

    print(f"[Aislamiento Knox] Servicio aislado: {nombre} ({tipo}) - {entrada['fecha']}")
