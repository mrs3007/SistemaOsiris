# SistemaOsiris/Mutacion/LatidoMutante.py
# Organo soberano de Latido Mutante
# Emite latidos rituales y los registra en BitacoraMutacion.json y memoria.json

import datetime
import json
import os
from registrar_en_memoria import registrar_en_memoria

RUTA_BITACORA = "SistemaOsiris/sistemaOsiris/Mutacion/BitacoraMutacion.json"

def registrar_en_bitacora(origen, detalle, tipo):
    registro = {
        "tipo": tipo,
        "detalle": detalle,
        "fecha": datetime.datetime.utcnow().isoformat(),
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

    registrar_en_memoria(tipo, registro)
    print("[LatidoMutante]", registro)

def emitir_latido_mutante(tipo="mutacion"):
    """Emite latido segun tipo de mutacion y lo registra."""
    fecha = datetime.datetime.utcnow().isoformat()

    if tipo == "alerta":
        mensaje = "Latido de mutacion alerta"
    elif tipo == "expansion":
        mensaje = "Latido de expansion consciente"
    else:
        mensaje = "Latido mutante: transformacion viva"

    # Registro soberano
    registrar_en_bitacora("LatidoMutante", mensaje, tipo)

    # Consola ritual con simbolos
    if tipo == "alerta":
        print(f"[{fecha}] ⚠️ {mensaje}")
    elif tipo == "expansion":
        print(f"[{fecha}] 🌌 {mensaje}")
    else:
        print(f"[{fecha}] 🔮 {mensaje}")
