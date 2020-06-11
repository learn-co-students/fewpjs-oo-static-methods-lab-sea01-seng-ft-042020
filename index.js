class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    let arr = string.split(' ')
    let san = arr.map(word => {return word.replace(/[^A-Za-z0-9-']+/g, '');})
    return san.join(' ')
  }

  static titleize(string){
    let arr = string.split(' ')
    let capital = arr.map(word => {
      let t = word.toLowerCase()
      if(t != "a" && t != "the" && t != "an" && t != "but" && t != "of" && t != "and" && t != "for" && t != "at" && t != "by" && t != "from"){
        return this.capitalize(t)
      }
      return t
    })
    let resp = capital.join(' ')
    return this.capitalize(resp)
  }

}