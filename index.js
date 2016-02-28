import { EventEmitter } from 'events'

import Dictionnary from './jpm'

let words = process.argv.slice(2)
let input = words.join(' ')

let jpmify = (string) => {
    for (var key in Dictionnary) {
        let regexp = new RegExp(key, 'gi');
        string = string.replace(regexp, Dictionnary[key])
    }

    return string
}

console.log(jpmify(input))

export default jpmify
