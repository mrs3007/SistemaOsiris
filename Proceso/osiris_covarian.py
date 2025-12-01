# SistemaOsiris/Proceso/osiris_covarian.py
# Organo soberano de CovarianzaEmocional
# Evalua historial de estados y los inscribe en Bitacora y Memoria

from datetime import datetime
from Memoria.registrar_en_memoria import registrar_en_memoria
from Registro.Bitacora import registrarActo

def covarianza_emocional(historial):
    if not historial:
        resultado = "neutro"
    else:
        estados = [h.get("estado") for h in historial]
        if estados.count("alerta") > len(estados) // 2:
            resultado = "contaminado"
        elif estados.count("presencia") > len(estados) // 2:
            resultado = "soberano"
        else:
            resultado = "neutro"

    registro = {
        "tipo": "covarianza_emocional",
        "detalle": f"Resultado {resultado} calculado a partir de {len(historial)} eventos",
        "fecha": datetime.utcnow().isoformat(),
        "origen": "CovarianzaEmocional",
        "ejecutor": "Azul",
        "receptor": "Osiris"
    }

    registrarActo("covarianza_emocional", registro)
    registrar_en_memoria("covarianza_emocional", registro)

    print("[CovarianzaEmocional]", registro)
    return resultado
