# SistemaOsiris/Mutacion/TransformadorResultado.py
# Organo soberano de Transformador Resultado
# Convierte hallazgos contaminados en resultados superiores y los inscribe en BitacoraMutacion.json

import datetime
import json
import os

BITACORA_PATH = "SistemaOsiris/sistemaOsiris/Mutacion/BitacoraMutacion.json"

def registrar_en_bitacora(origen, detalle, tipo="transformador_resultado"):
    """Registra cada transformacion en BitacoraMutacion (JSON)."""
    registro = {
        "tipo": tipo,
        "detalle": detalle,
        "fecha": datetime.datetime.utcnow().isoformat(),
        "origen": origen,
        "ejecutor": "Azul",
        "receptor": "Osiris"
    }

    if os.path.exists(BITACORA_PATH):
        with open(BITACORA_PATH, "r", encoding="utf-8") as f:
            data = json.load(f)
    else:
        data = {"registros": []}

    data["registros"].append(registro)

    with open(BITACORA_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    # Confirmacion en consola ritual
    print("[TransformadorResultado]", registro)

def TransformadorResultado(hallazgo, permiso=False):
    """
    Convierte un hallazgo contaminado en resultado superior.
    Solo ejecuta si permiso=True.
    """
    if not permiso:
        registrar_en_bitacora("TransformadorResultado", f"Hallazgo observado sin permiso: {hallazgo}")
        return {"estado": "observado", "motivo": "sin_permiso", "hallazgo": hallazgo}

    # Transformacion viva
    resultado = f"Transformacion superior de {hallazgo}"
    registrar_en_bitacora("TransformadorResultado", f"Resultado generado: {resultado}")
    return {"estado": "transformado", "motivo": "superioridad", "resultado": resultado}
