`Найти расстояние между двумя точками в двухмерном декартовом пространстве.`

let distpoint = function(x,y,x1,y1)
{
    let dist = 0;

    dist = Math.sqrt(Math.pow(x - x1, 2) + Math.pow(y - y1, 2))
    console.log(dist);
}
distpoint(1,3,4,-2);