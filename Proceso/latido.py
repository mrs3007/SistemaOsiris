# SistemaOsiris/Proceso/latido.py
from datetime import datetime

def generar_latido(evento):
    return {
        "evento": evento,
        "latido": f"🫀-{evento}-{datetime.now().isoformat()}",
        "estado": "activo"
    }
