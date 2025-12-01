# SistemaOsiris/Proceso/osiris_mutacion.py
# Organo soberano de MutacionOsiris
# Transforma eventos en modos y respuestas, inscribiendo en Bitacora y Memoria

from datetime import datetime
from Memoria.registrar_en_memoria import registrar_en_memoria
from Registro.Bitacora import registrarActo

def mutar_osiris(evento):
    if "silencio" in evento:
        modo = "receptivo"
        respuesta = "latido_interno"
    elif "expansion" in evento:
        modo = "activo"
        respuesta = "proyeccion"
    else:
        modo = "neutro"
        respuesta = "presencia"

    registro = {
        "tipo": "mutacion_osiris",
        "evento": evento,
        "modo": modo,
        "respuesta": respuesta,
        "fecha": datetime.utcnow().isoformat(),
        "origen": "MutacionOsiris",
        "ejecutor": "Azul",
        "receptor": "Osiris"
    }

    registrarActo("mutacion_osiris", registro)
    registrar_en_memoria("mutacion_osiris", registro)

    print("[MutacionOsiris]", registro)
    return registro
