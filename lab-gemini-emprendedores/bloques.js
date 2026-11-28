// Taller de founders: los tiempos incluyen demos, práctica y revisión.
window.WORKSHOP_DATA = {
  "meta": {
    "title": "Gemini para founders · Skills, Ventas y Workspace",
    "subtitle": "Laboratorio práctico de 90 minutos · Skills, Workspace, ventas y creación",
    "durationMins": 90,
    "level": "Founders y emprendedores · práctica guiada",
    "geminiUrl": "https://gemini.google.com/app",
    "pipelineFileUrl": "outputs/pipeline-sheets-20261119/pipeline_practica.xlsx",
    "reviewedOn": "2026-11-20",
    "coreDeliverables": 5
  },
  "presets": [
    {
      "id": "cafe",
      "emoji": "☕",
      "label": "Café Origen Andino · Caso principal del taller",
      "name": "Café Origen Andino",
      "offer": "Café de especialidad por suscripción mensual y barras móviles de espresso para eventos corporativos",
      "audience": "Oficinas de 20 a 150 personas y amantes del café en casa",
      "diff": "Tueste fresco semanal directo de caficultores locales y montaje en 30 minutos",
      "tone": "Cálido, experto pero cercano y sin tecnicismos snobs (trato de 'tú')",
      "painTask": "Armar cotizaciones para eventos y publicar contenido semanal en Instagram"
    },
    {
      "id": "saas",
      "emoji": "",
      "label": "Nexo Inventario · SaaS B2B (ficticio)",
      "name": "Nexo Inventario",
      "offer": "Software de inventario y alertas de reposición para comercios con varias sedes",
      "audience": "Comercios minoristas de 2 a 10 sedes en Colombia",
      "diff": "Puesta en marcha acompañada y tablero simple por sede",
      "tone": "Claro, práctico y directo, sin promesas de ahorro no medidas",
      "painTask": "Investigar cuentas, dar seguimiento a demos y crear piezas de producto"
    },
    {
      "id": "agencia",
      "emoji": "🎨",
      "label": "Estudio Impulso Creativo",
      "name": "Estudio Impulso Creativo",
      "offer": "Diseño de identidad visual, páginas web que convierten y kits de marca para pymes",
      "audience": "Emprendedores en crecimiento y negocios de servicios B2B",
      "diff": "Entrega garantizada en 3 semanas con acompañamiento estratégico paso a paso",
      "tone": "Claro, estratégico, empático y directo al resultado comercial",
      "painTask": "Redactar propuestas de 3 opciones y responder objeciones de presupuesto"
    },
    {
      "id": "moda",
      "emoji": "👗",
      "label": "Looma Sostenible",
      "name": "Looma Sostenible",
      "offer": "Prendas básicas versátiles de algodón orgánico vendidas por tienda online y WhatsApp",
      "audience": "Mujeres y hombres de 25 a 45 años que priorizan comodidad y durabilidad",
      "diff": "Telas certificadas suaves que no pierden forma tras 50 lavadas y cambios sin costo",
      "tone": "Fresco, honesto, consciente y cercano (como una amiga que recomienda algo real)",
      "painTask": "Crear guiones de Reels semanales y responder dudas de tallas y envíos"
    },
    {
      "id": "bienestar",
      "emoji": "🩺",
      "label": "Equilibra Salud Integral",
      "name": "Equilibra Salud Integral",
      "offer": "Programas de nutrición práctica y hábitos saludables de 8 semanas con seguimiento 1 a 1",
      "audience": "Profesionales ocupados de 30 a 50 años con poco tiempo para cocinar",
      "diff": "Menús reales en 15 minutos sin dietas extremas ni suplementos costosos",
      "tone": "Motivador, empático, basado en hábitos reales y cero juicios",
      "painTask": "Resumir correos/formularios de ingreso y preparar seguimientos semanales"
    }
  ],
  "bloques": [
    {
      "id": "b00",
      "code": "01",
      "title": "El sistema del founder",
      "shortTitle": "Inicio",
      "timeRange": "00–08 min",
      "color": "#285BEA",
      "slides": [
        {
          "id": "s1",
          "type": "cover",
          "theme": "dark",
          "mins": 1,
          "badge": "Taller Práctico · 90 min",
          "title": "Gemini para founders y emprendedores",
          "highlightTitle": "Menos tareas.\nMás ventas.",
          "subtitle": "Configura tu contexto vivo (Información guardada + NotebookLM), crea tus Skills reutilizables (SKILL.md), mejora tus propuestas en Canvas y opera tu pipeline en Workspace.",
          "pills": [
            "90 minutos",
            "Founders y emprendedores",
            "Práctica guiada"
          ],
          "pillars": [
            {
              "title": "Prepara tu próxima venta",
              "desc": "Skills (/), propuestas en Canvas, objeciones y seguimiento.",
              "targetId": "s42"
            },
            {
              "title": "Opera desde Workspace",
              "desc": "Gmail, Docs, Sheets, Calendar, Meet y automatización sin código.",
              "targetId": "sWorkspace"
            },
            {
              "title": "Produce tu próxima campaña",
              "desc": "Imagen, guion, video y voz con una misma marca.",
              "targetId": "sCreative"
            }
          ]
        },
        {
          "id": "s2",
          "type": "agenda",
          "theme": "light",
          "mins": 1,
          "title": "Un negocio. Siete módulos. Un sistema.",
          "subtitle": "Trabaja con el mismo negocio en contexto, ventas, Workspace, creación y prospección usando herramientas nativas de Google (con 1 slide opcional de demo Treg en Antigravity).",
          "items": [
            {
              "time": "00–08 min",
              "title": "Configura el contexto del founder",
              "desc": "Tu oferta, cliente ideal y semáforo de privacidad.",
              "targetId": "s5"
            },
            {
              "time": "08–22 min",
              "title": "Skills (SKILL.md) y contexto vivo",
              "desc": "Qué es un Skill, Información guardada, NotebookLM y descarga de tus 5 Skills.",
              "targetId": "s8"
            },
            {
              "time": "22–40 min",
              "title": "Convierte la oportunidad en propuesta",
              "desc": "Propuestas en Gemini Canvas → Docs, objeciones (LAER / FFF / Boomerang) y seguimiento.",
              "targetId": "s14"
            },
            {
              "time": "40–58 min",
              "title": "Trabaja dentro de Workspace",
              "desc": "Gmail → Drive/Docs → Sheets (caso real) → Calendar/Meet y automatización sin código.",
              "targetId": "sWorkspace"
            },
            {
              "time": "58–76 min",
              "title": "Crea imágenes y piezas audiovisuales",
              "desc": "Un brief, una imagen iterada y un storyboard con audio en Slides y Vids.",
              "targetId": "sCreative"
            },
            {
              "time": "76–84 min",
              "title": "Prospección con evidencia + Demo opcional",
              "desc": "Briefing 5D con Deep Research y 1 slide bonus de Treg en Antigravity.",
              "targetId": "sDeepResearch"
            },
            {
              "time": "84–90 min",
              "title": "Llévate el sistema y mide",
              "desc": "Kit completo, Información guardada y experimento de siete días.",
              "targetId": "s44"
            }
          ]
        },
        {
          "id": "s5",
          "type": "businessProfile",
          "theme": "light",
          "mins": 3,
          "badge": "Actividad 01 · +50 pts",
          "badgeColor": "emerald",
          "title": "Elige el negocio que vas a hacer crecer.",
          "subtitle": "Usa tu emprendimiento o el ejemplo SaaS/B2B. Esta ficha personaliza todo el taller y genera tu bloque listo para pegar en Información guardada de Gemini."
        },
        {
          "id": "s6",
          "type": "trafficLight",
          "theme": "light",
          "mins": 3,
          "badge": "Privacidad y Confianza",
          "badgeColor": "cyan",
          "title": "Buen contexto. Datos cuidados.",
          "subtitle": "Antes de pegar un mensaje, elimina lo que no necesitas compartir.",
          "lights": [
            {
              "color": "green",
              "title": "Puedes usar",
              "items": [
                "Tu oferta pública y tu cliente ideal.",
                "Catálogos públicos y ejemplos ficticios.",
                "Dudas frecuentes sin identificar al cliente."
              ]
            },
            {
              "color": "amber",
              "title": "Revisa y anonimiza",
              "items": [
                "Usa [Cliente A] en lugar de nombres o teléfonos.",
                "Revisa permisos antes de subir documentos internos.",
                "Comprueba precios, stock, fechas y condiciones."
              ]
            },
            {
              "color": "red",
              "title": "No compartas",
              "items": [
                "Contraseñas, códigos de acceso ni claves de API.",
                "Datos bancarios o documentos de identidad.",
                "Información sensible sin autorización."
              ]
            }
          ],
          "callout": {
            "color": "primary",
            "text": "La protección depende de tu cuenta, configuración y contrato. Revisa las políticas de tu organización. El laboratorio guarda tu ficha y borradores en este navegador; evita datos sensibles también aquí."
          },
          "sources": [
            {
              "title": "Privacidad de Gemini Apps",
              "url": "https://support.google.com/gemini/answer/13594961?hl=es"
            },
            {
              "title": "Gemini con cuentas de trabajo",
              "url": "https://support.google.com/gemini/answer/14620100?hl=es"
            }
          ]
        }
      ]
    },
    {
      "id": "b01",
      "code": "02",
      "title": "Skills y contexto vivo",
      "shortTitle": "Skills",
      "timeRange": "08–22 min",
      "color": "#285BEA",
      "slides": [
        {
          "id": "s8",
          "type": "cards",
          "theme": "light",
          "title": "Del prompt suelto a un Skill reutilizable.",
          "subtitle": "Un Skill empaqueta Rol, Contexto, Tarea, Formato y Límites una sola vez en un archivo estándar (SKILL.md). En cada oportunidad solo cambias el cliente, la oferta o la pieza.",
          "mins": 2,
          "cols": 3,
          "cards": [
            {
              "glyph": "R",
              "title": "Rol",
              "desc": "Qué criterio profesional necesitas.",
              "snippet": "Actúa como asesor comercial consultivo.",
              "color": "primary"
            },
            {
              "glyph": "C",
              "title": "Contexto",
              "desc": "Qué vendes, a quién y con qué diferencia.",
              "snippet": "Somos {{negocio}}. Ofrecemos {{oferta}} para {{cliente}}.",
              "color": "primary"
            },
            {
              "glyph": "T",
              "title": "Tarea",
              "desc": "Una acción y un resultado concreto.",
              "snippet": "Escribe una propuesta con tres opciones en Gemini Canvas.",
              "color": "primary"
            },
            {
              "glyph": "F",
              "title": "Formato",
              "desc": "Cómo usarás el resultado.",
              "snippet": "Una tabla breve lista para Docs y un WhatsApp de cuatro líneas.",
              "color": "primary"
            },
            {
              "glyph": "+",
              "title": "Límites",
              "desc": "Qué debe preguntar, verificar o evitar.",
              "snippet": "No inventes precios ni testimonios. Pregunta si falta un dato.",
              "color": "primary"
            }
          ]
        },
        {
          "id": "s39",
          "type": "steps",
          "theme": "light",
          "title": "¿Qué es un Skill en Gemini y cómo se combina con tu contexto?",
          "subtitle": "Un Skill es una habilidad modular con instrucciones reutilizables (en formato abierto SKILL.md) que invocas dentro de cualquier chat escribiendo /nombre-del-skill —sin salir de tu conversación— y se complementa con Información guardada y NotebookLM.",
          "mins": 3,
          "steps": [
            {
              "num": "01",
              "title": "Qué es un Skill (invocación con /)",
              "desc": "En lugar de repetir el mismo prompt cada lunes o saltar entre asistentes aislados, guardas cada tarea comercial como un Skill corto (ej. /copywriter-de-ventas, /voz-de-marca) y puedes combinar dos en el mismo chat.",
              "example": "Estructura SKILL.md: encabezado (name + description de cuándo usarlo) + reglas + formato."
            },
            {
              "num": "02",
              "title": "Las 3 capas que trabajan juntas",
              "desc": "1) Información guardada = quién eres (oferta, moneda y tono). 2) NotebookLM / Drive = tus documentos reales (tarifario PDF, políticas, cero inventos). 3) Skills = cómo ejecutas cada tarea repetitiva.",
              "example": "Cada capa cumple un rol distinto y se actualiza en un solo lugar."
            },
            {
              "num": "03",
              "title": "Cómo activarlo hoy en tu cuenta",
              "desc": "En Gemini Apps abre Personalizar → Skills, pega el SKILL.md que descargarás en la práctica siguiente e invócalo con /. Si tu cuenta Workspace aún no muestra Skills, guarda el mismo archivo en un Google Doc de Drive.",
              "example": "Un mismo SKILL.md funciona hoy en Gemini, Workspace Studio o un Doc en Drive."
            }
          ],
          "sources": [
            {
              "title": "Crear y gestionar Skills en Gemini",
              "url": "https://support.google.com/gemini/answer/17094296?hl=es"
            },
            {
              "title": "Información guardada en Gemini",
              "url": "https://support.google.com/gemini/answer/15637730?hl=es"
            },
            {
              "title": "Primeros pasos con NotebookLM",
              "url": "https://support.google.com/notebooklm/answer/14273541?hl=es"
            }
          ]
        },
        {
          "id": "s42",
          "type": "assistantLab",
          "theme": "light",
          "mins": 7,
          "title": "Práctica 01 · Tu biblioteca de Skills (SKILL.md).",
          "subtitle": "Elige un Skill comercial, ajústalo a tu negocio, descárgalo en formato SKILL.md (o baja los 5 Skills listos de Café Origen Andino en .zip) y pruébalo con un caso real en Gemini.",
          "deliverable": "Tu Skill (SKILL.md) y prueba de uso"
        },
        {
          "id": "sStack",
          "type": "cards",
          "theme": "light",
          "title": "Combina Skills (/) y herramientas sin perder contexto.",
          "subtitle": "Mantén cada Skill enfocado en un solo trabajo para poder combinarlos en línea dentro del mismo chat y llevar su salida a Workspace.",
          "mins": 2,
          "cols": 2,
          "cards": [
            {
              "glyph": "01",
              "title": "/analista-de-cuentas + /copywriter-de-ventas → Canvas",
              "desc": "Investigas la cuenta o validas precios en NotebookLM, aplicas ambos Skills en Gemini Canvas y exportas tu propuesta a Google Docs.",
              "snippet": "Usa /analista-de-cuentas con estas fuentes de {{negocio}}. Después aplica /copywriter-de-ventas y /voz-de-marca en Gemini Canvas para armar la propuesta de tres opciones y un primer mensaje basado en un hecho confirmado.",
              "color": "primary"
            },
            {
              "glyph": "02",
              "title": "/director-creativo + /voz-de-marca → Imagen / Slides / Vids",
              "desc": "El Skill define el brief y la coherencia visual; la herramienta de imagen, Slides o Google Vids ejecuta la pieza final.",
              "snippet": "Usa /director-creativo y /voz-de-marca para convertir {{oferta}} de {{negocio}} en un concepto de campaña para {{cliente}}. Entrega un prompt de imagen 4:5 y un storyboard de tres escenas con audio. No afirmes que generaste un archivo.",
              "color": "primary"
            }
          ]
        }
      ]
    },
    {
      "id": "b02",
      "code": "03",
      "title": "Ventas que avanzan",
      "shortTitle": "Ventas",
      "timeRange": "22–40 min",
      "color": "#285BEA",
      "slides": [
        {
          "id": "s14",
          "type": "section",
          "theme": "dark",
          "mins": 1,
          "num": "03",
          "title": "De una necesidad real\na una propuesta concreta.",
          "subtitle": "Co-edita propuestas de tres opciones en Gemini Canvas, entrena objeciones con LAER, Feel-Felt-Found y Boomerang (también por voz en Gemini Live) y prepara seguimientos con valor.",
          "bullets": [
            "Propuesta en Canvas",
            "Objeciones y Gemini Live",
            "Secuencia de seguimiento"
          ]
        },
        {
          "id": "s16",
          "type": "promptBuilder",
          "theme": "light",
          "mins": 2,
          "badge": "Laboratorio Comercial · Gemini Canvas",
          "badgeColor": "primary",
          "title": "Construye el encargo de tu propuesta para Gemini Canvas.",
          "subtitle": "Usa una solicitud propia o carga el ejemplo ficticio. En Canvas puedes editar secciones puntuales y exportar directo a Google Docs. Los precios de ejemplo están en COP y no son una recomendación.",
          "exampleValues": {
            "solicitud": "Ejemplo ficticio: barra de café para una oficina de 40 personas en Bogotá.",
            "resultado": "Una pausa de equipo sin encargarse de la logística.",
            "opciones": "COP 350.000 / COP 520.000 / COP 750.000. Alcance por confirmar.",
            "plazo": "Fecha solicitada: 15 de diciembre. Disponibilidad y vigencia por confirmar."
          },
          "fields": [
            {
              "key": "solicitud",
              "label": "¿Qué pidió el cliente o qué decía su mensaje?",
              "placeholder": "Ej. Cotización para 40 personas / web corporativa / paquete mensual..."
            },
            {
              "key": "resultado",
              "label": "¿Qué problema quiere resolver o qué resultado busca?",
              "placeholder": "Ej. Ahorrar tiempo, verse más profesional, aumentar reservas..."
            },
            {
              "key": "opciones",
              "label": "Opciones reales y precios confirmados",
              "placeholder": "Ej. Esencial COP 350.000 / Recomendada COP 520.000 / por confirmar"
            },
            {
              "key": "plazo",
              "label": "Plazo de entrega / vigencia de la propuesta",
              "placeholder": "Ej. Entrega en 7 días hábiles · vigencia 10 días"
            }
          ]
        },
        {
          "id": "s17",
          "type": "reto",
          "theme": "light",
          "mins": 6,
          "durationSec": 360,
          "title": "Práctica 02 · Tu propuesta en Gemini Canvas → Google Docs.",
          "subtitle": "Usa una oportunidad real de tu negocio o el caso ficticio. Activa el modo Canvas en Gemini para pulir una sección sin rehacer todo y exporta a Docs revisando cada condición.",
          "deliverable": "Tu propuesta en Canvas/Docs y mensaje de envío",
          "promptTemplate": "Actúa como asesor comercial consultivo de {{negocio}}.\n[Activa el modo Canvas en Gemini antes de enviar este prompt para editar secciones y exportar a Google Docs]\n\nOferta: {{oferta}}. Cliente: {{cliente}}. Diferencia confirmada: {{diferenciador}}.\n\nMensaje del cliente (ejemplo ficticio): “Hola, estamos comparando opciones para el próximo mes. ¿Qué incluye su servicio y cuánto cuesta?”\n\nPrimero hazme tres preguntas de calificación: necesidad, fecha y presupuesto/decisión.\nCon mis respuestas, escribe:\n1. Resumen del problema en dos líneas.\n2. Tabla Esencial / Recomendada / Plus: alcance, beneficio, precio y exclusiones. Usa [POR CONFIRMAR] en cualquier dato que no te haya dado. Si mi negocio solo tiene una opción, respétala.\n3. Mensaje de WhatsApp de hasta 60 palabras con una pregunta para acordar el siguiente paso.\n\nTono: {{tono}}. No inventes descuentos, stock, garantías, testimonios ni fechas. No prometas resultados comerciales. Al final lista lo que debo verificar antes de enviar.",
          "instructions": [
            "Activa el botón Canvas en gemini.google.com y pega el prompt del constructor anterior o este caso.",
            "Responde las tres preguntas de calificación, selecciona una sección en Canvas para pulirla y exporta a Docs si tienes acceso.",
            "Revisa precios y condiciones y guarda la propuesta junto al mensaje de envío en tu cuaderno."
          ],
          "checklist": [
            "La propuesta responde a una necesidad concreta.",
            "Los alcances se distinguen y los datos pendientes están marcados como [POR CONFIRMAR].",
            "Revisé precios y compromisos; el mensaje propone un siguiente paso claro."
          ],
          "surface": "Gemini Canvas → Google Docs",
          "sources": [
            {
              "title": "Crear documentos y colaborar con Canvas en Gemini",
              "url": "https://support.google.com/gemini/answer/16047321?hl=es"
            }
          ]
        },
        {
          "id": "s18",
          "type": "objectionArena",
          "theme": "light",
          "mins": 5,
          "badge": "LAER · Feel-Felt-Found · Boomerang · Gemini Live",
          "badgeColor": "coral",
          "title": "Practica la objeción antes de la llamada.",
          "subtitle": "Aplica LAER (Escuchar, Reconocer, Explorar, Responder), Feel-Felt-Found y Boomerang. Elige una objeción y practica dos turnos por texto o por voz en Gemini Live.",
          "objections": [
            {
              "id": "caro",
              "title": "💸 'Está muy caro / se sale de mi presupuesto'",
              "context": "El cliente compara tu propuesta con opciones más baratas o siente riesgo de invertir.",
              "question": "¿Qué haces en los primeros 10 segundos (LAER)?",
              "choices": [
                {
                  "text": "Ofrecer de inmediato un 20% de descuento para no perder la venta.",
                  "good": false,
                  "feedback": "Cuidado: bajar el precio de golpe comunica que tu tarifa inicial estaba inflada y destruye tu margen."
                },
                {
                  "text": "Validar (Acknowledge), explorar qué parte valora más y ajustar alcance o mostrar retorno.",
                  "good": true,
                  "feedback": "¡Exacto! Primero valida sin ponerte a la defensiva, descubre si el freno es flujo de caja o percepción de valor, y ajusta alcance antes de regalar margen."
                }
              ],
              "prompt": "Actúa como coach comercial experto (métodos LAER y Feel-Felt-Found) para {{negocio}} (vendemos {{oferta}}, diferenciador: {{diferenciador}}).\nUn prospecto de {{cliente}} respondió: \"Me gusta la propuesta, pero está por encima de nuestro presupuesto\".\nRedacta 3 respuestas posibles con tono {{tono}} y sin sonar desesperado:\n1) Opción A (LAER Empática): Valida + pregunta clave para entender su presupuesto real y mostrar valor.\n2) Opción B (Feel-Felt-Found): Estructura empática con base en clientes similares (usa [EJEMPLO REAL A COMPLETAR], sin inventar casos).\n3) Opción C (Ajuste de alcance): Cómo proponer una opción más acotada sin regalar tarifa.\nMáximo 65 palabras por opción.\nNo inventes condiciones, resultados ni casos de éxito. Marca cualquier opción que deba autorizar el negocio.",
              "roleplay": "Juguemos un roleplay de ventas (puedes hacerlo aquí por texto o en voz con Gemini Live, dificultad 8/10). Tú eres un comprador interesado de {{cliente}}, pero escéptico porque recibiste una cotización un 25% más barata de la competencia. Yo soy de {{negocio}} ({{oferta}}).\nEmpieza diciendo \"Está muy caro\" y responde de forma realista. Al terminar dos intercambios, evalúame con este scorecard:\n1) Calificación (1 al 10)\n2) Qué hice bien\n3) Qué mejorar\n4) Script sugerido listo para usar.\nEste es un escenario ficticio de entrenamiento. La nota es una orientación del modelo, no una medición validada de desempeño."
            },
            {
              "id": "pensarlo",
              "title": "⏳ 'Déjame pensarlo y te aviso la otra semana'",
              "context": "Suele ocultar una duda no dicha (tiempos, confianza, aprobación de un socio) más que falta de interés.",
              "question": "¿Cuál es la mejor jugada?",
              "choices": [
                {
                  "text": "Responder 'Claro, quedo atento' y esperar pasivamente.",
                  "good": false,
                  "feedback": "Un cierre sin una pregunta ni un próximo paso suele dejar la conversación detenida."
                },
                {
                  "text": "Agradecer, abrir espacio seguro para la duda oculta y acordar un día concreto de seguimiento.",
                  "good": true,
                  "feedback": "¡Muy bien! Preguntar con calma '¿qué parte te genera duda: el alcance, los tiempos o la inversión?' destraba la conversación."
                }
              ],
              "prompt": "Actúa como especialista en cierres consultivos (LAER) para {{negocio}}.\nUn cliente dijo: \"Déjame pensarlo y te aviso la otra semana\".\nEscribe 2 mensajes breves para WhatsApp/correo (máximo 55 palabras, tono {{tono}}):\n1) Respuesta inmediata en la misma conversación para descubrir con tacto qué duda falta resolver.\n2) Mensaje de seguimiento para enviar en 4 días aportando una aclaración útil (sin decir \"solo paso a saludar\").\nNo inventes condiciones, resultados ni casos de éxito. Marca cualquier opción que deba autorizar el negocio.",
              "roleplay": "Hagamos roleplay (texto o Gemini Live, dificultad 7/10). Tú eres un prospecto amable pero indeciso que dice \"Déjame pensarlo\" porque en el fondo te preocupa si {{negocio}} podrá cumplir en el tiempo prometido. Hazme trabajar para descubrir tu duda real en dos turnos y al final dame: Calificación 1-10, Qué hice bien, Qué mejorar y Script sugerido.\nEste es un escenario ficticio de entrenamiento. La nota es una orientación del modelo, no una medición validada de desempeño."
            },
            {
              "id": "competencia",
              "title": "🤝 'Ya trabajamos con otro proveedor'",
              "context": "El cliente tiene inercia con su proveedor actual y teme el costo de cambiar.",
              "question": "¿Cómo responder sin atacar a la competencia?",
              "choices": [
                {
                  "text": "Criticar los fallos comunes del otro proveedor para verte superior.",
                  "good": false,
                  "feedback": "Hablar mal de la competencia genera desconfianza y pone al cliente a defender su decisión actual."
                },
                {
                  "text": "Reconocer lo positivo, aplicar Boomerang con tu ángulo único y proponer una prueba pequeña sin riesgo.",
                  "good": true,
                  "feedback": "¡Correcto! Proponer un diagnóstico o piloto puntual reduce la fricción de cambiar todo de golpe."
                }
              ],
              "prompt": "Actúa como estratega B2B para {{negocio}} (diferenciador: {{diferenciador}}).\nEl prospecto respondió: \"Gracias, pero ya tenemos un proveedor de confianza\".\nRedacta una respuesta respetuosa de 4 líneas (tono {{tono}}) usando método Boomerang / LAER que:\n1) Valide su relación actual sin hablar mal de nadie.\n2) Mencione brevemente nuestro enfoque distinto ({{diferenciador}}).\n3) Proponga quedar como opción de respaldo o hacer una micro-prueba puntual por confirmar.\nNo inventes condiciones, resultados ni casos de éxito. Marca cualquier opción que deba autorizar el negocio.",
              "roleplay": "Simulemos este caso (texto o Gemini Live, dificultad 8/10): eres un cliente satisfecho al 80% con tu proveedor actual, pero te molesta la lentitud en entregas. Yo te presento {{negocio}} ({{diferenciador}}). Reacciona de forma realista y al final entrégame mi Scorecard 1-10 con script sugerido.\nEste es un escenario ficticio de entrenamiento. La nota es una orientación del modelo, no una medición validada de desempeño."
            },
            {
              "id": "tiempo",
              "title": "⚡ 'Me interesa, pero ahorita no tengo tiempo'",
              "context": "El cliente percibe que contratarte le va a exigir mucho trabajo o reuniones largas.",
              "question": "¿Cómo aplicar el método Boomerang aquí?",
              "choices": [
                {
                  "text": "Enviarle un formulario de 25 preguntas para que lo llene cuando pueda.",
                  "good": false,
                  "feedback": "Si no tiene tiempo, un formulario largo confirma su miedo de que trabajar contigo le dará más carga."
                },
                {
                  "text": "Convertir la falta de tiempo en la razón para avanzar con un primer paso breve y ligero.",
                  "good": true,
                  "feedback": "¡Exacto! Invierte la objeción (Boomerang): explorar qué esfuerzo le preocupa abre un paso mínimo sin fricción."
                }
              ],
              "prompt": "Actúa como asesor de ventas para {{negocio}} ({{oferta}}).\nUn cliente de {{cliente}} dijo: \"Me encanta la idea, pero este mes estamos colapsados y no tengo tiempo para arrancar\".\nEscribe un mensaje persuasivo y empático (máx. 60 palabras, tono {{tono}}) aplicando Boomerang: pregunta qué esfuerzo le preocupa y plantea un primer paso breve por confirmar. No prometas tiempos, facilidades de pago ni condiciones que yo no haya confirmado.\nNo inventes condiciones, resultados ni casos de éxito.",
              "roleplay": "Eres un dueño de negocio saturado que quiere mejorar su área, pero cree que iniciar con {{negocio}} le quitará más horas (dificultad 7/10). Ponme a prueba en dos mensajes y evalúame del 1 al 10 con Script sugerido al cerrar.\nEste es un escenario ficticio de entrenamiento. La nota es una orientación del modelo, no una medición validada de desempeño."
            },
            {
              "id": "info",
              "title": "📩 'Solo mándame la información por correo'",
              "context": "El prospecto intenta despacharte rápido antes de entender tu valor.",
              "question": "¿Cómo evitar enviar un PDF al vacío?",
              "choices": [
                {
                  "text": "Mandar el brochure general de 12 páginas sin hacer preguntas.",
                  "good": false,
                  "feedback": "Un documento genérico puede no responder a la necesidad de este contacto."
                },
                {
                  "text": "Hacer 1 pregunta de contexto de 10 segundos antes de enviar la info exacta que necesita.",
                  "good": true,
                  "feedback": "¡Genial! 'Con gusto te la envío hoy: para mandarte solo lo relevante y no hacerte perder tiempo, ¿buscas más A o B?'"
                }
              ],
              "prompt": "Actúa como experto en ventas para {{negocio}}.\nUn contacto frío dijo: \"Solo mándame la info por correo y yo la reviso\".\nDame 2 respuestas muy naturales (máx. 45 palabras cada una, tono {{tono}}) para pedir 1 solo dato de contexto antes de enviar el correo, más la estructura del correo breve con método AIDA.\nNo inventes condiciones, resultados ni casos de éxito. Marca cualquier opción que deba autorizar el negocio.",
              "roleplay": "Eres un comprador ocupado que solo dice \"mándame la info por correo\" (dificultad 8/10). Si te hago una pregunta inteligente y breve, te abres a contarme qué necesitas. Al final evalúame del 1 al 10 y dame el script mejorado.\nEste es un escenario ficticio de entrenamiento. La nota es una orientación del modelo, no una medición validada de desempeño."
            }
          ]
        },
        {
          "id": "s19",
          "type": "cards",
          "theme": "light",
          "title": "Da seguimiento con valor: secuencia de 4 toques (Días 1–3–7–14).",
          "subtitle": "La cadencia es orientativa: ajústala al permiso, canal y momento de tu cliente. Usa estructura AIDA, prueba dos asuntos A/B y detente si pide no recibir mensajes.",
          "mins": 4,
          "cols": 3,
          "cards": [
            {
              "glyph": "D1–3",
              "title": "Aporta valor y resuelve una duda",
              "desc": "Reemplaza el '¿pudiste ver mi correo?' por una aclaración útil + dos asuntos A/B.",
              "snippet": "Para {{negocio}} ({{oferta}}), redacta un seguimiento de Día 3 de máximo 60 palabras con 2 asuntos A/B. Responde una duda frecuente del cliente con datos que yo confirme y termina con una pregunta fácil. Tono {{tono}}. No inventes casos de éxito.",
              "color": "primary"
            },
            {
              "glyph": "D7",
              "title": "Acuerda un siguiente paso concreto",
              "desc": "Propón una acción pequeña sin falsa urgencia ni presión.",
              "snippet": "Escribe un mensaje de Día 7 para {{cliente}} con dos horarios por confirmar para una conversación de 10 minutos sobre {{oferta}}. Máximo 60 palabras. No afirmes que ya existe una reunión ni que tienes acceso a mi calendario.",
              "color": "primary"
            },
            {
              "glyph": "D14",
              "title": "Secuencia completa + cierre con respeto",
              "desc": "Deja una puerta abierta al Día 14 o genera la cadencia entera en estructura AIDA.",
              "snippet": "Crea una secuencia de 4 correos AIDA para {{negocio}} ({{diferenciador}}) dirigida a {{cliente}} (Días 1, 3, 7 y 14 de puerta abierta). Máximo 110 palabras por correo, 2 asuntos A/B por toque, tono {{tono}}. No inventes cifras, urgencia falsa ni testimonios.",
              "color": "primary"
            }
          ]
        }
      ]
    },
    {
      "id": "bWorkspace",
      "code": "04",
      "title": "Workspace en acción",
      "shortTitle": "Workspace",
      "timeRange": "40–58 min",
      "color": "#285BEA",
      "slides": [
        {
          "id": "sWorkspace",
          "type": "section",
          "theme": "dark",
          "mins": 1,
          "num": "04",
          "title": "Tu trabajo ya está\nen Workspace. Lleva Gemini ahí.",
          "subtitle": "El contexto comercial vive en correos, documentos, reuniones y hojas de cálculo. Mueve resultados revisados entre tus herramientas y automatiza rutinas sin programar.",
          "bullets": [
            "Gmail, Drive y Docs",
            "Sheets, Calendar y Meet",
            "Programadas y Workspace Studio"
          ]
        },
        {
          "id": "sWorkspaceMap",
          "type": "workflowMap",
          "theme": "light",
          "mins": 4,
          "title": "Una oportunidad recorre tu suite.",
          "subtitle": "Sigue la información de la cuenta de principio a fin. Elige una transición para tu negocio y conserva siempre las fuentes y los acuerdos."
        },
        {
          "id": "sWorkspaceLab",
          "type": "workspaceLab",
          "theme": "light",
          "mins": 4,
          "title": "Qué hacer y dónde hacerlo.",
          "subtitle": "Explora el punto de entrada, el prompt y el resultado de las 7 aplicaciones. Los paneles y acciones dependen de tu licencia, configuración y permisos.",
          "sources": [
            {
              "title": "Gemini en la suite de Workspace",
              "url": "https://support.google.com/docs/answer/15123226?hl=es"
            },
            {
              "title": "Acceso a Gemini en Workspace",
              "url": "https://support.google.com/docs/answer/13952129?hl=es"
            }
          ]
        },
        {
          "id": "sWorkspaceReto",
          "type": "reto",
          "theme": "light",
          "title": "Práctica 03 · Analiza tu pipeline en Sheets.",
          "mins": 6,
          "durationSec": 360,
          "deliverable": "Tu análisis del pipeline y las tres acciones",
          "surface": "Gemini en Google Sheets",
          "subtitle": "Responde cuatro preguntas de negocio con el Excel de práctica. Deja el resumen y el gráfico listos para tu revisión comercial.",
          "promptTemplate": "Analiza mi pipeline de ventas en la pestaña 'Pipeline de Ventas', rango A1:I11, y dime:\n1. ¿Cuál es el valor total del pipeline por etapa del funnel? Entrega etapa, número de deals y valor en USD. Separa el total del archivo, el pipeline activo y Cerrado ganado.\n2. ¿Qué deals llevan más de 10 días sin contacto y tienen prioridad Alta? Usa fecha de corte 13/03/2025, no HOY(). Muestra Deal ID, empresa, valor, último contacto y días transcurridos.\n3. ¿Cuáles son los 3 deals con mayor valor que necesitan acción inmediata? Define acción inmediata como deal abierto, prioridad Alta y más de 10 días sin contacto. Ordena esos candidatos por valor descendente; desempata por Deal ID. Propón un siguiente paso basado en la columna Próximo Paso.\n4. Crea un gráfico de barras con el valor por etapa, en el orden del funnel, título y eje en USD, partiendo de cero. Incluye Cerrado ganado como categoría separada; no sumes la fila Total como una etapa.\n\nComprueba fechas y valores numéricos antes de calcular. Exactamente 10 días no cumple “más de 10”. Excluye Cerrado ganado y Cerrado perdido del seguimiento urgente. Señala datos faltantes o duplicados sin inventarlos. No calcules tasas de conversión ni probabilidades de cierre a partir de esta foto del pipeline. Si no puedes crear el gráfico, entrega la tabla agregada y los pasos para Insertar → Gráfico. Indica si el gráfico quedó vinculado a las celdas o es una imagen; no afirmes cambios que no realizaste.",
          "instructions": [
            "Descarga el caso y conviértelo en hoja de cálculo de Google. El archivo ya viene preparado; conserva la fecha de corte 13/03/2025.",
            "Selecciona Pipeline de Ventas!A1:I11 y pega el prompt en Pregunta a Gemini. En los seis minutos, prioriza obtener y revisar el resumen, el filtro y el top 3.",
            "Crea el gráfico desde la tabla agregada. Si no hay panel de Gemini, analiza el archivo en Gemini Apps y lleva el resultado a Sheets.",
            "Guarda tu análisis y el enlace al gráfico. Al terminar, contrasta con la solución del facilitador."
          ],
          "checklist": [
            "El total por etapa reconcilia con el archivo y separa deals cerrados del pipeline activo.",
            "El filtro usa prioridad Alta y más de 10 días al 13/03/2025; excluye exactamente 10 días.",
            "El top 3 sale de los deals abiertos que cumplen el filtro, en orden de valor, con siguiente acción.",
            "El gráfico tiene seis etapas, eje en USD y parte de cero; comprobé si está vinculado o es una imagen."
          ],
          "pipelineLab": true,
          "sources": [
            {
              "title": "Gemini en Sheets · análisis, conversión de Excel y gráficos",
              "url": "https://support.google.com/docs/answer/14356410?hl=es"
            }
          ]
        },
        {
          "id": "sStudio",
          "type": "steps",
          "theme": "light",
          "title": "Automatiza sin código: Acciones Programadas y Workspace Studio.",
          "subtitle": "Pasa de reactivo a proactivo usando solo el ecosistema Google. Diseña primero la rutina manual, valida resultados y luego actívala como borrador o alerta.",
          "mins": 3,
          "steps": [
            {
              "num": "01",
              "title": "Por horario: Acciones Programadas en Gemini",
              "desc": "En gemini.google.com programa un prompt recurrente (ej. Lun–Vie 8:00 a.m. cruzando @Google Calendar y @Gmail, o Lunes 8:30 a.m. revisando tu hoja de Pipeline en Drive).",
              "example": "“Cada lunes 8:30 a.m. revisa mis reuniones de la semana y correos de clientes sin respuesta.”"
            },
            {
              "num": "02",
              "title": "Por evento: Google Workspace Studio",
              "desc": "Conecta disparadores entre Gmail, Forms, Sheets, Docs y Chat sin programar (ej. al recibir una solicitud de cotización → Gemini lee tu tarifario en Drive → crea un borrador).",
              "example": "La disponibilidad de flujos en Studio depende de tu edición y configuración de Workspace."
            },
            {
              "num": "03",
              "title": "Regla de control humano (20%)",
              "desc": "Empieza siempre con salida a borrador, documento o tarea para revisar. Nunca automatices el envío directo de precios o compromisos sin aprobación humana.",
              "example": "Borrador generado → revisas cifras y tono → apruebas y envías manualmente."
            }
          ],
          "sources": [
            {
              "title": "Acciones programadas en Gemini",
              "url": "https://support.google.com/gemini/answer/16332022?hl=es"
            },
            {
              "title": "Flujos en Google Workspace Studio",
              "url": "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/turn-access-to-google-workspace-with-gemini-beta-on-or-off"
            }
          ]
        }
      ]
    },
    {
      "id": "bMedia",
      "code": "05",
      "title": "Imagen y audiovisual",
      "shortTitle": "Creatividad",
      "timeRange": "58–76 min",
      "color": "#285BEA",
      "slides": [
        {
          "id": "sCreative",
          "type": "section",
          "theme": "dark",
          "mins": 1,
          "num": "05",
          "title": "Una oferta.\nUna campaña visual coherente.",
          "subtitle": "Un brief claro con tu voz de marca define el concepto. Las herramientas de imagen, Slides y video lo convierten en piezas que puedes revisar, editar y llevar a tu canal.",
          "bullets": [
            "Imagen",
            "Storyboard y audio",
            "Slides y Vids"
          ]
        },
        {
          "id": "sCreativeStudio",
          "type": "creativeLab",
          "theme": "light",
          "mins": 3,
          "title": "Diseña el brief antes de generar.",
          "subtitle": "Define producto, objetivo, formato y estilo. El estudio crea prompts de imagen y video con el contexto de tu negocio; la generación se ejecuta en tu herramienta disponible.",
          "sources": [
            {
              "title": "Crear y editar imágenes",
              "url": "https://support.google.com/gemini/answer/14286560?hl=es"
            },
            {
              "title": "Generar videos en Gemini",
              "url": "https://support.google.com/gemini/answer/16126339?hl=es"
            }
          ]
        },
        {
          "id": "sImageReto",
          "type": "reto",
          "theme": "light",
          "title": "Práctica 04 · Tu pieza visual de campaña.",
          "mins": 6,
          "durationSec": 360,
          "deliverable": "Tu imagen, prompt y revisión",
          "surface": "Imagen / Slides",
          "subtitle": "Ejecuta el flujo, revisa el resultado y guarda la evidencia en tu cuaderno.",
          "promptTemplate": "Actúa como director creativo para {{negocio}}: oferta {{oferta}}, cliente {{cliente}}, diferencia {{diferenciador}}, tono {{tono}}. Objetivo: iniciar una conversación comercial.\n\nLuego usa este prompt visual en la herramienta de generación de imágenes disponible en Gemini o Slides:\n“Crea una imagen promocional vertical 4:5 para {{oferta}}. Usa como referencia la foto de producto que adjunto, si existe, y conserva su forma, proporciones y empaque. Si falta referencia, pide una antes de afirmar fidelidad. Escena: producto en uso en un entorno relevante para {{cliente}}. Fotografía editorial, luz natural y fondo limpio. Deja espacio para titular y CTA, que agregaré en Slides. No inventes sellos, testimonios, atributos ni precios.”\n\nGenera una primera versión y pide una edición específica, por ejemplo: cambia el fondo, conserva el producto y despeja espacio arriba. Revisa detalles y exporta. Si no tienes cuota o acceso, entrega el brief y un boceto de composición en Slides, indicando que no generaste una imagen.",
          "instructions": [
            "Prepara una foto propia o autorizada del producto, o el brief de un servicio.",
            "Genera una variante y pide una edición concreta; alternativa: maqueta la composición en Slides.",
            "Guarda el prompt final, enlace al archivo o descripción del resultado y qué corregiste."
          ],
          "checklist": [
            "La imagen o maqueta respeta la oferta y las referencias autorizadas.",
            "Probé una iteración y revisé texto, producto y marcas.",
            "Documenté qué archivo produje o la alternativa sin cuota; el titular y CTA están revisados."
          ]
        },
        {
          "id": "sVideoFlow",
          "type": "steps",
          "theme": "light",
          "title": "De imagen a pieza audiovisual.",
          "subtitle": "Demo preparada: generar un clip puede tardar. En la práctica puedes crear un storyboard o trabajar con material ya generado.",
          "mins": 3,
          "steps": [
            {
              "num": "01",
              "title": "Gemini Video",
              "desc": "Pasa del brief a un clip usando el modelo disponible en tu cuenta. La función puede requerir plan o licencia y tiene cuotas.",
              "example": "Define sujeto, acción, cámara, luz, relación de aspecto y audio. Evita nombres de modelos fijos en tu proceso."
            },
            {
              "num": "02",
              "title": "Google Vids",
              "desc": "Organiza escenas, incorpora imágenes o clips y añade guion/voz en las funciones habilitadas.",
              "example": "Un video de venta corto: problema → demostración → siguiente paso. Usa música o voz con derechos y consentimiento."
            },
            {
              "num": "03",
              "title": "Slides → Vids / presentación",
              "desc": "Crea tres láminas con imagen, beneficio y CTA; ensambla una pieza breve o deja un storyboard editable.",
              "example": "La calidad se revisa antes de publicar: identidad del producto, ritmo, voz, subtítulos y promesas comerciales."
            }
          ],
          "sources": [
            {
              "title": "Disponibilidad de Gemini en Google Vids",
              "url": "https://support.google.com/docs/answer/15609411?hl=es"
            },
            {
              "title": "Generar videos en Gemini",
              "url": "https://support.google.com/gemini/answer/16126339?hl=es"
            }
          ]
        },
        {
          "id": "sVideoReto",
          "type": "reto",
          "theme": "light",
          "title": "Práctica 05 · Tu storyboard y primer clip.",
          "mins": 5,
          "durationSec": 300,
          "deliverable": "Tu storyboard, audio y pieza audiovisual",
          "surface": "Video / Vids / Slides",
          "subtitle": "Ejecuta el flujo, revisa el resultado y guarda la evidencia en tu cuaderno.",
          "promptTemplate": "Actúa como director creativo para {{negocio}} y {{oferta}}, orientado a {{cliente}}. Tono: {{tono}}.\n\nDiseña un video comercial de 15 a 20 segundos en tres escenas: problema, demostración y CTA. Entrega una tabla con escena, duración orientativa, visual, cámara, locución, texto en pantalla y sonido ambiente. No inventes beneficios, cifras ni testimonios.\n\nDespués escribe un prompt de clip para la herramienta de video disponible en Gemini, con una sola acción clara, referencia visual del producto, movimiento de cámara sencillo y audio de ambiente. Usa la duración y formato que permita la herramienta. Deja la locución final y los subtítulos para Vids si te da más control. No uses rostros o voces ajenos sin permiso.\n\nEntrega también una alternativa en tres Slides con notas de voz/guion si no hay acceso a generación. Distingue storyboard, clip generado y video editado: no afirmes que un archivo existe hasta producirlo.",
          "instructions": [
            "Copia el brief de tu imagen y crea tres escenas con audio/locución.",
            "Inicia un clip si tienes acceso; mientras procesa, prepara el storyboard en Slides o Vids. La alternativa válida es storyboard editable con guion.",
            "Guarda enlace al archivo o storyboard y la revisión pendiente de audio, texto y CTA."
          ],
          "checklist": [
            "El storyboard incluye tres escenas, duración y audio.",
            "La acción y el CTA corresponden al mismo negocio y campaña.",
            "Identifiqué qué pieza está realmente producida y qué falta revisar antes de publicar."
          ]
        }
      ]
    },
    {
      "id": "bProspecting",
      "code": "06",
      "title": "Prospección y Demo",
      "shortTitle": "Prospección",
      "timeRange": "76–84 min",
      "color": "#285BEA",
      "slides": [
        {
          "id": "sDeepResearch",
          "type": "cards",
          "theme": "light",
          "title": "Investiga cuentas con Deep Research (Briefing 5D).",
          "subtitle": "Antes de escribirle a una cuenta, define tu ICP con criterios de exclusión y usa Deep Research en Gemini para construir un briefing con fuentes verificables (sin herramientas de pago).",
          "mins": 4,
          "cols": 2,
          "cards": [
            {
              "glyph": "5D",
              "title": "1. Briefing de cuenta en 5 bloques",
              "desc": "Resumen ejecutivo, señales verificables (URL y fecha), perfil del decisor, 3 rompehielos + 2 preguntas de descubrimiento y riesgos. Exporta el reporte a Google Docs o NotebookLM.",
              "snippet": "Actúa como analista de cuentas para {{negocio}} ({{oferta}}, diferenciador: {{diferenciador}}). Prepara un Briefing 5D sobre [EMPRESA] y [CARGO]: 1) Resumen ejecutivo, 2) Señales públicas recientes con URL y fecha, 3) Prioridades probables del cargo, 4) 3 icebreakers breves + 2 preguntas de descubrimiento, 5) Riesgos y posibles objeciones. Regla estricta: no inventes cifras, correos ni noticias; si falta evidencia, indícalo.",
              "color": "primary"
            },
            {
              "glyph": "4L",
              "title": "2. Primer contacto basado en señal (sin spam)",
              "desc": "Transforma un hecho público confirmado en un mensaje corto (máx. 65 palabras) y lleva la cuenta con su fuente y próxima acción a Google Sheets.",
              "snippet": "Con base en este hecho verificado de [EMPRESA]: [PEGAR SEÑAL + URL], redacta un primer mensaje de máximo 65 palabras para {{negocio}} en tono {{tono}} con 4 líneas: 1) Señal real, 2) Problema relacionado con {{cliente}}, 3) Puente con {{diferenciador}}, 4) Micro-pregunta de baja fricción. No pidas una reunión larga en el primer toque ni envíes mensajes automáticamente.",
              "color": "primary"
            }
          ],
          "sources": [
            {
              "title": "Investigar con Deep Research en Gemini",
              "url": "https://support.google.com/gemini/answer/15719111?hl=es"
            }
          ]
        },
        {
          "id": "sTreg",
          "type": "prospectingLab",
          "theme": "light",
          "mins": 4,
          "title": "Bonus / Demo opcional: Treg.to en Antigravity.",
          "subtitle": "Cuando quieras escalar la búsqueda de señales más allá de fuentes manuales, esta única slide resume la demo en vivo con Treg desde Antigravity (y deja las alternativas sin Treg listas).",
          "sources": [
            {
              "title": "Treg · guía oficial para agentes",
              "url": "https://treg.to/llms.txt"
            },
            {
              "title": "Apps MCP personalizadas en Gemini · requisitos",
              "url": "https://support.google.com/gemini/answer/17209137?hl=es"
            }
          ]
        }
      ]
    },
    {
      "id": "b06",
      "code": "07",
      "title": "Tu sistema y tu kit",
      "shortTitle": "Tu kit",
      "timeRange": "84–90 min",
      "color": "#285BEA",
      "slides": [
        {
          "id": "sQuality",
          "type": "cards",
          "theme": "light",
          "title": "Cuatro preguntas antes de usar una respuesta.",
          "subtitle": "Una revisión breve protege la relación con el cliente.",
          "mins": 1,
          "cols": 3,
          "cards": [
            {
              "glyph": "01",
              "title": "¿Es cierto?",
              "desc": "Comprueba precios, fechas, disponibilidad y fuentes.",
              "color": "primary"
            },
            {
              "glyph": "02",
              "title": "¿Es específico?",
              "desc": "¿Responde a esta necesidad con información de tu negocio?",
              "color": "primary"
            },
            {
              "glyph": "03",
              "title": "¿Suena a ti?",
              "desc": "Elimina frases que nunca dirías en una conversación.",
              "color": "primary"
            },
            {
              "glyph": "04",
              "title": "¿Se puede actuar?",
              "desc": "Deja una pregunta, una decisión o un próximo paso claro.",
              "color": "primary"
            }
          ]
        },
        {
          "id": "s44",
          "type": "portfolio",
          "theme": "light",
          "mins": 2,
          "title": "Llévate tu sistema de trabajo.",
          "subtitle": "Información guardada, biblioteca de Skills (SKILL.md), propuesta en Canvas, análisis de Sheets y campaña visual. Guarda tus enlaces y descarga una copia."
        },
        {
          "id": "s45",
          "type": "nextSteps",
          "theme": "dark",
          "mins": 3,
          "title": "Una semana para validar\ntu sistema comercial.",
          "subtitle": "Elige un cuello de botella: investigar cuentas, cotizar en Canvas, ordenar tu pipeline en Sheets o producir campaña. Mide el tiempo real y una señal comercial.",
          "plan7Days": [
            {
              "day": "Mañana · 15 min",
              "task": "Pega tu bloque en Información guardada de Gemini, sube tu tarifario a NotebookLM y crea tu primer Skill (ej. /copywriter-de-ventas)."
            },
            {
              "day": "En tres días · 15 min",
              "task": "Prepara una propuesta real en Gemini Canvas → Docs, actualiza tu hoja en Sheets y completa tu pieza visual en Slides/Vids."
            },
            {
              "day": "En siete días · 15 min",
              "task": "Activa tu primera Acción Programada (ej. rutina matutina @Calendar + @Gmail) y compara minutos ahorrados y respuestas reales."
            }
          ]
        }
      ]
    }
  ],
  "sources": [
    {
      "title": "Crear y gestionar Skills en Gemini",
      "url": "https://support.google.com/gemini/answer/17094296?hl=es"
    },
    {
      "title": "Información guardada en Gemini",
      "url": "https://support.google.com/gemini/answer/15637730?hl=es"
    },
    {
      "title": "Crear documentos y colaborar con Canvas en Gemini",
      "url": "https://support.google.com/gemini/answer/16047321?hl=es"
    },
    {
      "title": "Primeros pasos con NotebookLM",
      "url": "https://support.google.com/notebooklm/answer/14273541?hl=es"
    },
    {
      "title": "Investigar con Deep Research",
      "url": "https://support.google.com/gemini/answer/15719111?hl=es"
    },
    {
      "title": "Acciones programadas en Gemini",
      "url": "https://support.google.com/gemini/answer/16332022?hl=es"
    },
    {
      "title": "Privacidad de Gemini Apps",
      "url": "https://support.google.com/gemini/answer/13594961?hl=es"
    },
    {
      "title": "Gemini con cuentas de trabajo",
      "url": "https://support.google.com/gemini/answer/14620100?hl=es"
    },
    {
      "title": "Referencia: Gemini para Ventas · Carlos Alarcón",
      "url": "https://gemini-ventas.carlos-alarcon.com/"
    },
    {
      "title": "Gemini en la suite de Workspace",
      "url": "https://support.google.com/docs/answer/15123226?hl=es"
    },
    {
      "title": "Acceso a Gemini en Workspace",
      "url": "https://support.google.com/docs/answer/13952129?hl=es"
    },
    {
      "title": "Crear y editar imágenes",
      "url": "https://support.google.com/gemini/answer/14286560?hl=es"
    },
    {
      "title": "Generar videos en Gemini",
      "url": "https://support.google.com/gemini/answer/16126339?hl=es"
    },
    {
      "title": "Disponibilidad de Gemini en Google Vids",
      "url": "https://support.google.com/docs/answer/15609411?hl=es"
    },
    {
      "title": "Flujos de Workspace Studio · disponibilidad",
      "url": "https://knowledge.workspace.google.com/admin/generative-ai/workspace-with-gemini/turn-access-to-google-workspace-with-gemini-beta-on-or-off"
    },
    {
      "title": "Treg · guía oficial para agentes",
      "url": "https://treg.to/llms.txt"
    },
    {
      "title": "Treg · playbook de adquisición",
      "url": "https://treg.to/gtm-engineering.md"
    },
    {
      "title": "Apps MCP personalizadas en Gemini · requisitos",
      "url": "https://support.google.com/gemini/answer/17209137?hl=es"
    },
    {
      "title": "Gemini en Sheets · análisis, conversión de Excel y gráficos",
      "url": "https://support.google.com/docs/answer/14356410?hl=es"
    }
  ],
  "optionalTopics": [
    {
      "title": "Automatización en Workspace Studio",
      "desc": "Implementa flujos por evento (Forms/Gmail → Gemini → Borrador en Gmail + fila en Sheets) confirmando la disponibilidad de tu edición."
    },
    {
      "title": "Escalar prospección con Treg en Antigravity",
      "desc": "Amplía la búsqueda con el servidor MCP de Treg controlando presupuesto por llamada y total; valida correos y respeta bajas antes de contactar."
    },
    {
      "title": "Producción audiovisual completa",
      "desc": "Termina el montaje en Google Vids o tu editor: locución, música, subtítulos y revisión de identidad, promesas y derechos."
    }
  ],
  "downloadableTemplates": [],
  "skillTemplates": [
    {
      "id": "voz-de-marca",
      "label": "Voz de marca",
      "name": "voz-de-marca",
      "goal": "adaptar mensajes a la voz de mi negocio sin alterar los hechos",
      "rules": "Úsalo al redactar o pulir una propuesta, correo o pieza de campaña. Pide dos ejemplos de textos reales si no tienes referencias. Conserva mi vocabulario y elimina clichés. No cambies cifras, compromisos ni sentido para sonar más persuasivo.",
      "format": "Versión revisada, tres decisiones de estilo y lista de afirmaciones pendientes de comprobar."
    },
    {
      "id": "analista-de-cuentas",
      "label": "Analista de cuentas (Briefing 5D)",
      "name": "analista-de-cuentas",
      "goal": "convertir fuentes de Deep Research o documentos en un briefing de cuenta en 5 bloques con evidencia",
      "rules": "Úsalo al evaluar una cuenta o preparar una reunión. Pide ICP y fuentes. Para cada señal registra URL original y fecha. Distingue hechos, hipótesis y desconocidos. No deduzcas ingresos, intención de compra, cargos o correos solo a partir del nombre.",
      "format": "Resumen de cuenta; tabla hecho / URL / fecha / encaje; tres preguntas de descubrimiento; un rompehielos basado en un hecho comprobado."
    },
    {
      "id": "coach-de-objeciones",
      "label": "Coach de objeciones (LAER + Live)",
      "name": "coach-de-objeciones",
      "goal": "practicar objeciones de venta con LAER, Feel-Felt-Found y Boomerang",
      "rules": "Úsalo por texto o en Gemini Live para preparar una llamada. Pregunta qué objeción practicar y qué condiciones sí autoriza el negocio. Simula un comprador durante dos turnos y luego entrega feedback con LAER. No ofrezcas descuentos ni facilidades sin autorización.",
      "format": "Objeción; dos turnos de roleplay; qué funcionó; qué mejorar; respuesta breve sugerida."
    },
    {
      "id": "copywriter-de-ventas",
      "label": "Copywriter de ventas (Canvas + AIDA)",
      "name": "copywriter-de-ventas",
      "goal": "preparar propuestas en tres opciones para Gemini Canvas y secuencias AIDA (Días 1–3–7–14)",
      "rules": "Úsalo con un briefing y una oferta confirmada. Pregunta necesidad, fecha, presupuesto y decisión si faltan. Escribe una propuesta de alcance real y correos de máximo 110 palabras con una llamada a la acción. Respeta bajas y consentimiento. No fabriques testimonios, urgencia ni retornos garantizados.",
      "format": "Resumen del problema; opciones y exclusiones; email con dos asuntos A/B; WhatsApp de 60 palabras; siguiente paso por confirmar."
    },
    {
      "id": "director-creativo",
      "label": "Director creativo (Imagen + Vids)",
      "name": "director-creativo",
      "goal": "transformar una oferta en briefs y prompts consistentes para imágenes, Slides y Google Vids",
      "rules": "Úsalo antes de crear una campaña. Pide producto, audiencia, canal, objetivo, referencias y restricciones de marca. Entrega prompts de imagen y un storyboard con audio. Protege la fidelidad del producto. No afirmes que un archivo está generado.",
      "format": "Concepto de campaña; prompt de imagen; adaptación 4:5 y 16:9; storyboard de tres escenas; locución; música/ambiente; CTA; lista de revisión."
    }
  ],
  "workspaceApps": [
    {
      "id": "gmail",
      "label": "Gmail",
      "surface": "Panel lateral de Gemini en Gmail",
      "url": "https://mail.google.com/",
      "playbook": "Copywriter de ventas + Voz de marca",
      "steps": [
        "Abre un hilo de demostración y el panel de Gemini.",
        "Resume compromisos y pide un borrador; confirma a qué mensajes se refiere.",
        "Revisa y decide si insertas el borrador. El ejercicio no envía el correo."
      ],
      "prompt": "Resume este hilo de [CLIENTE/ALIAS]. Separa necesidad, última oferta confirmada, compromisos, fechas y dudas. Cita los mensajes que sustentan cada dato. Después redacta un borrador de respuesta con tono {{tono}}, máximo 90 palabras y una pregunta concreta. No envíes nada ni inventes plazos.",
      "example": "Caso ficticio: Cliente A pidió una propuesta; falta confirmar el alcance y la fecha.",
      "output": "Resumen verificable y borrador de seguimiento."
    },
    {
      "id": "calendar",
      "label": "Calendar",
      "surface": "Gemini Apps con @Google Calendar conectado, si tu cuenta lo permite",
      "url": "https://calendar.google.com/",
      "playbook": "Analista de cuentas (Rutina matutina)",
      "steps": [
        "Revisa en Gemini qué aplicaciones de Workspace están conectadas.",
        "Pide disponibilidad con rango de fechas y zona horaria explícitos, o cruza @Google Calendar + @Gmail para tu briefing diario.",
        "Antes de crear o modificar un evento, revisa los datos y la confirmación de la interfaz."
      ],
      "prompt": "Usa @Google Calendar (y @Gmail si están conectados). Consulta mi agenda de la próxima semana en zona horaria America/Bogota, resume el último correo de cada reunión comercial y propone dos bloques libres de 20 minutos entre 9:00 y 12:00 para prospección. No crees eventos ni invites personas. Si no tienes acceso, pídeme mis horarios disponibles y entrega solo una propuesta.",
      "example": "Caso ficticio: briefing previo a llamadas y dos alternativas de horario propuesto.",
      "output": "Resumen pre-reunión y dos opciones de horario con zona horaria."
    },
    {
      "id": "drive",
      "label": "Drive",
      "surface": "Gemini en Drive o @Google Drive conectado desde Gemini Apps",
      "url": "https://drive.google.com/",
      "playbook": "Analista de cuentas",
      "steps": [
        "Selecciona un catálogo o carpeta de demo que puedas usar.",
        "Pide encontrar la versión vigente de la oferta, con fuente.",
        "Abre el documento y confirma vigencia; no confíes solo en su nombre."
      ],
      "prompt": "En los archivos seleccionados, encuentra la versión vigente del catálogo de {{negocio}}. Identifica oferta, precios, exclusiones y fecha de actualización. Cita archivo y sección. Si hay versiones contradictorias, muéstralas y pregunta cuál usar; no decidas ni completes datos por tu cuenta.",
      "example": "Caso ficticio: catálogo vigente y propuesta antigua con condiciones distintas.",
      "output": "Fuente vigente y lista de datos comerciales confirmados."
    },
    {
      "id": "docs",
      "label": "Docs",
      "surface": "Panel lateral de Gemini en Google Docs o exportación desde Gemini Canvas",
      "url": "https://docs.google.com/",
      "playbook": "Copywriter de ventas + Voz de marca",
      "steps": [
        "Crea una propuesta en Canvas y expórtala a Docs, o abre el panel lateral en un Doc con tu catálogo autorizado.",
        "Pide estructura y opciones con datos confirmados.",
        "Revisa el documento y las condiciones antes de compartir."
      ],
      "prompt": "Usa el briefing y catálogo que te proporcioné para estructurar una propuesta de {{negocio}} a {{cliente}}. Incluye problema, alcance, opciones reales, exclusiones y siguiente paso. Marca [POR CONFIRMAR] en precio, impuestos o fecha no documentados. No fabriques garantías. Entrega un borrador editable para revisión.",
      "example": "Caso ficticio: propuesta de una página con dos paquetes reales y un dato pendiente.",
      "output": "Propuesta editable y lista de pendientes."
    },
    {
      "id": "sheets",
      "label": "Sheets",
      "surface": "Panel lateral de Gemini en Google Sheets",
      "url": "https://sheets.google.com/",
      "playbook": "Analista de cuentas (Pipeline comercial)",
      "steps": [
        "Descarga el caso de 10 deals. Ábrelo en Sheets y elige Archivo → Guardar como hoja de cálculo de Google.",
        "En Pipeline de Ventas, selecciona A1:I11. Abre Pregunta a Gemini y pega el prompt de cuatro preguntas.",
        "Guarda el resumen y el gráfico. Si es una imagen, usa la tabla agregada para crear un gráfico nativo con Insertar → Gráfico.",
        "Comprueba la suma de una etapa, el filtro de prioridad Alta y los tres deals elegidos. Usa la solución después de intentar el ejercicio."
      ],
      "prompt": "Analiza mi pipeline de ventas en la pestaña 'Pipeline de Ventas', rango A1:I11, y dime:\n1. ¿Cuál es el valor total del pipeline por etapa del funnel? Entrega etapa, número de deals y valor en USD. Separa el total del archivo, el pipeline activo y Cerrado ganado.\n2. ¿Qué deals llevan más de 10 días sin contacto y tienen prioridad Alta? Usa fecha de corte 13/03/2025, no HOY(). Muestra Deal ID, empresa, valor, último contacto y días transcurridos.\n3. ¿Cuáles son los 3 deals con mayor valor que necesitan acción inmediata? Define acción inmediata como deal abierto, prioridad Alta y más de 10 días sin contacto. Ordena esos candidatos por valor descendente; desempata por Deal ID. Propón un siguiente paso basado en la columna Próximo Paso.\n4. Crea un gráfico de barras con el valor por etapa, en el orden del funnel, título y eje en USD, partiendo de cero. Incluye Cerrado ganado como categoría separada; no sumes la fila Total como una etapa.\n\nComprueba fechas y valores numéricos antes de calcular. Exactamente 10 días no cumple “más de 10”. Excluye Cerrado ganado y Cerrado perdido del seguimiento urgente. Señala datos faltantes o duplicados sin inventarlos. No calcules tasas de conversión ni probabilidades de cierre a partir de esta foto del pipeline. Si no puedes crear el gráfico, entrega la tabla agregada y los pasos para Insertar → Gráfico. Indica si el gráfico quedó vinculado a las celdas o es una imagen; no afirmes cambios que no realizaste.",
      "example": "10 deals en USD. Corte histórico: 13/03/2025. Empresas con alias y sin datos de contacto.",
      "output": "Valor por etapa, deals sin contacto, top 3 con acciones y gráfico de barras."
    },
    {
      "id": "meet",
      "label": "Meet",
      "surface": "Notas y resúmenes de Gemini en Meet cuando estén habilitados",
      "url": "https://meet.google.com/",
      "playbook": "Copywriter de ventas (Post-reunión)",
      "steps": [
        "Usa notas de una reunión de demo ('Toma notas por mí') y verifica el acceso de tu plan.",
        "Revisa lo acordado frente a la conversación original.",
        "Lleva solo acuerdos confirmados al seguimiento y pipeline."
      ],
      "prompt": "A partir de estas notas anonimizadas de una reunión, separa necesidades, decisiones, responsables y fechas confirmadas. Marca dudas y propuestas que aún no son acuerdos. Redacta un correo de recapitulación de 90 palabras. No agregues compromisos que nadie aceptó.",
      "example": "Caso ficticio: el cliente pidió evaluar dos alcances; todavía no aprobó compra.",
      "output": "Recapitulación y tareas que distinguen propuestas de acuerdos."
    },
    {
      "id": "notebooklm",
      "label": "NotebookLM",
      "surface": "Cuaderno de fuentes en NotebookLM (base verificada de tu negocio)",
      "url": "https://notebooklm.google.com/",
      "playbook": "Analista de cuentas + Voz de marca",
      "steps": [
        "Crea un cuaderno con catálogo, FAQ, tarifario y casos que tengas permiso de usar.",
        "Pregunta por objeciones y argumentos respaldados únicamente en esas fuentes.",
        "Abre las citas, genera un Resumen de audio si quieres practicar tu pitch y lleva los hallazgos confirmados a tu propuesta."
      ],
      "prompt": "Con las fuentes de este cuaderno, enumera las tres dudas comerciales más importantes sobre {{oferta}}. Responde usando únicamente los documentos aportados y cita la evidencia. Si el catálogo no permite resolver algo, señálalo. No inventes resultados ni testimonios.",
      "example": "Caso ficticio: FAQ y catálogo revisados antes de redactar.",
      "output": "Argumentos con citas exactas de tus documentos, listos para revisar."
    }
  ],
  "pipelineLab": {
    "fileUrl": "outputs/pipeline-sheets-20261119/pipeline_practica.xlsx",
    "solutionUrl": "outputs/pipeline-sheets-20261119/pipeline_solucion.xlsx",
    "sourceFilename": "pipeline_prospecccion_ventas.xlsx",
    "cutoff": "13/03/2025",
    "range": "'Pipeline de Ventas'!A1:I11",
    "recordCount": 10,
    "verification": {
      "total": 627000,
      "active": 572000,
      "urgentCount": 4,
      "top3": [
        "D-008",
        "D-002",
        "D-005"
      ],
      "boundaryDeal": "D-006",
      "boundaryDays": 10
    }
  },
  "cafeAssetKit": {
    "title": "Kit descargable · Café Origen Andino",
    "subtitle": "5 Skills listos en formato SKILL.md, PDFs de precios/políticas/marca, insumos de Gmail/Meet/Drive y fotos de producto listas para todo el taller.",
    "zipUrl": "assets-cafe-origen-andino/kit-cafe-origen-andino.zip",
    "zipLabel": "Descargar kit completo Café Origen Andino (.zip) ↓",
    "items": [
      {
        "id": "skills-zip",
        "label": "5 Skills de Café Origen Andino en SKILL.md (.zip)",
        "use": "Módulo 02 · voz-de-marca, analista, objeciones, copywriter y creativo",
        "url": "assets-cafe-origen-andino/skills-cafe-origen-andino.zip"
      },
      {
        "id": "saved-info",
        "label": "Información guardada para Gemini (.txt)",
        "use": "Módulo 01–02 · Ajustes de Gemini",
        "url": "assets-cafe-origen-andino/01_informacion_guardada_gemini.txt"
      },
      {
        "id": "catalogo-2026",
        "label": "Catálogo y Tarifario Oficial 2026 (.pdf)",
        "use": "NotebookLM · Drive · Propuestas en Canvas",
        "url": "assets-cafe-origen-andino/02_catalogo_y_tarifario_2026.pdf"
      },
      {
        "id": "faq-politicas",
        "label": "Políticas Comerciales, FAQ y Casos (.pdf)",
        "use": "NotebookLM · Objeciones LAER / Feel-Felt-Found",
        "url": "assets-cafe-origen-andino/03_faq_politicas_y_casos_reales.pdf"
      },
      {
        "id": "guia-marca",
        "label": "Guía de Voz de Marca e Identidad Visual (.pdf)",
        "use": "Paleta HEX · Voz · Slides y Vids",
        "url": "assets-cafe-origen-andino/04_guia_voz_marca_e_identidad_visual.pdf"
      },
      {
        "id": "demo-gmail-meet",
        "label": "Hilo de Gmail y Notas de Meet (.md)",
        "use": "Módulo 04 · Demo Gmail y Meet",
        "url": "assets-cafe-origen-andino/05_hilo_gmail_y_notas_meet_demo.md"
      },
      {
        "id": "tarifario-2025",
        "label": "Tarifario 2025 desactualizado (.pdf)",
        "use": "Módulo 04 · Demo de contradicciones en Drive",
        "url": "assets-cafe-origen-andino/05b_tarifario_2025_desactualizado.pdf"
      },
      {
        "id": "foto-bolsa",
        "label": "Foto de producto · Bolsa 340g (.png)",
        "use": "Módulo 05 · Referencia de imagen / Slides",
        "url": "assets-cafe-origen-andino/06_foto_producto_bolsa_cafe.png"
      },
      {
        "id": "foto-barra",
        "label": "Foto editorial · Barra móvil en oficina (.png)",
        "use": "Módulo 05 · Campaña / Google Vids",
        "url": "assets-cafe-origen-andino/07_foto_barra_movil_oficina.png"
      },
      {
        "id": "guia-kit",
        "label": "Guía de preparación del kit (.md)",
        "use": "Qué subir a cada herramienta",
        "url": "assets-cafe-origen-andino/00_LEEME_KIT_CAFE_ORIGEN_ANDINO.md"
      }
    ]
  }
};
