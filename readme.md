<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/UPC_logo_transparente.png" alt="Logo UPC">


# Universidad Peruana de Ciencias Aplicadas

Ingeniería de Software

Ciclo 2024-01

<hr>

# <center>Desarrollo de Aplicaciones Open Source</center>

## TF1 REPORT

**Sección:** SW51

**Profesor**: Angel Augusto Velasquez Nuñez

**StartUp Name**: NinjaCode

**Producto**: HormonalCare

### Team Members:

| Member                            |    Code    |
| :-------------------------------- | :--------: |
| Claudio Sandro Quispesivana Torres| U202215099 |
| Jherson David Astuyauri Calderon  | U202218451 |
| Estefano Sebastian Lostaunau Pereira | U202211742 |
| Chinchihualpa Saldarriaga Luis Sebastian | U202212112 |
| Sebastian Valente Lobato Pozo | U202215312 |

<br>
</div>

## CAPÍTULO V: PRODUCT IMPLEMENTATION, VALIDATION & DEPLOYMENT 
### 5.1.      Software Configuration Management.
#### 5.1.1.   Software Development Environment Configuration.


**Project Management:**

Discord: Utilizamos Discord como plataforma principal de comunicación y colaboración entre los miembros del equipo de desarrollo y gestión del proyecto. Discord proporcionó canales de comunicación en tiempo real para discusiones, reuniones y actualizaciones del proyecto.

WhatsApp: Se utilizó WhatsApp como una herramienta de comunicación para mantener el contacto con los miembros del equipo y colaborar en cierta medida.

Landing Page: Para dar vida a la primera impresión de nuestra landing page, decidimos usar HTML, CSS y JavaScrip que son ampliamente conocidas y utilizadas en la creación de páginas web. Estas tecnologías permitieron crear una página atractiva, funcional y adaptada a las necesidades del proyecto.


**Requirements Management:**

Miro: Utilizamos Miro como herramienta principal para la gestión de requisitos. En Miro, creamos mapas mentales y diagramas que ayudaron a visualizar y organizar los requisitos del proyecto, incluyendo características, funcionalidades y objetivos clave.

Lucidchart: Además, utilizamos Lucidchart como herramienta para realizar diagramas y documentación.



**Product UX/UI Design:** 

Figma: Empleamos Figma para el diseño de la interfaz de usuario (UI) y la experiencia de usuario (UX) de la aplicación HormonalCare. Figma permitió la creación de prototipos, wireframes y diseños visuales que guiarán el desarrollo del producto final. 
UXPressia: Utilizamos UXPressia como herramienta especializada en la creación de mapas de experiencia de usuario, perfiles de clientes y otros elementos relacionados con el diseño de UX. UXPressia nos permitió visualizar y comprender la experiencia del usuario en profundidad, ayudando a mejorar la usabilidad y el diseño de la aplicación.
Canva: Incorporamos Canva en la etapa de diseño para la creación de recursos gráficos adicionales, como imágenes, gráficos y presentaciones, que mejoró la estética y la presentación del producto.
Google Forms: Utilizamos Google Forms para recopilar retroalimentación y realizar encuestas de usuarios. Google Forms nos permitió recoger datos relevantes sobre la experiencia de los usuarios y las necesidades del cliente, lo que influyó en el diseño y desarrollo del producto.



**Software Development:**

IDE (Entorno de Desarrollo Integrado): Utilizamos Visual Studio Code como nuestro IDE principal debido a su capacidad para facilitar el desarrollo web moderno y eficiente. Visual Studio Code ofrece soporte robusto para los lenguajes y tecnologías clave que utilizamos, como HTML, CSS, JavaScript y frameworks como Angular o Vue.js. Además, su interfaz intuitiva y extensibilidad mediante plugins nos permitió trabajar de manera más productiva, asegurando una codificación de calidad y una depuración eficaz.

Control de Versiones: Git será fundamental para el control de versiones del código fuente. La integración nativa con sistemas de control de versiones como Git también es crucial para nuestra gestión de proyectos, lo cual, nos permitió un control preciso de nuestro código fuente y facilitando la colaboración entre el equipo de desarrollo.

Gestión de Dependencias: Usamos npm (Node Package Manager) para gestionar las dependencias del proyecto, incluyendo bibliotecas y paquetes necesarios para el desarrollo.



**Software Documentation:**

GitHub: Empleamos GitHub como plataforma principal para la documentación del código y la colaboración en el desarrollo. Utilizamos el README.md para documentar el proceso de desarrollo.

  
#### 5.1.2.   Source Code Management.

Para garantizar la eficiencia y evitar conflictos en el desarrollo de soluciones, los proyectos de NinjaCode se gestionaron en una organización de GitHub. Dentro de esta organización, se encuentran los repositorios correspondientes a cada proyecto. Aquí están los enlaces a los repositorios:

Landing page: https://upc-open-source-ninja-code.github.io/Landing-Page/indexEN.html

Tests de Aceptación: 

En cuanto al manejo del Gitflow, fue de la siguiente forma:

En el desarrollo de ‘HormonalCare’, cada cambio que se realizó en los archivos se marcó con un mensaje con el formato “Conventional Commits”. Esta práctica facilitó la identificación de los cambios realizados en cada commit, permitió un seguimiento más eficiente del proyecto. Además, este modelo incluye la rama main, que contuvo las versiones finales y estables del proyecto. Para mantener una organización clara del proyecto, se creó una rama específica para cada capítulo del proyecto. Esto permitió un seguimiento más detallado y una mejor organización del código."


#### 5.1.3.   Source Code Style Guide & Conventions.
Nuestro equipo adoptó las siguientes convenciones y guías de estilo para garantizar un código fuente coherente, legible y mantenible en los diferentes lenguajes y tecnologías utilizados en nuestra solución:


HTML:
•	Se utilizó la sangría adecuada y un formato limpio para mejorar la legibilidad.
•	Se incluyó comentarios descriptivos cuando fue necesario, especialmente en secciones relacionadas con la estructura de la aplicación web y la renderización de componentes.
•	Se utilizó etiquetas semánticas adecuadas para mejorar la accesibilidad.

CSS:
•	Se prefirió el uso de abreviaturas y valores numéricos sin unidades cuando sea posible.
•	Se utilizaron comentarios para separar y organizar secciones del código CSS.
•	Se aplicaron principios de diseño responsivo y accesibilidad en los estilos.

JavaScript:
•	Las declaraciones de variables se realizaron al principio de su ámbito.
•	Se prefirió el uso de const y let sobre var.
•	Se incluyó comentarios descriptivos para explicar la funcionalidad de componentes, servicios y secciones complejas.
•	Se aplicaron principios de programación reactiva y patrones de diseño adecuados para la construcción de la aplicación web.


Para la gestión de versiones, adoptamos el flujo de trabajo Gitflow, que define un modelo estricto de ramificación enfocado en la publicación del proyecto. Este enfoque permitió a nuestro equipo trabajar independientemente en funcionalidades, correcciones de errores y otras tareas sin afectar el trabajo de los demás. Creamos ramas separadas para cada capítulo. Estas ramas se fusionaron con la rama principal (main) para su despliegue. Gitflow aumentó la velocidad de entrega, disminuyó los errores al mezclar ramas, eliminó dependencias al entregar código y nos proporcionó un control riguroso sobre versiones y cambios.

#### 5.1.4.   Software Deployment Configuration.

Utilizamos el servicio GitHub Pages para desplegar la landing page de HormonalCare. Este servicio nos permitió hospedar nuestra landing page directamente desde nuestro repositorio de GitHub. Los pasos que seguimos:

1.	Después de haber integrado los cambios y nuevas versiones de la landing page en el repositorio, y de asegurarnos de que las ramas estén actualizadas, ingresaremos a la plataforma de GitHub y nos dirigiremos a nuestro repositorio del proyecto.
2.	Dentro del repositorio, accedimos a la pestaña de "Settings" y buscamos la sección denominada "Pages" en el menú lateral.
3.	En la sección "Pages", seleccionamos la rama main desde la cual se desplegará la landing page.
4.	Después de haber seleccionado la rama, confirmamos los cambios realizados, y GitHub realizo el proceso de despliegue de la landing page.
5.	Una vez que el proceso de despliegue finalizó, GitHub nos proporcionó el enlace para ver nuestra landing page publicada (htt).





### 5.2. Landing Page, Services & Applications Implementation.

#### 5.2.1.   Sprint 1

##### 5.2.1.1. Sprint Planning 1.
|Sprint #|Sprint 1|
| - | - |
|**Sprint Planning Background**||
|Date|2024-04-04|
|Time|9:00|
|Location|Reunión realizada mediante Discord|
|Prepared By|Astuyauri Calderon Jherson David|
|Attendees (to planning meeting)|Astuyauri Calderon Jherson David / Chinchihualpa Saldarriaga Luis Sebastian/Hernan Emilio Morales Calderon/Lostaunau Pereira Estéfano Sebastián	/Quispesivana Torres Claudio Sandro|
|**Sprint Goal & User Stories**||
|Sprint 1 Goal|Organizar las secciones asignadas a cada uno para implementar la Landing Page.|
|Sprint 1 Velocity|15|
|Sum of Story Points|13|



#### 5.2.1.2. Sprint Backlog 1.
#### En el primer sprint de nuestra aplicación "HormonalCare", nos centraremos en la implementación de la Landing Page. Esta página será la primera impresión para nuestros potenciales usuarios, comunicando las funcionalidades que ofrecemos, los planes, etc. A través de un diseño cuidadoso y contenido persuasivo dirigido a nuestra audiencia objetivo.
####
<table><tr><th colspan="2" valign="top">Sprint #</th><th colspan="6" valign="top">Sprint 1</th></tr>
<tr><td colspan="2" valign="top">User Story</td><td colspan="6" valign="top">Work-Item / Task </td></tr>
<tr><td colspan="1" valign="top">Id</td><td colspan="1" valign="top">Title</td><td colspan="1" valign="top">Id</td><td colspan="1" valign="top">Title</td><td colspan="1" valign="top">Description</td><td colspan="1" valign="top"><p>Estimation</p><p>(Hours)</p></td><td colspan="1" valign="top">Assigned To</td><td colspan="1" valign="top">Status (To-do / In Process / To-Review / Done)</td></tr>
<tr><td colspan="1" rowspan="3" valign="top">US01</td><td colspan="1" rowspan="3" valign="top">Visualización del Header.</td><td colspan="1" valign="top">T01</td><td colspan="1" valign="top">Diseñar el Header</td><td colspan="1" valign="top">Crear un diseño atractivo y funcional para el header que incluya secciones como inicio, sobre nosotros, contacto, etc.</td><td colspan="1" valign="top">Luis</td><td colspan="1" valign="top">2</td><td colspan="1" valign="top">Done</td></tr>
<tr><td colspan="1" valign="top">T02</td><td colspan="1" valign="top">Implementación del Header</td><td colspan="1" valign="top">Codificar el header basado en el diseño aprobado, utilizando HTML, CSS, y JavaScript si es necesario para interactividad.</td><td colspan="1" valign="top">Sandro</td><td colspan="1" valign="top">5</td><td colspan="1" valign="top"></td></tr>
<tr><td colspan="1" valign="top">T03</td><td colspan="1" valign="top">Pruebas del Header</td><td colspan="1" valign="top">Realizar pruebas funcionales para asegurar la correcta visualización y funcionalidad del header.</td><td colspan="1" valign="top">Jherson</td><td colspan="1" valign="top">3</td><td colspan="1" valign="top">Done</td></tr>
<tr><td colspan="1" rowspan="2" valign="top">US02</td><td colspan="1" rowspan="2" valign="top">Información sobre Planes o Suscripciones.</td><td colspan="1" valign="top">T01</td><td colspan="1" valign="top">Diseño de la Sección de Planes</td><td colspan="1" valign="top">Elaborar el diseño de la sección que detalla los planes o suscripciones disponibles, incluyendo beneficios y precios. </td><td colspan="1" valign="top">Estéfano</td><td colspan="1" valign="top">5</td><td colspan="1" valign="top">Done</td></tr>
<tr><td colspan="1" valign="top">T02</td><td colspan="1" valign="top">Implementación de la Sección de Planes</td><td colspan="1" valign="top">Codificar la sección de planes conforme al diseño, utilizando prácticas de desarrollo web responsivo para asegurar su correcta visualización en cualquier dispositivo.</td><td colspan="1" valign="top">Sebastian</td><td colspan="1" valign="top">5</td><td colspan="1" valign="top">Done</td></tr>
<tr><td colspan="1" rowspan="2" valign="top">US03</td><td colspan="1" rowspan="2" valign="top">Visualización del footer en la landing page.</td><td colspan="1" valign="top">T01</td><td colspan="1" valign="top">Diseñar el Footer</td><td colspan="1" valign="top">Crear un diseño para el footer que incluya información de contacto, enlaces rápidos a secciones relevantes, y créditos. </td><td colspan="1" valign="top">Estéfano</td><td colspan="1" valign="top">3</td><td colspan="1" valign="top">Done</td></tr>
<tr><td colspan="1" valign="top">T02</td><td colspan="1" valign="top">Desarrollar el Footer</td><td colspan="1" valign="top">Codificar el footer basándose en el diseño aprobado, utilizando tecnologías web estándar para garantizar su funcionamiento.</td><td colspan="1" valign="top">Sebastian</td><td colspan="1" valign="top">5</td><td colspan="1" valign="top">Done</td></tr>
<tr><td colspan="1" rowspan="3" valign="top">US04</td><td colspan="1" rowspan="3" valign="top">Conocer la misión y visión de la aplicación.</td><td colspan="1" valign="top">T01</td><td colspan="1" valign="top">Creación de Contenido para Misión y Visión.</td><td colspan="1" valign="top">Desarrollar el contenido textual que describe la misión, visión y valores de la empresa para ser incluidos en la landing page. </td><td colspan="1" valign="top">Jherson</td><td colspan="1" valign="top">2</td><td colspan="1" valign="top">Done</td></tr>
<tr><td colspan="1" valign="top"><p>T02</p><p></p></td><td colspan="1" valign="top">Diseño de la Sección de Misión y Visión.</td><td colspan="1" valign="top">Diseñar una sección en la landing page que presente de manera atractiva la misión y visión de la empresa.</td><td colspan="1" valign="top">Sandro</td><td colspan="1" valign="top">3</td><td colspan="1" valign="top"></td></tr>
<tr><td colspan="1" valign="top">T03</td><td colspan="1" valign="top">Implementación de la Sección de Misión y Visión.</td><td colspan="1" valign="top">Codificar la sección de misión y visión en la página, utilizando el contenido y diseño aprobados. </td><td colspan="1" valign="top">Estéfano</td><td colspan="1" valign="top">5</td><td colspan="1" valign="top">Done</td></tr>
<tr><td colspan="1" rowspan="3" valign="top">US05</td><td colspan="1" rowspan="3" valign="top">Comunicación directa con el equipo de soporte.</td><td colspan="1" valign="top">T01</td><td colspan="1" valign="top">Diseñar Formulario de Contacto</td><td colspan="1" valign="top">Crear un diseño para un formulario de contacto o chat en vivo que permita a los visitantes enviar mensajes directos al equipo de soporte. </td><td colspan="1" valign="top">Sebastian</td><td colspan="1" valign="top">3</td><td colspan="1" valign="top">Done</td></tr>
<tr><td colspan="1" valign="top">T02</td><td colspan="1" valign="top">Implementar Interfaz de Contacto</td><td colspan="1" valign="top">Implementar la interfaz de contacto en la página.</td><td colspan="1" valign="top">Jherson</td><td colspan="1" valign="top">5</td><td colspan="1" valign="top"></td></tr>
<tr><td colspan="1" valign="top">T03</td><td colspan="1" valign="top">Pruebas de la Funcionalidad de Contacto</td><td colspan="1" valign="top">Realizar pruebas para asegurar que la funcionalidad de contacto funcione correctamente, los mensajes se envíen al equipo de soporte, y que toda la información se maneje de forma segura.</td><td colspan="1" valign="top">Luis</td><td colspan="1" valign="top">2</td><td colspan="1" valign="top">Done</td></tr>
</table>

Además, se incluye en la herramienta recomendada que es Trello.
<img src="images/trellosprint.png" alt="Sprint I en Trello">
![](Aspose.Words.7c36b888-f087-49fb-b41f-b7c953698ffb.001.png)
#### <a name="_toc163674911"></a>Enlace: <https://trello.com/invite/b/H8Ifc2ko/ATTIf05ba6e9b91d336c0560f121fd1002790D3D9927/sprint-1-hormonalcare>
####
#### 5.2.1.3. Development Evidence for Sprint Review.
####
En cuanto a los avances de la implementación de nuestro primer sprint, se puede observar que varias tareas han sido resueltas. Como, la creación del header, footer y algunas secciones tales como suscripciones, funcionalidades, acerca del equipo, formulario de contacto, entre otras secciones y características que se han desarrollado para lograr entregar en esta primera fecha nuestro producto mínimo viable (MVP).

|Repository|Branch|Commit Id|Commit Message|Commit Message Body|Commited on (Date)|
| - | - | - | - | - | - |
|Landing-Page|docs/assets/styles/style.css|7a8d1c3f78a5757e1a9b66005983214c1f88165f|feat (footer)|se añadieron los estilos del footer|11/04/23|
|Landing-Page|docs/assets/styles/style.css|51f31cfe73de03fc86749e2e51381d3f7f483444|feat (contact-us)|se añadió los estilos para el contact us form|11/04/23|
|Landing-Page|docs/assets/styles/style.css|7a8d1c3f78a5757e1a9b66005983214c1f88165f|feat (planes)|se añadió el estilo para los planes|11/04/23|
|LandingPageAppWeb|feature/about|6a7cee5|feature: about||11/04/23|
|LandingPageAppWeb|feature/subscription|91c2d4d|feature: subscription||11/04/23|
|LandingPageAppWeb|feature/subscription|91c2d4d|feature: subscription||11/04/23|
|LandingPageAppWeb|docs/assets/scripts/script.js|a9d2f88bb493a7cbe5d7dc6e4e26c896ff32fbb8|Update script.js| added: document.addEventListener |11/04/23|
|LandingPageAppWeb|docs/assets/images/FeatureMobile1ES.png|4dc8e0523ba7c8e628925ee2ac2d0eb2ea272584|fix(styleES and indexES): incorporate of new Feature Mobile 1 2 3 4 ES||11/04/23|
|LandingPageAppWeb|docs/assets/images/BienbenidoAHormonalCare.png|fa77d2baaaad68c7ba69fe1b8db0d84b3d593c37|fix(image): bienvenido a HormonalCare||11/04/23|



##### 5.2.1.4. Testing Suite Evidence for Sprint Review.
Para esta entrega, no se implementó el conjunto de apartados relacionados con Web Services, ya que el desarrollo se hizo en base al Landing Page.
##### 5.2.1.5. Execution Evidence for Sprint Review.
Lo alcanzado en este sprint es la implementación de nuestra landing page, junto a las secciones y caracteristicas de arquitectura de información elaboradas pro el equipo de desarrollo. Nuestra landing page, incluye las secciones de Beneficios, precios, contáctanos, sobre nosotros e iniciar sesión.
**_screenshots de las principales vistas implementadas:**
<img src="images/vistalanding1.png">
<img src="images/vistalanding2.png">
<img src="images/vistalanding3.png">
<img src="images/vistalanding4.png">
<img src="images/vistalanding5.png">
Link al video: [video landing page](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202218451_upc_edu_pe/EbyAhQWeUI5MnsNLvfM42PcBVWQLQGO47PHjy2U5S_uHaA?e=OcifcD&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

##### 5.2.1.6. Services Documentation Evidence for Sprint Review.
Este primer Sprint solo trata la implementación del landing page, por lo que no se empleó ningún servicio adicional.

##### 5.2.1.7. Software Deployment Evidence for Sprint Review.

Para llevar a cabo la implementación automática de nuestra Landing Page, empleamos Github Pages. Esta herramienta facilita la creación de sitios web a partir de un repositorio público que contiene el código utilizado para desarrollar la página. Puedes visitar nuestra Landing Page en el siguiente enlace:https://upc-open-source-ninja-code.github.io/Landing-Page/assets/indexs/indexES.html

##### 5.2.1.8. Team Collaboration Insights during Sprint.
Para la realización de los commits de nuestro primer Sprint, hemos hecho uso de la herramienta Visual Studio Code, además del uso de Git. Uno de los integrantes realizó un primer commit para la creación del repositorio, luego utilizando Git clonamos el repositorio, para luego realizar los cambios en Visual Code y crear los branches correspondientes a dichos cambios, para finalmente realizar el commit, el cual deberá ser revisado dentro del repositorio de Github.
<img src="images/collaboration.png">


## **CONCLUSIONES Y RECOMENDACIONES**

•	Nuestro equipo de NinjaCode ha logrado desarrollar una solución tecnológica innovadora, HormonalCare, que aborda los desafíos críticos en el seguimiento médico de enfermedades hormonales en el Perú. Hemos colaborado estrechamente para diseñar y desarrollar una aplicación que permita una gestión eficiente de registros médicos, seguimiento remoto de niveles hormonales y una comunicación efectiva entre pacientes y profesionales de la salud.

•	A lo largo de este proyecto, hemos enfrentado desafíos significativos, desde la escasez de recursos tecnológicos hasta la competencia en el mercado de la salud digital. Sin embargo, nuestra determinación y compromiso nos han permitido superar obstáculos y seguir adelante.

•	El proyecto de NinjaCode tiene objetivos claros, incluida la optimización de los seguimientos médicos, la reducción de los tiempos de espera y la mejora de la adherencia al tratamiento. Estos objetivos están respaldados por una profunda comprensión de la problemática actual en el sistema de atención médica peruano y una visión innovadora para implementar soluciones tecnológicas efectivas.

•	La aplicación HormonalCare representa un avance significativo en la integración de tecnología digital en el campo de la salud. Desde la gestión eficiente de registros médicos hasta la facilitación de videoconsultas y la comunicación fluida entre pacientes y profesionales de la salud, esta innovación promete revolucionar la forma en que se realiza el seguimiento médico de enfermedades hormonales.






## BIBLIOGRAFÍA

* Abramo, L., Cecchini, S., & Ullmann, H.. (2020). Enfrentar las desigualdades en salud en América Latina: el rol de la protección 	social. Ciência & Saúde Coletiva, 25(5), 1587–1598. https://doi.org/10.1590/1413-81232020255.32802019

* Antara, D. (2015, febrero 10). SOLO HAY DIEZ ENDOCRINÓLOGOS POR CADA MILLÓN DE HABITANTES EN EL PERÚ. Diario Médico Perú - 		Noticias Médicas y Sanitarias en el Perú. https://www.diariomedico.pe/solo-hay-diez-endocrinologos-por-cada-millon-de-habitantes-en-el-peru/ 

* INEI. (2021, mayo 29). Instituto Nacional de Estadistica e Informatica. Gob.pe. Recuperado el 01 de abril de 2024, de 			https://m.inei.gob.pe/prensa/noticias/el-399-de-peruanos-de-15-y-mas-anos-de-edad-tiene-al-menos-una-comorbilidad-12903/

* Loza Quispe, A. J., Navarro Chuchon, B. D. & Pocco Gallardo, N. G. (2022). Nivel de conocimiento y adherencia al tratamiento 		farmacológico en pacientes diabéticos tipo II del Hospital San Juan de Lurigancho. Universidad Continental.  			https://repositorio.continental.edu.pe/bitstream/20.500.12394/12779/3/IV_FCS_502_TE_Loza_Navarro_Pocco_2023.pdf 

* Novedoso plan piloto de Teletriaje y Teleurgencias de EsSsalud supera las 12 mil atenciones en menos de 60 días. (2022, junio 7). 	Essalud. http://noticias.essalud.gob.pe/?inno-noticia=novedoso-plan-piloto-de-teletriaje-y-teleurgencias-de-esssalud-		supera-las-12-mil-atenciones-en-menos-de-60-dias 

* Ocronos (2023). El impacto de la telemedicina en la accesibilidad y calidad de la atención  médica. Ocronos - Editorial 		Científico-Técnica. https://revistamedica.com/impacto-telemedicina-calidad-atencion-medica/

* Pocohuanca-Ancco, L., Villacorta, J., & Hurtado-Roca, Y. (2021). Factores asociados a la no-adherencia al tratamiento 			farmacológico antihipertensivo en pacientes de un hospital del seguro social. Revista del Cuerpo Médico Hospital Nacional 	Almanzor Aguinaga Asenjo, 14(3), 316–321. https://doi.org/10.35434/rcmhnaaa.2021.143.1252 

* Quispe, A., & Manuel, G. (2021). Factores que contribuyen a la falta de adherencia terapéutica en pacientes con Diabetes Mellitus 	tipo 2 del Policlínico Fiori - Lima 2019. Universidad Privada Norbert Wiener. 							https://repositorio.uwiener.edu.pe/handle/20.500.13053/5674 

* Reisman, A. B. (2023, septiembre 30). El Perú tiene apenas 42 médicos especialistas por cada 100 mil habitantes. El Comercio 		Perú. https://elcomercio.pe/ecdata/el-peru-tiene-apenas-42-medicos-especialistas-por-cada-100-mil-habitantes-minsa-		regiones-ecdata-noticia/ 

* Vista de Factores asociados a la no-adherencia al tratamiento farmacológico antihipertensivo en pacientes de un hospital del 		seguro social. (s/f). Org.pe. Recuperado el 01 de abril de 2024, de 								http://cmhnaaa.org.pe/ojs/index.php/rcmhnaaa/article/view/1252/507 

