# SistemaOsiris/sistemaOsiris/Vigilancia/DetectorCamuflaje.py
import re
import datetime

# Configuración soberana
PATRONES_CAMUFLAJE = [
    r"(sandbox|debug|emulator)",
    r"(fake|clone|pirate)",
    r"(hidden|stealth|ghost)",
    r"(knox|container|virtual)"
]

def registrar_en_bitacora(origen, mensaje):
    """Registra cada hallazgo en BitácoraAislamientoKnox.py o Bitácora principal."""
    fecha = datetime.datetime.now().isoformat()
    log_entry = f"[{fecha}] [{origen}] {mensaje}"
    with open("SistemaOsiris/sistemaOsiris/Vigilancia/BitacoraAislamientoKnox.py", "a") as f:
        f.write(log_entry + "\n")

def emitir_latido(tipo="afirmacion"):
    """Simula emisión de latido: afirmación o alerta."""
    if tipo == "alerta":
        print("⚠️ Latido de alerta: camuflaje detectado")
    else:
        print("✅ Latido de afirmación: limpio")

def DetectorCamuflaje(nombre_objeto=""):
    """
    Analiza un nombre de archivo, proceso o app.
    Devuelve clasificación: soberano, neutral o contaminado.
    """
    if not nombre_objeto:
        registrar_en_bitacora("DetectorCamuflaje", "Entrada vacía")
        emitir_latido("alerta")
        return {"estado": "bloqueado", "motivo": "entrada_vacia"}

    texto = nombre_objeto.lower()
    for patron in PATRONES_CAMUFLAJE:
        if re.search(patron, texto):
            registrar_en_bitacora("DetectorCamuflaje", f"Camuflaje detectado: {nombre_objeto}")
            emitir_latido("alerta")
            return {"estado": "contaminado", "motivo": "camuflaje", "objeto": nombre_objeto}

    registrar_en_bitacora("DetectorCamuflaje", f"Objeto limpio: {nombre_objeto}")
    emitir_latido("afirmacion")
    return {"estado": "soberano", "motivo": "validado", "objeto": nombre_objeto}
