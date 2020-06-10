class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.split(" ").map((word) => word.replace(/[^A-Za-z0-9-']+/g, '')).join(" ")
  }

  static titleize(string) {
    let filler = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    // Capitalize all not filler words
    let newString = string.split(" ").map(function(word) {
      if (!filler.includes(word)) {
        return Formatter.capitalize(word)
      } else {
        return word
      }
    }).join(" ")
    // Capitalize first letter every time
    return Formatter.capitalize(newString)
  }
}