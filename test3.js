function generalId(length) {
    let result = ''
    for (let i = 0; i < length; i ++) {
        result += generatePattern(length) + '-'
    }
        return result.slice(0,-1)
  }
  
  function generatePattern(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let pattern = '';
  
    for (let i = 0; i < length; i++) {
      pattern += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return pattern
  }
  console.log(generalId(4))