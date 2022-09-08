import {NodePlopAPI} from "node-plop"

import route from "./route"

const generator = (plop: NodePlopAPI): void => {
    plop.setDefaultInclude({generators: true})
    plop.setGenerator("route", route)
}

export default generator
