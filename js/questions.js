var formElement=null;
var answer1_txt=null;
var answer2_rad=null;
var answer3_txt=null;
var answer4_sel=null;
var answer5_rad=null;
var answer6_sel=null;
var answer7_check = [];
var answer8_mul= [];
var answer9_check = [];
var answer10_mul= [];
var nota = 0;  //nota de la prueba sobre 10 puntos (tenemos 10  preguntas)
var xml_Doc;
var xsl_Doc = null;

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function() { 

  //Se carga el formulario
  formElement=document.getElementById("examen");
   //Corrección cuando se pulsa el botón del formulario
  formElement.onsubmit=function() {
    if(comprobar()){
      inicializar();
      //Corregir pregunta 1 texto
      corregirTXT(formElement.getElementsByClassName("texto")[0].value, answer1_txt, xml_Doc.getElementById("preg001"));
      //Corregir pregunt 2 radio
      corregirRadio(formElement.programa, answer2_rad, xml_Doc.getElementById("preg002"), "programa");
      //Corregir pregunta 3 texto
      corregirTXT(formElement.getElementsByClassName("texto")[1].value, answer3_txt, xml_Doc.getElementById("preg003"));
      //Corregir pregunta 4 select
      corregirSelect(formElement.getElementsByTagName("select")[0], answer4_sel, xml_Doc.getElementById("preg004"));
      //Corregir pregunta 5 radio
      corregirRadio(formElement.interferencia, answer5_rad, xml_Doc.getElementById("preg005"));
      //Corregir pregunta 6 select
      corregirSelect(formElement.getElementsByTagName("select")[1], answer6_sel, xml_Doc.getElementById("preg006"));
      //Corregir pregunta 7 checkbox
      corregirCheckbox(formElement.elementos, answer7_check, xml_Doc.getElementById("preg007"));
      //Corregir pregunta 8 multiple
      corregirMultiple(formElement.getElementsByTagName("select")[2], answer8_mul, xml_Doc.getElementById("preg008"));
      //Corregir pregunta 9 checkbox
      corregirCheckbox(formElement.formatos, answer9_check, xml_Doc.getElementById("preg009"));
     //Corregir pregunta 10 multiple
      corregirMultiple(formElement.getElementsByTagName("select")[3], answer10_mul, xml_Doc.getElementById("preg010"));
      presentarNota();
    }
    return false;
  }

 //LEER XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     gestionarXml(this);
    }
 };
 xhttp.open("GET", "xml/questions.xml", true);
 xhttp.send();

  //LEER XSL de xml/questions.xml
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     xsl_Doc=this.responseXML;
    }
  };
 xhttp2.open("GET", "xml/questions.xsl", true);
 xhttp2.send();
}




//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xml_Doc es el documento leido XML. 
function gestionarXml(datosXml){
  xml_Doc = datosXml.responseXML; //Parse XML a xml_Doc
  var preg_XML; //Acceder a la pregunta del archivo XML
  var preg_HTML;//Donde se ha de colocar la pregunta en el HTML
  var rad_HTML;//Obtener datos del HTML de pregunta radio
  var sel_HTML;///Obtener los datos de la pregunta del HTML de esta modalidad
  var chkbx_HTML;//Obtener los datos de la pregunta del HMTL de esta modalidad
  var opciones;//Cantidad de opciones que tendrán los diferentes tipos de preguntas con esta posibilidad
  var sel_mul_opciones = [];//Opciones de preguntas tipo select o multiple
  var chkbx_radi_opciones = [];//Opciones de preguntas tipo checkbox o radio
  var res_chkbx;//Cantidad de respuestas en checkbox
  var res_mul;//Cantidad de respuestas en multiple
  var xpath;
  var nodesSelect;

 //Pregunta 1 texto
  preg_XML = xml_Doc.getElementsByTagName("title")[0].innerHTML;
  preg_HTML = document.getElementById("preg001");
  ponerdatosTXT(preg_HTML, preg_XML);
  answer1_txt = xml_Doc.getElementById("preg001").getElementsByTagName("answer")[0].innerHTML;

 //Pregunta 2 radio
  preg_XML = xml_Doc.getElementsByTagName("title")[1].innerHTML;
  preg_HTML = document.getElementById("preg002");
  rad_HTML = document.getElementsByClassName("radio")[0];
  xpath = "/questions/question[@id='preg002']/option";
  opciones = xml_Doc.evaluate(xpath, xml_Doc, null, XPathResult.ANY_TYPE, null);
  ponerDatosCheckboxHtml(preg_HTML, preg_XML, rad_HTML, opciones, "programa", "radio");
  answer2_rad = parseInt(xml_Doc.getElementById("preg002").getElementsByTagName("answer")[0].innerHTML);
  chkbx_radi_opciones = [];

 //Pregunta 3 texto
  preg_XML = xml_Doc.getElementsByTagName("title")[2].innerHTML;
  preg_HTML = document.getElementById("preg003");
  ponerdatosTXT(preg_HTML, preg_XML);
  answer3_txt = xml_Doc.getElementById("preg003").getElementsByTagName("answer")[0].innerHTML;

 //Pregunta 4 select
  preg_XML = xml_Doc.getElementsByTagName("title")[3].innerHTML;
  preg_HTML = document.getElementById("preg004");
  sel_HTML = document.getElementsByTagName("select")[0];
  xpath="/questions/question[@id='preg004']/option";
  nodesSelect = xml_Doc.evaluate(xpath, xml_Doc, null, XPathResult.ANY_TYPE, null);
  ponerDatosSelectHtml(preg_HTML, preg_XML, sel_HTML, nodesSelect);
  answer4_sel = parseInt(xml_Doc.getElementById("preg004").getElementsByTagName("answer")[0].innerHTML);

 //Pregunta 5 radio
  preg_XML = xml_Doc.getElementsByTagName("title")[4].innerHTML;
  preg_HTML = document.getElementById("preg005");
  rad_HTML = document.getElementsByClassName("radio")[1];
  xpath = "/questions/question[@id='preg005']/option";
  opciones = xml_Doc.evaluate(xpath, xml_Doc, null, XPathResult.ANY_TYPE, null);
  ponerDatosCheckboxHtml(preg_HTML, preg_XML, rad_HTML, opciones, "interferencia", "radio");
  answer5_rad = parseInt(xml_Doc.getElementById("preg005").getElementsByTagName("answer")[0].innerHTML);
  chkbx_radi_opciones = [];

   //Pregunta 6 select
  preg_XML = xml_Doc.getElementsByTagName("title")[5].innerHTML;
  preg_HTML = document.getElementById("preg006");
  sel_HTML = document.getElementsByTagName("select")[1];
  xpath="/questions/question[@id='preg006']/option";
  nodesSelect = xml_Doc.evaluate(xpath, xml_Doc, null, XPathResult.ANY_TYPE, null);
  ponerDatosSelectHtml(preg_HTML, preg_XML, sel_HTML, nodesSelect);
  answer6_sel = parseInt(xml_Doc.getElementById("preg006").getElementsByTagName("answer")[0].innerHTML);
  
 //Pregunta 7 checkbox
  preg_XML = xml_Doc.getElementsByTagName("title")[6].innerHTML;
  preg_HTML = document.getElementById("preg007");
  chkbx_HTML = document.getElementsByClassName("checkbox")[0];
  xpath = "/questions/question[@id='preg007']/option";
  opciones = xml_Doc.evaluate(xpath, xml_Doc, null, XPathResult.ANY_TYPE, null);
  ponerDatosCheckboxHtml(preg_HTML, preg_XML, chkbx_HTML, opciones, "elementos", "checkbox");
  res_chkbx = xml_Doc.getElementById("preg007").getElementsByTagName("answer").length;
  for(i = 0; i < res_chkbx; i++) {
    answer7_check[i] = parseInt(xml_Doc.getElementById("preg007").getElementsByTagName("answer")[i].innerHTML);
  }
  chkbx_radi_opciones = [];

 //Pregunta 8 multiple
  preg_XML = xml_Doc.getElementsByTagName("title")[7].innerHTML;
  preg_HTML = document.getElementById("preg008");
  select_HTML = document.getElementsByTagName("select")[2];
  xpath = "/questions/question[@id='preg008']/option";
  opciones = xml_Doc.evaluate(xpath, xml_Doc, null, XPathResult.ANY_TYPE, null);
  ponerDatosSelectHtml(preg_HTML, preg_XML, select_HTML, opciones);
  res_mul = xml_Doc.getElementById("preg008").getElementsByTagName("answer").length;
  for(i = 0; i < res_mul; i++) {
    answer8_mul[i] = parseInt(xml_Doc.getElementById("preg008").getElementsByTagName("answer")[i].innerHTML);
  }

  //Pregunta 9 checkbox
  preg_XML = xml_Doc.getElementsByTagName("title")[8].innerHTML;
  preg_HTML = document.getElementById("preg009");
  chkbx_HTML = document.getElementsByClassName("checkbox")[1];
  xpath = "/questions/question[@id='preg009']/option";
  opciones = xml_Doc.evaluate(xpath, xml_Doc, null, XPathResult.ANY_TYPE, null);
  ponerDatosCheckboxHtml(preg_HTML, preg_XML, chkbx_HTML, opciones, "formatos", "checkbox");
  res_chkbx = xml_Doc.getElementById("preg009").getElementsByTagName("answer").length;
  for(i = 0; i < res_chkbx; i++) {
    answer9_check[i] = parseInt(xml_Doc.getElementById("preg009").getElementsByTagName("answer")[i].innerHTML);
  }
  chkbx_radi_opciones = [];
 
 //Pregunta 10 multiple
  preg_XML = xml_Doc.getElementsByTagName("title")[9].innerHTML;
  preg_HTML = document.getElementById("preg010");
  select_HTML = document.getElementsByTagName("select")[3];
  xpath = "/questions/question[@id='preg010']/option";
  opciones = xml_Doc.evaluate(xpath, xml_Doc, null, XPathResult.ANY_TYPE, null);
  ponerDatosSelectHtml(preg_HTML, preg_XML, select_HTML, opciones);
  res_mul = xml_Doc.getElementById("preg010").getElementsByTagName("answer").length;
  for(i = 0; i < res_mul; i++) {
    answer10_mul[i] = parseInt(xml_Doc.getElementById("preg010").getElementsByTagName("answer")[i].innerHTML);
  }

}


//****************************************************************************************************
//implementación de la corrección

function corregirTXT(valor, correcto, preguntaXML) {
  if(valor.toLowerCase() == correcto.toLowerCase()) {
    nota += 1;
  }
  useranswer = xml_Doc.createElement("useranswer");
  useranswer.innerHTML = valor;
  preguntaXML.appendChild(useranswer);
}


function corregirRadio(radio, correcto, preguntaXML, atributo) {
  var value;//Este valor se debe a que no hay selección para comparar
  for(i = 0; i < radio.length; i++) {
    if(radio[i].checked) {//si se encuentra lo seleccionado, se cambia value y se sale
      value = i;
      useranswer = xml_Doc.createElement("useranswer");
      useranswer.innerHTML = value+1;
      preguntaXML.appendChild(useranswer);
      break;
    }
  }
  if(value == correcto) {
    nota += 1;
  }
}


function corregirMultiple(multi, correcto, preguntaXML) {
  var escorrecta = [];
  for(i = 0; i < multi.length; i++) {
    if(multi[i].selected) {
      useranswer = xml_Doc.createElement("useranswer");
      useranswer.innerHTML = i+1;
      preguntaXML.appendChild(useranswer);
      escorrecta[i] = false;
      for (j = 0; j < correcto.length; j++) {
        if(i == correcto[j]) {
          escorrecta[i] = true;
        }
      }
      if(escorrecta[i]) {
        nota += 1/correcto.length;
      }
      else {
        nota -= 1/correcto.length;
      }
    }
  }
}


function corregirSelect(select, correcto, preguntaXML) {
  if(select.value == correcto) {
    nota += 1;
  }
  useranswer = xml_Doc.createElement("useranswer");
  useranswer.innerHTML = select.selectedIndex+1;
  preguntaXML.appendChild(useranswer);
}


function corregirCheckbox(checkbox, correctas, preguntaXML) {
  var escorrecta = [];
  for(i = 0; i < checkbox.length; i++) {
    if(checkbox[i].checked) {
      useranswer = xml_Doc.createElement("useranswer");
      useranswer.innerHTML = i+1;
      preguntaXML.appendChild(useranswer);
      escorrecta[i] = false;
      for (j = 0; j < correctas.length; j++) {
        if(i == correctas[j]) {
          escorrecta[i] = true;
        }
      }
      if(escorrecta[i]) {
        nota += 1/correctas.length;
      }
      else {
        nota -= 1/correctas.length;
      }
    }
  }
}




//****************************************************************************************************
// poner los datos recibidos en el HTML


function ponerdatosTXT(elementoHTML, elementoXML) {
  elementoHTML.innerHTML = elementoXML;
}

function ponerDatosSelectHtml(elementoHTML, elementoXML, select, nodesct) {
  elementoHTML.innerHTML = elementoXML;
  var result = nodesct.iterateNext();
  i=0;
  while (result) {
   var option = document.createElement("option");
   option.text = result.innerHTML;
   option.value = i+1; i++;
   select.options.add(option);
   result = nodesct.iterateNext();
  }
}


function ponerDatosCheckboxHtml(elementoHTML, elementoXML, checkboxradioHTML, nodos, atributo, tipo){
  elementoHTML.innerHTML = elementoXML;
  var input;
  var label;
  var i = 0;
  for (var resultado = nodos.iterateNext(); resultado; resultado = nodos.iterateNext())
  {
    input = document.createElement("input");
    label = document.createElement("label");
    label.innerHTML = resultado.innerHTML;
    label.setAttribute("id", atributo+i);
    input.type = tipo;
    input.name = atributo;
    checkboxradioHTML.appendChild(input);
    checkboxradioHTML.appendChild(label);
    checkboxradioHTML.appendChild(document.createElement("br"));
  }
}

//****************************************************************************************************
//Gestionar la presentación de las respuestas


function darRespuestaHtml(r) {
 var p = document.createElement("p");
 var node = document.createTextNode(r);
 p.appendChild(node);
 document.getElementById("resultados").appendChild(p);
}


function presentarNota() {
  document.getElementById("examen").style.display = "none";
  document.getElementById("resultados").style.display = "block";
  //Código transformación xslt con xml_Doc y xsl_Doc
  if (document.implementation && document.implementation.createDocument) {
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl_Doc);
    resultDocument = xsltProcessor.transformToFragment(xml_Doc, document);
    document.getElementById("resultados").appendChild(resultDocument);
  }
  darRespuestaHtml("Tu nota es de "+nota.toFixed(2)+" sobre 10 puntos.");
}

function comprobar(formulario) {
  var comprobarOK = true;
  var programaCheck = false;
  var interferenciaCheck = false;
  var elementosCheck = false;
  var formatosCheck = false;
  var multi1Check = false;
  var multi2Check = false;
  
  //comprobación respuesta pregunta 1
  if(formElement.getElementsByClassName("texto")[0].value == "") {
    alert("Introduzca una respuesta en la pregunta 1");
    comprobarOK = false;
  }

  //comprobación respuesta pregunta 2
  for (var i = 0; i < formElement.programa.length; i++) {
    if(formElement.programa[i].checked) {
      programaCheck = true;
    }
  }
  if(!programaCheck) {
    alert("Marque una respuesta en la pregunta 2");
    comprobarOK = false;
  }

  //comprobación respuesta pregunta 3
  if(formElement.getElementsByClassName("texto")[1].value == "") {
    alert("Introduzca una respuesta en la pregunta 3");
    comprobarOK = false;
  }

  //comprobación respuesta pregunta 4
  if(formElement.getElementsByTagName("select")[0].selectedIndex == 0) {
    alert("Seleccione una respuesta en la pregunta 4");
    comprobarOK = false;
  }

  //comprobación respuesta pregunta 5
  for (var i = 0; i < formElement.interferencia.length; i++) {
    if(formElement.interferencia[i].checked) {
      interferenciaCheck = true;
    }
  }
  if(!interferenciaCheck) {
    alert("Marque una respuesta en la pregunta 5");
    comprobarOK = false;
  }

  //comprobación respuesta pregunta 6
  if(formElement.getElementsByTagName("select")[1].selectedIndex == 0) {
    alert("Seleccione una respuesta en la pregunta 6");
    comprobarOK = false;
  }

  //comprobación respuesta pregunta 7
  for (var i = 0; i < formElement.elementos.length; i++) {
    if(formElement.elementos[i].checked) {
      elementosCheck = true;
    }
  }
  if(!elementosCheck) {
    alert("Marque al menos una opción de la pregunta 7");
    comprobarOK = false;
  }

  //comprobación respuesta pregunta 8
  for (var i = 0; i < formElement.getElementsByTagName("select")[2].length; i++) {
    if(formElement.getElementsByTagName("select")[2][i].selected) {
      multi1Check = true;
    }
  }
  if(!multi1Check)
  {
    alert("Seleccione al menos una opción de la pregunta 8");
    comprobarOK = false;
  }

  //comprobación respuesta pregunta 9
  for (var i = 0; i < formElement.formatos.length; i++) {
    if(formElement.formatos[i].checked) {
      formatosCheck = true;
    }
  }
  if(!formatosCheck) {
    alert("Marque al menos una opción de la pregunta 9");
    comprobarOK = false;
  }

  
  //comprobación respuesta pregunta 10
  for (var i = 0; i < formElement.getElementsByTagName("select")[3].length; i++) {
    if(formElement.getElementsByTagName("select")[3][i].selected) {
      multi2Check = true;
    }
  }
  if(!multi2Check) {
    alert("Seleccione al menos una opción de la pregunta 10");
    comprobarOK = false;
  }
  else return comprobarOK;
}


function inicializar() {
  document.getElementById("resultados").innerHTML = "";
  nota = 0;
}