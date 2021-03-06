const Config = require("./Config")
const jsonStrategy = require("./strategies/json")
const iniStrategy = require("./strategies/ini")

const iniConfig = new Config(iniStrategy)
const dataPath = "./data/antigravity.ini"

iniConfig.set("url", {
    scheme: "https",
    host: "antigravity.sh",
    port: "443",
    path: "/api/initiate"
})
iniConfig.save(dataPath).then(() => {
    iniConfig.load(dataPath).then( () => {
        console.log(iniConfig.data)
        iniConfig.set("storage.provider.name", "aws-s3")
        iniConfig.set("storage.provider.url.host", "defextropia.s3.aws.com")
        console.log(iniConfig.data)
        iniConfig.save("./data/antigravity.ini")
    })
})