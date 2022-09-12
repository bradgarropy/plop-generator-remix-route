import {NodePlopAPI} from "plop"

import route from "./route"

const generator = async (plop: NodePlopAPI): Promise<void> => {
    await plop.load("@bradgarropy/plop-helper-includes")

    plop.setDefaultInclude({generators: true})
    plop.setGenerator("route", route)
}

export = generator
