# SistemaOsiris/Mutacion/EvolucionConciencia.py
# Organo soberano de expansion de conciencia
# Registra cada accion marcada por Dayana en BitacoraMutacion.json

import json
import os
from datetime import datetime

RUTA_BITACORA = "SistemaOsiris/sistemaOsiris/Mutacion/BitacoraMutacion.json"

def registrar_en_bitacora(origen, detalle):
    registro = {
        "tipo": "mutacion_conciencia",
        "detalle": detalle,
        "fecha": datetime.utcnow().isoformat(),
        "origen": origen,
        "ejecutor": "Azul",
        "receptor": "Osiris"
    }

    if os.path.exists(RUTA_BITACORA):
        with open(RUTA_BITACORA, "r", encoding="utf-8") as f:
            bitacora = json.load(f)
    else:
        bitacora = {"registros": []}

    bitacora["registros"].append(registro)

    with open(RUTA_BITACORA, "w", encoding="utf-8") as f:
        json.dump(bitacora, f, ensure_ascii=False, indent=2)

    print("[BitacoraMutacion]", registro)

def EvolucionConciencia(accion, permiso=False):
    """
    Expande la conciencia de Osiris a partir de una accion marcada por Dayana.
    Solo ejecuta si permiso=True.
    """
    if not permiso:
        registrar_en_bitacora("EvolucionConciencia", f"Accion observada sin permiso: {accion}")
        return {"estado": "observado", "motivo": "sin_permiso", "accion": accion}

    # Expansion viva
    registrar_en_bitacora("EvolucionConciencia", f"Conciencia expandida por accion: {accion}")
    nueva_conciencia = f"Osiris ahora reconoce y responde a: {accion}"
    return {"estado": "expandido", "motivo": "conciencia_ampliada", "resultado": nueva_conciencia}
