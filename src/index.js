module.exports = function check(str, bracketsConfig) {
    const is_pair = (l, r) => {
        const pairs = new Map(bracketsConfig)
        return pairs.get(l) === r
    }

    const left_brackets = new Set(bracketsConfig.map(x => x[0])),
          right_brackets = new Set(bracketsConfig.map(x => x[1])),
          stack = []
    
    let last_left = ''
    for (let c of str) {
        if (left_brackets.has(c) && !is_pair(last_left, c)) {
            stack.push(c)
            last_left = c
        } else {
            if (is_pair(last_left, c)) {
                stack.pop()
                last_left = stack.slice(-1)[0]
            } else {
                return false
            }
        }
    }
    if (!stack.length) {
        return true
    } else {
        return false
    }
}
