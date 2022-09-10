import {NodePlopAPI} from "plop"

import route from "./route"

const generator = (plop: NodePlopAPI): void => {
    plop.setDefaultInclude({generators: true})

    plop.setHelper("includes", (array, string, options) => {
        if (array.includes(string)) {
            return options.fn(this)
        } else {
            return options.inverse(this)
        }
    })

    plop.setGenerator("route", route)
}

export = generator
