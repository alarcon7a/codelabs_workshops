# Taller Práctico: Gemma 4 (`gemma4:e4b`) y EmbeddingGemma 2 en Local

En este taller construirás paso a paso una arquitectura multimodal y agéntica 100% local con **Gemma 4 (`gemma4:e4b`)** y **EmbeddingGemma 2** bajo licencia **Apache 2.0**:

- **Módulo 1 y 2**: Configuración de Ollama (`>= 0.40`), `num_ctx = 8192` y parámetros de muestreo oficiales (`temperature=1.0`, `top_p=0.95`, `top_k=64`).
- **Módulo 3**: Razonamiento híbrido (`think=True` vs. `think=False`) y limpieza del canal `thinking` en memoria multiturno.
- **Módulo 4**: Multimodalidad real con imágenes generadas en **Nano Banana (`gemini-nano-banana-2.1`)** y audios WAV en español generados con **Gemini 3.8 Flash TTS (`gemini-3.8-flash-tts`)**.
- **Módulo 5 y 6**: Function Calling nativo y agentes en el navegador con **WebMCP** (`navigator.modelContext.registerTool`) + `gemma4_server.py`.
- **Módulo 7**: **EmbeddingGemma 2** con prefijos asimétricos, compresión **Matryoshka (`768d` → `512d` → `256d` → `128d`)**, re-normalización L2 y enrutador semántico por umbral (`Threshold Routing`).
- **Módulo 8**: **RAG Cross-Lingual con Ventana Compartida por Tokens (`320 tokens`, `64 tokens` de solapamiento)** sobre la película *One Battle After Another (2025)*.

---

## Enlaces Rápidos

- 📓 **Notebook Interactivo**: [`tutorial_gemma_4.ipynb`](./tutorial_gemma_4.ipynb) · [Abrir en Google Colab](https://colab.research.google.com/github/alarcon7a/codelabs_workshops/blob/main/codelab-gemma-4-001/tutorial_gemma_4.ipynb)
- 🌐 **Codelab Web (`index.html`)**: [`index.html`](./index.html) (fuente Markdown en [`gemma-4-taller.md`](./gemma-4-taller.md))
- 🛒 **Demo Interactiva WebMCP**: [`webmcp-demo.html`](./webmcp-demo.html) + puente local [`gemma4_server.py`](./gemma4_server.py)
- 🗂️ **Assets Multimodales (`assets/`)**:
  - [`assets/factura_cloud_andina.jpg`](./assets/factura_cloud_andina.jpg) *(Factura comercial Nano Banana)*
  - [`assets/recibo_cafeteria.jpg`](./assets/recibo_cafeteria.jpg) *(Ticket térmico Nano Banana)*
  - [`assets/audio_reporte_sre.wav`](./assets/audio_reporte_sre.wav) *(Reporte SRE con Gemini 3.8 TTS)*
  - [`assets/audio_soporte_cliente.wav`](./assets/audio_soporte_cliente.wav) *(Consulta de cliente con Gemini 3.8 TTS)*
  - [`assets/one_battle_after_another_2025_transcript.txt`](./assets/one_battle_after_another_2025_transcript.txt) *(11,352 tokens para RAG Cross-Lingual)*

---

## Cómo ejecutar el taller en tu máquina

```bash
# 1. Clonar el repositorio y entrar a la carpeta del taller
git clone https://github.com/alarcon7a/codelabs_workshops.git
cd codelabs_workshops/codelab-gemma-4-001

# 2. Descargar los modelos locales en Ollama
ollama pull gemma4:e4b
ollama pull embeddinggemma-2

# 3. Abrir el Notebook interactivo
jupyter lab tutorial_gemma_4.ipynb
```
