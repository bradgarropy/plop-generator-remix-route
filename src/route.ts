const route = {
    description: "💿 remix route",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "route name",
        },
    ],
    actions: [
        {
            type: "add",
            path: "app/routes/{{name}}.tsx",
            templateFile: "./templates/route.hbs",
        },
    ],
}

export default route
