class HashMap {
  constructor(capacity = 5) {
    this.length = 0
    this._capacity = capacity
    this._slots = new Array(5)
  }

  reduce(fn, initialValue) {
    let val = initialValue
    for (const slot of this._slots) {
      if (slot) {
        let item = slot
        while (item) {
          val = fn(val, item.key, item.value)
          item = item.next
        }
      }
    }
    return val
  }

  toString() {
    return JSON.stringify(
      this.reduce((total, key, value) => {
        return [...total, [key, value]]
      }, [])
    )
  }

  set(key, value) {
    const index = this._findSlot(key)
    if (this._slots[index]) {
      let item = this._slots[index]
      let prevItem = item
      while (item) {
        if (item.key == key) {
          item.value = value
          break
        } else {
          prevItem = item
          item = item.next
        }
      }
      if (!item) {
        prevItem.next = {
          key,
          value,
          next: null
        }
      }
    } else {
      this._slots[index] = {
        key,
        value,
        next: null
      }
    }
    this.length++
  }

  get(key) {
    const index = this._findSlot(key)
    if (!this._slots[index]) {
      throw new Error('Key error')
    }
    let item = this._slots[index]
    while (item) {
      if (item.key == key) {
        return item.value
      }
      item = item.next
    }
    if (!item) throw new Error('Key error')
  }

  remove(key) {
    const index = this._findSlot(key)
    if (!this._slots[index]) throw new Error('Key error')
    let item = this._slots[index]
    let prevItem = null
    while (item) {
      if (item.key == key) {
        if (!prevItem) this._slots[index] = item.next
        else prevItem.next = item.next
        break
      } else {
        prevItem = item
        item = item.next
      }
    }
    this.length--
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key)
    const start = hash % this._capacity

    const index = start % this._capacity
    return index
  }

  static _hashString(string) {
    let hash = 5381
    for (let i = 0; i < string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i)
      hash = hash & hash
    }
    return hash >>> 0
  }
}

module.exports = HashMap
