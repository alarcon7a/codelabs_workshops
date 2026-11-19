window.WORKSHOP_DATA = {
  meta: {
    title: "Gemini para Emprendedores: Vende mejor, crea contenido y optimiza tu trabajo",
    subtitle: "Taller introductorio 100% práctico · Sin programación · 90 minutos",
    durationMins: 90,
    level: "Introductorio (sin conocimientos de programación)",
    geminiUrl: "https://gemini.google.com/app",
    pipelineFileUrl: "pipeline_ventas_gemini.xlsx"
  },

  presets: [
    {
      id: "cafe",
      emoji: "☕",
      label: "Café Origen Andino",
      name: "Café Origen Andino",
      offer: "Café de especialidad por suscripción mensual y barras móviles de espresso para eventos corporativos",
      audience: "Oficinas de 20 a 150 personas y amantes del café en casa",
      diff: "Tueste fresco semanal directo de caficultores locales y montaje en 30 minutos",
      tone: "Cálido, experto pero cercano y sin tecnicismos snobs (trato de 'tú')",
      painTask: "Armar cotizaciones para eventos y publicar contenido semanal en Instagram"
    },
    {
      id: "agencia",
      emoji: "🎨",
      label: "Estudio Impulso Creativo",
      name: "Estudio Impulso Creativo",
      offer: "Diseño de identidad visual, páginas web que convierten y kits de marca para pymes",
      audience: "Emprendedores en crecimiento y negocios de servicios B2B",
      diff: "Entrega garantizada en 3 semanas con acompañamiento estratégico paso a paso",
      tone: "Claro, estratégico, empático y directo al resultado comercial",
      painTask: "Redactar propuestas de 3 opciones y responder objeciones de presupuesto"
    },
    {
      id: "moda",
      emoji: "👗",
      label: "Looma Sostenible",
      name: "Looma Sostenible",
      offer: "Prendas básicas versátiles de algodón orgánico vendidas por tienda online y WhatsApp",
      audience: "Mujeres y hombres de 25 a 45 años que priorizan comodidad y durabilidad",
      diff: "Telas certificadas suaves que no pierden forma tras 50 lavadas y cambios sin costo",
      tone: "Fresco, honesto, consciente y cercano (como una amiga que recomienda algo real)",
      painTask: "Crear guiones de Reels semanales y responder dudas de tallas y envíos"
    },
    {
      id: "bienestar",
      emoji: "🩺",
      label: "Equilibra Salud Integral",
      name: "Equilibra Salud Integral",
      offer: "Programas de nutrición práctica y hábitos saludables de 8 semanas con seguimiento 1 a 1",
      audience: "Profesionales ocupados de 30 a 50 años con poco tiempo para cocinar",
      diff: "Menús reales en 15 minutos sin dietas extremas ni suplementos costosos",
      tone: "Motivador, empático, basado en hábitos reales y cero juicios",
      painTask: "Resumir correos/formularios de ingreso y preparar seguimientos semanales"
    }
  ],

  bloques: [
    {
      id: "b00",
      code: "00",
      title: "Bienvenida y Punto de Partida",
      timeRange: "00–08 min",
      color: "#2563EB",
      slides: [
        {
          id: "s1",
          type: "cover",
          theme: "dark",
          mins: 1,
          badge: "Taller Práctico · 90 min",
          title: "Gemini para Emprendedores",
          highlightTitle: "Vende mejor, crea contenido y optimiza tu trabajo",
          subtitle: "De usar Gemini como un buscador cualquiera a convertirlo en tu sistema operativo del negocio: instrucciones claras, Workspace (Gmail, Calendar y Sheets), prospección conectada (Treg.to y Apollo), Skills modulares (SKILL.md) y automatización de tareas.",
          pills: [
            "⏱ 90 minutos",
            "🌱 Nivel introductorio · Sin programación",
            "📦 Entregable: Tu SKILL.md + Flujo Automatizado"
          ],
          pillars: [
            { icon: "💼", title: "Vende mejor", desc: "Propuestas en 3 niveles, método LAER y secuencias", targetId: "s14" },
            { icon: "📣", title: "Crea contenido", desc: "De 1 idea real a toda tu semana sin sonar robot", targetId: "s21" },
            { icon: "📬", title: "Workspace y Pipeline", desc: "Gmail, Calendar, Drive y CRM ligero en Sheets", targetId: "s27" },
            { icon: "🎯", title: "Prospección y Apps", desc: "Treg.to, Apollo, Deep Research y MCP Antigravity", targetId: "s32" },
            { icon: "⚡", title: "Skills y Automatización", desc: "Habilidades @skill apilables y tareas programadas", targetId: "s38" }
          ]
        },
        {
          id: "s2",
          type: "agenda",
          theme: "light",
          mins: 1,
          badge: "Mapa del Taller",
          badgeColor: "primary",
          title: "Tu ruta práctica de 90 minutos",
          subtitle: "Cada bloque combina una técnica concreta con un ejercicio o reto cronometrado aplicado directamente a tu emprendimiento. Haz clic en cualquier bloque para explorarlo.",
          items: [
            { time: "00–08 min", title: "Bloque 00 · Punto de Partida y Ficha de Negocio", desc: "Mentalidad 80/20, privacidad y configuración de tu contexto base.", targetId: "s3" },
            { time: "08–20 min", title: "Bloque 01 · Instrucciones y Contexto (Fórmula R-C-T-F)", desc: "Cómo pedir para obtener borradores útiles en el primer intento.", targetId: "s7" },
            { time: "20–36 min", title: "Bloque 02 · Vende Mejor", desc: "Propuestas 3 niveles, manejo de objeciones LAER y secuencia 4 toques.", targetId: "s14" },
            { time: "36–48 min", title: "Bloque 03 · Contenido de Marketing", desc: "Sistema 1 Semilla → 5 Piezas manteniendo tu propia voz de marca.", targetId: "s21" },
            { time: "48–60 min", title: "Bloque 04 · Workspace y Pipeline en Sheets", desc: "Gmail, @Google Calendar, Drive y plantilla CRM con Lead Scoring (.xlsx).", targetId: "s27" },
            { time: "60–74 min", title: "Bloque 05 · Prospección y Herramientas Conectadas", desc: "Conecta Treg.to, Apollo.io, Deep Research y MCP en Gemini / Antigravity.", targetId: "s32" },
            { time: "74–90 min", title: "Bloque 06 · Skills (SKILL.md), Automatización y Tu Asistente", desc: "Habilidades apilables (@skill), Acciones Programadas y Workspace Studio.", targetId: "s38" }
          ]
        },
        {
          id: "s3",
          type: "diagnosticPoll",
          theme: "light",
          mins: 2,
          badge: "Diagnóstico Relámpago",
          badgeColor: "violet",
          title: "¿Cuál es hoy el mayor 'ladrón de tiempo' en tu negocio?",
          subtitle: "Elige tu prioridad principal hoy. Te mostraremos qué bloque del taller la resuelve primero y cuánto tiempo suele recuperarse.",
          options: [
            {
              id: "propuestas",
              icon: "💼",
              title: "Armar propuestas, cotizaciones y dar seguimiento",
              desc: "Me toma horas redactar cotizaciones desde cero o responder cuando dicen 'está caro'.",
              pct: 36,
              tip: "Tu foco estrella está en el Bloque 02 (slides #s15–#s20). Lograrás bajar una propuesta personalizada de 60 minutos a menos de 10 minutos.",
              targetId: "s16"
            },
            {
              id: "marketing",
              icon: "📣",
              title: "Pensar y escribir contenido para redes o boletines",
              desc: "Me quedo frente a la pantalla en blanco y termino publicando solo cuando me sobra tiempo.",
              pct: 29,
              tip: "El Bloque 03 (#s22–#s26) te dará el método '1 Semilla → 5 Piezas' y una ruleta de ángulos para planificar toda tu semana en 15 minutos.",
              targetId: "s23"
            },
            {
              id: "prospeccion",
              icon: "🎯",
              title: "Encontrar nuevos prospectos y personalizar mensajes",
              desc: "Buscar empresas, validar contactos y escribir correos en frío que no parezcan spam.",
              pct: 21,
              tip: "Explora el Bloque 05 (#s32–#s37) para conectar Treg.to, Apollo.io y Gemini/Antigravity y redactar mensajes basados en señales reales.",
              targetId: "s34"
            },
            {
              id: "orden",
              icon: "🗂️",
              title: "Responder correos largos, ordenar Drive y automatizar",
              desc: "Tengo precios en un PDF, acuerdos en Gmail y pendientes sueltos por todos lados.",
              pct: 14,
              tip: "En el Bloque 04 (#s28–#s30) y Bloque 06 (#s41–#s42) conectarás Calendar, Gmail y Drive y programarás Skills y rutinas automáticas.",
              targetId: "s28"
            }
          ]
        },
        {
          id: "s4",
          type: "split",
          theme: "light",
          mins: 1,
          badge: "Cambio de Mentalidad",
          badgeColor: "primary",
          title: "De buscador a asistente del negocio: La Regla 80 / 20",
          subtitle: "El error #1 al empezar con IA es tratar a Gemini como un buscador de Google donde haces una pregunta suelta y esperas magia.",
          left: {
            accent: "bad",
            title: "🔴 Mentalidad Buscador (frustrante)",
            items: [
              "❌ Pides algo genérico en 1 sola línea ('hazme un post de ventas').",
              "❌ No le explicas quién eres ni a quién le vendes.",
              "❌ Si el resultado suena robótico, piensas 'la IA no sirve para mi rubro'.",
              "❌ Copias y pegas sin revisar tono, cifras ni promesas reales."
            ]
          },
          right: {
            accent: "good",
            title: "🟢 Mentalidad Asistente 80 / 20 (productiva)",
            items: [
              "✅ Gemini construye el 80%: estructura, ángulos, primer borrador y síntesis.",
              "✅ Tú aportas el 20% irremplazable: estrategia, precios reales, empatía y criterio.",
              "✅ Le hablas como a un practicante brillante en su primer día: contexto + ejemplo.",
              "✅ Iteras en 2 o 3 mensajes cortos en lugar de empezar de nuevo."
            ]
          },
          callout: {
            color: "emerald",
            text: "Tip de flujo práctico: Abre gemini.google.com en una pestaña al lado de este taller para copiar, probar e iterar en vivo con tu 20% humano (cifras, tono real y promesa cumplible)."
          }
        },
        {
          id: "s5",
          type: "businessProfile",
          theme: "light",
          mins: 2,
          badge: "Actividad 01 · +50 pts",
          badgeColor: "emerald",
          title: "Configura la Ficha de tu Negocio",
          subtitle: "Completa estos datos una sola vez (o carga un negocio de ejemplo en 1 clic). Todo el taller adaptará sus prompts a tu emprendimiento automáticamente."
        },
        {
          id: "s6",
          type: "trafficLight",
          theme: "light",
          mins: 1,
          badge: "Privacidad y Confianza",
          badgeColor: "cyan",
          title: "Semáforo de Seguridad: qué compartir y qué verificar",
          subtitle: "Usar IA profesionalmente también significa proteger los datos de tus clientes y evitar errores en precios o compromisos.",
          lights: [
            {
              color: "green",
              title: "🟢 Seguro para trabajar",
              items: [
                "Tu oferta, paquetes de servicio y propuesta de valor.",
                "Objeciones frecuentes y preguntas habituales de clientes.",
                "Guías de tono de marca y borradores de marketing.",
                "Correos o casos con datos comerciales generales."
              ]
            },
            {
              color: "amber",
              title: "🟡 Anonimizar si usas cuenta gratuita",
              items: [
                "Nombres completos de clientes, teléfonos, cédulas o NIT.",
                "Contratos confidenciales o márgenes internos sensibles.",
                "Truco rápido: reemplaza por [Cliente A] o [Empresa X] antes de pegar."
              ]
            },
            {
              color: "red",
              title: "🔴 Verificar siempre con ojos humanos",
              items: [
                "Precios finales, sumas, descuentos e impuestos.",
                "Fechas de entrega, stock disponible y garantías legales.",
                "Nunca compartas contraseñas, tokens privados ni datos bancarios."
              ]
            }
          ],
          callout: {
            color: "primary",
            text: "Nota Google Workspace: Si usas una cuenta corporativa de Google Workspace, tus datos dentro de Gemini y Workspace cuentan con protecciones empresariales y no se usan para entrenar modelos públicos."
          }
        }
      ]
    },
    {
      id: "b01",
      code: "01",
      title: "Instrucciones y Contexto",
      timeRange: "08–20 min",
      color: "#6366F1",
      slides: [
        {
          id: "s7",
          type: "section",
          theme: "dark",
          mins: 1,
          badge: "Bloque 01 · Min 08–20",
          num: "01",
          title: "Instrucciones y Contexto que Funcionan a la Primera",
          subtitle: "Deja de obtener respuestas genéricas. Aprende la estructura de 4 piezas que transforma cualquier pedido en un resultado listo para tu negocio.",
          bullets: [
            "📐 Fórmula R-C-T-F + Restricciones",
            "🩺 Comparador de prompts en vivo",
            "💬 Conversación en 3 turnos",
            "⏱ Reto cronometrado + Quiz"
          ]
        },
        {
          id: "s8",
          type: "cards",
          theme: "light",
          mins: 2,
          badge: "Marco Fundamental",
          badgeColor: "primary",
          title: "La Fórmula R-C-T-F (+ Restricciones)",
          subtitle: "No es código ni magia: son las 4 cosas que cualquier persona necesita saber para hacer bien un encargo por ti.",
          cols: 3,
          cards: [
            {
              glyph: "R",
              color: "primary",
              title: "Rol (Quién actúa)",
              desc: "Define el sombrero y criterio profesional con el que quieres que Gemini piense.",
              snippet: "Actúa como asesor comercial senior experto en ventas consultivas para pymes."
            },
            {
              glyph: "C",
              color: "violet",
              title: "Contexto (Tu realidad)",
              desc: "Quién eres, qué vendes, a quién y qué pasó antes de este mensaje.",
              snippet: "Negocio: {{negocio}} ({{oferta}}). Cliente ideal: {{cliente}}. Diferenciador: {{diferenciador}}."
            },
            {
              glyph: "T",
              color: "emerald",
              title: "Tarea (Qué hacer)",
              desc: "El verbo claro y específico del entregable que necesitas hoy.",
              snippet: "Redacta una propuesta con 3 opciones para un cliente que cotiza para la próxima semana."
            },
            {
              glyph: "F",
              color: "cyan",
              title: "Formato (Cómo lo entrega)",
              desc: "Tabla, viñetas, guion de 30s o mensaje corto listo para WhatsApp.",
              snippet: "Entrégalo en: 1) Tabla comparativa breve y 2) Mensaje de WhatsApp de máximo 4 líneas."
            },
            {
              glyph: "!",
              color: "coral",
              title: "+ Restricciones (Límites)",
              desc: "Lo que debe evitar: longitud máxima, palabras prohibidas y tono exacto.",
              snippet: "Tono {{tono}}. Prohibido usar clichés ('revolucionario', 'en el mundo actual'). Máximo 180 palabras."
            }
          ]
        },
        {
          id: "s9",
          type: "promptDoctor",
          theme: "light",
          mins: 2,
          badge: "Anatomía Interactiva",
          badgeColor: "violet",
          title: "Comparador: Prompt Vago vs. Prompt R-C-T-F",
          subtitle: "Elige un escenario y haz clic en cada etiqueta de color para ver cómo cada pieza mejora drásticamente la respuesta de Gemini.",
          scenarios: [
            {
              id: "ventas",
              label: "💼 Caso Ventas: Responder cotización",
              badPrompt: "Ayúdame a responderle a un cliente que preguntó cuánto cuesta mi servicio.",
              badResult: "Hola, gracias por contactarnos. Nuestros precios dependen de varios factores y tenemos diferentes planes para ti. Quedamos atentos si deseas agendar una llamada para darte más información. ¡Saludos cordiales!",
              segments: [
                { key: "rol", label: "[R] Rol", color: "primary", text: "Actúa como asesor comercial consultivo para pymes. " },
                { key: "ctx", label: "[C] Contexto", color: "violet", text: "En {{negocio}} ofrecemos {{oferta}} para {{cliente}} (diferenciador: {{diferenciador}}). Un prospecto escribió por WhatsApp: 'Hola, ¿cuánto cobran?' sin dar más detalles. " },
                { key: "tar", label: "[T] Tarea", color: "emerald", text: "Redacta 2 respuestas amables que califiquen su necesidad con 2 preguntas rápidas antes de dar un precio cerrado. " },
                { key: "fmt", label: "[F] Formato", color: "cyan", text: "Entrega cada opción lista para copiar y pegar en WhatsApp. " },
                { key: "lim", label: "[!] Límites", color: "coral", text: "Tono {{tono}}. Máximo 55 palabras por mensaje, sin sonar robótico." }
              ],
              goodResult: "Opción 1 (Directa y cálida):\n¡Hola! Qué gusto saludarte 😊 En {{negocio}} armamos soluciones a la medida según lo que necesites. Para pasarte el rango exacto hoy mismo, cuéntame dos cosas rápidas:\n1) ¿Para qué fecha o frecuencia lo estás buscando?\n2) ¿Aproximadamente para cuántas personas o volumen sería?\nCon eso te envío 2 o 3 opciones claras."
            },
            {
              id: "mkt",
              label: "📣 Caso Marketing: Post para redes",
              badPrompt: "Escribe un post de Instagram para vender más en mi negocio.",
              badResult: "✨¡En el mundo actual, la calidad marca la diferencia! ✨ Descubre nuestra increíble solución diseñada para llevar tu experiencia al siguiente nivel. ¡Contáctanos hoy mismo y transforma tu vida! 🚀🔥 #Exito #Innovacion",
              segments: [
                { key: "rol", label: "[R] Rol", color: "primary", text: "Actúa como redactor especialista en redes sociales para negocios locales. " },
                { key: "ctx", label: "[C] Contexto", color: "violet", text: "Marca: {{negocio}}. Vendemos {{oferta}} a {{cliente}}. Queremos explicar por qué ocurre un error común al comprar este tipo de servicio. " },
                { key: "tar", label: "[T] Tarea", color: "emerald", text: "Crea un guion de carrusel de 4 láminas educativas que cierre invitando a escribir por DM. " },
                { key: "fmt", label: "[F] Formato", color: "cyan", text: "Lista numerada: Lámina 1 (Gancho máx 8 palabras), Láminas 2-3 (Error y solución), Lámina 4 (CTA) + caption corto. " },
                { key: "lim", label: "[!] Límites", color: "coral", text: "Tono {{tono}}. Cero frases cliché como 'en el mundo actual' o 'lleva al siguiente nivel'." }
              ],
              goodResult: "Lámina 1 (Portada): El error #1 que te hace gastar de más\nLámina 2: Muchos comparan solo el precio inicial sin revisar {{diferenciador}}.\nLámina 3: Qué revisar antes de elegir: duración, respaldo y claridad en tiempos.\nLámina 4: ¿Quieres revisar tu caso sin compromiso? Escríbeme 'GUÍA' por DM."
            }
          ]
        },
        {
          id: "s10",
          type: "steps",
          theme: "light",
          mins: 1,
          badge: "Técnica Clave",
          badgeColor: "emerald",
          title: "El Secreto de los Emprendedores Prácticos: Conversar en 3 Turnos",
          subtitle: "No intentes escribir el prompt perfecto de 20 líneas a la primera. Es más rápido dirigir a Gemini en 3 mensajes cortos.",
          steps: [
            {
              num: "01",
              title: "Turno 1 · Lanza el contexto + pide preguntas",
              desc: "Dale tu R-C-T-F básico y añade la frase mágica: 'Antes de redactar el resultado final, hazme hasta 3 preguntas si te falta algún dato clave.'",
              example: "Así Gemini no inventa precios, plazos ni características que no existen."
            },
            {
              num: "02",
              title: "Turno 2 · Afina tono y extensión",
              desc: "Responde sus preguntas y corrige el estilo como hablarías con un diseñador o vendedor de tu equipo.",
              example: "'Recórtalo a la mitad, usa trato de tú y cambia la palabra premium por artesanal.'"
            },
            {
              num: "03",
              title: "Turno 3 · Pide revisión de cliente exigente",
              desc: "Haz que Gemini critique su propio borrador antes de enviarlo.",
              example: "'Ahora léelo como un cliente escéptico de {{cliente}}. ¿Qué duda queda sin responder?'"
            }
          ]
        },
        {
          id: "s11",
          type: "flipCards",
          theme: "light",
          mins: 1,
          badge: "Contexto Instantáneo",
          badgeColor: "primary",
          title: "4 Formas Rápidas de Darle Contexto Real de tu Negocio",
          subtitle: "Haz clic en cada tarjeta para girarla y descubrir cómo alimentar a Gemini sin escribir de más.",
          cards: [
            {
              emoji: "📎",
              frontTitle: "1. Pega 2 textos reales tuyos",
              frontDesc: "Correos o posts que tú mismo ya hayas enviado y funcionaron bien.",
              backTitle: "Clona tu voz natural",
              backDesc: "Dile: 'Analiza el estilo, vocabulario y cercanía de estos 2 ejemplos míos y úsalos para redactar el siguiente mensaje.'"
            },
            {
              emoji: "📚",
              frontTitle: "2. Adjunta PDFs o usa NotebookLM",
              frontDesc: "Sube tu catálogo/tarifario en Gemini (+) o crea una base viva en NotebookLM con tus manuales y casos de éxito.",
              backTitle: "Cero alucinaciones de catálogo",
              backDesc: "Usa únicamente los productos, tarifas y casos de los documentos fuente (o de tu cuaderno en notebooklm.google.com). Si falta un dato, indícalo sin inventar."
            },
            {
              emoji: "💬",
              frontTitle: "3. Pega el mensaje crudo del cliente",
              frontDesc: "Copia el audio transcrito o captura/texto tal como lo escribió.",
              backTitle: "Respuestas con empatía real",
              backDesc: "Gemini detecta palabras exactas que usó el cliente para incluirlas en tu propuesta y hacerle sentir escuchado."
            },
            {
              emoji: "🎤",
              frontTitle: "4. Entrevista inversa por voz",
              frontDesc: "¿No te gusta teclear mucho? Háblale por micrófono en la app.",
              backTitle: "De audio desordenado a texto claro",
              backDesc: "Dile: 'Te voy a dictar ideas sueltas sobre un cliente. Ordénalas en 5 puntos claros y propón un siguiente paso.'"
            }
          ]
        },
        {
          id: "s12",
          type: "reto",
          theme: "light",
          mins: 3,
          badge: "Reto 01 · Cronometrado · +100 pts",
          badgeColor: "violet",
          title: "Reto 01: Crea y Prueba tu Prompt Maestro de Presentación",
          subtitle: "Objetivo: Lograr que Gemini te devuelva una descripción comercial de tu negocio que realmente suene como tú (y te haga 2 preguntas para mejorarla).",
          durationSec: 180,
          instructions: [
            "Copia el prompt personalizado de la derecha (ya incluye los datos de tu Ficha de Negocio).",
            "Pégalo en gemini.google.com y responde las 2 preguntas que Gemini te haga.",
            "Pídele un ajuste en el Turno 2 (por ejemplo: 'Hazlo más corto para WhatsApp')."
          ],
          promptTemplate: `Actúa como consultor de posicionamiento para emprendedores.
Contexto de mi negocio:
- Nombre: {{negocio}}
- Qué vendemos: {{oferta}}
- Cliente ideal: {{cliente}}
- Diferenciador: {{diferenciador}}
- Tono deseado: {{tono}}

Tarea: Redacta 2 presentaciones breves de mi negocio:
1) Una bio de Instagram de máximo 150 caracteres.
2) Un mensaje de WhatsApp de 3 líneas para enviar cuando alguien pregunta "¿a qué se dedican?".

Regla importante: Antes de dar la versión final, hazme 2 preguntas cortas si necesitas afinar algún detalle. Evita palabras cliché como "innovador", "soluciones integrales" o "lleva al siguiente nivel".`,
          checklist: [
            "Pegué el prompt R-C-T-F en Gemini y obtuve las 2 versiones.",
            "Respondí o ajusté al menos 1 turno de conversación (iteración).",
            "Guardé o copié la bio/mensaje que sí usaría en mi negocio real."
          ]
        },
        {
          id: "s13",
          type: "quiz",
          theme: "light",
          mins: 2,
          badge: "Quiz 01 · Instrucciones y Contexto",
          badgeColor: "emerald",
          title: "Comprueba lo aprendido · Bloque 01",
          questions: [
            {
              q: "¿Qué significa la fórmula R-C-T-F para pedirle un trabajo a Gemini?",
              opts: [
                "Rápido, Corto, Técnico, Formal",
                "Rol, Contexto, Tarea, Formato",
                "Resumen, Cita, Texto, Firma",
                "Redes, Correo, Tabla, Foto"
              ],
              correct: 1,
              explain: "Rol (quién actúa), Contexto (tu negocio y situación), Tarea (qué debe hacer) y Formato (cómo entregarlo), sumado a Restricciones claras."
            },
            {
              q: "Si Gemini no conoce tus precios o tu público y no quieres redactar un prompt larguísimo, ¿cuál es la mejor frase para incluir?",
              opts: [
                "'Inventa precios promedio del mercado sin preguntarme.'",
                "'Escribe el texto más largo posible para compensar.'",
                "'Antes de generar la versión final, hazme hasta 3 preguntas clave si te falta contexto.'",
                "'Responde únicamente con emojis.'"
              ],
              correct: 2,
              explain: "Pedirle que te haga 2 o 3 preguntas convierte a Gemini en un entrevistador y evita respuestas genéricas o inventadas."
            },
            {
              q: "¿Qué debes hacer si usas una cuenta gratuita personal y necesitas analizar un contrato o caso real de un cliente?",
              opts: [
                "Pegar el nombre completo, teléfono y datos bancarios del cliente sin cambios.",
                "Reemplazar nombres e información sensible por etiquetas como [Cliente A] o [Empresa X].",
                "Nunca usar IA para mejorar textos comerciales.",
                "Dividir el nombre del cliente en dos mensajes distintos."
              ],
              correct: 1,
              explain: "Anonimizar nombres y datos sensibles protege la privacidad de tus clientes mientras aprovechas toda la capacidad de redacción y análisis."
            }
          ]
        }
      ]
    },
    {
      id: "b02",
      code: "02",
      title: "Vende Mejor",
      timeRange: "20–36 min",
      color: "#0D9488",
      slides: [
        {
          id: "s14",
          type: "section",
          theme: "dark",
          mins: 1,
          badge: "Bloque 02 · Min 20–36",
          num: "02",
          title: "Vende Mejor: Propuestas, Objeciones LAER y Secuencias",
          subtitle: "Deja de competir solo por precio. Usa Gemini para estructurar propuestas claras de 3 opciones, aplicar el método LAER y entrenar roleplay con puntaje 1–10.",
          bullets: [
            "📄 De cotización plana a propuesta de 3 niveles",
            "🛠️ Constructor de propuestas personalizado",
            "🛡️ Arena LAER de 5 Objeciones + Scorecard 1–10",
            "🔁 Secuencia Día 1–3–7–14 + Gemini Live"
          ]
        },
        {
          id: "s15",
          type: "split",
          theme: "light",
          mins: 2,
          badge: "Psicología de Ventas",
          badgeColor: "emerald",
          title: "Lista de precios vs. Propuesta Comercial de 3 Opciones",
          subtitle: "Cuando envías un solo precio sin contexto, obligas al cliente a compararte por el número más bajo. Cuando presentas 3 opciones, el cliente elige cuál le conviene contigo.",
          left: {
            accent: "bad",
            title: "🔴 Cotización tradicional (solo precio)",
            items: [
              "• Un PDF frío que dice 'Servicio X: $800 USD'.",
              "• No refleja qué problema específico del cliente vas a resolver.",
              "• Solo deja dos respuestas posibles: 'Sí' o 'Está muy caro'.",
              "• Se envía sin mensaje puente que invite al siguiente paso."
            ]
          },
          right: {
            accent: "good",
            title: "🟢 Propuesta de Valor en 5 Bloques",
            items: [
              "1. Lo que entendimos de tu situación (empatía inmediata).",
              "2. Resultado esperado y cómo lo logramos ({{diferenciador}}).",
              "3. 3 Opciones claras: Esencial · Recomendada ⭐ · Plus.",
              "4. Qué incluye / garantías / tiempos de entrega.",
              "5. Próximo paso simple para avanzar esta semana."
            ]
          },
          callout: {
            color: "emerald",
            text: "Tip comercial: La Opción 'Recomendada' en el centro suele absorber la mayoría de decisiones porque da seguridad sin sentirse ni básica ni excesiva."
          }
        },
        {
          id: "s16",
          type: "promptBuilder",
          theme: "light",
          mins: 2,
          badge: "Laboratorio Comercial",
          badgeColor: "primary",
          title: "Constructor Interactivo de Propuestas Comerciales",
          subtitle: "Llena los datos de una solicitud real de un cliente (o carga el caso de ejemplo) y obtén un prompt listo para generar tu propuesta + mensaje de envío.",
          exampleValues: {
            solicitud: "Cliente corporativo pide propuesta para 40 personas la última semana del mes; quiere algo ágil y buena presentación.",
            resultado: "Resolverlo sin estrés logístico y dar una excelente impresión a su equipo/clientes.",
            opciones: "Esencial ($350) / Recomendada ($520 con personalización) / Plus ($750 todo incluido)",
            plazo: "Confirmar antes del viernes para asegurar fecha y entregar en 5 días hábiles"
          },
          fields: [
            { key: "solicitud", label: "¿Qué pidió el cliente o qué decía su mensaje?", placeholder: "Ej. Cotización para 40 personas / web corporativa / paquete mensual..." },
            { key: "resultado", label: "¿Qué problema quiere resolver o qué resultado busca?", placeholder: "Ej. Ahorrar tiempo, verse más profesional, aumentar reservas..." },
            { key: "opciones", label: "Tus 3 niveles o rango aproximado de inversión", placeholder: "Ej. Esencial $X / Recomendada $Y / Plus $Z (o 'ayúdame a proponer 3 niveles')" },
            { key: "plazo", label: "Plazo de entrega / vigencia de la propuesta", placeholder: "Ej. Entrega en 7 días hábiles · vigencia 10 días" }
          ],
          buildPrompt: function(vals, biz) {
            return `Actúa como director comercial experto en ventas consultivas para ${biz.name}.
Contexto del negocio:
- Qué ofrecemos: ${biz.offer}
- Cliente ideal: ${biz.audience}
- Diferenciador clave: ${biz.diff}
- Tono de marca: ${biz.tone}

Solicitud actual del prospecto:
- Pedido: ${vals.solicitud || "[describe aquí qué pidió el cliente]"}
- Resultado que busca lograr: ${vals.resultado || "[problema o meta del cliente]"}
- Opciones o precios base: ${vals.opciones || "[indica tus 3 niveles o pide a Gemini que sugiera 3 paquetes]"}
- Plazos y condiciones: ${vals.plazo || "[tiempo de entrega y vigencia]"}

Tarea: Redacta una propuesta comercial clara y persuasiva dividida en:
1) Resumen empático: "Lo que entendimos de tu necesidad" (máx 4 líneas).
2) Tabla comparativa de 3 opciones: Esencial | Recomendada (destacada) | Plus, mostrando alcance, beneficio principal e inversión.
3) Nuestra garantía / por qué elegirnos (${biz.diff}).
4) Un mensaje corto para enviar la propuesta por WhatsApp o correo con un llamado a la acción amable para decidir esta semana.

Restricciones: Sin lenguaje corporativo acartonado, máximo 350 palabras en total y marca con [COMPLETAR] cualquier dato que yo deba confirmar.`;
          }
        },
        {
          id: "s17",
          type: "reto",
          theme: "light",
          mins: 4,
          badge: "Reto 02 · Cronometrado · +150 pts",
          badgeColor: "emerald",
          title: "Reto 02: De Solicitud Informal a Propuesta Ganadora",
          subtitle: "Usa un pedido real de esta semana o el mensaje desordenado de abajo para generar una propuesta de 3 niveles + mensaje de WhatsApp en menos de 5 minutos.",
          durationSec: 300,
          instructions: [
            "Copia el caso práctico de abajo (o usa un mensaje real de un cliente tuyo en WhatsApp/correo).",
            "Pega el Prompt en Gemini y revisa la tabla de 3 opciones que genera.",
            "Pide 1 refinamiento en el Turno 2: 'Haz la Opción Recomendada más atractiva sin bajar el precio' o 'Acorta el mensaje de envío'."
          ],
          promptTemplate: `Actúa como asesor comercial senior de {{negocio}} (ofrecemos {{oferta}}, diferenciador: {{diferenciador}}).

Acabo de recibir este mensaje informal de un prospecto de {{cliente}}:
"Hola! Me pasaron tu contacto. Necesito resolver esto pronto para el próximo mes, somos un equipo mediano y queremos saber opciones y cuánto sale porque estamos comparando con dos proveedores más. Gracias!"

Tarea:
1) Redacta una propuesta ejecutiva en 5 bloques con tabla de 3 opciones (Esencial / Recomendada / Plus). Usa [PRECIO] donde deba poner la cifra final.
2) Escribe el mensaje de WhatsApp de máximo 4 líneas para acompañarla y proponer una llamada de 10 min mañana.
3) Sugiéreme 2 preguntas de calificación para hacerle en esa llamada.

Tono: {{tono}}.`,
          checklist: [
            "Generé la propuesta con 3 opciones claras (Esencial, Recomendada y Plus).",
            "Revisé y ajusté las cifras y promesas con mi criterio humano (20%).",
            "Tengo listo un mensaje breve de envío que termina en un próximo paso claro."
          ]
        },
        {
          id: "s18",
          type: "objectionArena",
          theme: "light",
          mins: 3,
          badge: "Simulador LAER + Roleplay",
          badgeColor: "coral",
          title: "La Arena de las 5 Objeciones (Método LAER + Scorecard 1–10)",
          subtitle: "Aplica LAER (Listen, Acknowledge, Explore, Respond). Decide tu primer movimiento táctico y copia el prompt con Roleplay evaluado del 1 al 10.",
          objections: [
            {
              id: "caro",
              title: "💸 'Está muy caro / se sale de mi presupuesto'",
              context: "El cliente compara tu propuesta con opciones más baratas o siente riesgo de invertir.",
              question: "¿Qué haces en los primeros 10 segundos (LAER)?",
              choices: [
                {
                  text: "Ofrecer de inmediato un 20% de descuento para no perder la venta.",
                  good: false,
                  feedback: "Cuidado: bajar el precio de golpe comunica que tu tarifa inicial estaba inflada y destruye tu margen."
                },
                {
                  text: "Validar (Acknowledge), explorar qué parte valora más y ajustar alcance o mostrar retorno.",
                  good: true,
                  feedback: "¡Exacto! Primero valida sin ponerte a la defensiva, descubre si el freno es flujo de caja o percepción de valor, y ajusta alcance antes de regalar margen."
                }
              ],
              prompt: `Actúa como coach comercial experto (método LAER: Listen, Acknowledge, Explore, Respond) para {{negocio}} (vendemos {{oferta}}, diferenciador: {{diferenciador}}).
Un prospecto de {{cliente}} respondió: "Me gusta la propuesta, pero está por encima de nuestro presupuesto".
Redacta 3 respuestas posibles con tono {{tono}} y sin sonar desesperado:
1) Opción A (LAER Empática): Valida + pregunta clave para entender su presupuesto real y mostrar retorno.
2) Opción B (Ajuste de alcance): Cómo proponer nuestra opción Esencial reduciendo entregables sin regalar tarifa.
3) Opción C (Facilidad): Alternativa en 2 pagos para destrabar la decisión esta semana.
Máximo 65 palabras por opción.`,
              roleplay: `Juguemos un roleplay de ventas (nivel de dificultad 8/10). Tú eres un comprador interesado de {{cliente}}, pero escéptico porque recibiste una cotización un 25% más barata de la competencia. Yo soy de {{negocio}} ({{oferta}}).
Empieza diciendo "Está muy caro" y responde de forma realista. Al terminar 4 intercambios, evalúame con este scorecard:
1) Calificación (1 al 10)
2) Qué hice bien
3) Qué mejorar
4) Script sugerido listo para usar.`
            },
            {
              id: "pensarlo",
              title: "⏳ 'Déjame pensarlo y te aviso la otra semana'",
              context: "Suele ocultar una duda no dicha (tiempos, confianza, aprobación de un socio) más que falta de interés.",
              question: "¿Cuál es la mejor jugada?",
              choices: [
                {
                  text: "Responder 'Claro, quedo atento' y esperar pasivamente.",
                  good: false,
                  feedback: "El clásico 'quedo atento' termina en silencio el 80% de las veces porque no ayuda al cliente a resolver su duda."
                },
                {
                  text: "Agradecer, abrir espacio seguro para la duda oculta y acordar un día concreto de seguimiento.",
                  good: true,
                  feedback: "¡Muy bien! Preguntar con calma '¿qué parte te genera duda: el alcance, los tiempos o la inversión?' destraba la conversación."
                }
              ],
              prompt: `Actúa como especialista en cierres consultivos (LAER) para {{negocio}}.
Un cliente dijo: "Déjame pensarlo y te aviso la otra semana".
Escribe 2 mensajes breves para WhatsApp/correo (máximo 55 palabras, tono {{tono}}):
1) Respuesta inmediata en la misma conversación para descubrir con tacto qué duda falta resolver.
2) Mensaje de seguimiento para enviar en 4 días aportando un dato útil o caso breve (sin decir "solo paso a saludar").`,
              roleplay: `Hagamos roleplay (dificultad 7/10). Tú eres un prospecto amable pero indeciso que dice "Déjame pensarlo" porque en el fondo te preocupa si {{negocio}} podrá cumplir en el tiempo prometido. Hazme trabajar para descubrir tu duda real en 3 turnos y al final dame: Calificación 1-10, Qué hice bien, Qué mejorar y Script sugerido.`
            },
            {
              id: "competencia",
              title: "🤝 'Ya trabajamos con otro proveedor'",
              context: "El cliente tiene inercia con su proveedor actual y teme el costo de cambiar.",
              question: "¿Cómo responder sin atacar a la competencia?",
              choices: [
                {
                  text: "Criticar los fallos comunes del otro proveedor para verte superior.",
                  good: false,
                  feedback: "Hablar mal de la competencia genera desconfianza y pone al cliente a defender su decisión actual."
                },
                {
                  text: "Reconocer lo positivo, diferenciar tu ángulo único y proponer una prueba pequeña sin riesgo.",
                  good: true,
                  feedback: "¡Correcto! Proponer un diagnóstico o piloto puntual reduce la fricción de cambiar todo de golpe."
                }
              ],
              prompt: `Actúa como estratega B2B para {{negocio}} (diferenciador: {{diferenciador}}).
El prospecto respondió: "Gracias, pero ya tenemos un proveedor de confianza".
Redacta una respuesta respetuosa de 4 líneas (tono {{tono}}) usando método Boomerang / LAER que:
1) Valide su relación actual sin hablar mal de nadie.
2) Mencione brevemente nuestro enfoque distinto ({{diferenciador}}).
3) Proponga quedar como opción de respaldo o hacer una micro-prueba puntual sin compromiso.`,
              roleplay: `Simulemos este caso (dificultad 8/10): eres un cliente satisfecho al 80% con tu proveedor actual, pero te molesta la lentitud en entregas. Yo te presento {{negocio}} ({{diferenciador}}). Reacciona de forma realista y al final entrégame mi Scorecard 1-10 con script sugerido.`
            },
            {
              id: "tiempo",
              title: "⚡ 'Me interesa, pero ahorita no tengo tiempo'",
              context: "El cliente percibe que contratarte le va a exigir mucho trabajo o reuniones largas.",
              question: "¿Qué necesitas demostrarle?",
              choices: [
                {
                  text: "Enviarle un formulario de 25 preguntas para que lo llene cuando pueda.",
                  good: false,
                  feedback: "Si no tiene tiempo, un formulario largo confirma su miedo de que trabajar contigo le dará más carga."
                },
                {
                  text: "Mostrar que tu proceso le ahorra tiempo desde el día 1 con un primer paso de 10 minutos.",
                  good: true,
                  feedback: "¡Exacto! Invierte la objeción: comprarte es justamente la forma de recuperar horas esta semana."
                }
              ],
              prompt: `Actúa como asesor de ventas para {{negocio}} ({{oferta}}).
Un cliente de {{cliente}} dijo: "Me encanta la idea, pero este mes estamos colapsados y no tengo tiempo para arrancar".
Escribe un mensaje persuasivo y empático (máx 60 palabras, tono {{tono}}) explicando que nuestro proceso requiere solo 15 minutos suyos al inicio y el resto lo resolvemos nosotros.`,
              roleplay: `Eres un dueño de negocio saturado que quiere mejorar su área, pero cree que iniciar con {{negocio}} le quitará más horas (dificultad 7/10). Ponme a prueba en 3 mensajes y evalúame del 1 al 10 con Script sugerido al cerrar.`
            },
            {
              id: "info",
              title: "📩 'Solo mándame la información por correo'",
              context: "El prospecto intenta despacharte rápido antes de entender tu valor.",
              question: "¿Cómo evitar enviar un PDF al vacío?",
              choices: [
                {
                  text: "Mandar el brochure general de 12 páginas sin hacer preguntas.",
                  good: false,
                  feedback: "Nadie lee un brochure de 12 páginas frío; lo más probable es que nunca abra el correo."
                },
                {
                  text: "Hacer 1 pregunta de contexto de 10 segundos antes de enviar la info exacta que necesita.",
                  good: true,
                  feedback: "¡Genial! 'Con gusto te la envío hoy: para mandarte solo lo relevante y no hacerte perder tiempo, ¿buscas más A o B?'"
                }
              ],
              prompt: `Actúa como experto en prospección para {{negocio}}.
Un contacto frío dijo: "Solo mándame la info por correo y yo la reviso".
Dame 2 respuestas muy naturales (máx 45 palabras cada una, tono {{tono}}) para pedir 1 solo dato de contexto antes de enviar el correo, más la estructura del correo breve con método AIDA.`,
              roleplay: `Eres un comprador ocupado que solo dice "mándame la info por correo" (dificultad 8/10). Si te hago una pregunta inteligente y breve, te abres a contarme qué necesitas. Al final evalúame del 1 al 10 y dame el script mejorado.`
            }
          ]
        },
        {
          id: "s19",
          type: "cards",
          theme: "light",
          mins: 2,
          badge: "Secuencias AIDA y Voz",
          badgeColor: "violet",
          title: "Secuencia Comercial (Día 1–3–7–14) + Práctica en Gemini Live",
          subtitle: "El 60% de las ventas ocurre después del primer seguimiento. Aplica estructura AIDA (máx. 150 palabras), 2 asuntos A/B y practica en voz antes de negociar.",
          cols: 3,
          cards: [
            {
              glyph: "D1-3",
              color: "primary",
              title: "Seguimiento con Valor (Día 3 / 48h)",
              desc: "Reemplaza el '¿pudiste ver mi correo?' por un aporte práctico + 2 asuntos A/B para probar.",
              snippet: "Para {{negocio}} ({{oferta}}): escribe un mensaje de seguimiento a las 48h (máx. 60 palabras, tono {{tono}}). Incluye 2 asuntos A/B, aporta 1 tip útil o duda frecuente resuelta y cierra con pregunta fácil de responder (A o B)."
            },
            {
              glyph: "D1-14",
              color: "emerald",
              title: "Secuencia Completa 4 Toques (Días 1, 3, 7, 14)",
              desc: "Cadencia profesional sin sonar insistente hasta el cierre respetuoso de puerta abierta.",
              snippet: "Actúa como copywriter B2B para {{negocio}} (diferenciador: {{diferenciador}}). Crea una secuencia de 4 correos para {{cliente}} espaciados en Día 1, Día 3, Día 7 y Día 14 (cierre elegante). Reglas: máximo 120 palabras c/u, estructura AIDA, 2 asuntos A/B y CTA específico."
            },
            {
              glyph: "🎙️",
              color: "violet",
              title: "Entrena con Voz (Gemini Live)",
              desc: "Activa Gemini Live en tu celular 3 minutos antes de entrar a una llamada o reunión importante.",
              snippet: "Voy camino a una reunión con un prospecto de {{cliente}}. Actúa como el comprador (dificultad 8/10) sobre {{oferta}}. Empecemos un simulacro de 3 minutos y al final dame nota 1-10 y 2 consejos rápidos."
            }
          ]
        },
        {
          id: "s20",
          type: "quiz",
          theme: "light",
          mins: 2,
          badge: "Quiz 02 · Ventas y Objeciones",
          badgeColor: "emerald",
          title: "Comprueba lo aprendido · Bloque 02",
          questions: [
            {
              q: "¿Por qué conviene que Gemini estructure tu propuesta en 3 opciones (Esencial / Recomendada / Plus) en vez de un solo precio?",
              opts: [
                "Para confundir al cliente con muchas páginas.",
                "Porque cambia la pregunta de '¿compro o no?' a '¿cuál opción se adapta mejor a mí?'.",
                "Porque Gemini no sabe calcular un solo número.",
                "Para ocultar los costos reales."
              ],
              correct: 1,
              explain: "Las 3 opciones anclan el valor y permiten al cliente elegir el nivel de alcance adecuado sin exigir descuentos de entrada."
            },
            {
              q: "Cuando un cliente dice 'Está muy caro', ¿qué es lo primero que conviene hacer con ayuda de Gemini?",
              opts: [
                "Bajar el precio un 30% en el primer mensaje.",
                "Ignorar el mensaje por una semana.",
                "Validar su presupuesto, identificar qué valora y explorar ajustar alcance o pagos antes de recortar margen.",
                "Enviar un texto técnico largo defendiendo tus costos fijos."
              ],
              correct: 2,
              explain: "Validar y aislar la objeción protege tu rentabilidad y abre opciones de alcance escalonado o facilidades de pago."
            },
            {
              q: "¿Cuál es un uso poderoso de Gemini antes de una reunión comercial importante?",
              opts: [
                "Pedirle que actúe como tu cliente escéptico en un roleplay de objeciones.",
                "Dejar que hable directamente por ti sin revisar nada.",
                "Pedirle que invente cifras falsas de la competencia.",
                "Enviar el historial completo de tus otros clientes."
              ],
              correct: 0,
              explain: "Practicar tus respuestas con un roleplay elimina la improvisación y te da seguridad frente a objeciones reales."
            },
            {
              q: "¿Qué hace que un mensaje de seguimiento a las 48 horas funcione mejor que '¿pudiste revisar?'?",
              opts: [
                "Escribir todo en mayúsculas.",
                "Aportar una aclaración útil, un ejemplo corto o una pregunta concreta de un paso simple.",
                "Enviar 5 mensajes seguidos el mismo día.",
                "Adjuntar de nuevo exactamente el mismo PDF sin texto."
              ],
              correct: 1,
              explain: "Aportar contexto o resolver una posible duda quita la sensación de cobro/presión y reactiva la conversación."
            }
          ]
        }
      ]
    },
    {
      id: "b03",
      code: "03",
      title: "Contenido de Marketing",
      timeRange: "36–48 min",
      color: "#E11D48",
      slides: [
        {
          id: "s21",
          type: "section",
          theme: "dark",
          mins: 1,
          badge: "Bloque 03 · Min 36–48",
          num: "03",
          title: "Contenido de Marketing sin Página en Blanco",
          subtitle: "No necesitas publicar más horas: necesitas multiplicar tus ideas reales del día a día en múltiples formatos sin perder tu voz humana.",
          bullets: [
            "🌱 Sistema 1 Semilla → 5 Piezas",
            "🎲 Ruleta Interactiva de Ángulos",
            "🤖 Antídoto contra el Tono Robot",
            "🧩 Reto: tu semana de contenido"
          ]
        },
        {
          id: "s22",
          type: "steps",
          theme: "light",
          mins: 2,
          badge: "Sistema Multiplicador",
          badgeColor: "coral",
          title: "El Método '1 Semilla → 5 Piezas'",
          subtitle: "En lugar de inventar 5 temas distintos cada semana, toma 1 experiencia real de hoy (una duda de un cliente, un error común o un pedido entregado) y transfórmala.",
          steps: [
            {
              num: "🌱",
              title: "La Semilla Real",
              desc: "Ej: 'Hoy un cliente nos preguntó si vale la pena invertir en {{oferta}} antes de temporada alta.'",
              example: "30 segundos explicando tu respuesta real."
            },
            {
              num: "01",
              title: "Guion Reel / Short (30s)",
              desc: "Gancho directo + 3 ideas claras + invitación a comentar o escribir por DM.",
              example: "Ideal para alcance orgánico."
            },
            {
              num: "02",
              title: "Carrusel de 5 Láminas",
              desc: "Desglose visual paso a paso o 'Mito vs. Realidad' listo para guardar.",
              example: "Genera confianza y guardados."
            },
            {
              num: "03",
              title: "Post Autoridad / LinkedIn",
              desc: "Historia corta del caso real + aprendizaje clave para tu cliente ideal.",
              example: "Posiciona tu criterio experto."
            },
            {
              num: "04",
              title: "Correo + WhatsApp",
              desc: "Boletín breve o estado/difusión de WhatsApp con oferta o diagnóstico directo.",
              example: "Convierte interés en conversación."
            }
          ]
        },
        {
          id: "s23",
          type: "slotGenerator",
          theme: "light",
          mins: 2,
          badge: "Actividad Interactiva",
          badgeColor: "violet",
          title: "La Ruleta de Ángulos de Marketing",
          subtitle: "Gira la ruleta para combinar ángulos frescos. Haz clic en 🔒 Fijar en cualquier columna que te guste y copia el prompt resultante adaptado a tu negocio.",
          columns: [
            {
              key: "objetivo",
              label: "1. Objetivo",
              options: [
                "Derribar un mito del sector",
                "Responder una objeción de precio",
                "Mostrar detrás de cámaras real",
                "Explicar un error común del cliente",
                "Compartir un antes y después real"
              ]
            },
            {
              key: "formato",
              label: "2. Formato",
              options: [
                "Guion de Reel de 30 segundos",
                "Carrusel educativo de 5 láminas",
                "3 Historias interactivas con encuesta",
                "Post breve tipo checklist accionable",
                "Correo relámpago de 120 palabras"
              ]
            },
            {
              key: "gancho",
              label: "3. Gancho (Primeros 3s)",
              options: [
                "El error #1 que te hace perder tiempo al elegir...",
                "Nadie te cuenta esto antes de contratar...",
                "Así resolvimos en 24 horas el problema de...",
                "3 señales claras de que ya necesitas...",
                "Deja de hacer esto si quieres mejores resultados en..."
              ]
            },
            {
              key: "cta",
              label: "4. Llamado a la Acción",
              options: [
                "Comenta 'GUÍA' y te envío el detalle por DM",
                "Escríbenos por WhatsApp para cotizar en 5 min",
                "Guarda esta publicación para tu próxima compra",
                "Responde la encuesta y te damos diagnóstico gratis",
                "Agenda 15 minutos sin costo esta semana"
              ]
            }
          ]
        },
        {
          id: "s24",
          type: "split",
          theme: "light",
          mins: 1,
          badge: "Voz Auténtica",
          badgeColor: "coral",
          title: "Antídoto contra el 'Tono Robot' de la IA",
          subtitle: "Tus clientes reconocen al instante un texto genérico de IA. Configura una mini-ficha de estilo y dile explícitamente qué palabras prohibir.",
          left: {
            accent: "bad",
            title: "🤖 Palabras prohibidas (delatan copia fría)",
            items: [
              "🚫 'En el vertiginoso / dinámico mundo actual...'",
              "🚫 '¡Descubre la revolución que transformará tu vida!'",
              "🚫 'Sumérgete en un viaje inolvidable de excelencia...'",
              "🚫 'Soluciones integrales de vanguardia personalizadas...'",
              "🚫 Exceso de 10 emojis de cohetes y destellos 🚀✨🔥"
            ]
          },
          right: {
            accent: "good",
            title: "🎙️ Tu Mini-Ficha de Voz de Marca",
            items: [
              "✅ 3 adjetivos reales: Ej. 'Directo, cálido, práctico'.",
              "✅ Pronombre fijo: 'Trata al lector de tú (o de usted)'.",
              "✅ Longitud humana: Frases cortas de máx. 15 palabras.",
              "✅ Prueba real: Pega 1 párrafo que tú escribiste para que imite tu ritmo.",
              "✅ Muletilla o saludo tuyo: Ej. 'Hola equipo / Mira este dato'."
            ]
          },
          callout: {
            color: "violet",
            text: "Prompt salvavidas: 'Reescribe esto quitando cualquier adjetivo exagerado o frase cliché de marketing. Que suene como una conversación real tomando un café.'"
          }
        },
        {
          id: "s25",
          type: "sortActivity",
          theme: "light",
          mins: 2,
          badge: "Actividad de Ordenamiento · +100 pts",
          badgeColor: "primary",
          title: "Ordena la Estructura de un Contenido que Sí Vende",
          subtitle: "La mayoría empieza hablando de su empresa y pierde la atención en 2 segundos. Usa las flechas ↑ ↓ o arrastra ⋮⋮ para ordenar las 5 partes.",
          items: [
            { id: "hook", text: "1) Gancho específico que nombra un dolor o curiosidad real en 3 segundos", correctIndex: 0 },
            { id: "pain", text: "2) Situación cotidiana con la que tu cliente dice 'eso me pasa a mí'", correctIndex: 1 },
            { id: "value", text: "3) Consejo accionable, cambio de enfoque o solución en pasos simples", correctIndex: 2 },
            { id: "proof", text: "4) Ejemplo real o diferenciador concreto de cómo lo resuelve tu negocio", correctIndex: 3 },
            { id: "cta", text: "5) Un único llamado a la acción claro (DM, WhatsApp o guardar)", correctIndex: 4 }
          ]
        },
        {
          id: "s26",
          type: "reto",
          theme: "light",
          mins: 4,
          badge: "Reto 03 · Cronometrado · +150 pts",
          badgeColor: "coral",
          title: "Reto 03: Tu Semana de Contenido en 1 Sola Sesión",
          subtitle: "Aplica '1 Semilla → 5 Piezas' + tu Voz de Marca en Gemini para salir de aquí con 3 publicaciones y 1 mensaje de difusión listos.",
          durationSec: 240,
          instructions: [
            "Piensa en 1 duda real que te haya hecho un cliente esta semana (o usa la sugerencia del prompt).",
            "Copia el prompt de abajo, reemplaza la duda si deseas y ejecútalo en Gemini.",
            "Revisa los resultados aplicando el filtro anti-robot y ajusta al menos 1 gancho."
          ],
          promptTemplate: `Actúa como director de contenidos para {{negocio}} (vendemos {{oferta}} a {{cliente}}; nuestro diferenciador es {{diferenciador}}).

Semilla real del negocio: [Escribe aquí una duda frecuente de tus clientes o deja este ejemplo: "Muchos clientes dudan si vale la pena elegir calidad y respaldo frente a la opción más barata"].

Aplica el método "1 Semilla → 5 Piezas" y crea:
1) Guion de Reel/TikTok de máximo 30 segundos (con Gancho en los primeros 3 seg, Desarrollo en 3 puntos y CTA).
2) Estructura de Carrusel de 5 láminas (máximo 12 palabras por lámina).
3) Post corto de autoridad o historia (máximo 90 palabras).
4) Mensaje cercano para Estados o lista de difusión de WhatsApp (máximo 45 palabras).

Reglas de voz: Tono {{tono}}. PROHIBIDO usar palabras cliché ("mundo actual", "revolución", "lleva al siguiente nivel", "soluciones integrales"). Usa máximo 2 emojis por pieza.`,
          checklist: [
            "Generé al menos 3 piezas distintas a partir de 1 sola idea semilla.",
            "Eliminé cualquier palabra robótica y ajusté el gancho inicial.",
            "Copié las piezas en mi bloc de notas o Google Docs para programar esta semana."
          ]
        }
      ]
    },
    {
      id: "b04",
      code: "04",
      title: "Google Workspace y Pipeline",
      timeRange: "48–60 min",
      color: "#0284C7",
      slides: [
        {
          id: "s27",
          type: "section",
          theme: "dark",
          mins: 1,
          badge: "Bloque 04 · Min 48–60",
          num: "04",
          title: "Google Workspace + Pipeline en Sheets",
          subtitle: "Deja de copiar entre 10 pestañas. Conecta Gemini con Gmail, @Google Calendar, Docs, Drive y nuestra plantilla Excel/Sheets con Lead Scoring.",
          bullets: [
            "✨ Panel Lateral vs. @Menciones vs. Modo Universal",
            "📅 @Google Calendar + @Gmail: Briefing pre-reunión",
            "📊 Plantilla Pipeline de Ventas + Lead Scoring (.xlsx)",
            "🧪 Reto con caso real o Kit de práctica incluido"
          ]
        },
        {
          id: "s28",
          type: "workspaceSimulator",
          theme: "light",
          mins: 3,
          badge: "Explorador Según Disponibilidad",
          badgeColor: "cyan",
          title: "Cómo Usar Gemini con Gmail, Calendar, Docs, Drive y Sheets",
          subtitle: "Primero elige qué ves en tu cuenta hoy (Paso 1) y luego explora cada aplicación de Workspace (Paso 2), incluyendo Calendar y nuestra plantilla descargable de Sheets.",
          modes: [
            {
              id: "sidepanel",
              label: "✨ Panel Lateral en Workspace",
              badge: "Cuentas Google Workspace / Google AI",
              desc: "Ves el ícono de estrella ✨ arriba a la derecha dentro de Gmail, Docs, Drive o Sheets. Gemini lee directamente lo que tienes abierto."
            },
            {
              id: "mentions",
              label: "🔗 App de Gemini con @Menciones",
              badge: "gemini.google.com + Extensiones",
              desc: "Desde gemini.google.com escribes @Gmail, @Google Calendar, @Google Drive o @Google Docs para cruzar datos en tiempo real."
            },
            {
              id: "universal",
              label: "📋 Modo Universal (Cualquier cuenta)",
              badge: "100% disponible hoy",
              desc: "Si tu cuenta aún no tiene panel lateral ni @extensiones activas, subes el archivo PDF/Excel/CSV con '+' o pegas el hilo anonimizado."
            }
          ],
          apps: [
            {
              id: "gmail",
              name: "Gmail",
              icon: "✉️",
              docTitle: "Hilo: Cotización Evento Q4 — 14 mensajes + búsqueda de tarifas",
              docBody: "De: Laura Gómez <laura@empresa.com>\nAsunto: Re: Dudas de fechas, facturación y cambio de horario...\nTip: Desde Gemini pregunta también '¿Cuál fue el último precio que cotizamos a [cliente]?'",
              how: {
                sidepanel: "Abre el hilo en Gmail → pulsa el botón ✨ arriba a la derecha → escribe el prompt. También puedes usar 'Ayúdame a escribir' al responder.",
                mentions: "En gemini.google.com escribe: '@Gmail busca los correos de los últimos 3 meses con [nombre del cliente] y dime qué cotizamos o acordamos.'",
                universal: "Copia los últimos mensajes del hilo (reemplaza datos privados si es cuenta gratuita) y pégalos debajo del prompt en Gemini."
              },
              prompt: `Usa @Gmail (o lee este hilo) y entrégame 4 bloques claros:
1) Qué solicita o cambió el cliente exactamente y tono general (positivo/neutral/preocupado).
2) Compromisos pendientes de ambas partes y último precio o condición mencionada.
3) Borrador de respuesta empática y ejecutiva para {{negocio}} (tono {{tono}}), confirmando próximos pasos.`
            },
            {
              id: "calendar",
              name: "Calendar",
              icon: "📅",
              docTitle: "Agenda Semanal · Briefing Pre-Reunión + Bloques de Prospección",
              docBody: "Reunión 10:00 a.m.: Llamada con Prospecto B2B\nInvitados: Dirección Comercial\nGemini cruza @Google Calendar + @Gmail + @Google Drive antes de entrar a la llamada.",
              how: {
                sidepanel: "En Google Calendar organiza bloques de trabajo y luego abre Gemini al lado para preparar tus llamadas del día en 30 segundos.",
                mentions: "En gemini.google.com activa Extensiones Workspace y combina '@Google Calendar @Gmail' para pedir tu briefing pre-reunión o huecos libres de 30 min.",
                universal: "Copia las 3–5 reuniones clave de tu semana desde Calendar y pégalas en Gemini junto con el último correo del cliente."
              },
              prompt: `Usa @Google Calendar @Gmail @Google Drive y prepárame un briefing de 60 segundos para mis reuniones de hoy:
1) Lista de reuniones con hora, asistentes y si hay conflictos de horario.
2) Resumen de los últimos 3 correos o propuestas enviadas en Drive para cada cliente.
3) 3 puntos clave a validar en cada llamada para avanzar al cierre.
Extra: Encuentra 3 bloques libres de 30 minutos entre 9:00 a.m. y 12:00 p.m. esta semana para prospectar sin interrupciones.`
            },
            {
              id: "docs",
              name: "Google Docs",
              icon: "📄",
              docTitle: "Borrador: Propuesta de Servicios 2026",
              docBody: "- Incluir 3 paquetes (Esencial / Recomendada / Plus)\n- Tiempo entrega 10 días\n- Falta redactar intro ejecutiva y garantías...",
              how: {
                sidepanel: "Dentro del Google Doc, abre el panel ✨ lateral o selecciona texto → 'Ayúdame a escribir' para pulir o expandir.",
                mentions: "En gemini.google.com escribe '@Google Docs toma mi documento [Nombre del Doc]...' para generar secciones nuevas o resúmenes.",
                universal: "Descarga o copia tus viñetas desordenadas del Doc y pídele a Gemini que las convierta en documento ejecutivo listo para pegar."
              },
              prompt: `Toma estas notas desordenadas de mi documento y conviértelas en una propuesta comercial profesional para {{negocio}} ({{oferta}}):
- Mantén todas las cifras y fechas originales sin inventar datos.
- Mejora la claridad, usa subtítulos limpios y añade una sección corta de "Próximos pasos".`
            },
            {
              id: "drive",
              name: "Google Drive",
              icon: "🗂️",
              docTitle: "Carpeta: Comercial / Catálogo_2026.pdf + Notas_Reunion.gdoc",
              docBody: "Gemini cruza información entre varios archivos de tu Drive sin que tengas que abrirlos uno por uno.",
              how: {
                sidepanel: "En Drive haz clic sobre una carpeta o archivo → abre el panel ✨ → pide un resumen o tabla comparativa entre archivos.",
                mentions: "En gemini.google.com usa '@Google Drive busca mis archivos sobre [tema] y combínalos para...'.",
                universal: "En gemini.google.com pulsa el botón '+' → 'Añadir desde Drive' o 'Subir archivo' para adjuntar varios PDFs/Docs en el mismo chat."
              },
              prompt: `Consulta estos documentos de {{negocio}} y ayúdame a:
1) Extraer los 5 puntos clave aplicables a un cliente de {{cliente}}.
2) Detectar si hay contradicciones de precios o plazos entre documentos.
3) Redactar un resumen ejecutivo de 1 párrafo para enviar hoy.`
            },
            {
              id: "sheets",
              name: "Google Sheets",
              icon: "📊",
              docTitle: "Plantilla Descargable: pipeline_ventas_gemini.xlsx (4 hojas)",
              docBody: "Hoja 1: Pipeline Comercial (10 leads LATAM)\nHoja 2: Matriz Lead Scoring (1-100 ponderada)\nHoja 3: Rutina Semanal IA\nHoja 4: 7 Prompts Listos",
              downloadUrl: "pipeline_ventas_gemini.xlsx",
              downloadLabel: "⬇️ Descargar Plantilla Pipeline (.xlsx)",
              how: {
                sidepanel: "Descarga el archivo pipeline_ventas_gemini.xlsx, súbelo a Google Drive → ábrelo con Google Sheets → pulsa ✨ y pega el prompt de análisis o scoring.",
                mentions: "También puedes subir el .xlsx o CSV directo con '+' en gemini.google.com para pedirle Lead Scoring (1-100), limpieza de teléfonos y deals en riesgo.",
                universal: "Pega 10 pedidos o prospectos desordenados en Gemini y pídele una tabla limpia lista para exportar a Hojas de Cálculo en 1 clic."
              },
              prompt: `Analiza la hoja 'Pipeline Comercial' de mi archivo (o estos datos) como analista comercial de {{negocio}}:
1) Resume valor total en USD y número de tratos por cada 'Etapa del Funnel'.
2) Identifica tratos activos con >= 7 'Días sin Contacto' y ordénalos por urgencia e impacto.
3) Calcula un Score IA (1-100) usando: Encaje ICP 25%, Señal 25%, Presupuesto 20%, Decisor 15%, Urgencia 15% y dime los 3 clientes a contactar hoy.`
            }
          ]
        },
        {
          id: "s29",
          type: "cards",
          theme: "light",
          mins: 2,
          badge: "Casos de Alto Impacto",
          badgeColor: "primary",
          title: "4 Flujos de Workspace que Ahorran Horas Cada Semana",
          subtitle: "Combina aplicaciones con @menciones para llegar preparado a cada reunión y no dejar dinero olvidado en tu seguimiento.",
          cols: 2,
          cards: [
            {
              glyph: "📅",
              color: "cyan",
              title: "1. Briefing Pre-Reunión (@Calendar + @Gmail)",
              desc: "Cada mañana a las 8:00 a.m., cruza tus citas del día con los últimos correos para entrar preparado en 60 segundos.",
              snippet: "Usa @Google Calendar @Gmail: revisa mis reuniones de hoy, resume los últimos 3 correos con cada cliente y dime 3 preguntas clave."
            },
            {
              glyph: "✉️",
              color: "violet",
              title: "2. Búsqueda Inteligente y Rescate de Hilos",
              desc: "Encuentra cotizaciones antiguas sin abrir 20 correos o resume hilos de 14 mensajes antes de responder.",
              snippet: "Usa @Gmail: ¿Cuál fue el último precio o acuerdo que enviamos a [Cliente]? Resume compromisos pendientes y tono."
            },
            {
              glyph: "📁",
              color: "emerald",
              title: "3. Cruce de @Drive: Notas + Tarifario + Propuesta",
              desc: "Combina notas rápidas de una llamada con tu tarifario oficial en PDF para redactar la propuesta en Google Docs.",
              snippet: "Usa @Google Drive: cruza [Notas Cliente X] con [Tarifario] y arma el borrador de propuesta de 3 opciones para {{negocio}}."
            },
            {
              glyph: "📊",
              color: "primary",
              title: "4. Pipeline y Lead Scoring (1-100) en Sheets",
              desc: "Detecta tratos en riesgo (>7 días sin contacto), calcula pronóstico ponderado de cierre y limpia teléfonos duplicados.",
              snippet: "Analiza mi Pipeline Comercial: calcula forecast ponderado por etapa y dime los 3 deals en riesgo que debo reactivar hoy."
            }
          ]
        },
        {
          id: "s30",
          type: "reto",
          theme: "light",
          mins: 4,
          badge: "Reto 04 · Cronometrado · +150 pts",
          badgeColor: "cyan",
          title: "Reto 04: Rescate Ejecutivo de Correo y Documento",
          subtitle: "Procesa un hilo de correos desordenado y una nota de precios para extraer pendientes exactos y redactar la respuesta en menos de 4 minutos.",
          durationSec: 240,
          tabs: [
            {
              id: "kit",
              label: "📦 Usar Kit de Práctica (Incluido)",
              desc: "Copia este caso realista (hilo de 3 correos + nota interna de precios) si no quieres abrir tu Gmail real ahora mismo.",
              prompt: `Actúa como asistente ejecutivo de operaciones para {{negocio}}.
Lee este hilo de correos de un cliente corporativo y nuestra nota de precios interna, y entrega:
1) Resumen ejecutivo en 3 viñetas.
2) Lista de 3 acuerdos confirmados y 2 riesgos o datos faltantes por aclarar antes de confirmar.
3) Borrador de correo de respuesta amable, claro y profesional (tono {{tono}}), listo para enviar hoy.

--- HILO DE CORREOS ---
[Correo 1 - Lun 9:15] Sofía (Empresa Nova): Hola! Queremos cotizar para nuestra jornada anual de 60 personas el jueves 26 del próximo mes en horario de mañana. ¿Nos confirman disponibilidad?
[Correo 2 - Mar 16:40] Sofía: Perdón la demora! Me comenta dirección que finalmente serán 75 personas y que necesitamos factura con 15 días de plazo de pago, además de confirmar si pueden llegar a las 7:30 a.m. porque el evento abre a las 8:30 a.m.
[Correo 3 - Mié 11:05] Sofía: Ah, olvidé decir que 8 personas tienen restricción especial / requieren alternativa sin gluten o sin lácteos, y nos piden confirmar antes de mañana al mediodía para aprobar orden de compra.

--- NOTA INTERNA DE PRECIOS / POLÍTICAS ---
- Paquete estándar grupo 50-80 personas: $18 USD por persona (montaje incluido en horario regular desde las 8:00 a.m.).
- Montaje temprano antes de las 8:00 a.m.: recargo logístico de $60 USD.
- Condición de pago habitual: 50% anticipo para reservar fecha, 50% el día de entrega (plazo 15 días solo aplica con orden de compra aprobada y anticipo mínimo del 30%).`
            },
            {
              id: "propio",
              label: "✉️ Usar mi propio Gmail / Drive",
              desc: "Abre un hilo largo en Gmail o usa @Gmail / @Google Drive en Gemini con este prompt.",
              prompt: `Actúa como asistente ejecutivo de {{negocio}}.
Analiza este hilo de correo / documento de Drive (@Gmail o @Google Drive o texto pegado abajo) y entrega:
1) Resumen en máximo 4 viñetas de lo que realmente necesita la otra persona.
2) Tabla de pendientes: Qué toca responder | Datos que faltan confirmar | Fecha límite.
3) Borrador de respuesta ejecutiva en tono {{tono}}, confirmando los puntos claros y haciendo únicamente las preguntas indispensables.`
            }
          ],
          instructions: [
            "Elige la pestaña 'Kit de Práctica' (100% listo) o 'Usar mi propio Gmail / Drive'.",
            "Copia y ejecuta el prompt en Gemini (o desde el panel lateral ✨ de Gmail).",
            "Verifica con tus propios ojos que el cálculo (75 personas × $18 + recargo $60) y la condición del anticipo 30% estén correctos."
          ],
          checklist: [
            "Gemini identificó correctamente los cambios (de 60 a 75 personas, horario 7:30 a.m. y restricción especial).",
            "Verifiqué manualmente las cifras y la política de anticipo del borrador.",
            "Tengo un correo de respuesta limpio listo para enviar en menos de 4 minutos."
          ]
        },
        {
          id: "s31",
          type: "quiz",
          theme: "light",
          mins: 2,
          badge: "Quiz 03 · Google Workspace",
          badgeColor: "emerald",
          title: "Comprueba lo aprendido · Bloque 04",
          questions: [
            {
              q: "Si tu cuenta NO tiene todavía el panel lateral ✨ en Gmail ni @Gmail activo, ¿cómo puedes aprovechar el mismo flujo hoy?",
              opts: [
                "No se puede usar Gemini para correos.",
                "Tienes que programar una integración en Python primero.",
                "Copiar el hilo (anonimizando datos sensibles si es cuenta gratuita) o subir el documento con '+' en gemini.google.com.",
                "Cambiar de computadora."
              ],
              correct: 2,
              explain: "La técnica funciona en cualquier cuenta: si tienes panel lateral o @menciones ahorras clics; si no, copiar/subir el archivo logra el mismo resultado."
            },
            {
              q: "Cuando Gemini te resume un correo con cambios de presupuesto o cantidades, ¿qué debes hacer antes de enviar el borrador?",
              opts: [
                "Enviarlo automáticamente con los ojos cerrados.",
                "Verificar manualmente cantidades, precios, fechas y políticas antes de pulsar Enviar.",
                "Pedirle a Gemini que invente una fecha límite distinta.",
                "Borrar los correos originales."
              ],
              correct: 1,
              explain: "El 20% humano siempre valida cifras, plazos y promesas contractuales antes de enviar cualquier comunicación."
            },
            {
              q: "¿Para qué sirve escribir @Google Drive dentro de Gemini (cuando está habilitado)?",
              opts: [
                "Para enviar correos masivos a desconocidos.",
                "Para buscar y usar documentos reales de tu Drive como base de tu respuesta sin inventar información.",
                "Para borrar archivos viejos automáticamente.",
                "Para cambiar tu contraseña de Gmail."
              ],
              correct: 1,
              explain: "Con @Google Drive anclas a Gemini en tus catálogos, apuntes y propuestas reales."
            }
          ]
        }
      ]
    },
    {
      id: "b05",
      code: "05",
      title: "Prospección y Herramientas",
      timeRange: "60–74 min",
      color: "#0EA5E9",
      slides: [
        {
          id: "s32",
          type: "section",
          theme: "dark",
          mins: 1,
          badge: "Bloque 05 · Min 60–74",
          num: "05",
          title: "Prospección Inteligente y Herramientas Conectadas",
          subtitle: "Investiga cuentas en 5 bloques con Deep Research, califica leads en Sheets y conecta datos reales a Gemini y Google Antigravity con Treg.to, Apollo.io y MCP.",
          bullets: [
            "🔎 Deep Research + Briefing de Cuenta en 5 Bloques",
            "🌐 Treg.to: el 'OpenRouter' de herramientas y datos",
            "🚀 Apollo.io: búsqueda B2B y señales de compra",
            "🔌 Escalera CRM: Sheets → HubSpot → MCP Antigravity"
          ]
        },
        {
          id: "s33",
          type: "steps",
          theme: "light",
          mins: 2,
          badge: "Escalera Práctica de Prospección",
          badgeColor: "cyan",
          title: "4 Niveles para Prospectar y Gestionar tu CRM con IA",
          subtitle: "Empieza gratis con la plantilla de Sheets y escala a investigación profunda o conectores MCP cuando tu volumen lo pida.",
          steps: [
            {
              num: "01",
              title: "Nivel 1 · Sheets Ligero (1–10 personas, $0)",
              desc: "Usas nuestra plantilla pipeline_ventas_gemini.xlsx en Google Sheets y Gemini califica tus leads del 1 al 100 automáticamente.",
              example: "Sin suscripciones nuevas hoy mismo."
            },
            {
              num: "02",
              title: "Nivel 2 · Deep Research + NotebookLM",
              desc: "Lanzas Deep Research en Gemini para investigar un sector o empresa objetivo y guardas tus casos/playbooks en NotebookLM para cero inventos.",
              example: "Briefing completo antes de escribir 1 línea."
            },
            {
              num: "03",
              title: "Nivel 3 · Puente Unificado con Treg.to + Apollo",
              desc: "En lugar de pagar 5 licencias mensuales (Apollo, scraper, SEO, LinkedIn), conectas treg.to/mcp pagando por llamada o usando tu API Key (BYOK).",
              example: "Miles de herramientas desde 1 sola URL."
            },
            {
              num: "04",
              title: "Nivel 4 · Antigravity + MCP + HubSpot / n8n",
              desc: "Pegas la configuración JSON en Antigravity (~/.gemini/config/mcp_config.json) y conectas Apollo/Treg con HubSpot Free, Notion o n8n.",
              example: "Tú solo apruebas cada envío."
            }
          ]
        },
        {
          id: "s34",
          type: "connectorHub",
          theme: "light",
          mins: 4,
          badge: "Hub Interactivo de Conectores",
          badgeColor: "primary",
          title: "Conecta Treg.to, Apollo.io y tus Herramientas a Gemini / Antigravity",
          subtitle: "Elige el modo de trabajo y selecciona cada conector para ver la arquitectura, copiar la conexión MCP (si aplica) y llevarte el prompt listo para tu negocio.",
          modes: [
            {
              id: "mcp",
              label: "⚡ En Antigravity / Cliente MCP",
              badge: "Agente conectado en tiempo real",
              desc: "Configuras el servidor MCP una sola vez en Antigravity (o tu asistente compatible) y Gemini llama directamente a Treg.to, Apollo, n8n o tu CRM."
            },
            {
              id: "web",
              label: "💬 En Gemini Web + Google Sheets",
              badge: "100% sin instalaciones",
              desc: "Trabajas con exportaciones CSV/tablas de Apollo, resultados web o Google Maps pegados o subidos en gemini.google.com y Google Sheets."
            }
          ],
          tools: [
            {
              id: "treg",
              icon: "🌐",
              name: "Treg.to",
              tag: "OpenRouter de Tools",
              url: "https://treg.to/",
              urlLabel: "Explorar treg.to ↗",
              sub: "Gateway unificado de enriquecimiento, LinkedIn, SERP y scraping pago por uso o BYOK.",
              pipeline: ["Tu orden en español", "Gemini en Antigravity", "MCP: treg.to/mcp", "Prospectos + Señal real"],
              mcpBullets: [
                "Acceso a miles de endpoints (Apollo, LinkedIn, SEO/SERP, anuncios, web scraping) desde un único endpoint.",
                "Modelo Pay-Per-Call en centavos sin pagar licencias SaaS mensuales completas.",
                "Modo BYOK (Bring Your Own Key): si ya pagas Apollo u otra tool, conecta tu clave en el vault de Treg."
              ],
              webBullets: [
                "Útil como catálogo para descubrir qué datos públicos existen sobre tus clientes ideales ({{cliente}}).",
                "Puedes copiar salidas JSON/tablas generadas por herramientas externas y pedir a Gemini Web que las limpie y clasifique.",
                "Ideal para cruzar señales web + LinkedIn antes de preparar una propuesta."
              ],
              mcpConfig: `{
  "mcpServers": {
    "treg": {
      "url": "https://treg.to/mcp",
      "headers": {
        "Authorization": "Bearer TU_TOKEN_TREG"
      }
    }
  }
}`,
              mcpPrompt: `Usa el conector MCP de Treg.to para prospectar clientes ideales de {{negocio}} ({{oferta}}).
Perfil objetivo: {{cliente}}.

Pasos:
1) Busca 5 empresas que encajen con este perfil y enriquece al tomador de decisión (nombre, cargo y URL/correo disponible) junto con 1 señal reciente de su web o LinkedIn.
2) Ordénalos en una tabla priorizada del 1 al 5 según qué tanto necesitan {{diferenciador}}.
3) Redacta para cada uno un mensaje inicial de máximo 65 palabras (tono {{tono}}), mencionando su señal real y cerrando con una pregunta de baja fricción.`,
              webPrompt: `Actúa como analista de prospección B2B para {{negocio}} ({{oferta}}).
Voy a pegarte datos enriquecidos de empresas y perfiles de LinkedIn sobre {{cliente}}:
[PEGA AQUÍ LOS PERFILES O TABLA DE DATOS]

Tarea:
1) Identifica la señal comercial más relevante de cada empresa (crecimiento, contratación, web desactualizada, expansión).
2) Clasifica cada lead en Prioridad Alta / Media / Baja según afinidad con {{diferenciador}}.
3) Redacta 1 mensaje personalizado por lead (máximo 65 palabras, tono {{tono}}) sin sonar a plantilla masiva.`
            },
            {
              id: "apollo",
              icon: "🚀",
              name: "Apollo.io",
              tag: "Base B2B 200M+",
              url: "https://www.apollo.io/",
              urlLabel: "Ir a Apollo.io ↗",
              sub: "Encuentra tomadores de decisión por industria, tamaño de empresa, cargo y correo verificado.",
              pipeline: ["Filtro ICP ({{cliente}})", "Apollo (MCP / CSV)", "Gemini personaliza 1:1", "Borrador en Gmail / Secuencia"],
              mcpBullets: [
                "Filtra prospectos en lenguaje natural: cargo, país, tamaño de empresa y tecnologías usadas.",
                "Conéctalo vía MCP oficial de Apollo o usando tu propia Apollo API Key dentro de Treg.to (BYOK).",
                "Pide a Gemini que reporte cuántos créditos consumirá antes de revelar correos masivos."
              ],
              webBullets: [
                "En la versión web gratuita de Apollo aplica 3 filtros (Cargo, País, Empleados) y exporta 10–25 contactos en CSV.",
                "Sube el CSV a Gemini web ('+') o ábrelo en Google Sheets.",
                "Pide a Gemini añadir dos columnas nuevas: 'Ángulo de dolor' y 'Primera línea personalizada'."
              ],
              mcpConfig: `{
  "mcpServers": {
    "treg-apollo-byok": {
      "url": "https://treg.to/mcp",
      "headers": {
        "Authorization": "Bearer TU_TOKEN_TREG"
      }
    }
  }
}`,
              mcpPrompt: `Conecta con Apollo (vía MCP / Treg BYOK) para construir una micro-lista de 5 prospectos reales para {{negocio}}.
Criterios ICP:
- Público objetivo: {{cliente}}
- Oferta que resolvemos: {{oferta}}

Antes de gastar créditos revelando datos: muéstrame los 5 perfiles encontrados (Empresa, Cargo, Tamaño, País) para confirmar cuáles aprobar. Luego redacta un correo de 4 líneas (tono {{tono}}) destacando {{diferenciador}}.`,
              webPrompt: `Adjunto un CSV exportado de Apollo.io con prospectos para {{negocio}} ({{oferta}}).
Columnas disponibles: Empresa, Cargo, Industria, Tamaño y Web.

Tarea:
1) Selecciona los 5 prospectos con mayor probabilidad de necesitar {{diferenciador}}.
2) Crea una tabla con columnas: Nombre | Empresa | Dolor probable del cargo | Asunto de correo (máx 6 palabras) | Mensaje rompehielo (máx 60 palabras).
3) Tono: {{tono}}. Prohibido usar saludos genéricos como "Espero que este correo te encuentre bien".`
            },
            {
              id: "crm",
              icon: "🧩",
              name: "CRM, Notion y n8n",
              tag: "Flujo & Seguimiento",
              url: "https://n8n.io/",
              urlLabel: "Ver n8n / Flujos ↗",
              sub: "Evita que los leads se pierdan: envía prospectos calificados a HubSpot, Notion, Sheets o n8n.",
              pipeline: ["Lead validado", "Gemini redacta ficha", "MCP: CRM / Notion / n8n", "Borrador en Gmail listo"],
              mcpBullets: [
                "En Antigravity puedes combinar Treg/Apollo + servidor MCP de n8n, Notion o Supabase.",
                "Flujo típico: enriquecer 5 cuentas → guardar ficha en tu base → crear borrador listo para revisar en Gmail.",
                "Mantén siempre aprobación humana antes de enviar el correo final."
              ],
              webBullets: [
                "Sin MCP, usa la acción 'Exportar a Hojas de Cálculo' debajo de cualquier tabla de Gemini.",
                "Crea un tablero simple en Google Sheets o Notion con: Lead | Señal | Estado | Próximo seguimiento.",
                "Usa Gemini para redactar la nota resumen que pegas en tu CRM tras cada llamada."
              ],
              mcpConfig: `{
  "mcpServers": {
    "n8n-mcp": {
      "command": "npx",
      "args": ["-y", "n8n-mcp"],
      "env": {
        "N8N_API_URL": "https://tu-instancia.app.n8n.cloud"
      }
    }
  }
}`,
              mcpPrompt: `Toma los 5 prospectos aprobados para {{negocio}} y prepáralos para mi CRM / flujo en n8n o Notion:
1) Estandariza cada registro con: empresa, contacto, cargo, señal_detectada, prioridad y proximo_paso_fecha.
2) Genera para cada contacto el cuerpo del correo #1 y del seguimiento a 72 horas en tono {{tono}}.
3) No envíes correos automáticamente: déjalos listos como borradores para mi revisión final.`,
              webPrompt: `Actúa como asistente de CRM para {{negocio}}.
Convierte estas notas rápidas de prospección en una tabla lista para exportar a Google Sheets o Notion con columnas:
Empresa | Decisor | Canal (LinkedIn/Email/WhatsApp) | Señal detectada | Mensaje enviado | Fecha de seguimiento (+3 días).

Datos: [PEGA AQUÍ TUS NOTAS O CONVERSACIONES]`
            },
            {
              id: "local",
              icon: "🔎",
              name: "Deep Research y Briefing 5D",
              tag: "Investigación de Cuenta",
              url: "https://gemini.google.com/app",
              urlLabel: "Probar Deep Research ↗",
              sub: "Analiza web, reseñas y noticias antes de una reunión usando el Briefing de Cuenta en 5 Bloques.",
              pipeline: ["Empresa / Decisor", "Deep Research / Treg Web", "Briefing en 5 Bloques", "3 Icebreakers reales"],
              mcpBullets: [
                "Combina scraping/SERP de Treg.to con un @skill analizador de cuentas para generar el briefing automáticamente.",
                "Guarda los 5 bloques en Google Docs o en tu CRM antes de cada llamada importante.",
                "Regla cero alucinaciones: exige citar fuentes o indicar claramente si falta un dato público."
              ],
              webBullets: [
                "Usa el modo Deep Research en gemini.google.com para investigar una empresa, sector o tendencia antes de cotizar.",
                "También funciona pegando su portada web o 5 reseñas recientes de Google Maps.",
                "Aplica el formato 5D: Resumen Ejecutivo, Señales de Compra, Perfil del Decisor, 3 Icebreakers + 2 Preguntas y Riesgos."
              ],
              mcpPrompt: `Usa las herramientas web / SERP conectadas en Antigravity para preparar un BRIEFING DE CUENTA EN 5 BLOQUES sobre: [EMPRESA Y CARGO DEL DECISOR].
Contexto de {{negocio}}: vendemos {{oferta}} (diferenciador: {{diferenciador}}).

Entrega exactamente:
1) 📊 RESUMEN EJECUTIVO: qué hacen, tamaño aproximado y prioridad actual.
2) 🎯 SEÑALES DE COMPRA: 2 noticias, vacantes o brechas visibles en su web/reseñas.
3) 👤 PERFIL DEL DECISOR: enfoque probable y tono recomendado.
4) 💬 3 ICEBREAKERS + 2 PREGUNTAS DE DESCUBRIMIENTO para abrir conversación.
5) ⚠️ RIESGOS Y ALERTAS: posibles objeciones o proveedor actual.
Regla estricta: No inventes datos; si algo no es verificable, indícalo claramente.`,
              webPrompt: `Actúa como analista estratégico de cuentas para {{negocio}} ({{oferta}}).
Prepara un BRIEFING EN 5 BLOQUES para nuestra reunión / primer contacto con [NOMBRE DE EMPRESA] y [CARGO DEL CONTACTO] (puedes usar Deep Research o el texto que pego abajo):

1) 📊 RESUMEN EJECUTIVO (qué hacen y encaje con {{cliente}}).
2) 🎯 SEÑALES DE COMPRA reales observadas.
3) 👤 PERFIL Y PRIORIDADES probables del decisor.
4) 💬 3 ICEBREAKERS cortos (máx. 2 líneas c/u) + 2 preguntas de diagnóstico.
5) ⚠️ POSIBLES OBJECIONES Y ALERTAS.
Sé específico con datos reales. No inventes; si no tienes información de un punto, dilo claramente.`
            }
          ]
        },
        {
          id: "s35",
          type: "split",
          theme: "light",
          mins: 2,
          badge: "Calidad sobre Volumen",
          badgeColor: "coral",
          title: "Spam Masivo vs. Prospección Basada en Señales",
          subtitle: "Conectar herramientas no sirve para enviar 1,000 correos basura; sirve para investigar 10 veces más rápido y escribir mensajes que parezcan hechos a mano.",
          left: {
            accent: "bad",
            title: "🔴 Qué destruye tu tasa de respuesta",
            items: [
              "❌ 'Estimado/a, somos líderes en soluciones integrales...' (genérico).",
              "❌ Copiar el mismo texto a 200 contactos sin mirar qué hace su empresa.",
              "❌ Pedir una reunión de 45 minutos en el primer contacto en frío.",
              "❌ Automatizar envíos masivos sin filtro humano."
            ]
          },
          right: {
            accent: "good",
            title: "🟢 Fórmula de Mensaje en 4 Líneas (Alta Respuesta)",
            items: [
              "1. Señal real (Treg / Apollo / Web): 'Vi que abrieron su segunda sede...'",
              "2. Dolor concreto de {{cliente}}: 'En esa etapa suele pasar X...'",
              "3. Puente de valor ({{negocio}}): 'Ayudamos con {{diferenciador}}.'",
              "4. Micro-pregunta sin fricción: '¿Tiene sentido enviarte 2 ideas de cómo lo resolvimos?'"
            ]
          },
          callout: {
            color: "emerald",
            text: "Regla de prospección con IA: Usa Treg.to y Apollo para ahorrar 45 minutos de investigación por cuenta; invierte 2 minutos leyendo y aprobando cada mensaje antes de enviarlo."
          }
        },
        {
          id: "s36",
          type: "reto",
          theme: "light",
          mins: 3,
          badge: "Reto 05 · Cronometrado · +150 pts",
          badgeColor: "cyan",
          title: "Reto 05: De Datos Crudos a 3 Rompehielos Hiperpersonalizados",
          subtitle: "Transforma señales de prospección (estilo Treg.to / Apollo) en 3 mensajes cortos listos para LinkedIn, WhatsApp o Gmail.",
          durationSec: 180,
          tabs: [
            {
              id: "lote",
              label: "📦 Lote de 3 Prospectos (Gemini Web)",
              desc: "Copia este lote simulado de datos enriquecidos y ejecútalo en gemini.google.com adaptado a tu propio negocio.",
              prompt: `Actúa como especialista en prospección B2B consultiva para {{negocio}}.
Nuestra oferta: {{oferta}} | Diferenciador: {{diferenciador}} | Tono: {{tono}}.

Acabo de enriquecer estos 3 prospectos con señales reales (estilo Treg.to / Apollo):
1) Laura Méndez · Directora de Personas en TechPulse (65 empleados) · Señal: Publicaron ayer que vuelven a oficina 3 días por semana y están remodelando áreas comunes.
2) Carlos Ruiz · Fundador en Grupo Vértice (18 empleados) · Señal: En sus últimas vacantes buscan coordinar eventos y mejorar experiencia de clientes corporativos.
3) Andrea Gómez · Gerente de Operaciones en Clínica Horizonte · Señal: Reseñas recientes en Google Maps destacan buena atención médica pero mencionan esperas largas en recepción.

Tarea:
Para cada prospecto, crea una fila de tabla + mensaje listo para enviar (máximo 60 palabras cada uno) usando la fórmula de 4 líneas:
1) Señal observada → 2) Conexión con {{oferta}} → 3) Diferenciador → 4) Pregunta de baja fricción (sin pedir llamada larga todavía).`
            },
            {
              id: "agente",
              label: "⚡ Prompt Agéntico (Antigravity + MCP)",
              desc: "Si usas Google Antigravity con el servidor MCP de Treg.to o Apollo configurado, copia esta instrucción directa.",
              prompt: `Usa las herramientas MCP conectadas (Treg.to / Apollo) para investigar 3 empresas reales del perfil: {{cliente}}.
Para cada empresa:
1) Encuentra al tomador de decisión más relevante y 1 señal pública reciente (vacante, noticia, web o LinkedIn).
2) Evalúa del 1 al 10 qué tan bien encaja con {{oferta}} de {{negocio}}.
3) Redacta un borrador de mensaje inicial de máximo 60 palabras en tono {{tono}} (sin clichés ni spam). No envíes nada: preséntamelo en una tabla para aprobar.`
            }
          ],
          instructions: [
            "Elige la pestaña para Gemini Web (listo con datos de muestra) o para Antigravity + MCP.",
            "Pega el prompt en Gemini y analiza cómo conecta cada señal con TU negocio.",
            "Elige el mejor mensaje de los 3 y pule 1 frase con tu voz natural."
          ],
          checklist: [
            "Obtuve 3 mensajes personalizados conectados a una señal real (no genéricos).",
            "Cada mensaje tiene máximo ~60 palabras y cierra con una micro-pregunta amable.",
            "Entiendo cómo pasar de CSV/Web a conectores MCP (Treg.to / Apollo) cuando necesite escalar."
          ]
        },
        {
          id: "s37",
          type: "quiz",
          theme: "light",
          mins: 2,
          badge: "Quiz 04 · Prospección y Conectores",
          badgeColor: "emerald",
          title: "Comprueba lo aprendido · Bloque 05",
          questions: [
            {
              q: "¿Cuál es la principal ventaja práctica de Treg.to (treg.to) para un emprendedor o agente en Antigravity?",
              opts: [
                "Reemplaza por completo la necesidad de tener un producto.",
                "Actúa como un gateway único (tipo OpenRouter para tools) que da acceso a miles de endpoints de enriquecimiento, LinkedIn y SEO pago por llamada o BYOK sin pagar múltiples suscripciones SaaS.",
                "Envía 10,000 mensajes automáticos sin que tú los leas.",
                "Solo funciona para programar videojuegos."
              ],
              correct: 1,
              explain: "Treg.to unifica miles de herramientas de datos bajo una sola URL/token MCP, pagando por uso o conectando tus propias API keys (BYOK)."
            },
            {
              q: "¿Qué hace el estándar MCP (Model Context Protocol) dentro de entornos como Google Antigravity?",
              opts: [
                "Permite que Gemini se conecte de forma estándar y segura a herramientas externas como Treg.to, Apollo, CRM o n8n.",
                "Comprime imágenes de Instagram.",
                "Bloquea el acceso a Google Workspace.",
                "Sirve únicamente para editar hojas de cálculo sin conexión."
              ],
              correct: 0,
              explain: "MCP es el puente abierto que expone herramientas y datos reales (búsqueda de leads, enriquecimiento, CRM) directamente al asistente."
            },
            {
              q: "Si consigues 50 contactos desde Apollo.io o Treg.to, ¿qué hace que tu primer mensaje obtenga respuestas reales?",
              opts: [
                "Mandar un folleto de 10 páginas adjunto en el primer contacto.",
                "Abrir con una señal específica de esa empresa y cerrar con una pregunta breve de baja fricción.",
                "Escribir el asunto todo en mayúsculas con signos de exclamación.",
                "Enviar exactamente el mismo texto a todos para ahorrar tiempo."
              ],
              correct: 1,
              explain: "Las señales reales demuestran interés genuino y las preguntas simples facilitan que un decisor ocupado responda."
            }
          ]
        }
      ]
    },
    {
      id: "b06",
      code: "06",
      title: "Skills y Automatización",
      timeRange: "74–90 min",
      color: "#7C3AED",
      slides: [
        {
          id: "s38",
          type: "section",
          theme: "dark",
          mins: 1,
          badge: "Bloque 06 · Min 74–90",
          num: "06",
          title: "Skills (SKILL.md), Automatización y Tu Asistente Final",
          subtitle: "Olvida los chats aislados donde repites todo cada lunes. Crea Skills modulares que puedes invocar con @, apilar entre sí y conectar a tareas automáticas.",
          bullets: [
            "⚡ Estándar SKILL.md + Skill Stacking con @",
            "⏰ Acciones Programadas en Gemini y Workspace Studio",
            "🛠️ Constructor de Tu SKILL.md Personalizado",
            "📦 Descarga de tu Skill, Plantilla Excel y Guías"
          ]
        },
        {
          id: "s39",
          type: "comparison",
          theme: "light",
          mins: 2,
          badge: "Mejores Prácticas 2026",
          badgeColor: "violet",
          title: "Por qué usamos Skills (SKILL.md) y cómo activarlos hoy",
          subtitle: "Google evolucionó los antiguos asistentes cerrados hacia Skills modulares basados en texto plano (SKILL.md) que funcionan en línea con @ o automáticamente según contexto. Elige cómo usarlos en tu cuenta:",
          options: [
            {
              id: "skill",
              icon: "⚡",
              name: "Skills en Gemini y Workspace",
              tag: "Estándar modular en línea (@)",
              summary: "Habilidades reutilizables con nombre corto y descripción disparadora. Las invocas con @ dentro de cualquier chat, Gmail, Docs o Workspace Studio — ¡y puedes apilar varias en un mismo pedido!",
              when: "Recomendado como flujo principal: funciona en chats abiertos sin encerrarte en una sola ventana.",
              pros: [
                "No cambias de chat: escribes @cotizador-comercial + @voz-de-marca en el mismo hilo.",
                "Se activan automáticamente cuando Gemini lee la 'description' de tu Skill.",
                "Fáciles de compartir y estandarizar con tu equipo o socios."
              ],
              howToCreate: [
                "1. Abre la sección de Skills / Habilidades en Gemini o Workspace Studio.",
                "2. Elige nombre en minúsculas con guiones (ej. cotizador-comercial) y 1 oración clara de cuándo activarse.",
                "3. Pega el contenido SKILL.md generado en la diapositiva #s42 y adjunta tus documentos clave de Drive."
              ]
            },
            {
              id: "antigravity",
              icon: "🚀",
              name: "Paquete SKILL.md en Antigravity",
              tag: "Agente conectado + MCP",
              summary: "Guardas una carpeta con un archivo SKILL.md y documentos de apoyo. El agente lo lee bajo demanda y lo combina con conectores MCP (Treg.to, Apollo, n8n, Calendar) y /automation.",
              when: "Ideal si usas Google Antigravity para prospección real, CRMs o flujos automáticos recurrentes.",
              pros: [
                "Portabilidad 100% abierta en texto plano (Markdown) sin quedar atado a una interfaz.",
                "Soporta divulgación progresiva: instrucciones ligeras + carpeta references/ con catálogos.",
                "Puede ejecutarse de forma programada (/automation) leyendo tus clientes o web."
              ],
              howToCreate: [
                "1. Crea la carpeta .agents/skills/mi-habilidad/ en tu proyecto de Antigravity.",
                "2. Descarga e incluye ahí el archivo SKILL.md generado en #s42.",
                "3. Invócalo por nombre o pídele al agente automatizarlo cada lunes con /automation."
              ]
            },
            {
              id: "doc",
              icon: "📄",
              name: "Skill en Documento Maestro Drive",
              tag: "100% Universal en cualquier cuenta",
              summary: "Guardas exactamente la misma estructura SKILL.md dentro de un Google Doc en tu Drive y lo invocas con @Google Drive (o lo adjuntas con '+') en cualquier cuenta gratuita.",
              when: "Funciona hoy en el 100% de cuentas personales o de empresa, sin depender de activaciones graduales.",
              pros: [
                "Disponibilidad inmediata hoy sin configurar nada extra.",
                "Editas tus precios o reglas en un Google Doc normal y todo tu equipo ve el cambio.",
                "Migración instantánea a Gemini Skills o Antigravity en 1 copia-pega."
              ],
              howToCreate: [
                "1. Crea un Google Doc titulado 'SKILL - {{negocio}}' en tu Google Drive.",
                "2. Pega dentro el bloque SKILL.md completo de la diapositiva #s42.",
                "3. En gemini.google.com escribe '@Google Drive usa SKILL - {{negocio}} para...' o adjúntalo con '+'."
              ]
            }
          ],
          callout: {
            color: "violet",
            text: "Ventaja clave del formato abierto: Construyes tu SKILL.md UNA sola vez en el laboratorio (#s42) y te funciona idéntico en Gemini Skills, Workspace Studio, Antigravity y Google Drive."
          }
        },
        {
          id: "s40",
          type: "steps",
          theme: "light",
          mins: 2,
          badge: "Anatomía SKILL.md · 2026",
          badgeColor: "primary",
          title: "Las 4 Reglas de Oro para Escribir y Apilar Skills (SKILL.md)",
          subtitle: "Un Skill funciona mejor cuando es corto, específico y combinable. Olvida los mega-prompts de 5 páginas que intentan hacerlo todo a la vez.",
          steps: [
            {
              num: "01",
              title: "Encabezado YAML (name + description)",
              desc: "Al inicio del SKILL.md van dos líneas clave: 'name' en minúsculas con guiones y una 'description' de 1 oración exacta explicando CUÁNDO activarse.",
              example: "description: Usa este skill cuando un cliente pida cotización o precios."
            },
            {
              num: "02",
              title: "Modularidad y Skill Stacking",
              desc: "Separa habilidades pequeñas para combinarlas al vuelo en 1 solo pedido (ej. @voz-de-marca + @cotizador-comercial + @cierre-y-objeciones).",
              example: "1 Skill = 1 trabajo claro → Apílalos según necesites."
            },
            {
              num: "03",
              title: "Divulgación Progresiva y Archivos Limpios",
              desc: "Deja solo reglas únicas y formato de entrega en SKILL.md. Pon tu catálogo o FAQ aparte en PDF/Markdown limpio o NotebookLM para ahorrar contexto.",
              example: "Cero instrucciones obvias; solo tus criterios reales."
            },
            {
              num: "04",
              title: "Preguntas Previas + Filtro 20% Humano",
              desc: "Incluye siempre una regla de validación: 'Si falta algún dato clave, hazme máx. 3 preguntas breves' y marca cifras finales con [CONFIRMAR].",
              example: "Previene alucinaciones de precios, stock o fechas."
            }
          ]
        },
        {
          id: "s41",
          type: "automationStudio",
          theme: "light",
          mins: 3,
          badge: "Automatización de Tareas · +150 pts",
          badgeColor: "cyan",
          title: "Automatiza Tareas con Gemini: De Reactivo a Proactivo",
          subtitle: "No dependas de acordarte de pedir las cosas el lunes. Combina tus @Skills con Acciones Programadas en Gemini, Workspace Studio o Antigravity.",
          engines: [
            {
              id: "scheduled",
              icon: "⏰",
              label: "⏰ Acciones Programadas (Gemini)",
              badge: "Proactivo en gemini.google.com",
              desc: "En el menú de Gemini ('Programadas'), conviertes cualquier prompt en una rutina recurrente (diaria, semanal o mensual) conectada a @Gmail, @Google Calendar o búsqueda web."
            },
            {
              id: "studio",
              icon: "🔄",
              label: "🔄 Google Workspace Studio (Flows)",
              badge: "Flujos sin código en Workspace",
              desc: "Automatiza por eventos ('Cuando llegue un correo / cambie un Sheet → Gemini ejecuta mi Skill → crea borrador en Docs o avisa en Chat') sin programar scripts."
            },
            {
              id: "agentic",
              icon: "🤖",
              label: "🤖 Antigravity /automation + n8n",
              badge: "Agentes con MCP y Skills locales",
              desc: "Ejecuta tareas programadas en segundo plano leyendo tus SKILL.md y llamando conectores MCP como Treg.to, Apollo.io, Notion o n8n."
            }
          ],
          recipes: [
            {
              id: "briefing",
              icon: "☀️",
              title: "Briefing Diario y Agenda",
              tag: "Lun–Vie 8:00 a.m.",
              summary: "Cruza tus reuniones de hoy en Calendar con correos recientes sin responder.",
              cadence: "Lunes a Viernes · 8:00 a.m.",
              flow: ["⏰ 8:00 a.m. (Reloj)", "🧠 @asistente-operativo", "📅 @Calendar + @Gmail", "🛡️ Priorizas tus 3 metas"],
              steps: {
                scheduled: [
                  "1. En gemini.google.com pega el prompt de la derecha con @Google Calendar y @Gmail.",
                  "2. Pídele en el chat o en 'Programadas': 'Programa esta acción todos los lunes a viernes a las 8:00 a.m.'",
                  "3. Recibe el resumen listo antes de tomar tu café y define tus 3 prioridades."
                ],
                studio: [
                  "1. Abre Google Workspace Studio y crea un Flow disparado por horario ('Cada mañana hábil 8:00 a.m.').",
                  "2. Agrega un paso 'Ask Gemini' cargando tus eventos del día + bandeja de entrada.",
                  "3. Envía el resumen ejecutivo a tu Google Chat personal o borrador en Docs."
                ],
                agentic: [
                  "1. En Antigravity ejecuta /automation y elige frecuencia 'Daily · 8:00 AM'.",
                  "2. Vincula tu Skill '.agents/skills/asistente-operativo/SKILL.md' y permisos de Calendar/Gmail.",
                  "3. Haz 1 ejecución de prueba en vivo y actívala en el panel de Automations."
                ]
              },
              prompts: {
                scheduled: `Programa esta tarea recurrente de lunes a viernes a las 8:00 a.m. para {{negocio}}:
Usa @Google Calendar y @Gmail para entregarme un Briefing Ejecutivo Matutino:
1) Lista de reuniones de hoy con hora, participantes y el último correo o propuesta relacionada con cada uno.
2) Correos de clientes de {{cliente}} recibidos en las últimas 24h que siguen sin respuesta.
3) Top 3 acciones urgentes ordenadas por impacto comercial (tono {{tono}}).`,
                studio: `Flujo en Google Workspace Studio (Trigger: Lunes a Viernes 8:00 a.m.):
Paso 1 · Recopilar eventos de hoy en Google Calendar + hilos recientes no leídos de Gmail.
Paso 2 · Ejecutar Skill @asistente-operativo para {{negocio}}:
- Extraer clientes prioritarios y posibles cruces de horario.
- Redactar borradores iniciales de respuesta para las 2 consultas más urgentes (marcar precios con [CONFIRMAR]).
Paso 3 · Enviar resumen a mi Google Chat / correo interno sin enviar nada externo automáticamente.`,
                agentic: `# Configuración /automation en Antigravity (Lunes a Viernes 8:00 a.m.)
Usa @asistente-operativo para preparar el briefing diario de {{negocio}} ({{oferta}}):
1) Consulta calendario del día y correos/pendientes abiertos.
2) Resume cada reunión con contexto clave y posibles objeciones.
3) Guarda el reporte en /briefings/hoy.md con borrador de respuestas listo para mi aprobación.`
              }
            },
            {
              id: "cotizaciones",
              icon: "📥",
              title: "Pre-Cotizador de Solicitudes",
              tag: "Por evento (Al recibir lead)",
              summary: "Cuando entra un correo o formulario pidiendo precio, prepara el borrador en 3 opciones sin enviarlo aún.",
              cadence: "Cada vez que entra solicitud nueva",
              flow: ["✉️ Nuevo correo / Form", "🧠 @cotizador + @voz-de-marca", "📄 Borrador en Gmail / Docs", "🛡️ Validas cifras y envías"],
              steps: {
                scheduled: [
                  "1. Programa un barrido automático diario (12:30 p.m. y 5:30 p.m.) sobre tu etiqueta de cotizaciones.",
                  "2. Pide a Gemini clasificar las nuevas solicitudes y armar las 3 opciones base.",
                  "3. Revisa cifras, quita los [CONFIRMAR] y envía cada respuesta."
                ],
                studio: [
                  "1. Trigger en Workspace Studio: 'Cuando llegue un correo a Gmail con palabra cotización/precio/propuesta' (o nuevo envío en Google Forms/Sheets).",
                  "2. Paso IA con Gemini + tu Skill @cotizador-comercial y tu PDF de tarifario en Drive.",
                  "3. Acción final: 'Crear borrador en Gmail' (nunca auto-enviar) con etiqueta 'Revisar y Enviar'."
                ],
                agentic: [
                  "1. En Antigravity + n8n MCP, conecta el webhook de tu formulario o correo de ventas.",
                  "2. Combina @cotizador-comercial + @voz-de-marca con tus archivos en Drive/references.",
                  "3. Genera la propuesta de 3 opciones en borrador y notifica en Slack/Chat/Telegram para aprobación."
                ]
              },
              prompts: {
                scheduled: `Revisa @Gmail todos los días hábiles a las 12:30 p.m. buscando correos nuevos con intención de compra (palabras: precio, cotizar, propuesta, presupuesto) para {{negocio}}.
Aplica @cotizador-comercial + @voz-de-marca:
1) Resume qué necesita el prospecto y nivel de urgencia.
2) Propón esquema en 3 niveles (Esencial / Recomendada / Plus) con [PRECIO] a confirmar.
3) Redacta borrador de respuesta breve (máx. 6 líneas, tono {{tono}}) con 2 preguntas de calificación.`,
                studio: `Flujo en Google Workspace Studio (Trigger: Nuevo correo con etiqueta "Cotizaciones" o nueva fila en Google Forms/Sheets):
Paso 1 · Leer contenido de la solicitud del cliente.
Paso 2 · Ejecutar @cotizador-comercial + @Google Drive (Tarifario oficial de {{negocio}}):
- Construir borrador de propuesta de 3 opciones destacando {{diferenciador}}.
- Marcar con [CONFIRMAR] cualquier fecha, disponibilidad o descuento.
Paso 3 · Guardar como Borrador en Gmail y agregar fila en nuestra hoja Pipeline Comercial.`,
                agentic: `# Flujo Agéntico (Antigravity + n8n MCP + Skills)
Al entrar un lead nuevo en nuestro formulario para {{negocio}} ({{oferta}}):
1) Invoca @prospector-comercial (opcional: valida dominio/web vía Treg.to si es B2B).
2) Invoca @cotizador-comercial + @voz-de-marca para redactar propuesta de 3 niveles + mensaje WhatsApp.
3) Inserta el registro en Notion / HubSpot / Sheets con estado "Borrador listo para aprobación humana".`
              }
            },
            {
              id: "pipeline",
              icon: "📊",
              title: "Radar Lunes de Pipeline y Seguimiento",
              tag: "Lunes 8:30 a.m.",
              summary: "Revisa tu plantilla de Sheets cada lunes y redacta los toques de rescate (>7 días sin contacto).",
              cadence: "Todos los Lunes · 8:30 a.m.",
              flow: ["📊 Pipeline Comercial", "🧠 @cierre-y-objeciones", "✉️ Secuencia Día 3–7–14", "🛡️ Aprobación 1 a 1"],
              steps: {
                scheduled: [
                  "1. Guarda nuestra plantilla pipeline_ventas_gemini.xlsx convertida a Google Sheets.",
                  "2. Programa cada lunes a las 8:30 a.m. que Gemini revise tus tratos pendientes con @Google Drive.",
                  "3. Copia y personaliza los 3 mensajes de rescate prioritarios de la semana."
                ],
                studio: [
                  "1. Trigger semanal en Workspace Studio: 'Cada lunes a las 8:30 a.m.'",
                  "2. Lee la hoja 'Pipeline Comercial' de Google Sheets y filtra filas con Días sin Contacto >= 7.",
                  "3. Usa @cierre-y-objeciones para crear borradores de seguimiento en Gmail sin sonar insistente."
                ],
                agentic: [
                  "1. Usa /automation semanal en Antigravity conectado a tu CRM / HubSpot / Sheets.",
                  "2. Apila @cierre-y-objeciones + @voz-de-marca para preparar los mensajes según etapa del embudo.",
                  "3. Entrega el reporte semanal de forecast ponderado + borradores listos."
                ]
              },
              prompts: {
                scheduled: `Todos los lunes a las 8:30 a.m., consulta @Google Drive ('Pipeline Comercial' de {{negocio}}):
1) Detecta todos los tratos activos que llevan >= 7 días sin contacto ordenados por Valor Estimado.
2) Aplica @cierre-y-objeciones + @voz-de-marca y redacta 1 mensaje de seguimiento diferente para cada uno (máx. 55 palabras, aportando valor y sin decir 'solo paso a saludar').
3) Calcula cuánto dinero real está en juego esta semana para enfocar mi agenda.`,
                studio: `Flujo en Google Workspace Studio (Trigger: Lunes 8:30 a.m.):
Paso 1 · Leer filas activas de Google Sheets ('Pipeline Comercial') con Días sin Contacto >= 7.
Paso 2 · Ejecutar @cierre-y-objeciones para redactar toque de seguimiento según Etapa del Funnel (Día 3, Día 7 o Día 14).
Paso 3 · Crear borradores en Gmail + resumen semanal en Google Chat con el Top 3 de prioridad Alta.`,
                agentic: `# Automatización Semanal de Pipeline (Lunes 8:30 a.m.)
Ejecuta @cierre-y-objeciones + @prospector-comercial sobre los tratos estancados de {{negocio}}:
1) Revisa tratos >7 días sin actividad en Sheets/CRM.
2) Si es cuenta B2B, busca 1 señal pública fresca vía Treg.to para reactivar la charla con un pretexto genuino.
3) Redacta mensaje de seguimiento de máx. 60 palabras en tono {{tono}} para mi revisión final.`
              }
            },
            {
              id: "contenido",
              icon: "📣",
              title: "Fábrica Semanal de Contenido",
              tag: "Viernes 3:00 p.m.",
              summary: "Cada viernes toma 1 duda o correo real de la semana y genera tu paquete 1 Semilla → 5 Piezas.",
              cadence: "Todos los Viernes · 3:00 p.m.",
              flow: ["🌱 Duda / Caso semanal", "🧠 @voz-de-marca", "📝 Borrador en Docs", "🛡️ Tú grabas y publicas"],
              steps: {
                scheduled: [
                  "1. Programa un recordatorio inteligente en Gemini cada viernes a las 3:00 p.m.",
                  "2. Haz que Gemini busque en @Gmail las 3 preguntas más repetidas de clientes esa semana.",
                  "3. Recibe el carrusel, guion de Reel de 30s y mensaje de WhatsApp listos para el lunes."
                ],
                studio: [
                  "1. Trigger en Workspace Studio: 'Viernes 3:00 p.m.' o cuando guardas una nota en una carpeta de Drive 'Semillas'.",
                  "2. Gemini ejecuta @voz-de-marca con el método '1 Semilla → 5 Piezas' (cero clichés).",
                  "3. Crea automáticamente un Google Doc semanal titulado 'Contenido Semana Siguiente'."
                ],
                agentic: [
                  "1. En Antigravity /automation extrae las preguntas frecuentes o tendencias recientes del sector.",
                  "2. Invoca @voz-de-marca leyendo tu historial de mejores publicaciones en references/.",
                  "3. Genera un Markdown listo para aprobar en 10 minutos el viernes por la tarde."
                ]
              },
              prompts: {
                scheduled: `Todos los viernes a las 3:00 p.m., revisa @Gmail las consultas más frecuentes de clientes de {{negocio}} esta semana (sin exponer datos privados).
Elige la mejor "Semilla Real" y aplica @voz-de-marca para crear:
1) 1 Guion de Reel (30 seg) con gancho en los primeros 3 seg.
2) 1 Carrusel educativo de 5 láminas para {{cliente}}.
3) 1 Mensaje corto para difusión de WhatsApp.
Reglas: Tono {{tono}}, cero palabras cliché de IA.`,
                studio: `Flujo en Google Workspace Studio (Trigger: Nuevo Google Doc en carpeta "Semillas Marketing" o Viernes 3:00 p.m.):
Paso 1 · Leer notas breves del archivo semilla de la semana.
Paso 2 · Ejecutar Skill @voz-de-marca para {{negocio}} ({{oferta}}, diferenciador: {{diferenciador}}).
Paso 3 · Generar Google Doc formateado con Guion Reel, Carrusel de 5 láminas, Post LinkedIn y WhatsApp + aviso en Chat.`,
                agentic: `# Automatización Semanal de Contenidos (Viernes 3:00 p.m.)
Usa @voz-de-marca y transforma las semillas de la semana de {{negocio}} en 4 piezas listas para publicar:
- Aplica el filtro anti-robot (sin frases cliché y máx. 2 emojis).
- Guarda la propuesta en /marketing/semana_proxima.md con checklist de grabación.`
              }
            }
          ]
        },
        {
          id: "s42",
          type: "assistantForge",
          theme: "light",
          mins: 5,
          badge: "Entregable Final · SKILL.md · +250 pts",
          badgeColor: "emerald",
          title: "Construye tu SKILL.md Personalizado y Flujo Automatizado",
          subtitle: "Diseña tu primer Skill reutilizable con estándar 2026 (frontmatter name + description + reglas), apílalo con otra habilidad y conecta su automatización semanal.",
          templates: {
            ventas: {
              label: "💼 Cotizador y Propuestas",
              defaultName: "cotizador-comercial",
              triggerDesc: "Usa este skill cuando un cliente pida precio, cotización o propuesta comercial para {{negocio}} y necesites estructurar 3 opciones sin regalar margen.",
              stackSuggestions: ["@voz-de-marca", "@analista-cuentas", "@cierre-y-objeciones"],
              role: "Eres el Especialista en Propuestas Consultivas de {{negocio}}. Conviertes mensajes informales de prospectos en propuestas claras de 3 niveles que destacan {{diferenciador}} frente a alternativas genéricas.",
              rules: "1) Nunca inventes tarifas, disponibilidad ni descuentos; usa únicamente nuestro tarifario y marca cifras finales con [CONFIRMAR].\n2) Si falta alcance, cantidad o fecha objetivo, haz máximo 3 preguntas breves antes de redactar la versión final.\n3) Estructura siempre 3 opciones (Esencial / Recomendada / Plus) destacando valor y ROI.",
              outputFormat: "1) Resumen empático: 'Lo que entendimos de tu necesidad' (máx. 4 líneas).\n2) Tabla comparativa: Esencial | Recomendada ⭐ | Plus.\n3) Mensaje breve de WhatsApp (máx. 4 líneas) con llamado a la acción simple.",
              driveDocs: "Tarifario_Oficial_2026.pdf · Portafolio_Servicios.gdoc",
              automationRule: "Workspace Studio: crear borrador en Gmail cuando entre correo con palabra 'cotización' o 'propuesta'",
              triggerStep: "Cada vez que entra una solicitud de cotización por WhatsApp, correo o formulario.",
              reviewStep: "Validar precios exactos, quitar marcas [CONFIRMAR] y personalizar el saludo (2 min)."
            },
            objeciones: {
              label: "🛡️ Coach Objeciones LAER",
              defaultName: "cierre-y-objeciones",
              triggerDesc: "Usa este skill cuando un prospecto responda 'está caro', 'déjame pensarlo', mencione otro proveedor o necesites planear seguimiento Día 1–3–7–14.",
              stackSuggestions: ["@voz-de-marca", "@cotizador-comercial", "@analista-cuentas"],
              role: "Eres el Coach de Ventas Consultivas de {{negocio}} experto en el método LAER (Listen, Acknowledge, Explore, Respond) y seguimiento por secuencias.",
              rules: "1) Nunca critiques a la competencia ni ofrezcas descuentos directos en el primer turno.\n2) Valida primero, explora para aislar si el freno es presupuesto, urgencia o confianza, y responde con opciones de alcance o facilidades.\n3) Si pido roleplay, evalúame al cierre con Scorecard 1–10 (Qué hice bien, Qué mejorar y Script sugerido). Tono {{tono}}.",
              outputFormat: "1) Diagnóstico breve de la objeción.\n2) 2 respuestas listas para WhatsApp/correo (máx. 60 palabras) + 2 asuntos A/B.\n3) Pregunta siguiente paso para no perder el hilo.",
              driveDocs: "FAQ_Objeciones.gdoc · Politicas_Pago_Y_Garantia.pdf",
              automationRule: "Acción Programada lunes 8:30 a.m.: revisar Pipeline en Sheets (>7 días sin contacto) y sugerir toques",
              triggerStep: "Cuando un cliente duda del precio/tiempo o lleva >48 horas sin responder.",
              reviewStep: "Elegir la respuesta más empática según la relación previa con ese cliente."
            },
            marketing: {
              label: "📣 Voz de Marca y Contenido",
              defaultName: "voz-de-marca",
              triggerDesc: "Usa este skill siempre que redactes o pulas posts, Reels, carruseles, boletines o respuestas comerciales externas de {{negocio}} para mantener un tono humano y cero clichés.",
              stackSuggestions: ["@cotizador-comercial", "@prospector-comercial"],
              role: "Eres el Director Editorial y Guardián de Voz de Marca de {{negocio}}. Transformas experiencias reales del día a día en contenido útil para {{cliente}} sin sonar artificial.",
              rules: "1) Tono obligatorio: {{tono}}.\n2) PROHIBIDO usar clichés de IA ('en el mundo actual', 'revolucionario', 'lleva al siguiente nivel', 'soluciones integrales', 'sumérgete').\n3) Frases claras (<18 palabras), máximo 2 emojis por pieza y gancho específico en los primeros 3 segundos.",
              outputFormat: "Según el pedido (método 1 Semilla → 5 Piezas):\n1) Guion Reel 30s (Gancho + 3 ideas + CTA).\n2) Carrusel de 5 láminas.\n3) Mensaje directo para Estados/WhatsApp.",
              driveDocs: "Guia_Voz_Marca.gdoc · Mejores_Posts_Reales.md",
              automationRule: "Acción Programada viernes 3:00 p.m.: revisar dudas frecuentes en Gmail y redactar paquete de contenido semanal",
              triggerStep: "Viernes 15 minutos con 1 duda real de cliente, o apilado como filtro de estilo en cualquier prompt.",
              reviewStep: "Ajustar el gancho inicial con mi lenguaje cotidiano y agregar foto o caso real."
            },
            workspace: {
              label: "📬 Copiloto Agenda y Gmail",
              defaultName: "asistente-operativo",
              triggerDesc: "Usa este skill para generar briefings matutinos cruzando Calendar y Gmail, resumir hilos largos de clientes o estructurar tablas en Sheets.",
              stackSuggestions: ["@voz-de-marca", "@cotizador-comercial"],
              role: "Eres el Copiloto Ejecutivo de Operaciones de {{negocio}}. Conviertes hilos desordenados de Gmail, reuniones de Calendar y notas de Drive en resúmenes accionables.",
              rules: "1) Destaca cualquier cambio de fecha, cantidad, presupuesto o requisito especial.\n2) Señala con ⚠️ datos faltantes, contradicciones entre documentos o cruces de agenda.\n3) No asumas compromisos no escritos; mantén tono {{tono}}.",
              outputFormat: "1) Resumen ejecutivo en 3 viñetas.\n2) Tabla de pendientes (Acción | Responsable | Fecha límite).\n3) Borrador de respuesta listo para revisar antes de enviar.",
              driveDocs: "Politicas_Entrega.pdf · Pipeline_Comercial.xlsx",
              automationRule: "Acción Programada Lun–Vie 8:00 a.m.: resumen diario de @Google Calendar + @Gmail sin responder",
              triggerStep: "Cada mañana a las 8:00 a.m. y después de cada reunión importante con clientes.",
              reviewStep: "Confirmar cantidades, plazos prometidos y prioridades reales del día."
            },
            prospeccion: {
              label: "🎯 Prospector B2B + Treg",
              defaultName: "prospector-comercial",
              triggerDesc: "Usa este skill cuando investigues cuentas objetivo (Deep Research, Treg.to o Apollo), armes briefings en 5 bloques o redactes rompehielos personalizados.",
              stackSuggestions: ["@voz-de-marca", "@cierre-y-objeciones"],
              role: "Eres el Analista de Inteligencia Comercial de {{negocio}}. Transformas señales públicas y datos B2B (Treg.to, Apollo.io, Web/Maps) en briefings de 5 bloques y mensajes relevantes para {{cliente}}.",
              rules: "1) Cero spam genérico: no inventes noticias ni señales que no existan en los datos fuente.\n2) Si usas conectores MCP (Treg/Apollo), presenta primero los perfiles candidatos y confirma créditos antes de enriquecer en lote.\n3) Redacta en 4 líneas (Señal → Dolor → Diferenciador → Micro-pregunta) en tono {{tono}}.",
              outputFormat: "1) Briefing 5D (Resumen, Señales, Decisor, 3 Icebreakers + 2 Preguntas, Riesgos) o Tabla Lead Scoring 1–100.\n2) Mensaje inicial (máx. 60 palabras) + sugerencia de toque Día 3.",
              driveDocs: "Perfil_Cliente_Ideal.gdoc · Casos_Exito.pdf",
              automationRule: "Antigravity /automation + MCP Treg.to martes 9:30 a.m.: enriquecer 5 cuentas y preparar borradores",
              triggerStep: "Cada martes 20 minutos para detectar 5–10 cuentas activas y generar mensajes basados en señales.",
              reviewStep: "Verificar la señal real en LinkedIn/web del prospecto y aprobar manualmente cada envío."
            }
          }
        },
        {
          id: "s43",
          type: "quiz",
          theme: "light",
          mins: 1,
          badge: "Quiz Final Integrador",
          badgeColor: "emerald",
          title: "Comprueba tu Dominio · Skills y Automatización",
          questions: [
            {
              q: "En el estándar moderno de Skills (SKILL.md), ¿para qué sirve escribir bien la línea 'description' al principio del archivo?",
              opts: [
                "Es solo decoración para programadores.",
                "Permite que Gemini sepa exactamente CUÁNDO activar el Skill automáticamente o al invocarlo con @.",
                "Borra tus otros archivos de Google Drive.",
                "Limita la respuesta a 10 palabras siempre."
              ],
              correct: 1,
              explain: "Una 'description' de 1 oración precisa actúa como disparador inteligente para que Gemini cargue la habilidad correcta en el momento exacto."
            },
            {
              q: "¿Qué significa hacer 'Skill Stacking' (apilar habilidades) en un mismo pedido a Gemini?",
              opts: [
                "Combinar dos o más Skills modulares en línea (ej. @voz-de-marca + @cotizador-comercial) en lugar de crear un prompt gigante rígido.",
                "Copiar el mismo mensaje diez veces seguidas.",
                "Pagar diez suscripciones mensuales distintas.",
                "Usar la IA únicamente para diseñar diapositivas."
              ],
              correct: 0,
              explain: "Mantener Skills cortos y especializados te permite mezclar estilo, estrategia comercial y formato en segundos según cada caso."
            },
            {
              q: "¿Cuándo conviene usar Acciones Programadas de Gemini frente a Google Workspace Studio?",
              opts: [
                "Son exactamente lo mismo y no sirven en negocios.",
                "Acciones Programadas automatizan prompts por horario para ti (ej. briefing 8:00 a.m.); Workspace Studio automatiza flujos entre apps por eventos (ej. al llegar un correo).",
                "Solo funcionan si sabes programar en Java y Python.",
                "Ninguna puede leer información de Gmail ni Calendar."
              ],
              correct: 1,
              explain: "Acciones Programadas ejecutan tu resumen o análisis según reloj; Workspace Studio reacciona a disparadores entre Gmail, Docs, Sheets y Chat."
            },
            {
              q: "Incluso usando Skills y automatizaciones programadas, ¿qué porcentaje humano SIEMPRE conservas antes de enviar o cobrar?",
              opts: [
                "El 0%: dejar que envíe cotizaciones y precios automáticamente a ciegas.",
                "El 20%: aprobar borradores, verificar precios/fechas y aportar el criterio y cercanía humana.",
                "El 95%: no confiar en ningún borrador.",
                "Solo revisar una vez al año."
              ],
              correct: 1,
              explain: "La automatización prepara borradores y resúmenes por ti (el 80% operativo); tú siempre validas cifras, promesas y aprobaciones finales (20% clave)."
            }
          ]
        },
        {
          id: "s44",
          type: "summaryDashboard",
          theme: "light",
          mins: 1,
          badge: "Tu Resultado Práctico",
          badgeColor: "primary",
          title: "Tu Tablero de Logros y Kit SKILL.md Listo para Usar",
          subtitle: "Aquí tienes el resumen vivo de todo lo que configuraste en estos 90 minutos. Descarga tu archivo SKILL.md, tu Kit completo en Markdown o imprímelo como PDF."
        },
        {
          id: "s45",
          type: "closing",
          theme: "dark",
          mins: 1,
          badge: "Caja de Herramientas + Plan 7 Días",
          title: "Tu Próximo Paso Empieza Mañana en 15 Minutos",
          subtitle: "Descarga las 6 guías prácticas + la plantilla Excel de Pipeline de Ventas (.xlsx) y deja funcionando tu primer Skill y tu primera automatización esta semana.",
          plan7Days: [
            { day: "Día 1 (15 min)", task: "Guarda tu archivo SKILL.md (#s42) en Gemini Skills, Antigravity o Doc Maestro de Drive y pruébalo con 1 cliente real." },
            { day: "Día 3 (15 min)", task: "Importa pipeline_ventas_gemini.xlsx a Google Sheets (o prueba Skill Stacking @voz-de-marca + @cotizador) con un caso de esta semana." },
            { day: "Día 5 (10 min)", task: "Activa tu primera Acción Programada en Gemini (#s41): por ejemplo, tu briefing semanal o tu resumen del lunes a las 8:30 a.m." }
          ]
        }
      ]
    }
  ],

  downloadableTemplates: [
    {
      id: "guia-rctf-ventas",
      icon: "💼",
      title: "1. Guía R-C-T-F, Ventas LAER y Secuencias",
      desc: "Fórmula completa, propuesta en 3 opciones, manejo de objeciones LAER y secuencia Día 1–3–7–14.",
      filename: "01_guia_rctf_y_ventas_gemini.md",
      content: `# 1. Guía R-C-T-F, Propuestas y Objeciones LAER — Gemini para Emprendedores

## Fórmula R-C-T-F (+ Restricciones)
- **R · Rol:** Actúa como [experto comercial / redactor / asistente operativo]...
- **C · Contexto:** Mi negocio es [Nombre], vendemos [Oferta] a [Cliente ideal]. Diferenciador: [Diferenciador].
- **T · Tarea:** Redacta / resume / transforma...
- **F · Formato:** Tabla comparativa / 3 opciones / WhatsApp de máx. 5 líneas.
- **+ Restricciones:** Tono [cercano/profesional], máximo [X] palabras, prohibido usar clichés.

## Prompt de Propuesta Comercial de 3 Opciones
\`\`\`text
Actúa como director comercial experto en ventas consultivas para [MI NEGOCIO].
Contexto: Vendemos [OFERTA] a [CLIENTE IDEAL]. Nuestro diferenciador es [DIFERENCIADOR].
Solicitud actual: [PEGAR MENSAJE DEL CLIENTE].

Redacta una propuesta en 5 bloques:
1) Lo que entendimos de tu necesidad (máx 4 líneas).
2) Tabla comparativa con 3 opciones: Esencial | Recomendada (⭐) | Plus.
3) Nuestra garantía y diferenciador.
4) Condiciones y plazos ([PLAZO]).
5) Mensaje breve para enviar por WhatsApp invitando a definir esta semana.

Si falta algún dato clave antes de cerrar el borrador, hazme hasta 3 preguntas rápidas.
\`\`\`

## Secuencia Comercial de 4 Toques (Día 1 · Día 3 · Día 7 · Día 14)
\`\`\`text
Actúa como copywriter B2B para [MI NEGOCIO] ([OFERTA], diferenciador: [DIFERENCIADOR]).
Crea una secuencia de 4 correos AIDA para [CLIENTE IDEAL] espaciados en Día 1, Día 3, Día 7 y Día 14 (cierre elegante de puerta abierta). Máximo 120 palabras por correo y 2 asuntos A/B para cada uno.
\`\`\`
`
    },
    {
      id: "manual-objeciones",
      icon: "🛡️",
      title: "2. Manual de Objeciones LAER y Scorecard",
      desc: "Guiones para 'está caro' o 'déjame pensarlo' y Roleplay evaluado del 1 al 10.",
      filename: "02_manual_objeciones_laer_roleplay.md",
      content: `# 2. Manual de Objeciones LAER y Roleplay con Scorecard

## Método LAER: Listen → Acknowledge → Explore → Respond
Nunca bajes el precio de golpe en el primer mensaje. Valida la inquietud, explora si el freno es flujo de caja, alcance, urgencia o confianza, y ajusta opciones antes de recortar margen.

## Prompt para Responder Objeciones
\`\`\`text
Actúa como coach comercial experto (método LAER) para [MI NEGOCIO] (vendemos [OFERTA], diferenciador: [DIFERENCIADOR]).
Un cliente respondió: "[PEGAR OBJECIÓN: Ej. Está muy caro / Déjame pensarlo]".

Dame 3 respuestas cortas (máx 60 palabras) con tono cercano y profesional:
1) Empática (LAER): valida y pregunta para descubrir la raíz real de la objeción.
2) Ajuste de alcance (Opción Esencial) sin regalar tarifa por hora.
3) Alternativa en cuotas o micro-piloto de bajo riesgo.
\`\`\`

## Roleplay con Scorecard 1–10 (Ideal también en Gemini Live)
\`\`\`text
Juguemos un roleplay de ventas (dificultad 8/10). Tú eres un cliente interesado de [CLIENTE IDEAL], escéptico porque recibiste una cotización más barata de la competencia. Yo soy de [MI NEGOCIO]. Empieza poniéndome una objeción difícil. Tras 4 intercambios, entrégame mi Scorecard:
1) Calificación (1 al 10)
2) Qué hice bien
3) Qué mejorar
4) Script sugerido listo para usar.
\`\`\`
`
    },
    {
      id: "voz-marca-marketing",
      icon: "📣",
      title: "3. Plantilla de Voz de Marca y Contenido",
      desc: "Sistema 1 Semilla → 5 Piezas y filtro anti-robot para crear tu Skill @voz-de-marca.",
      filename: "03_plantilla_voz_marca_y_contenido.md",
      content: `# 3. Plantilla de Voz de Marca y Sistema 1 Semilla → 5 Piezas

## Ficha Rápida de Voz de Marca
- **3 adjetivos de mi marca:** [Ej. Cercana, práctica, honesta]
- **Trato al cliente:** [Tú / Usted]
- **Palabras prohibidas:** "en el mundo actual", "revolucionario", "soluciones integrales", "lleva al siguiente nivel", "sumérgete".
- **Ejemplo real escrito por mí:** "[Pega aquí 1 post o correo tuyo que te encante]"

## Prompt Multiplicador: 1 Semilla → 5 Piezas
\`\`\`text
Actúa como director de contenidos para [MI NEGOCIO] ([OFERTA] para [CLIENTE IDEAL]).
Semilla real de hoy: "[Escribe una duda de un cliente, un error común o un caso real]".

Genera:
1) Guion de Reel/TikTok de 30 seg (Gancho en 3s + 3 puntos + CTA).
2) Carrusel educativo de 5 láminas (máx 12 palabras por lámina).
3) Post corto de historia/autoridad (máx 90 palabras).
4) Mensaje cercano para Estados o lista de difusión de WhatsApp (máx 45 palabras).

Reglas: Tono [MI TONO]. Cero clichés de IA. Máximo 2 emojis por pieza.
\`\`\`
`
    },
    {
      id: "guia-skills-skill-md",
      icon: "⚡",
      title: "4. Plantilla Estándar SKILL.md y Apilamiento",
      desc: "Mejores prácticas 2026: frontmatter YAML, invocación @, Skill Stacking y uso en Workspace.",
      filename: "04_plantilla_estandar_skill_md.md",
      content: `# 4. Guía Moderna de Skills (SKILL.md) y Apilamiento (@skills)

## Estructura Estándar de un SKILL.md (2026)
\`\`\`markdown
---
name: cotizador-comercial
description: Usa este skill siempre que un cliente solicite precios o propuesta comercial de [MI NEGOCIO].
---

# @cotizador-comercial

## Contexto Fijo del Negocio
- Negocio / Oferta / Cliente ideal / Diferenciador / Tono

## Directrices Únicas
- Regla 1: No inventar tarifas; marcar con [CONFIRMAR].
- Regla 2: Hacer máx. 3 preguntas breves si faltan datos.

## Formato Estándar de Entrega
- 3 opciones comparativas + mensaje corto de WhatsApp.
\`\`\`

## 4 Mejores Prácticas
1. **Description precisa en 1 oración:** Le indica a Gemini cuándo activar el Skill automáticamente.
2. **Skill Stacking (Apilamiento):** Combina Skills pequeños en línea (\`Usa @cotizador-comercial + @voz-de-marca...\`).
3. **Divulgación progresiva:** Guarda precios/catálogos largos aparte en Docs, PDFs o **NotebookLM** para mantener el Skill ligero.
4. **Respaldo Universal:** Si tu cuenta aún no activa Skills en interfaz, guarda el \`SKILL.md\` en un Google Doc y cítalo con \`@Google Drive\`.
`
    },
    {
      id: "guia-prospeccion-treg-apollo",
      icon: "🎯",
      title: "5. Prospección: Treg.to, Apollo y Briefing 5D",
      desc: "Conecta herramientas B2B a Antigravity (MCP), Deep Research en 5 bloques y CRM en Sheets.",
      filename: "05_guia_prospeccion_treg_apollo_mcp.md",
      content: `# 5. Guía de Prospección: Treg.to, Apollo.io, Deep Research y MCP

## Briefing de Cuenta en 5 Bloques (Deep Research / Web)
1. **📊 Resumen Ejecutivo:** Qué hace la empresa, tamaño y prioridad actual.
2. **🎯 Señales de Compra:** Vacantes, expansión, reseñas o cambios recientes.
3. **👤 Perfil del Decisor:** Enfoque probable y estilo de comunicación.
4. **💬 3 Icebreakers + 2 Preguntas de Descubrimiento.**
5. **⚠️ Riesgos y Alertas:** Posibles objeciones o proveedor actual (regla: no inventar datos).

## Puente Unificado Treg.to + Antigravity (\`~/.gemini/config/mcp_config.json\`)
\`\`\`json
{
  "mcpServers": {
    "treg": {
      "url": "https://treg.to/mcp",
      "headers": {
        "Authorization": "Bearer TU_TOKEN_TREG"
      }
    }
  }
}
\`\`\`

## Fórmula de Mensaje Rompehielo en 4 Líneas
1. **Señal real detectada** → 2. **Dolor del cargo** → 3. **Puente con tu diferenciador** → 4. **Micro-pregunta sin fricción**.
`
    },
    {
      id: "guia-automatizacion-workspace",
      icon: "⏰",
      title: "6. Automatización: Acciones Programadas y Flows",
      desc: "Cómo pasar de reactivo a proactivo con Gemini Programadas, Workspace Studio y Antigravity.",
      filename: "06_guia_automatizacion_gemini_workspace.md",
      content: `# 6. Guía Práctica de Automatización de Tareas con Gemini

## Tres Motores sin Programar
1. **Acciones Programadas en Gemini (gemini.google.com → Programadas):**
   - Ejecuta un prompt por reloj (ej. Lun–Vie 8:00 a.m. cruzando \`@Google Calendar\` y \`@Gmail\`, o Lunes 8:30 a.m. revisando tu Pipeline en \`@Google Drive\`).
2. **Google Workspace Studio (Flows):**
   - Flujos automáticos por evento entre Gmail, Docs, Sheets y Chat usando tus Skills. Regla recomendada: **crear siempre borrador para revisión humana**, nunca auto-enviar cotizaciones sin validar.
3. **Antigravity \`/automation\` + MCP + n8n:**
   - Corre rutinas recurrentes conectando tus archivos \`.agents/skills/*/SKILL.md\` con Treg.to, Apollo.io, HubSpot o Google Sheets.

## Briefing Pre-Reunión Recomendado (\`@Google Calendar @Gmail @Google Drive\`)
\`\`\`text
Revisa mis reuniones de hoy en @Google Calendar, busca los últimos correos y propuestas de cada participante en @Gmail y @Google Drive, y entrégame un resumen de 3 viñetas + 3 preguntas clave para cada llamada.
\`\`\`
`
    }
  ]
};
