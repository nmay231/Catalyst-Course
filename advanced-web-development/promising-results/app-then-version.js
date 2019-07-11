// slowMath.add(6, 2)
slowMath.add(1, 1)
    .then((result) => {
        console.log('6 + 2 = ' + result)
        return slowMath.multiply(result, 2)
    })
    .then((result) => {
        console.log('* 2 = ' + result)
        return slowMath.divide(result, 4)
    })
    .then((result) => {
        console.log('/ 4 = ' + result)
        return slowMath.subtract(result, 3)
    })
    .then((result) => {
        console.log('- 3 = ' + result)
        return slowMath.add(result, 98)
    })
    .then((result) => {
        console.log('+ 98 = ' + result)
        return slowMath.remainder(result, 2)
    })
    .then((result) => {
        console.log('(mod) 2 = ' + result)
        return slowMath.multiply(result, 50)
    })
    .then((result) => {
        console.log('* 50 = ' + result)
        return slowMath.remainder(result, 40)
    })
    .then((result) => {
        console.log('(mod) 40 = ' + result)
        return slowMath.add(result, 32)
    })
    .then((result) => {
        console.log('Adding 32 leaves the final result as: ' + result)
    })
    .catch((err) => {
        console.error(err)
    })