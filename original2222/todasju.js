class Juego {

    mezclar (arr){
         var i,j,temp;
     for (i = arr.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
     }
     return arr;

    }
    
    pedirCartaJugador (mazo){
      
        if (mazo[cont].texto==='A') {
           
            mazo[cont].valor=parseInt(prompt('Que valor desea darle ingrese el número 11 o 1'));
            let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
            console.log(cartaJugada);
            let num=parseInt(mazo[cont].valor);
            puntajeJugardor.push(num);
            if (mazo[cont].palo.figura ==='♦') {
                console.log(mazo[cont].palo.figura);
                document.getElementById('cambioCarta').src='cartas/brillo/BA.png';
                cont++;
            } else if(mazo[cont].palo.figura==='♠' ){
                console.log(mazo[cont].palo.figura);
                document.getElementById('cambioCarta').src='cartas/corazon negro/CNA.png';
                cont++;    
            }else if (mazo[cont].palo.figura==='♥' ) {
                console.log(mazo[cont].palo.figura);
                document.getElementById('cambioCarta').src='cartas/corazon rojo/CRA.png';
                cont++;    
            } else if(mazo[cont].palo.figura ==='♣'){
                console.log(mazo[cont].palo.figura);
                document.getElementById('cambioCarta').src='cartas/trebol/TA.png';
                cont++;     
            }
            puntajeJugardor.forEach(function(numero){
                suma += numero;
            });
            
            document.getElementById('result').innerHTML="Resultado : "+suma;
            suma=0;


        }else if( mazo[cont].texto==='2'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/B2.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CN2.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CR2.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/T2.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='3'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/B3.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CN3.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CR3.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/T3.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='4'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/B4.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CN4.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CR4.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/T4.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='5'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/B5.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CN5.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CR5.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/T5.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='6'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/B6.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CN6.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CR6.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/T6.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='7'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/B7.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CN7.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CR7.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/T7.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='8'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/B8.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CN8.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CR8.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/T8.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='9'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/B9.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CN9.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CR9.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/T9.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='10'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/B10.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CN10.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CR10.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/T10.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='J'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/BJ.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CNJ.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CRJ.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/TJ.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='Q'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
        console.log(cartaJugada);
        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/brillo/BQ.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CNQ.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CRQ.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/TQ.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }else if( mazo[cont].texto==='K'){
        let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+ 
        mazo[cont].palo.figura +' texto = '+mazo[cont].texto;

        console.log(cartaJugada);

        let num=parseInt(mazo[cont].valor);
        puntajeJugardor.push(num);
        if (mazo[cont].palo.figura ==='♦' ) {
            console.log(mazo[cont].palo.figura);
            
            document.getElementById('cambioCarta').src='cartas/brillo/BK.png';
            cont++;
        } else if(mazo[cont].palo.figura==='♠' ){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon negro/CNK.png';
            cont++;    
        }else if (mazo[cont].palo.figura==='♥' ) {
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/corazon rojo/CRK.png';
            cont++;    
        } else if(mazo[cont].palo.figura ==='♣'){
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src='cartas/trebol/TK.png';
            cont++;     
        }
        puntajeJugardor.forEach(function(numero){
            suma += numero;
        });
        document.getElementById('result').innerHTML="Resultado : "+suma;
        suma=0;


    }

    }
    pedirCartaCpu = (mazo) => {
        puntajeCPU.forEach(function(n){
            console.log(n);
            suma1 += n;
        });
        if (suma1<=21) {
            if (mazo[cont].texto==='A') {
                mazo[cont].valor=1;
                let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
                console.log(cartaJugada);
                let numer=parseInt(mazo[cont].valor);
                puntajeCPU.push(numer);
                cont++;
                suma1=0;

                this.pedirCartaCpu(mazo);
            }else{
                let cartaJugada='carta = ' +' valor = '+ mazo[cont].valor +' palo = '+mazo[cont].palo.figura +' texto = '+mazo[cont].texto;
                console.log(cartaJugada);
                let numer=parseInt(mazo[cont].valor);
                puntajeCPU.push(numer);
                cont++;
                suma1=0;
                this.pedirCartaCpu(mazo);
        }
        }else if (suma1>21) {
                suma1=0;
                puntajeCPU.pop();
                this.validar();

        }
       
    }




    // llego la hora de la validacion :
    validar () {
        puntajeCPU.forEach(function(n){
            console.log(n);
            suma1 += n;
        });
        puntajeJugardor.forEach(function(numero){
            console.log(numero);
            suma += numero;
        });
        console.log(puntajeCPU);
        document.getElementById('resultadoJuga').innerHTML='Resultado Jugador :'+ suma;
        document.getElementById('resultadoCPU').innerHTML='Resultado CPU :'+suma1;

        console.log(suma);
        console.log(suma1);
        if (suma<=21 && suma1<suma) {
            console.log('ganaste');
        document.getElementById('res').innerHTML='Ganaste';


        } else if(suma>21){
            console.log('perdiste');
        document.getElementById('res').innerHTML='Perdiste';


        }else if (suma===suma1 && suma<=21 && suma1<=21) {
            console.log('empate');
        document.getElementById('res').innerHTML='Empate';


        }else if (suma<suma1 && suma<=21 && suma1<=21) {
            console.log('perdiste');
            document.getElementById('res').innerHTML='Perdiste';



        }
    }

}