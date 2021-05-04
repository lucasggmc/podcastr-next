export function convertDurationToTimeString(duration: number){
    //math.florr arredonda pra baixo
    const hours = Math.floor(duration / 3600); //3600 é 60 segundos * 60 minutos
    const minutes = Math.floor((duration % 3600) / 60); // pega quantos segundos sobraram e divide por 60 para ter o número de minutos
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

        return timeString;
}