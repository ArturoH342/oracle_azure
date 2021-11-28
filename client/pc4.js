

function main(){

    var a = document.getElementById("hora");
    var b = document.getElementById("visita");
    var d = new Date() ;
    var hora = d.getHours() ;
    var min = d.getMinutes();
    var sec = d.getSeconds() ; 
    var numero_ac = null ;
    var numero_ac_ma = null ;

    function tiempo_reloj(){
        var siste_ho ;
        if(hora<12)
            siste_ho = "am";
        else 
            siste_ho = "pm";

        return siste_ho;
    }

    a.innerHTML = hora + ":" + min +  ":" +sec + " " +  tiempo_reloj() ; 


    fetch('http://129.213.123.223:8084/getVisita')
    .then(response => response.json())
    .then(data => {
        
        console.log(data.data);
        data.data.forEach(element => {
            
            
            numero_ac = parseInt(element);
            console.log(numero_ac);
            numero_ac_ma = numero_ac + 1;  
            console.log(numero_ac_ma);
            b.innerHTML = numero_ac_ma ;
            

            fetch('http://129.213.123.223:8085/postVisita', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    numero_actual_mas_uno: numero_ac_ma,
                    numero_actual: numero_ac
                })
                }).then(response => response.json())
                .then(() => {
                // alert('Juego guardado')
                    console.log("NUMERO GUARDADO")
                })
                .catch(error => {
                    console.log(error)
                    console.log('Hubo un error con la petición')
            })


        });
    });
    
}


window.onload = main ;


