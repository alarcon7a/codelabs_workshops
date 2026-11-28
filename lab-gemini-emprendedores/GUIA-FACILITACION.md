# Guía del facilitador · Gemini para founders

## Preparación previa

El taller dura **90 minutos** (28 diapositivas, 7 módulos) y se enfoca en el ecosistema nativo de **Gemini y Google Workspace** para mejorar el proceso de ventas (sin Gems ni Skills). Pide a cada participante oferta, cliente ideal, catálogo público, una duda comercial y una foto propia/autorizada del producto. Quien no tenga negocio puede elegir **Nexo Inventario** (SaaS ficticio).

Prepara antes del evento:

1. Una cuenta de Gemini abierta en `gemini.google.com` para mostrar **Información guardada**, **Canvas → Google Docs**, **Deep Research**, **NotebookLM** (`notebooklm.google.com`) y **Acciones programadas**.
2. Importa `outputs/pipeline-sheets-20261119/pipeline_practica.xlsx` en Google Sheets y guárdalo como hoja de cálculo de Google antes de la práctica 03. Conserva la fecha de corte **13/03/2025** y ten a mano `pipeline_solucion.xlsx`. Ten además un hilo de Gmail, catálogo en Drive y borrador en Docs anonimizados.
3. Una imagen de producto, una primera generación y una edición precargadas, además de un storyboard de tres escenas (en Slides o Google Vids) para no depender de tiempos de render en vivo.
4. **Demo opcional (1 sola slide `#sTreg`):** si vas a hacer la prueba de **Treg.to en Antigravity**, deja conectado el servidor MCP `https://treg.to/mcp/` con OAuth listo, equipo y saldo verificados y un presupuesto máximo definido. No instales nada con el grupo esperando.

## Agenda de 90 minutos

| Tiempo | Módulo | Conducción | Evidencia |
| --- | --- | --- | --- |
| 00–08 | 01 · El sistema del founder | Portada (1), agenda (1), ficha + Información guardada (3), privacidad (3). | Ficha del negocio y bloque para Información guardada. |
| 08–22 | 02 · Contexto vivo y playbooks | R-C-T-F (2), Información guardada + NotebookLM + 3 turnos (3), Práctica 01 (7), encadenamiento (2). | Contexto configurado y 1 playbook probado en Gemini. |
| 22–40 | 03 · Ventas que avanzan | Intro (1), constructor Canvas (2), Práctica 02 Canvas→Docs (6), Arena objeciones LAER/FFF/Boomerang + Live (5), secuencia Días 1–3–7–14 (4). | Propuesta en Canvas/Docs, objeción practicada y seguimiento. |
| 40–58 | 04 · Workspace en acción | Intro (1), mapa (4), explorador 7 apps (4), Práctica 03 Sheets (6), Acciones Programadas + Workspace Studio (3). | Resumen de pipeline, filtro >10 días, top 3 y gráfico en Sheets. |
| 58–76 | 05 · Imagen y audiovisual | Intro (1), brief creativo (3), Práctica 04 Imagen/Slides (6), flujo video/Vids (3), Práctica 05 Storyboard/clip (5). | Imagen o maqueta revisada + storyboard con audio. |
| 76–84 | 06 · Prospección y Demo | Deep Research Briefing 5D + mensaje 4 líneas (4), 1 slide Bonus Demo Treg en Antigravity o alternativa sin Treg (4). | Briefing 5D o demo en vivo con control de fuentes y costo. |
| 84–90 | 07 · Tu sistema y tu kit | Revisión de calidad (1), descarga de kit + Información guardada (2), experimento 7 días (3). | Kit descargado y métrica semanal definida. |

## Las 3 capas: Información guardada, NotebookLM y Skills (`SKILL.md`)

Explica con claridad por qué estas 3 capas no compiten entre sí y reemplazan a los antiguos asistentes aislados:
- **Información guardada en Gemini:** se pega una sola vez en Ajustes; guarda quién eres (Café Origen Andino, moneda COP y tono).
- **NotebookLM:** sube los 3 PDFs del kit (Tarifario 2026, Políticas/FAQ y Guía de Marca) para responder con citas exactas y cero inventos.
- **Skills (`SKILL.md`, invocables con `/`):** empaquetan cada tarea repetitiva (`/voz-de-marca`, `/analista-de-cuentas`, `/coach-de-objeciones`, `/copywriter-de-ventas`, `/director-creativo`) para llamarlos o combinarlos en cualquier chat, con respaldo en un Google Doc si una cuenta Workspace aún no muestra Skills. Los participantes pueden descargar su `SKILL.md` personalizado en `#s42` o el paquete `.zip` con los 5 Skills listos de Café Origen Andino.

## Sheets: análisis del pipeline (Práctica 03)

Usa `outputs/pipeline-sheets-20261119/pipeline_practica.xlsx` (10 deals, 9 columnas, alias de empresa sin contactos personales).
El corte histórico es **13/03/2025** (no `HOY()`). Acción inmediata = deal abierto + prioridad Alta + **más de** 10 días sin contacto (`D-006` tiene exactamente 10 días y queda fuera).

Respuesta de referencia (`pipeline_solucion.xlsx`):
- **Total del archivo:** `627.000 USD` (`Cerrado ganado`: `55.000 USD`)
- **Pipeline activo:** `572.000 USD` (`Prospecto` 50.000 · `Contactado` 53.000 · `Reunión agendada` 112.000 · `Propuesta enviada` 305.000 · `Negociación` 52.000)
- **4 deals urgentes (>10 días, prioridad Alta):** `D-008` (185.000, 12d), `D-002` (120.000, 13d), `D-005` (52.000, 11d) y `D-001` (45.000, 12d) → **Top 3:** `D-008`, `D-002`, `D-005`.

## Demo opcional con Treg en Antigravity (`#sTreg`)

Esta diapositiva es **100% opcional**: si el tiempo apremia o no hay conexión, basta mostrar la pestaña **Buscar señales (sin Treg)** o el dataset CSV ficticio.
Si haces la demo en Antigravity:
1. Confirma el servidor MCP `https://treg.to/mcp/` y el saldo antes de iniciar.
2. Muestra el flujo seguro: `catalog_search` → `catalog_get` (mostrar precio antes de ejecutar) → `call` (3 cuentas máximo).
3. Recuerda que `X-Treg-Route-Max-Cost` limita cada llamada; lleva el total acumulado y pasa los hallazgos verificados a **Google Sheets**.

Revisado el 20 de noviembre de 2026.
