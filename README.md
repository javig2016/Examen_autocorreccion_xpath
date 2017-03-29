# Examen_autocorreccion_xpath

Desarrollo del proyecto denominado [Examen_autocorreccion_xpath](https://github.com/javig2016/Examen_autocorreccion_xpath/). Este proyecto pertenece a la unidad 5 del módulo LMSGI y ha consistido en la modificación del proyecto anterior de la unidad 3, donde creamos ya un formulario. En el actual proyecto se ha modificado el anterior en el acceso al objeto xml_Doc del archivo javascript, que enlazaba con el documento xml, que contenía los datos de las preguntas, posibles respuestas y las respuestas correctas. Esta modificación se ha realizado mediante Xpath.
Además se ha usado XSLT que ha permitido dar un visualización diferente al resultado de salida que se obtenía previamente.
En el desarrollo del proyecto se han solucionado, modificado y mejorado problemas que presentaba el proyecto de la unidad 3.
Se ha seguido usado una combinación de los temas vistos hasta ahora: HTML, CSS, JavaScript, XML y se ha añadido XPATH y XSLT.

##Fases del proyecto:

1. Se ha revisado el enunciado de la práctica y los temas tratados en el foro de la asignatura, que han servido de gran ayuda para la elaboración del proyecto, entre los comentarios y ayuda de compañeros y del profesor.
2. Se ha modificado el archivo empleado en la unidad 3 de javascript para adaptarlo a XPATH y así conseguir otra forma de mostrar las posibles soluciones de cada pregunta select, select múltiple, checkbox y radio. Realizando de esta manera los enlaces con el archivo XML y HTML.
3. Se han introducido modificaciones en html, como una página más, para diferenciar las instrucciones de elaboración del examen, dejando solamente el examen en una página web.
4. También se han revisado todas las páginas de la universidad y los archivos CSS a la vez, donde se introdujo el formato a todos los documentos html del proyecto. En las páginas html se han modificado los botones de pulsación y se les ha dado configuración mediante los archivos CSS correspondientes. También se ha revisado su correcta ubicación y funcionamiento.
5. Se ha revisado el archivo XML ya que tenía algunos datos que actualizar en algunas preguntas y a su vez se ha configurado para que funcione con XSLT y se vea su transformación con el archivo "transform.xsl" si se ejecutara el archivo XML en cualquier navegador. Se ha vuelto a revisar su correcta construcción mediante la correcta validación con XML schema. Usando la siguiente web para revisar el documento: http://www.xmlvalidation.com/. Se ha cambiado el diseño de la presentación del archivo XML.
6. Se ha revisado el correcto funcionamiento de las funciones indicadas en JavaScript.
7. Se ha introducido código en javascript para forzar al usuario a rellenar todas las preguntas del formulario, advirtiendo la pregunta o preguntas que se han dejado sin contestar.
8. Se ha probado la web en diferentes resoluciones y diferentes navegadores, para probar la visualización en distintos dispositivos.
9. Revisión de que todas las páginas html y los archivos de diseño css están correctamente creados y no contienen errores, mediante las herramientas de validación de W3C.

A continuación se pasan a indicar características especiales a reseñar de la práctica:
### * Imágenes adaptadas:
Las imágenes de la web fueron optimizadas en la anterior unidad mediante la propia herramienta de dibujo GIMP y el programa PNGGauntlet.

### * Versión dispositivos móviles:
Se ha verificado la adaptación al proyecto para la visualización de la web en dispositivos móviles, de esa manera se observa el correcto funcionamiento y la posibilidad de ver todo correctamente.
La configuración ha sido trasladada a todos los documentos html del proyecto.
Para ello se han usado 2 archivos css, uno denominado *__d.css__*, que se usará para la página web normal, en navegadores de ordenadores con unas resoluciones normales, y otro archivo denominado *__m.css__*, que se usará cuando el navegador tenga una resolución para dispositivos móviles.

### * Versión JavaScript:
El proyecto se ha puesto en funcionamiento gracias al lenguaje JavaScript del que se han extraído  las funciones y herramientas para poder conectar las preguntas, respuestas, opciones y tipos de cuestiones del formulario XML, con el formulario en HTML.

### * Versión XPATH y XSLT:
Mediante estos lenguajes se ha conseguido que en principio con XPATH, alcancemos el archivo XML y no se necesite de otros elementos como los empleados en la unidad 3 para resolver las diferentes respuestas posibles de cada pregunta del cuestionario. Y con XSLT se ha cambiado la forma de presentar el propio XML en un navegador web y en la forma de presentar los resultados del cuestionario formulado.

### * Versión identada:
La versión identada se corresponde con la master, por lo que no se ha creado ninguna rama para la indicada. Para realizar esta versión del html, se han revisado todos los elementos de la página web y se han colocado de la manera correcta para su mejor visualización. 

### * Versión reducida (_minify_):
Esta otra versión se ha realizado con la ayuda de la siguiente web [HTML Minifier](http://www.willpeavy.com/minifier/), que ha permitido minimizar al máximo el espacio de cada uno de los documentos de la web y que funcione correctamente de cara a su uso. Esta versión se podrá ver en la rama identificada como minify.
Hay que tener en cuenta que los archivos de javascript (questions.js), questions.xml, questions.dtd, questions.xsl y transform.xsl no se han reducido, debido a que provocaban problemas a la hora de verificar su correcto funcionamiento. Se ha verificado su correcto funcionamiento en el navegador, pero en la web RawGit no funciona.

##Enlaces a fuentes de las imágenes:
Todas las imágenes que se han usado son las mismas de la unidad 3.

Imagen logo universidad:
[Imagen logo](http://res.freestockphotos.biz/pictures/16/16246-illustration-of-a-graduation-cap-pv.png)

Imagen rectorado:
[Imagen rectorado](https://s.iha.com/2556200015384/Alquiler-vacaciones-encanto-Campos-SEGLES_15.jpegg)


Su retoque ya se realizó en la unidad 3 con la herramienta de dibujo [GIMP](https://www.gimp.org/).

***
##Fuentes de ayuda:
Para realizar dicha actividad a parte de los apuntes, enlaces y foros de la asignatura se han consultado otras fuentes como es el canal de youtube:
[Falcon Masters](https://www.youtube.com/channel/UCJl1YajcPWTeJNsQhGyMIMg)
