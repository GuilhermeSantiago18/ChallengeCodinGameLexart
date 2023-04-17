const operations = {
    sum: (arr) => arr.reduce((acc, curr) => acc + curr,0),
    sub: (arr) => arr.reduce((acc, curr) => acc - curr,0),
    mult: (arr) => arr.reduce((acc, curr) => acc * curr, 1),
    div: (a, b) => {
      if (b === 0) throw new Error('Dividend cant be 0')
      return a/b
    }  
  }

const sum = operations.sum([1,2,3])

const sub = operations.sub([5,10,20])

const mult = operations.mult([5,2,3,5])

const div = operations.div(550,20)
