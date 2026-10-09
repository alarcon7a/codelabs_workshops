# Workspace de practica para Antigravity CLI

Este proyecto pequeno sirve para probar Antigravity CLI sin usar un repositorio real. Incluye codigo con bugs, pruebas, rules locales, una skill de revision, ejemplos de MCP y permisos.

## Iniciar

```bash
cd antigravity-cli-codelabs/docs/examples/antigravity-practice
agy
```

Primer prompt recomendado:

```text
Analiza @. y dime que archivos hay, que riesgos ves y que ejercicio recomiendas hacer primero. No edites archivos todavia.
```

## Ejercicio 1: encontrar un bug con contexto local

```text
Encuentra el bug en @src/math.js y explica como lo verificarias sin editar todavia.
```

Luego:

```text
Corrige el bug minimo en @src/math.js y ejecuta npm test para comprobarlo.
```

## Ejercicio 2: revisar codigo con una skill

```text
Usa la skill code-reviewer para revisar @src/profile.js. Prioriza bugs, seguridad y pruebas faltantes.
```

Si la skill no se carga, abre `/skills` y confirma que ejecutaste `agy` desde esta carpeta.

## Ejercicio 3: explicar permisos

Revisa `settings.permissions.example.json` y pide:

```text
Explica las reglas de permisos en @settings.permissions.example.json y dime cuales son seguras para un taller.
```

No pegues configuraciones globales sin adaptarlas a tu ruta local.

## Ejercicio 4: tools y MCP

```text
Explica que hace @.agents/mcp_config.example.json y que credenciales faltan para usarlo de verdad.
```

## Verificacion local sin agente

```bash
npm test
```

La prueba falla al inicio porque `src/math.js` contiene un bug intencional.
