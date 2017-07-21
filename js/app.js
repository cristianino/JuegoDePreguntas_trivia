var preguntas=[
  'Supongamos que tienes algo de dinero. ¿Es más seguro meterlo en un solo negocio/ inversión o en varios negocios/inversiones?',
  'Imagínate que en los próximos 10 años los precios de las cosas que sueles comprar se duplican. Si también el nivel de tus ingresos se duplica, ¿cuánto podrás comprar?',
  'Supongamos que depositas un dinero en el banco durante dos años que no podrás tocar, y el banco acuerda añadirte un 15% a esa cuenta cada año como pago de intereses. ¿Añadirá más dinero el segundo año respecto al primero, o liquidará la misma cantidad los dos años?',
  'Imagínate que tienes 100.000 pesos en una cuenta de ahorro y el banco acuerda añadirte en tu cuenta el 10% cada año. ¿Cuánto dinero de más tendrás después de cinco años si no sacas ni un centavo de tu cuenta?',
  'Imagine que tiene algo de dinero ahorrado. ¿Qué es más seguro?',
  '¿Qué porcentaje de mis ingresos destino al ahorro?',
  'Si tengo ahorros, ¿dónde los tengo?',
  '¿Pido dinero prestado a mis familiares?',
  'Cuando pienso en el futuro…',
  'Si tuviese dinero invertido en acciones, ¿qué haría si viese que bajan de precio?',
  'Imagine que tiene algo de dinero. ¿Es más seguro invertirlo en una sola cosa o en varias?',
  'Necesita tomar prestados 100.000 pesos ¿Cuál es la cantidad más baja a devolver?',
  '¿Qué hago el día de cobro de la nómina?',
  '¿Llevo un presupuesto quincenal o mensual de los gastos que tendré en ese periodo?',
  '¿Se salen de mis cuentas las facturas de agua, luz o demás suministros?',
  '¿Cómo está mi cuenta corriente a final de mes?',
  'Si la tengo…¿Cómo está mi tarjeta de crédito a final de mes?',
  '¿Me retraso en el pago de las deudas?',
  '¿Cómo pago mis vacaciones?',
  '¿Cuánto tiempo podría mantener mi nivel de vida en caso de perder el empleo?',
  '¿Tengo previsto que llegarán los gastos anuales como seguros, impuestos, etc?',
  '¿Para qué creo que sirve un seguro de vida?',
  '¿Tengo un producto de ahorro/inversión para mi jubilación?',
  'Si tuviese dinero invertido en acciones, ¿qué haría si viese que bajan de precio?',
];

var respuestas=[
  ['A) Varios negocios o inversiones','B)Un solo negocio o inversión','C) No sé'],
  ['A) Menos', 'B) Lo mismo', 'C) Más'],
  ['A) Más', 'B) La misma', 'C) No sé'],
  ['A) Más de 150.000 pesos', 'B) Exactamente 150.000 pesos', 'C) Menos de 150.000 pesos'],
  ['A. Dejar que le roben la cartera', 'B. Colocarlo en un solo negocio o inversión', 'C. Llevar los fajos de billetes en la mano por la calle', 'D. Colocarlo en múltiples negocios o inversiones'],
  ['a) Separo, por defecto, el 10% o más de mi cobro mensual', 'b) Guardo una cantidad fija cada mes', 'c) Solo guardo si me ha sobrado algo a final de mes'],
  ['a) Invertido', 'b) En el banco', 'c) En casa'],
  ['a) Nunca', 'b) A veces', 'c) Siempre'],
  ['a) Creo que debo empezar a planificarlo ya', 'b) No creo que pueda reunir suficiente dinero', 'c) No pienso en él, creo en el día a día'],
  ['a) Aprovecharía para comprar más barato', 'b) No sabría que hacer', 'c) Rescataría el dinero'],
  ['1. En varias', '2. En una sola casa'],
  ['1. 105.000 pesos', '2. 100.000 pesos más el 3%'],
  ['a) Separo algo para mi ahorro y cumplo con los pagos conforme a mi presupuesto mensual', 'b) Planteo los gastos de ese mes y pago lo que debo', 'c) Salgo a gastar y me doy algún capricho'],
  ['a) Siempre', 'b) A veces', 'c) Nunca'],
  ['a) Nunca', 'b) A veces', 'c) Cada mes'],
  ['a) Tengo lo suficiente para hacer todos los pagos del mes que viene', 'b) Si me pagan un día tarde tendré problemas', 'c) Está a cero'],
  ['a) Apenas la he usado', 'b) Me queda la mitad del crédito disponible', 'c) Tiene el crédito agotado'],
  ['a) Nunca', 'b) A veces', 'c) Siempre'],
  ['a) Con mis ahorros', 'b) Aprovecho paquetes vacacionales', 'c) Con el crédito de la tarjeta y lo voy devolviendo'],
  ['a) Seis meses', 'b) Un mes', 'c) Una semana'],
  ['a) Tengo previsto un fondo específico para esos pagos', 'b) No pienso pero suelo tener algo apartado para eso', 'c) Siempre me pillan por sorpresa'],
  ['a) Para cubrir mis responsabilidades económicas','b) Solo lo necesita quien tenga una profesión de riesgo', 'c) No sirve para nada'],
  ['a) Si, y me he asesorado con un profesional', 'b) Estoy valorando la posibilidad de contratar uno', 'c) No creo en guardar para la jubilación. Debería pagármela el estado'],
  ['a) Aprovecharía para comprar más barato', 'b) No sabría que hacer' ,'c) Rescataría el dinero']
];

var respuestasCorrectas=[
  0,
  1,
  0,
  0,
  3,
  4,
  4,
  4,
  4,
  4,
  0,
  1,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
];
var puntaje = 0;
var respuestas_posible;
var txt_respuestas ='';
$(document).ready(nuevaPregunta());
$('#nuevaPregunta').click(nuevaPregunta());
document.getElementById('puntaje').innerHTML = 'Score: '+puntaje;
function nuevaPregunta(){
  indice_aleatorio= Math.floor(Math.random()*preguntas.length);
  respuestas_posible = respuestas[indice_aleatorio];
  txt_respuestas ='';
  for (var i = 0; i < respuestas_posible.length; i++) {
    txt_respuestas += '<a href="#" class="respu list-group-item list-group-item-action" onclick="comprobar('+respuestasCorrectas[indice_aleatorio]+','+i+')" >'+respuestas_posible[i]+'</a>';
  }
  document.getElementById('respuestas1').innerHTML = txt_respuestas;
  document.getElementById('pregunta').innerHTML = preguntas[indice_aleatorio];
  preguntas.splice(indice_aleatorio,1);
  respuestas.splice(indice_aleatorio,1);
  respuestasCorrectas.splice(indice_aleatorio,1);
  if (preguntas.length==0) {
    document.getElementById('puntaje').innerHTML = 'Game Over'
    var elemento = document.getElementsByClassName("respu");
    for(var i = 0; i < elemento.length; i++){
        elemento[i].className += " disabled";
      }
    $('#nuevaPregunta').addClass('disabled');
    document.getElementById('respuestas1').innerHTML = '<button type="button" class="btn btn-primary" onclick="refresh()">Volver a jugar</button>';
    document.getElementById('pregunta').innerHTML = 'Tu puntaje fue: '+puntaje;
  }
}
function comprobar(value, value2){

  if (value==4) {
    if (value2==0) {
      puntaje = puntaje +10;
      document.getElementById('puntaje').innerHTML = 'Score: '+puntaje;
      alert('10 puntos');
      console.log(value+' y'+value2);
      nuevaPregunta();
    }
    if (value2==1) {
      puntaje = puntaje +5;
      document.getElementById('puntaje').innerHTML = 'Score: '+puntaje;
      alert('5 puntos');
      console.log(value+' y'+value2);
      nuevaPregunta();
    }
    if (value2==2) {
      puntaje;
      document.getElementById('puntaje').innerHTML = 'Score: '+puntaje;
      alert('0 puntos');
      console.log(value+' y'+value2);
      nuevaPregunta();
    }
  }else {
    if (value2==value) {
      puntaje++;
      document.getElementById('puntaje').innerHTML = 'Score: '+puntaje;
      alert('1 puntos');
      console.log(value+' y'+value2);
      nuevaPregunta();
    }else {
      puntaje;
      document.getElementById('puntaje').innerHTML = 'Score: '+puntaje;
      alert('0 punto');
      console.log(value+' y'+value2);
      nuevaPregunta();
    }
  }
}
function refresh(){
  location.reload(true);
}
