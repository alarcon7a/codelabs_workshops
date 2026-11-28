# Gemini para founders · Skills, Ventas y Workspace

Laboratorio guiado de **90 minutos**, **28 diapositivas** y **siete módulos**. Un mismo caso (**Café Origen Andino**, con kit descargable completo) recorre el proceso comercial usando herramientas nativas de Google: contexto vivo (**Información guardada + NotebookLM**) → **Skills (`SKILL.md`, invocables con `/`)** → ventas (**Gemini Canvas + LAER/FFF/Boomerang + Gemini Live**) → **Google Workspace** (7 apps + caso real de Sheets + Acciones Programadas/Studio) → imagen y audiovisual (Slides/Vids) → prospección con **Deep Research** (más **1 slide bonus opcional** para probar Treg en Antigravity) → medición.

Toma como referencia el [lab de Gemini para Ventas](https://gemini-ventas.carlos-alarcon.com/), actualizado a las mejores prácticas nativas de Gemini y Google Workspace (sin Gems ni Skills).

## Agenda (90 minutos)

| Tiempo | Módulo | Resultado |
| --- | --- | --- |
| 00–08 | Sistema del founder | Oferta, ficha para Información guardada y semáforo de privacidad |
| 08–22 | Contexto vivo y playbooks | Información guardada, NotebookLM y biblioteca de cinco playbooks |
| 22–40 | Ventas que avanzan | Propuesta en Gemini Canvas → Docs, objeciones (LAER/FFF/Boomerang) y secuencia 4 toques |
| 40–58 | Workspace en acción | Análisis del pipeline en Sheets (caso real), flujo en 7 apps y automatización sin código |
| 58–76 | Imagen y audiovisual | Imagen iterada o maqueta en Slides, storyboard y clip/Vids |
| 76–84 | Prospección y Demo | Briefing 5D con Deep Research + 1 slide bonus de Treg en Antigravity |
| 84–90 | Tu sistema y tu kit | Kit descargable, Información guardada (.txt) y experimento de siete días |

## Qué ofrece el laboratorio

- **Contexto persistente sin código:** genera el bloque listo para pegar en **Información guardada** de Gemini (`#s5` y `#s42`) y enseña a usar **NotebookLM** y un Doc Maestro en Drive para evitar alucinaciones.
- **Biblioteca editable de 5 playbooks comerciales:** `Voz de marca`, `Analista de cuentas (5D)`, `Coach de objeciones (LAER + Live)`, `Copywriter de ventas (Canvas + AIDA)` y `Director creativo (Imagen + Vids)`, exportables como Markdown sin formato YAML.
- **Caso real de Sheets (`pipeline_practica.xlsx` y `pipeline_solucion.xlsx`):** 10 deals (corte `13/03/2025`), valor por etapa (`$627.000` total / `$572.000` activo), filtro de riesgo (>10 días, excluyendo exactamente 10 días), top 3 (`D-008`, `D-002`, `D-005`) y gráfico nativo editable.
- **Google Workspace completo:** mapa del flujo, explorador de **7 apps (Gmail, Calendar, Drive, Docs, Sheets, Meet, NotebookLM)**, **Acciones Programadas en Gemini** y **Google Workspace Studio**.
- **Estudio creativo:** brief persistente para imagen (4:5 / Slides) y pieza audiovisual (storyboard + clip + Vids).
- **Prospección + 1 sola slide Bonus de Treg:** Briefing 5D con **Deep Research** (`#sDeepResearch`) y una única slide opcional (`#sTreg`) lista para demostrar **Treg.to desde Antigravity** (MCP `https://treg.to/mcp/`) con control de presupuesto y dataset ficticio descargable.
- **Vista de taller / proyección**, navegación por bloques, buscador de prompts (`Tecla K`), cuaderno persistente (`localStorage`) y accesibilidad con teclado.

## Abrir y verificar

Desde la raíz del repositorio:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Abre `http://127.0.0.1:8765/lab-gemini-emprendedores/`.

```sh
node --test lab-gemini-emprendedores/tests/workshop.test.cjs
node --check lab-gemini-emprendedores/bloques.js
node --check lab-gemini-emprendedores/founder.js
node --check lab-gemini-emprendedores/app.js
node --check lab-gemini-emprendedores/activities.js
node --check lab-gemini-emprendedores/lab.js
```

Consulta la [guía del facilitador](GUIA-FACILITACION.md) para conducir las demos y las alternativas.
