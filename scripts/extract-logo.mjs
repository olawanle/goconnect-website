import fs from "fs"
import path from "path"

const html = fs.readFileSync("goconnect-v2.html", "utf8")
const match = html.match(/data:image\/jpeg;base64,([^"']+)/)
if (!match) {
  console.error("No logo found")
  process.exit(1)
}
const out = path.join("public", "goconnect-logo.jpg")
fs.mkdirSync("public", { recursive: true })
fs.writeFileSync(out, Buffer.from(match[1], "base64"))
console.log("Logo written:", fs.statSync(out).size, "bytes")
