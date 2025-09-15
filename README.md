# RunJS API

API para ejecutar código JavaScript de forma segura usando VM2.

## Descripción

Esta API permite ejecutar scripts de JavaScript en un entorno controlado y seguro utilizando la librería VM2. Incluye timeout y sandboxing para prevenir ejecución maliciosa.

## Instalación

```bash
npm install
```

## Dependencias

- `vm2`: ^3.9.17 - Para la ejecución segura de JavaScript

## Uso

### Request

```json
POST /
{
  "script": "const result = 2 + 2; result;",
  "context": {
    "variable": "valor"
  }
}
```

### Response

```json
{
  "result": 4
}
```

### En caso de error

```json
{
  "error": "Error message"
}
```

## Configuración

- **Timeout**: 5 segundos por defecto
- **Sandbox**: Context aislado para cada ejecución

## Migración

Esta API está siendo migrada de AWS Lambda a Azure Functions. Ver archivos de configuración específicos para cada plataforma.

## Seguridad

- Timeout de 5 segundos para prevenir loops infinitos
- Sandbox aislado usando VM2
- No acceso al sistema de archivos del host