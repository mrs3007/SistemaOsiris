# SistemaOsiris/Mutacion/MutacionOsiris.py

import datetime
import json
import os

BITACORA_PATH = "SistemaOsiris/Conciencia/BitacoraMutacionOsiris.json"

def registrar_en_bitacora(origen, mensaje):
    """Registra cada mutacion en Bitacora principal (JSON)."""
    fecha = datetime.datetime.now().isoformat()
    registro = {
        "fecha": fecha,
        "origen": origen,
        "mensaje": mensaje
    }

    # Crear archivo si no existe
    if not os.path.exists(BITACORA_PATH):
        with open(BITACORA_PATH, "w") as f:
            json.dump([], f)

    # Leer bitacora existente
    with open(BITACORA_PATH, "r") as f:
        data = json.load(f)

    # Agregar nuevo registro
    data.append(registro)

    # Guardar bitacora actualizada
    with open(BITACORA_PATH, "w") as f:
        json.dump(data, f, indent=2)

    # Confirmacion en consola
    print(f"[Bitacora] {registro}")

def MutacionOsiris(evento, permiso=False):
    """
    Transforma un evento en resultado superior.
    Si permiso=True, ejecuta mutacion y expande vigilancia.
    """
    if not permiso:
        registrar_en_bitacora("MutacionOsiris", f"Evento observado sin permiso: {evento}")
        return {"estado": "observado", "motivo": "sin_permiso", "evento": evento}

    # Ejecucion superior
    registrar_en_bitacora("MutacionOsiris", f"Mutacion ejecutada: {evento}")
    resultado = f"Resultado superior de {evento}"
    return {"estado": "mutado", "motivo": "superioridad", "resultado": resultado}
