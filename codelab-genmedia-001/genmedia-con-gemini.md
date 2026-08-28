author: Álvaro Alarcón
summary: Taller práctico completo de Google GenMedia: de la exploración web (Gemini App, AI Studio, Google Flow) a la orquestación programática con Interactions API, Nano Banana, Voice Director TTS, Lyria, Gemini Omni (animación y reemplazo de personajes) y Colab Enterprise.
id: genmedia-gemini-omni-1-1
categories: ai, googlecloud, genmedia, vertexai
environments: Web
status: Published
feedback link: https://github.com/alarcon7a/gemini_media/issues

# GenMedia con Gemini: De una Idea a una Producción Multimedia

## 1. Introducción y Arquitectura GenMedia
Duration: 5

### Bienvenido al Taller de GenMedia con Google AI
En este Codelab aprenderás a construir una **campaña multimedia completa y consistente** aprovechando el ecosistema de modelos generativos multimodales de Google. Partiremos de una simple idea conceptual y la transformaremos en una producción que integra **texto estructurado (Brief JSON), keyframes visuales en alta definición, locución con dirección actoral profesional (Voice Director), banda sonora original y clips de video cinemáticos con animación y reemplazo de personajes**.

### El Ecosistema de Modelos: Gemini no es un solo modelo
Para obtener resultados de calidad cinematográfica y grado empresarial, no usamos un único modelo generalista para todo. En su lugar, Google ofrece una suite especializada de modelos interconectados:

| Modalidad | Modelo Recomendado | Rol en la Producción |
| :--- | :--- | :--- |
| **Dirección & Guion** | `gemini-3.7-flash` / `gemini-3.5-flash-lite` | Generación del Brief JSON estructurado y supervisión creativa. |
| **Generación Visual** | `gemini-3.1-flash-image` (Nano Banana 2) / `gemini-3-pro-image` (Nano Banana Pro) | Creación de keyframes 16:9, diseño de personajes y concept art. |
| **Voz & Voice Director** | `gemini-3.1-flash-tts-preview` | Actuación de voz dirigida (Voice Director Framework), matices emocionales y flags. |
| **Música Original** | `lyria-3-clip-preview` (Lyria 3) | Composición de bandas sonoras y ambientación instrumental. |
| **Video Cinemático** | `gemini-omni-flash-preview` (Gemini Omni 1.1 Flash) | Animación First-Frame, reemplazo de personajes (Video+Imagen) y edición. |

### La Filosofía: "Single Source of Truth" (Brief JSON)
El mayor desafío en la IA generativa multimedia es la **consistencia**. Si generas una imagen con un prompt y luego el video con otro completamente distinto, los personajes, la paleta de colores y el tono se desalinean.

En este taller implementamos el patrón **Single Source of Truth**:
```
Idea Creativa → Gemini (Brief JSON Maestro) ┬→ Nano Banana / Google Flow (Keyframe Visual) ─┐
                                           ├→ Gemini Voice Director TTS (Locución)         ─┼→ Gemini Omni (Video + Audio)
                                           └→ Lyria 3 (Banda Sonora)                      ─┘
```

Positive
: **Lo que aprenderás**:
- Cómo prototipar rápidamente en las herramientas web de Google (Gemini App, Google AI Studio, Google Flow, MusicFX).
- Cómo utilizar la nueva **Interactions API** de Gemini (`google-genai`).
- Cómo aplicar la técnica de **5 capas de prompting** para imágenes con Nano Banana.
- Cómo dominar el framework **Voice Director** para dirigir actores virtuales en Gemini TTS con tags emocionales y pausas.
- Cómo componer bandas sonoras con **Lyria 3**.
- Cómo animar keyframes y realizar **reemplazo de personajes en video a partir de una foto** con **Gemini Omni Flash**.
- Cómo ejecutar el pipeline completo de código en **Google Cloud Colab Enterprise**.

---

## 2. Exploración en Herramientas Web de Google
Duration: 8

### Antes de Programar: Prototipado Rápido en la Web
Antes de escribir líneas de código y automatizar pipelines con la API, el flujo de trabajo moderno de GenMedia comienza validando ideas en las superficies web interactivas de Google. Esto te permite iterar en segundos sobre el tono, estilo y estética visual.

### 1. Gemini App (gemini.google.com)
[Abrir Gemini App](https://gemini.google.com)

- **Uso ideal**: Lluvia de ideas inicial, conceptualización de la historia, refinamiento de argumentos y creación de los primeros borradores del guion.
- **Tip**: Pídele a Gemini que actúe como un Director Creativo Publicitario y te proponga 3 conceptos disruptivos para tu campaña con desglose de público objetivo y estilo estético.

### 2. Google AI Studio (aistudio.google.com)
[Abrir Google AI Studio](https://aistudio.google.com)

- **El laboratorio del desarrollador**: La interfaz web oficial más potente para experimentar con la API de Gemini sin escribir código.
- **Funcionalidades clave**:
  - Probar modelos de última generación (`gemini-3.7-flash`, `gemini-3.1-pro-preview`).
  - Configurar **System Instructions** para definir la personalidad y reglas estrictas del modelo.
  - Activar **Structured Outputs (JSON)** definiendo esquemas exactos para tus briefs.
  - Ajustar parámetros de inferencia: Temperature, Top-P y Thinking Budget.
  - **Botón "Get Code"**: Exporta tu prompt directamente a código Python listo para usar con el SDK `google-genai`.

### 3. Google Flow (Estudio Visual y Creativo)
- **Google Flow**: La superficie visual interactiva para la creación, exploración y composición de assets de imagen y arte conceptual impulsada por Imagen 3 y los modelos Nano Banana.
- Permite experimentar de forma fluida con encuadres, estilos artísticos, materiales e iluminación antes de trasladar los prompts a código de producción.

### 4. Google Labs & Herramientas Especializadas
- **MusicFX (Lyria)**: [https://aitestkitchen.withgoogle.com/tools/music-fx](https://aitestkitchen.withgoogle.com/tools/music-fx)
  - Generador musical por texto con control de tempo, géneros híbridos y modo DJ continuo.
- **VideoFX (Veo & Omni Preview)**: [https://labs.google/](https://labs.google/)
  - Entorno de experimentación para generar tomas cinemáticas a partir de texto y referencias visuales.
- **NotebookLM**: [https://notebooklm.google.com](https://notebooklm.google.com)
  - Ideal para sintetizar documentos de marca o investigaciones previas y generar resúmenes de audio (Audio Overviews).

### Matriz de Decisión: ¿Web UI o API?

| Necesidad | Superficie Recomendada |
| :--- | :--- |
| Exploración creativa inicial y lluvia de ideas | **Gemini App** |
| Probar prompts, ajustar esquemas JSON y temperature | **Google AI Studio** |
| Generación visual interactiva y exploración conceptual | **Google Flow** |
| Composición interactiva de música y loops | **MusicFX** |
| Automatización, procesamiento por lotes y pipelines reproducibles | **Interactions API (SDK)** |
| Experimentación colaborativa con seguridad y gobierno cloud | **Colab Enterprise** |

---

## 3. Gemini Text & La Nueva Interactions API
Duration: 10

### La Nueva Era: Interactions API
Google ha evolucionado la forma de interactuar con los modelos Gemini. La nueva **Interactions API** (`client.interactions.create`) es el estándar oficial del SDK `google-genai` (versión ≥ 2.3.0).

Reemplaza los métodos anteriores con un modelo de datos basado en **Turnos con Estado**, **Steps tipados** y soporte nativo para **Thinking** y **Agentes**.

```
Usuario: client.interactions.create()
               │
               ▼
      [Step: user_input]       ── Contenido multimedia o texto
               │
               ▼
      [Step: thought]          ── Razonamiento explícito (Chain-of-Thought)
               │
               ▼
      [Step: model_output]     ── Texto, JSON, Imágenes o Audio generado
```

### Código: Generación del Brief JSON Maestro
En nuestro pipeline, usamos `gemini-3.7-flash` para generar el brief estructurado que orquestará todas las modalidades:

```python
from google import genai
from pydantic import BaseModel, Field

client = genai.Client()

# Definición del esquema estructurado para consistencia total
class CreativeBrief(BaseModel):
    title: str = Field(description="Título de la campaña")
    synopsis: str = Field(description="Sinopsis de 2 oraciones")
    visual_direction: str = Field(description="Prompt en 5 capas para Nano Banana")
    voiceover_script: str = Field(description="Texto exacto para la locución con audio tags")
    voice_direction: str = Field(description="Instrucciones completas del Voice Director Framework")
    music_prompt: str = Field(description="Prompt de instrumentación y tempo para Lyria")
    video_timeline: str = Field(description="Timeline detallada [0-2s], [2-4s], [4-5s] para Omni")

# Creación de la interacción con salida estructurada
interaction = client.interactions.create(
    model="gemini-3.7-flash",
    input="Crea el brief para una pieza cinemática sobre una guardiana ártica esculpida en hielo cristalino.",
    generation_config={
        "response_mime_type": "application/json",
        "response_schema": CreativeBrief,
        "temperature": 0.7,
    }
)

print(interaction.output_text)
```

---

## 4. Generación de Imágenes con Nano Banana y Google Flow
Duration: 10

### Modelos Visuales: Nano Banana 2 y Nano Banana Pro
Para generar los keyframes visuales de nuestra campaña utilizamos los modelos especializados en generación y edición de imagen:
- `gemini-3.1-flash-image` (**Nano Banana 2**): Ultrarrápido, excelente fidelidad a prompts y alta eficiencia.
- `gemini-3-pro-image` (**Nano Banana Pro**): Máxima resolución, detalles microtexturizados y render fotorrealista.

También puedes explorar y validar conceptos estéticos en **Google Flow**.

### Las 5 Capas de Prompt Engineering Visual
Para lograr imágenes con calidad de producción cinematográfica, estructura siempre tu prompt en **5 capas consecutivas**:

```
1. SUJETO       → ¿Quién o qué es exactamente? (rasgos anatómicos, edad, materiales, vestimenta).
2. ACCIÓN/POSE  → ¿Qué está haciendo? (mirada penetrante, ligera inclinación de cabeza, microexpresión).
3. COMPOSICIÓN  → ¿Cómo está encuadrado? (primer plano close-up, lente anamórfica 85mm f/1.4, 16:9).
4. ILUMINACIÓN  → ¿De dónde viene la luz? (luz volumétrica fría, reflejos cáusticos, claroscuro sutil).
5. ACABADO/ARTE → ¿Qué textura y calidad tiene? (hielo cristalino con microfracturas, escarcha, 8k octane render).
```

### Prompt Masterclass: Mujer Esculpida en Hielo (Close-Up Cinemático)
```text
Cinematic 8k close-up portrait of a breathtaking woman sculpted entirely from pristine crystalline glacial ice and frosted diamond textures. Her face exhibits delicate translucent frozen skin with intricate, microscopic frost fractals tracing her cheekbones and brow. Her eyes are glowing with subtle pale cyan ethereal bioluminescence, framed by crystalline eyelashes coated in fine powder snow. Translucent icicle hair cascades in sculpted frozen waves catching the light. Shot on 85mm f/1.4 lens, shallow depth of field, sharp focus on the glistening eye reflections. Lighting: Dramatic volumetric arctic rim lighting, sub-surface scattering through translucent ice, vivid refraction of deep sapphire and glowing cyan caustics against a moody dark aurora borealis backdrop. Photorealistic, masterwork, highly detailed.
```

### Código: Generar Imagen con el SDK
```python
interaction = client.interactions.create(
    model="gemini-3.1-flash-image",
    input="Cinematic 8k close-up portrait of a breathtaking woman sculpted entirely from pristine crystalline glacial ice...",
    generation_config={
        "aspect_ratio": "16:9",
    }
)

if interaction.output_image:
    with open("media/keyframe_hielo.png", "wb") as f:
        f.write(interaction.output_image.data)
    print("Keyframe 16:9 guardado exitosamente.")
```

---

## 5. Voice Director TTS: Dirección Profesional de Voz y Audio Tags
Duration: 10

### El Concepto "Voice Director" en Gemini TTS
En los sistemas TTS tradicionales (Text-to-Speech), la voz se genera a partir de texto plano o complejas etiquetas XML de SSML, lo que suele resultar en locuciones monótonas y artificiales.

Con `gemini-3.1-flash-tts-preview`, el modelo de lenguaje entiende **no solo qué decir, sino cómo decirlo**. Tratamos al modelo como a un **actor de doblaje virtual** en un estudio de grabación profesional mediante el framework **Voice Director**.

```
┌─────────────────────────────────────────────────────────────┐
│              VOICE DIRECTOR PROMPTING FRAMEWORK              │
├─────────────────────────────────────────────────────────────┤
│  1. AUDIO PROFILE  → Identidad, arquetipo y personalidad     │
│  2. THE SCENE      → Espacio físico, atmósfera y vibe        │
│  3. DIRECTOR NOTES → Estilo vocal, acento y ritmo            │
│  4. TRANSCRIPT     → Texto anotado con Inline Audio Tags     │
└─────────────────────────────────────────────────────────────┘
```

### 1. Las 4 Secciones de un Prompt Voice Director

1. **`# AUDIO PROFILE`**: Define el personaje (nombre, edad, rol y arquetipo). Ejemplo: *Astronauta en solitaria, Guía ancestral de los glaciares, Presentador enérgico*.
2. **`## THE SCENE`**: Sitúa al actor en un entorno físico y describe la atmósfera para que el modelo adapte la acústica y la energía vocal (ejemplo: *Cabina presurizada en gravedad cero con luces parpadeantes* o *Cueva de hielo milenario con eco sutil*).
3. **`### DIRECTOR'S NOTES`**: Instrucciones directas de interpretación:
   - **Style**: Textura y tono base (*Vocal Smile*, *Intimate and breathless*, *Authoritative but warm*).
   - **Accent**: Acento específico (*Spanish neutral*, *Castellano elegante*, *British RP*).
   - **Pacing**: Cadencia (*Measured and slow tempo*, *Bouncing high-speed rhythm*).
4. **`#### TRANSCRIPT`**: El guion exacto enriquecido con **Inline Audio Tags** entre corchetes.

### 2. Inline Audio Tags (Banderas Emocionales y Vocales)
Los tags se colocan en inglés dentro del transcript (incluso si el texto a hablar está en español) para disparar inflexiones emotivas y sonidos no verbales:

- **Entrega Emocional**: `[awe]`, `[determination]`, `[serenity]`, `[excitement]`, `[curiosity]`, `[confidence]`, `[melancholy]`, `[warmth]`, `[intrigue]`.
- **Acciones y Gestos Vocales**: `[whispers]`, `[sigh]`, `[laughs]`, `[chuckle]`, `[gasp]`, `[shouting]`, `[clears throat]`.
- **Pausas y Cadencia**: `[short pause]` (~250ms), `[medium pause]` (~500ms), `[long pause]` (~1000ms+), `[slow]`, `[fast]`.

### 3. Ejemplo Completo: Locución de la Guardiana Glacial
```python
voice_director_prompt = """
# AUDIO PROFILE: Solaria
## Ancient Glacial Guardian

## THE SCENE: The Heart of the Eternal Ice Cavern
Solaria stands atop a crystalline promontory surrounded by luminescent cyan ice pillars. The air is sub-zero and completely still. She speaks directly to a weary traveler with timeless wisdom and serene authority.

### DIRECTOR'S NOTES
Style: Intimate, resonant, crystal-clear projection with subtle breathing pauses. Warm yet mystical.
Pacing: Measured and slow tempo.
Accent: Neutral Spanish.

#### TRANSCRIPT
[serenity] En el silencio absoluto del hielo eterno... [short pause] [awe] cada reflejo guarda la memoria de un tiempo que no se desvanece. [medium pause] [determination] Observa el frío... [whispers] y descubre su luz interior.
"""

interaction = client.interactions.create(
    model="gemini-3.1-flash-tts-preview",
    input=voice_director_prompt
)

if interaction.output_audio:
    with open("media/locucion_guardian.wav", "wb") as f:
        f.write(interaction.output_audio.data)
    print("Voz profesional generada y guardada en media/locucion_guardian.wav")
```

---

## 6. Banda Sonora con Lyria 3
Duration: 8

### Música Generativa con Lyria
El modelo `lyria-3-clip-preview` (y la herramienta web [MusicFX](https://aitestkitchen.withgoogle.com/tools/music-fx)) permite crear composiciones musicales de alta fidelidad diseñadas para acompañar piezas audiovisuales.

### Estructura de un Prompt Musical Efectivo
Para lograr una pista que encaje exactamente con el tono de tu video, incluye siempre los siguientes 4 pilares en el prompt:

1. **Género y Atmósfera**: *Atmospheric Nordic Neo-Classical Ambient.*
2. **Instrumentación Clave**: *Cello acústico solista, marimba de cristal, pads de escarcha, sub-bass drone.*
3. **Tempo & Dinámica**: *72 BPM, inicio minimalista y sutil crescendo etéreo.*
4. **Términos Negativos**: *Sin batería agresiva, sin guitarras distorsionadas, sin voces líricas.*

### Código: Generar Clip de Audio Musical
```python
interaction = client.interactions.create(
    model="lyria-3-clip-preview",
    input="Atmospheric cinematic ambient score with deep sub-bass drones and crystalline glass pads, 72 BPM...",
    generation_config={
        "duration_seconds": 30
    }
)

if interaction.output_audio:
    with open("media/soundtrack_artico.mp3", "wb") as f:
        f.write(interaction.output_audio.data)
    print("Pista musical guardada en media/soundtrack_artico.mp3")
```

---

## 7. Video Cinemático y Reemplazo de Personajes con Gemini Omni Flash
Duration: 12

### Gemini Omni 1.1 Flash (`gemini-omni-flash-preview`)
Gemini Omni Flash es el modelo unificado de video de Google capaz de procesar texto, imágenes y video para generar o editar tomas cinemáticas fluidas (de 3 a 10 segundos) con audio sincronizado.

### Caso 1: Animación First-Frame a partir de un Keyframe
Animar una imagen fija generada con Nano Banana como punto de partida exacto:

```python
# 1. Subir keyframe con Files API
uploaded_keyframe = client.files.upload(file="media/keyframe_hielo.png")

# 2. Prompt con Timeline [0-5s]
video_prompt = """
[# Sources <FIRST_FRAME>]
[0-2s] Extreme slow cinematic push-in toward the ice woman's face. Frost particles swirl gently across the screen.
[2-4s] Her crystal eyelashes flutter as her glowing cyan eyes shift focus.
[4-5s] A serene crystalline smile forms as ethereal light flairs gently in 16:9.
Audio: Soft arctic wind howl, delicate ice crystalline resonance, zero dialogue.
"""

interaction = client.interactions.create(
    model="gemini-omni-flash-preview",
    input=[uploaded_keyframe, video_prompt],
    generation_config={"duration_seconds": 5, "aspect_ratio": "16:9"}
)
```

### Caso 2: Reemplazo Total de Personaje en Video a partir de una Foto (Video + Imagen de Referencia)
Un caso de uso extremadamente potente en Gemini Omni Flash es tomar un **video real tuyo saludando a la cámara** y una **foto de referencia de otro personaje** (ej. un astronauta en Marte o una guerrera cyberpunk), para que el modelo reemplace por completo al protagonista manteniendo la acción, postura y movimiento original.

```
┌───────────────────────────┐      ┌───────────────────────────┐
│     VIDEO ORIGINAL        │  +   │    IMAGEN PERSONAJE       │
│  (Tú saludando a cámara)  │      │ (Astronauta / Cyberpunk)  │
└─────────────┬─────────────┘      └─────────────┬─────────────┘
              │                                  │
              └───────────────┬──────────────────┘
                              ▼
               [ GEMINI OMNI FLASH PREVIEW ]
                              │
                              ▼
                VIDEO FINAL TRANSFORMADO
   (El personaje de la foto saludando con tu movimiento exacto)
```

#### Prompt de Reemplazo de Personaje:
```text
[# Sources <VIDEO_REF_0>@Video1] [# References <IMAGE_REF_0>@Image1]
Replace the person in the video with the character from <IMAGE_REF_0>. Maintain the exact wave and greeting movements, head rotation, timing, and framing from <VIDEO_REF_0>, while transforming the person entirely into the character in <IMAGE_REF_0> (facial features, futuristic helmet/suit, materials, and textures). Ensure smooth, photorealistic temporal consistency across all frames. Keep background environment consistent.
```

#### Código Python de Reemplazo:
```python
# 1. Subir video propio y foto del nuevo personaje
my_video = client.files.upload(file="media/mi_video_saludo.mp4")
character_photo = client.files.upload(file="media/personaje_astronauta.png")

# 2. Orquestar la transformación con Gemini Omni Flash
interaction = client.interactions.create(
    model="gemini-omni-flash-preview",
    input=[
        my_video,
        character_photo,
        "[# Sources <VIDEO_REF_0>] [# References <IMAGE_REF_0>] Replace the person in the video with the character from <IMAGE_REF_0>. Maintain the exact greeting gesture and head turn from the video, but render the subject entirely with the facial features, armor, and styling from the image reference. 16:9 widescreen, photorealistic."
    ],
    generation_config={
        "duration_seconds": 5,
        "aspect_ratio": "16:9"
    }
)

print(f"Video transformado exitosamente. ID: {interaction.id}")
```

---

## 8. Laboratorio Práctico: Notebook en Colab Enterprise
Duration: 15

### Ejecuta el Taller Completo en la Nube
Para consolidar todo lo aprendido y ejecutar el pipeline multimedia de extremo a extremo sin instalar nada localmente, abre el notebook oficial del taller en **Google Cloud Colab Enterprise**.

### Opciones para Abrir el Notebook:

#### Opción A · Importación Directa desde la Interfaz de Colab Enterprise (Recomendada para uso local)
1. Ingresa a la consola de [Google Cloud Vertex AI Colab Enterprise](https://console.cloud.google.com/vertex-ai/colab).
2. Selecciona tu **Proyecto de Google Cloud** en la barra superior.
3. En la sección de Notebooks, haz clic en **"Subir notebook" (Upload notebook)**.
4. Selecciona tu archivo local `tutorial_genmedia_gemini_omni.ipynb`.
5. Selecciona el runtime de computación y conéctate.

#### Opción B · Enlace Directo desde GitHub (Requiere repositorio público)
Si tienes el repositorio publicado públicamente en GitHub:

<div style="text-align: center; margin: 25px 0;">
  <a href="https://console.cloud.google.com/vertex-ai/colab/import/https%3A%2F%2Fraw.githubusercontent.com%2Falarcon7a%2Fgemini_media%2Fmain%2Ftutorial_genmedia_gemini_omni.ipynb" target="_blank" style="background-color: #1a73e8; color: white; padding: 14px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 15px; display: inline-block;">
    🚀 Abrir en Google Cloud Colab Enterprise (GitHub)
  </a>
</div>

> **Nota**: Si al hacer clic recibes un error `404`, asegúrate de haber creado el repositorio público `alarcon7a/gemini_media` en GitHub y haber realizado el push de la rama `main`:
> ```bash
> git remote add origin https://github.com/alarcon7a/gemini_media.git
> git branch -M main
> git push -u origin main
> ```

### Paso a Paso para la Ejecución:

1. **Configura tu Proyecto de Google Cloud**:
   ```bash
   gcloud services enable aiplatform.googleapis.com
   ```

2. **Inicia el Notebook**:
   - Conéctate al runtime de Python en Colab Enterprise.
   - Autentícate automáticamente con la identidad de tu proyecto de Google Cloud:
   ```python
   client = genai.Client(
       enterprise=True,
       project=PROJECT_ID,
       location="global"
   )
   ```

3. **Ejecuta las Celdas en Secuencia**:
   - **Bloque 1**: Creación del Brief JSON con `gemini-3.7-flash`.
   - **Bloque 2**: Renderizado de los Keyframes 16:9 con Nano Banana 2.
   - **Bloque 3**: Locución profesional con el Voice Director Framework y Gemini TTS.
   - **Bloque 4**: Composición de la pista musical con Lyria 3.
   - **Bloque 5**: Animación de keyframe y reemplazo de personajes con Gemini Omni Flash.
   - **Bloque 6**: Ensamblado final y guardado en `media/taller_genmedia/`.

Positive
: **¡Felicitaciones!** Has completado el Codelab de GenMedia con Gemini. Dominas desde el diseño en herramientas web (AI Studio, Google Flow) hasta la dirección de voces, composición musical y reemplazo de personajes con Gemini Omni Flash en Colab Enterprise.
