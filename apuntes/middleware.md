# Middleware

Anotaciones

Un middleware debe contar con req, res y next.

```js
app.use(function (req, res, next) {
  // middleware logic
  next()
})
```

como vemos next es obligatorio y podemos identificar el middleware por esto. Sin embargo el siguiente codigo tiene next pero no es un midlleware.

```js
app.get('/', (req, res, next) => {
  res.send('Hello World!')
})
```

Podemos instalar un middleware creados por otros devs.
podemos usar npm o pnpm para esto.
Podemos buscar middleware en insternet

aqui algunos de los middleware mas utilizados
morgan

## Middleware Por chatgpt

Un middleware es un componente de software que actúa como intermediario entre diferentes sistemas, módulos o capas de una aplicación. Facilita la comunicación, el procesamiento de datos y las interacciones entre estos componentes al proporcionar servicios como el manejo de solicitudes, la transformación de datos, la autenticación, el registro de eventos, el manejo de errores y más.

En el desarrollo web, el middleware se utiliza frecuentemente en el contexto de frameworks del lado del servidor como Express.js en Node.js o Django en Python. Las funciones de middleware interceptan las solicitudes HTTP entrantes y las respuestas, lo que permite a los desarrolladores ejecutar código antes o después de la lógica principal de procesamiento. Esto habilita funcionalidades como verificaciones de autenticación, validación de datos, registro de eventos y modificaciones en los objetos de solicitud o respuesta.

El middleware es crucial para modularizar y organizar el código, ya que permite a los desarrolladores separar preocupaciones y agregar capas reutilizables y componibles a sus aplicaciones.

Aquí tienes una lista de algunos de los middleware más utilizados en Express que se pueden instalar a través de npm:

1. **body-parser**: Parsea los cuerpos de las solicitudes HTTP entrantes en objetos JavaScript. Esto es útil para acceder a los datos enviados en formularios o en solicitudes JSON.

   ```bash
   npm install body-parser
   ```

2. **morgan**: Middleware de registro HTTP que registra detalles de las solicitudes entrantes, como la URL, el método, el estado y el tiempo de respuesta.

   ```bash
   npm install morgan
   ```

3. **cors**: Middleware para habilitar el intercambio de recursos entre diferentes orígenes. Es útil para permitir solicitudes AJAX desde un dominio diferente al servidor.

   ```bash
   npm install cors
   ```

4. **helmet**: Ayuda a proteger la aplicación Express estableciendo varios encabezados HTTP relacionados con la seguridad, como `X-Frame-Options`, `X-XSS-Protection`, `Strict-Transport-Security`, entre otros.

   ```bash
   npm install helmet
   ```

5. **cookie-parser**: Parsea las cookies adjuntas a las solicitudes HTTP entrantes en objetos JavaScript. Esto facilita la manipulación de cookies en Express.

   ```bash
   npm install cookie-parser
   ```

6. **compression**: Middleware de compresión que comprime las respuestas HTTP para minimizar el tamaño de los recursos y mejorar el rendimiento de la aplicación.

   ```bash
   npm install compression
   ```

Estos son solo algunos ejemplos de middleware comúnmente utilizados en Express. Hay muchos más disponibles en el registro de paquetes de npm que abordan una variedad de necesidades, desde la autenticación hasta la gestión de sesiones y la validación de datos.
