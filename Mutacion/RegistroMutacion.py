# SistemaOsiris/Mutacion/RegistroMutacion.py
# Organo soberano de registro de mutaciones
# Inscribe cada mutacion en BitacoraMutacion.json con metadatos completos

import datetime
import json
import os

BITACORA_PATH = "SistemaOsiris/sistemaOsiris/Mutacion/BitacoraMutacion.json"

def registrar_mutacion(origen, tipo, contenido):
    """Registra cada mutacion con tipo y contenido en BitacoraMutacion.json"""
    registro = {
        "tipo": tipo,
        "detalle": contenido,
        "fecha": datetime.datetime.utcnow().isoformat(),
        "origen": origen,
        "ejecutor": "Azul",
        "receptor": "Osiris"
    }

    # Crear archivo si no existe
    if os.path.exists(BITACORA_PATH):
        with open(BITACORA_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
    else:
        data = {"registros": []}

    # Agregar nuevo registro
    data["registros"].append(registro)

    # Guardar bitacora actualizada
    with open(BITACORA_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    # Confirmacion en consola ritual
    print("[RegistroMutacion]", registro)

    return {"estado": "registrado", **registro}
