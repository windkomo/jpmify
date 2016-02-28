import { EventEmitter } from 'events'

import Dictionnary from '../jpm.json'

let words = process.argv.slice(2)
let input = words.join(' ')

export default (string) => {
    for (var key in Dictionnary) {
        let regexp = new RegExp(key, 'gi');
        string = string.replace(regexp, Dictionnary[key])
    }

    return string
}
