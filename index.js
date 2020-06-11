class Formatter {
  //add static methods here
  static capitalize (str){
   let first = str.charAt(0).toUpperCase()
   let rest = str.slice(1)
   return first + rest
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let capString = string.charAt(0).toUpperCase() + string.slice(1)
    let excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringArray = capString.split(" ")
    return stringArray.map(string => {
      if (excludedWords.includes(string)) {
        return string
      } else {
        return string.charAt(0).toUpperCase() + string.slice(1)
      }
    }).join(" ")
  }



}