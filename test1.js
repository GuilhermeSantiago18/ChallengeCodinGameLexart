function filteredArray(arr) {
  const filterByLetters = arr.filter((element) => element !== Number(element))
  const filterByNumbers = arr.filter((element) => element === Number(element))
  const filterMaxNumber = Math.max(...filterByNumbers);

  return `filter by letters [ ${filterByLetters} ] for numbers [ ${filterByNumbers} ] and maxNumber is [ ${filterMaxNumber} ]`
}
console.log(filteredArray([ 'a', 10, 'b', 'hola', 122, 15,50,200,100,123,50000,22,59999,'oi','kk','okok']))