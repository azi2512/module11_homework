export function getPercents(percent, number) {
    let result;
    if ((typeof percent === 'number' && !isNaN(percent)) && (typeof number === 'number' && !isNaN(number))) {
        result = number * percent / 100
    } else {
        result = 'Неверные данные'
    }
    return result;
  }

