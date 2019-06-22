//Set não aceita repetição e é não indexado
const times = new Set()
times.add('Vasco')
times.add('Corinthias').add('Palmeiras').add('São Paulo').add('Palmeiras').add('Santos')

console.log(times)
console.log(times.size)
console.log(times.has('São Paulo'))
times.delete('Corinthias')
console.log(times.size)