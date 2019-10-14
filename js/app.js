
// Para poder ver mi data hago un console.log

//console.log(data.AREQUIPA["2016-2"].students)


sedee = prompt("cual es tu sede");
promocion = prompt("cual es tu promocion");

var sede = data[sedee];
var generacion = sede[promocion];
// console.log(sede);
// console.log(generacion);
// console.log(data.LIMA["2016-2"].students);

/*
const select = document.getElementById('city');
const periodo = document.getElementById('periodo');

(function() {
  const list = Object.keys(data);
  console.log(data);
  for (const iterator of list) {
    const option = document.createElement("option");
    option.text = iterator;
    select.add(option);
  }
})();

function changeCiudad() {
  document.getElementById('periodo').options.length = 0;
  const list = Object.keys(data[select.value]);
  console.log('periodo', list);
  for (const element of list) {
    const option = document.createElement("option");
    option.text = element;
    periodo.add(option);
  }  
}
*/



function estuactivos(generacion){
var activos = 0;
var inactivos = 0;
var estudiantes = generacion.students;
for (let index = 0; index < estudiantes.length; index++) {
   if(estudiantes[index].active === true){
        activos++
   }else{
       inactivos++
   }
}

total = activos + inactivos;
//console.log(activos,inactivos,total);

x = (inactivos*100)/total;

return activos;
}
function estudeser(generacion){
  var activos = 0;
  var inactivos = 0;
  var estudiantes = generacion.students;
  for (let index = 0; index < estudiantes.length; index++) {
     if(estudiantes[index].active === true){
          activos++
     }else{
         inactivos++
     }
  }
  
  total = activos + inactivos;
  //console.log(activos,inactivos,total);
  
  x = (inactivos*100)/total;
  
  return x;
  }
//console.log(Math.round(x) + "%");
console.log(estuactivos(generacion));
console.log(Math.round(estudeser(generacion))+'%');


//console.log(data.LIMA["2016-2"].students[0].sprints[0].score);

//cantidad de estudiantes que superan la meta de puntos en promedio de todos los cursos cursados
function estuSupePuntos(generacion){
  var sumaScore=0;
  for(var i=0;i<generacion.students.length;i++){
  var sumaHse=0;
  var sumaTech=0;
  var total=0;
  for(var j=0;j<generacion.students[i]['sprints'].length;j++){
    var tech=generacion.students[i]['sprints'][j]['score']['tech'];
    var hse=generacion.students[i]['sprints'][j]['score']['hse'];

    sumaTech+=tech;
    sumaHse+=hse;
  }

  if((sumaHse/j)>840 && (sumaTech/j) >1260){
    sumaScore++;
  }

 
  }
  return (sumaScore);
}

console.log(estuSupePuntos(generacion));

//porcentaje de estudiantes que superan la meta de puntos en promedio de todos los cursos cursados
function porEstuSupePuntos(generacion){
  var sumaScore=0;
  for(var i=0;i<generacion.students.length;i++){
  var sumaHse=0;
  var sumaTech=0;
  var total=0;
  for(var j=0;j<generacion.students[i]['sprints'].length;j++){
    var tech=generacion.students[i]['sprints'][j]['score']['tech'];
    var hse=generacion.students[i]['sprints'][j]['score']['hse'];

    sumaTech+=tech;
    sumaHse+=hse;
  }

  if((sumaHse/j)>840 && (sumaTech/j) >1260){
    sumaScore++;
  }
  var porcentaje=parseInt((sumaScore*100)/generacion.students.length);
 
  }
  return (porcentaje);
}

console.log(porEstuSupePuntos(generacion)+"%");

//cantidad que representa el total de estudiantes que superan la meta de puntos tecnicos (tech)
function supePuntosTech(generacion){
  var sumaScore=0;
  for(var i=0;i<generacion.students.length;i++){
  
  var sumaTech=0;
 
  for(var j=0;j<generacion.students[i]['sprints'].length;j++){
    var tech=generacion.students[i]['sprints'][j]['score']['tech']; 

    sumaTech+=tech;
    
  }

  if((sumaTech/j) >1260){
    sumaScore++;
  }
  //var porcentaje=parseInt((sumaScore*100)/i);
 
  }
  return (sumaScore);
}

console.log(supePuntosTech(generacion));

//porcentaje que representa el total de estudiantes que superan la meta de puntos tecnicos (tech)
function porSupePuntosTech(generacion){
  var sumaScore=0;
  for(var i=0;i<generacion.students.length;i++){
  
  var sumaTech=0;
 
  for(var j=0;j<generacion.students[i]['sprints'].length;j++){
    var tech=generacion.students[i]['sprints'][j]['score']['tech']; 

    sumaTech+=tech;
    
  }

  if((sumaTech/j) >1260){
    sumaScore++;
  }
  var porcentaje=parseInt((sumaScore*100)/generacion.students.length);
 
  }
  return (porcentaje);
}

console.log(porSupePuntosTech(generacion)+'%');

//cantidad que representa el total de estudiantes que superan la meta de puntos Hse

function estuSupePuntosHse(generacion){
  var sumaScore=0;
  for(var i=0;i<generacion.students.length;i++){
  var sumaHse=0;
  
  
  for(var j=0;j<generacion.students[i]['sprints'].length;j++){
    
    var hse=generacion.students[i]['sprints'][j]['score']['hse'];

    sumaHse+=hse;
  }

  if((sumaHse/j)>840){
    sumaScore++;
  }
  
 
  }
  return (sumaScore);
}

console.log(estuSupePuntosHse(generacion));

//Porcentaje que representa el total de estudiantes que superan la meta de puntos Hse

function porEstuSupePuntosHse(generacion){
  var sumaScore=0;
  for(var i=0;i<generacion.students.length;i++){
  var sumaHse=0;
  
  
  for(var j=0;j<generacion.students[i]['sprints'].length;j++){
    
    var hse=generacion.students[i]['sprints'][j]['score']['hse'];

    sumaHse+=hse;
  }

  if((sumaHse/j)>840){
    sumaScore++;
  }
  var porcentaje=parseInt((sumaScore*100)/generacion.students.length);
  
  }
  return (porcentaje);
}

console.log(porEstuSupePuntosHse(generacion)+'%');

//console.log(data.LIMA["2016-2"].ratings[0].student);

//Porcentaje de estudiantes satisfechos con el bootcamp

var arrRatings=generacion['ratings'];
function porEstSatisfechos(generacion){
//console.log(arrRatings);
var sumaExpectativa=0;
for (var i=0;i<arrRatings.length;i++){
  var studentNoCumple=generacion['ratings'][i]['student']['no-cumple'];
  var studentCumple=generacion['ratings'][i]['student']['cumple'];
  var studentSupera=generacion['ratings'][i]['student']['supera'];
  var Expectativa=((studentCumple+studentSupera)*100/(studentNoCumple+studentCumple+studentSupera))
  sumaExpectativa+=Expectativa;
}
var porcentajeSatisfacion=parseInt((sumaExpectativa)/arrRatings.length);

return porcentajeSatisfacion;
}

console.log(porEstSatisfechos(generacion)+'%');

//PUNTUACIÓN PROMEDIO DE LOS PROFESORES
function puntPromedioProfesores(generacion){
var sumaPromProfe=0;

for(var i=0;i<arrRatings.length;i++){
  var profe=arrRatings[i]['teacher'];
  sumaPromProfe+=profe;
  }
  var promedio=sumaPromProfe/arrRatings.length;

  return promedio;
}

console.log(puntPromedioProfesores(generacion));

//PUNTUACIÓN PROMEDIO DE LOS JEDIS
function puntPromedioJedi(generacion){
  var sumaPromJedi=0;
  
  for(var i=0;i<arrRatings.length;i++){
    var jedi=arrRatings[i]['jedi'];
    sumaPromJedi+=jedi;
    }
    var promedio=sumaPromJedi/arrRatings.length;
  
    return promedio;
  }
  
  console.log(puntPromedioJedi(generacion));