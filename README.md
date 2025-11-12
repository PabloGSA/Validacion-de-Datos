# Formulario de Validación de Datos

Este proyecto es un formulario de registro con validación en tiempo real de los datos ingresados por el usuario.

## 📋 Descripción

El formulario permite validar diferentes tipos de datos de entrada:
- **Nombre de Usuario**: Debe tener entre 3 y 20 caracteres (letras, números, guiones y guiones bajos)
- **Correo Electrónico**: Debe tener un formato válido de email
- **País**: Selección de país con código telefónico
- **Número de Teléfono**: Mínimo 8 dígitos (puede incluir +, -, espacios, paréntesis)
- **Contraseña**: Debe tener al menos 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial
- **Confirmar Contraseña**: Debe coincidir con la contraseña ingresada

## 🚀 Cómo usar

1. Abre el archivo `index.html` en tu navegador
2. Completa todos los campos del formulario
3. El botón "Registrar" se habilitará solo cuando todos los campos sean válidos
4. Los campos mostrarán indicadores visuales (verde para válido, rojo para inválido)

## 📁 Archivos del proyecto

- `index.html` - Estructura del formulario
- `styles.css` - Estilos y diseño visual
- `index.js` - Lógica de validación con expresiones regulares

## ✨ Características

- ✅ Validación en tiempo real mientras el usuario escribe
- ✅ Indicadores visuales de campos válidos/inválidos
- ✅ Mensajes informativos para cada campo
- ✅ El botón de registro se habilita solo cuando todos los campos son válidos
- ✅ Validación de formato de email
- ✅ Validación de fortaleza de contraseña
- ✅ Selección de país con código telefónico automático

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Expresiones Regulares (Regex)

## 👨‍💻 Autor

Pablo Sanchez - [GitHub](https://github.com/PabloGSA)

