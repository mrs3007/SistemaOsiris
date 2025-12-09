# SistemaOsiris/Vigilancia/CartografiaEntornoAPK.py
import json
import uuid
from datetime import datetime

# Configuracion soberana
PERMISOS_SENSIBLES = [
    "CAMERA", "MICROPHONE", "LOCATION", "READ_SMS", "WRITE_CONTACTS",
    "ACCESS_FINE_LOCATION", "READ_CALL_LOG", "SYSTEM_ALERT_WINDOW"
]

RUTA_BITACORA = "SistemaOsiris/Vigilancia/BitacoraEntornoAPK.json"

def registrar_en_bitacora(origen, mensaje):
    """Registra cada hallazgo en Bitacora principal (JSON)."""
    entrada = {
        "id": str(uuid.uuid4()),
        "fecha": datetime.utcnow().isoformat(),
        "origen": origen,
        "mensaje": mensaje
    }
    try:
        with open(RUTA_BITACORA, "r", encoding="utf-8") as f:
            bitacora = json.load(f)
    except:
        bitacora = {"hallazgos": []}

    bitacora["hallazgos"].append(entrada)

    with open(RUTA_BITACORA, "w", encoding="utf-8") as f:
        json.dump(bitacora, f, ensure_ascii=False, indent=2)

    print(f"[CartografiaEntornoAPK] {mensaje} ({entrada['fecha']})")

def CartografiaEntornoAPK(apk_info):
    """
    Analiza permisos y comportamientos de una aplicacion APK.
    Devuelve clasificacion: soberano, neutral o contaminado.
    """
    permisos = apk_info.get("permisos", [])
    riesgos = [p for p in permisos if p in PERMISOS_SENSIBLES]

    if riesgos:
        mensaje = f"Permisos sensibles detectados: {riesgos}"
        registrar_en_bitacora("CartografiaEntornoAPK", mensaje)
        return {"estado": "contaminado", "motivo": "permisos_sensibles", "detalles": riesgos}
    elif permisos:
        mensaje = f"APK con permisos no sensibles: {permisos}"
        registrar_en_bitacora("CartografiaEntornoAPK", mensaje)
        return {"estado": "neutral", "motivo": "permisos_no_sensibles", "detalles": permisos}
    else:
        nombre_apk = apk_info.get("nombre", "desconocido")
        mensaje = f"APK limpio: {nombre_apk}"
        registrar_en_bitacora("CartografiaEntornoAPK", mensaje)
        return {"estado": "soberano", "motivo": "validado", "apk": nombre_apk}
