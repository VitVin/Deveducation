let rating = 76;
switch (!isNaN(rating)){
    case ((rating >= 0) && (rating <=19)):
        console.log('Оценка F')
        break
    case (rating >= 20 && rating <=39):
        console.log('Оценка E')
        break
    case (rating >=40 && rating <=59):
        console.log('Оценка D')
        break
    case (rating >=60 && rating <=74):
        console.log('Оценка C')
        break
    case (rating >=75 && rating <=89):
        console.log('Оценка B')
        break
    case (rating >=90 && rating <=100):
        console.log('Оценка A')
        break
    default:
        console.log('Проверьте правильность вводных данных!')
}