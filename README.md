Modificaicon 2
Nueva Modificacion
gTimer
======

### Contar hacia atras es simple :)!

gTimer es una librería javascript para hacer conteos regresivos (countdowns) simples. Una vez iniciado el contador 
se puede detener y luego continuar, terminar antes de tiempo o cancelar. Al finalizar el conteo se ejecuta una función.


****

Estos son los métodos disponibles

****


###  Funciones actualmente soportadas
    
**'init'** - *inicializa gTimer*

+	gTimer.init({params});

**'start'** - *inicia la cuenta regresiva*

+	gTimer.start();

**'stop'** - *detiene la cuenta hasta que se reinicie*

+	gTimer.stop();

**'resume'** - *continúa la cuenta si se ha detenido con gTimer.stop()*

+	gTimer.resume();

**'finish'** - *termina la cuenta por adelantado y llama al método a ejecutarse al terminar el conteo*

+	gTimer.finish();

**'clear'** - *termina la cuenta y reinicia el contador*

+	gTimer.clear();



****



###  Parámetros de inicialización


**"waitTime"** - *tiempo de duración del contador, en milisegundos*

+	default: 3000 - *3 segundos*

**"onFinishFunction"** - *función que se ejecutará al terminar el contador*

+	default: alert("Countdown finish!")


****
