/**
 * gTimer - Countdown library V1.0
 * 
 * fork(nicate) me: https://github.com/elGiank/gTimer
 *
 * Examples and Documentation - http://needim.github.com/noty/
 *
 * Licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 */


(function(gTimer, undefined){

   // Parametrisable properties
	var waitTime;
	var onFinishFunction;

	//variable del timer
	var timer;

	//For control de stop and finish metods for the countdown
	var finishTime;
	var timeLeft; //alamacena el tiempo que queda desde que se detubo el contador hasta el momento en el que debe terminar


	// Metodos publicos
	//Inicializa la libreria con sus parametros, son opcionales
	gTimer.init = function (initParams){
		if(initParams){
			waitTime = initParams.waitTime || 3000; //tiempo conteo hacia atras en milisegundos
			onFinishFunction = initParams.onFinishFunction || function() {alert("Countdown finish!");}; // funci?n que se ejecutar? al terminar el conteo
		} else{
			waitTime =  3000;
			onFinishFunction = function() {alert("Countdown finish!");};
		}
	};

	//Inicia el contador con los parametros enviados
	gTimer.start = function(){
		if(waitTime && onFinishFunction){
			var startTime = new Date();// ver si realmente es necesario, facil abajo puede hacer solamente new Date().getTime()
			finishTime = new Date(startTime.getTime() + waitTime); // con esto deberia poder guardar el milisegundo exacto en la que terminar? el conteo
			timer = setTimeout(onFinishFunction, waitTime);
		}
	};

	//Detiene el contador hasta que se reinicie con gTimer.resume
	//gTimer.wait(){ // -> no se q nombre ponerle al metodo de hacer que se detenga el contador sin termionarlo (finish)
	gTimer.stop = function(){
		if(timer){
			var stopTime = new Date();// ver si realmente es necesario, facil abajo puede hacer solamente new Date().getTime()
			timeLeft = finishTime.getTime() - stopTime.getTime();
			clearTimeout(timer);
		}
	};

	//continua el contador si se detiene con gTimer.stop, de lo contrario no hace nada.
	gTimer.resume = function(){
		if(timer != undefined && timeLeft != undefined ){
			timer = setTimeout(onFinishFunction, timeLeft);
		}
	};

	//da por terminado el contador y ejecuta la funcion como si hubiera pasado el tiempo previsto
	gTimer.finish = function(){
		if(timer){
			gTimer.clear();
			onFinishFunction();// creo que con esto llamo a que se ejecute la funcion contenia en la varible (vamos q las funciones son objetos, osea variables.. si, BRAIN XPLOTE)
		}
	};

	//Detiene el contador y no ejecuta ninguna funci?n.
	gTimer.clear = function(){
		if(timer){
			clearTimeout(timer);
			clearTimerData();
		}
	};

   // Metodo privado
	//Limpia las variables con las que trabaja el contador regresivo, pero no las de inicio.
	function clearTimerData(){
		finishTime = undefined;
		timeLeft = undefined;
		timer = undefined;
   };

})(window.gTimer = window.gTimer || {});