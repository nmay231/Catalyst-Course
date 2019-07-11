async function doMath() {
    let result
    try {
        result = await slowMath.add(6, 2)
        console.log('6 + 2 = ' + result)
        result = await slowMath.multiply(result, 2)
        console.log('* 2 = ' + result)
        result = await slowMath.divide(result, 4)
        console.log('/ 4 = ' + result)
        result = await slowMath.subtract(result, 3)
        console.log('- 3 = ' + result)
        result = await slowMath.add(result, 98)
        console.log('+ 98 = ' + result)
        result = await slowMath.remainder(result, 2)
        console.log('(mod) 2 = ' + result)
        result = await slowMath.multiply(result, 50)
        console.log('* 50 = ' + result)
        result = await slowMath.remainder(result, 40)
        console.log('(mod) 40 = ' + result)
        result = await slowMath.add(result, 32)
        console.log('Adding 32 leaves the final result as: ' + result)
    } catch (err) {
        console.error(err)
    }
}

doMath()