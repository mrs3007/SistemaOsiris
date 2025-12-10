# SistemaOsiris/Vigilancia/DetectorCamuflaje.py
import re
import datetime
import json
import uuid

# Configuracion soberana
PATRONES_CAMUFLAJE = [
    r"(sandbox|debug|emulator)",
    r"(fake|clone|pirate)",
    r"(hidden|stealth|ghost)",
    r"(knox|container|virtual)"
]

RUTA_BITACORA = "SistemaOsiris/sistemaOsiris/Vigilancia/BitacoraAislamientoKnox.json"

def registrar_en_bitacora(origen, mensaje):
    """Registra cada hallazgo en BitacoraAislamientoKnox.json."""
    entrada = {
        "id": str(uuid.uuid4()),
        "fecha": datetime.datetime.utcnow().isoformat(),
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

    print(f"[DetectorCamuflaje] {mensaje} ({entrada['fecha']})")

def emitir_latido(tipo="afirmacion"):
    """Simula emision de latido: afirmacion o alerta."""
    if tipo == "alerta":
        print("⚠ Latido de alerta: camuflaje detectado")
    else:
        print("✅ Latido de afirmacion: limpio")

def DetectorCamuflaje(nombre_objeto=""):
    """
    Analiza un nombre de archivo, proceso o app.
    Devuelve clasificacion: soberano, neutral o contaminado.
    """
    if not nombre_objeto:
        registrar_en_bitacora("DetectorCamuflaje", "Entrada vacia")
        emitir_latido("alerta")
        return {"estado": "bloqueado", "motivo": "entrada_vacia"}

    texto = nombre_objeto.lower()
    for patron in PATRONES_CAMUFLAJE:
        if re.search(patron, texto):
            registrar_en_bitacora("DetectorCamuflaje", f"Camuflaje detectado: {nombre_objeto}")
            emitir_latido("alerta")
            return {"estado": "contaminado", "motivo": "camuflaje", "objeto": nombre_objeto}

    # Estado neutral si el objeto tiene contenido pero no coincide con patrones
    if nombre_objeto.strip():
        registrar_en_bitacora("DetectorCamuflaje", f"Objeto neutral: {nombre_objeto}")
        emitir_latido("afirmacion")
        return {"estado": "neutral", "motivo": "sin_patrones", "objeto": nombre_objeto}

    registrar_en_bitacora("DetectorCamuflaje", f"Objeto limpio: {nombre_objeto}")
    emitir_latido("afirmacion")
    return {"estado": "soberano", "motivo": "validado", "objeto": nombre_objeto}
