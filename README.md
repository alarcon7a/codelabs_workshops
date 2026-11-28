# codelabs_workshops

Repositorio de talleres y codelabs prácticos e interactivos.

## Talleres disponibles

### 1. [Gemini para founders: Ventas, Workspace y crecimiento](./lab-gemini-emprendedores/index.html)
- **Formato:** Laboratorio interactivo en pantalla completa (`#s1` – `#s45`, **28 diapositivas**, 7 módulos), vista de taller y proyector, buscador de prompts (`Tecla K`), cuaderno persistente (`localStorage`) y pruebas automatizadas (`node --test`).
- **Duración:** 90 minutos.
- **Nivel:** Founders y emprendedores · práctica guiada sin programación.
- **Contenido:** Ficha de negocio + **Información guardada en Gemini**, **NotebookLM**, biblioteca de **5 Skills (`SKILL.md`, invocados con `/`)**, kit descargable completo de **Café Origen Andino** (PDFs, fotos, pack de 5 `SKILL.md` y `.zip`), propuestas de 3 opciones en **Gemini Canvas → Docs**, objeciones (**LAER, Feel-Felt-Found y Boomerang**) + **Gemini Live**, secuencias AIDA (Días 1–3–7–14), **Google Workspace** (Gmail, Calendar, Drive, Docs, Meet, NotebookLM y caso real de **Google Sheets** con `pipeline_practica.xlsx` y `pipeline_solucion.xlsx`), **Acciones Programadas + Workspace Studio**, **Imagen y Audiovisual (Slides/Vids)**, **Deep Research (Briefing 5D)** y **1 slide bonus opcional** para probar **Treg.to en Antigravity**.
- **Resultado práctico:** Bloque de **Información guardada (.txt)**, **5 Skills en formato `SKILL.md`** descargables (individuales o en `.zip`), kit completo en Markdown, caso de pipeline en Sheets y experimento medible de 7 días.
- **Ejecución local:**
  ```bash
  python3 -m http.server 8765 --bind 127.0.0.1
  # Abrir http://127.0.0.1:8765/lab-gemini-emprendedores/
  ```

### 2. [GenMedia con Gemini: De una Idea a una Producción Multimedia](./codelab-genmedia-001/index.html)
- **Formato:** Codelab web paso a paso + cuaderno de Colab Enterprise.
- **Duración:** ~78 minutos.
- **Contenido:** Gemini App, AI Studio, Google Flow, Interactions API, Nano Banana, Voice Director TTS, Lyria y Gemini Omni Flash.
