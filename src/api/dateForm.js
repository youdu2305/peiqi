const format = (fmt) => {
    let val = ''
    const arr = []
    val = fmt.replace(/\//g, '-')
    arr.push(...(val.split('-')))
    if (arr[1] < 10) (arr[1] = `0${arr[1]}`)
    if (arr[2] < 10) (arr[2] = `0${arr[2]}`)
    return arr.join('-')
}

export default format
