const horas    = document.getElementById('horas');
const minutos  = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    if (hour   < 10 ) hour = '0' + hour;
    if(minutes < 10 ) minutes = '0' + minutes;
    if(seconds < 10 ) seconds = '0' + seconds;
    horas.textContent = hour;
    minutos.textContent = minutes;
    segundos.textContent = seconds; 

    //Verificar o horário e exibir uma mensagem de saudação de acordo com o horário

    if(hour >= 6 && hour <12){
        saudacao.textContent = "Bom dia!";
    } else if (hour >= 12 && hour < 18){
        saudacao.textContent = "Boa tarde!";
    } else{
        saudacao.textContent = "Boa noite!";
    }
});