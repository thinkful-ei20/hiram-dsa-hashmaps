const HashMap = require('./hash-map')

function anagramGrouping(strings) {
  const map = new HashMap()
  for (const str of strings) {
    try {
      const group = map.get(
        str
          .split('')
          .sort()
          .join('')
      )
      group.push(str)
    } catch (e) {
      map.set(
        str
          .split('')
          .sort()
          .join(''),
        [str]
      )
    }
  }
  return map.reduce((total, key, value) => [...total, value], [])
}

function main() {
  const strings = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']

  const groups = anagramGrouping(strings)
  for (const group of groups) {
    console.log(group)
  }
}

if (require.main === module) {
  main()
}

module.exports = anagramGrouping
