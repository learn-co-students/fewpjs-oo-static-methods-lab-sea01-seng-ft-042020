class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    let arr = str.split(" ")
    let newArr = arr.map(word => {return word.replace(/[^A-Za-z0-9-']+/g, '');})
    return newArr.join(' ');
  }

  static titleize(str) {
    let arr = str.toLowerCase().split(' ');
    let newArr = arr.map(t => {
      if (t != 'a' && t != 'the' && t != 'an' && t != 'but' && t != 'of' && t != 'and' && t != 'for' && t != 'at' && t != 'by' && t != 'from') {
        return this.capitalize(t)
      }
      return t
    })
    return this.capitalize(newArr.join(' '))
  }
}
