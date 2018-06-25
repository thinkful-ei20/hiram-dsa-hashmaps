const HashMap = require('./hash-map-separate-chaining')

function main() {
  const lotr = new HashMap()
  lotr.set('Hobbit', 'Bilbo')
  lotr.set('Hobbit', 'Frodo')
  lotr.set('Wizard', 'Gandolf')
  lotr.set('Human', 'Aragorn')
  lotr.set('Elf', 'Legolas')
  lotr.set('Maiar', 'The Necromancer')
  lotr.set('Maiar', 'Sauron')
  lotr.set('RingBearer', 'Gollum')
  lotr.set('LadyOfLight', 'Galadriel')
  lotr.set('HalfElven', 'Arwen')
  lotr.set('Ent', 'Treebeard')

  return lotr
}

if (require.main === module) {
  const lotr = main()
  console.log(lotr.get('Maiar'))
  console.log(lotr.toString())
}

module.exports = main()
