module.exports = {
    apps: [
        {
            name: "project",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
            }
        }
    ]
}