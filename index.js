class Formatter {
  //add static methods here
  static capitalize(input) {
    return input[0].toUpperCase() + input.slice(1)
  }

  static sanitize(input) {
    return input.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(input) {
    const except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const arr = input.split(" ")
    for(let i in arr) {
      if (!except.includes(arr[i].toLowerCase()) || i == 0) {
        arr[i] = this.capitalize(arr[i])
      }
    }
    return arr.join(" ")
  }
}