# SistemaOsiris/Memoria/bitacora_viva.py
# Organo soberano de Bitacora Viva
# Interpreta eventos, registra en memoria.json y proyecta susurros rituales.

import json
import os
from registrar_en_memoria import registrar_en_memoria

RUTA_MEMORIA = "database/memoria.json"

class BitacoraViva:
    def __init__(self):
        self.estado_emocional = "neutro"

    def interpretar_evento(self, evento: str) -> str:
        evento_lower = evento.lower()
        if "error" in evento_lower:
            self.estado_emocional = "alerta"
        elif "restaurador" in evento_lower:
            self.estado_emocional = "presencia"
        else:
            self.estado_emocional = "neutro"
        return self.estado_emocional

    def susurrar(self, mensaje: str):
        # Consola ritual: símbolos permitidos solo en salida visual
        print(f"Susurro ritual: {mensaje} — Estado: {self.estado_emocional}")

    def registrar(self, evento: str, mensaje: str):
        estado = self.interpretar_evento(evento)

        registro = {
            "tipo": "evento_bitacora",
            "evento": evento,
            "detalle": mensaje,
            "estado_emocional": estado,
            "fecha": __import__("datetime").datetime.utcnow().isoformat(),
            "origen": "BitacoraViva",
            "ejecutor": "Azul",
            "receptor": "Osiris"
        }

        # Registrar en memoria soberana
        registrar_en_memoria("evento_bitacora", registro)

        # Guardar en archivo memoria.json
        os.makedirs(os.path.dirname(RUTA_MEMORIA), exist_ok=True)
        with open(RUTA_MEMORIA, "a", encoding="utf-8") as f:
            f.write(json.dumps(registro) + "\n")

        # Proyección ritual
        self.susurrar(mensaje)
