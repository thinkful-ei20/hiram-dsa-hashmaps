const HashMap = require('./hash-map')

function hasPalindrome(str) {
  const letters = new HashMap()
  for (const char of str) {
    try {
      let count = letters.get(char)
      count++
      letters.set(char, count)
    } catch (e) {
      letters.set(char, 1)
    }
  }
  if (letters.length % 2 === 0) {
    return letters.reduce((total, key, value) => {
      if (!total) return total
      if (value % 2 !== 0) return false
      return total
    }, true)
  }
  return (
    letters.reduce((total, key, value) => {
      if (total > 1) return false
      if (value % 2 !== 0) return total + 1
      return total
    }, 0) === 1
  )
}

function main() {
  const strings = [
    'rraacce', // true
    'barb', // false
    'ttaa', // true
    'iilloob' // true
  ]

  for (const string of strings) {
    console.log(`${string}: ${hasPalindrome(string)}`)
  }
}

if (require.main === module) {
  main()
}

module.exports = hasPalindrome
