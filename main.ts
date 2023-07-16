let message = "randin"
let encoded = Buffer.fromBase64(message)
control.simmessages.send("notify", encoded)
control.simmessages.onReceived("notify",(msg: Buffer) => {
console.log(msg.toBase64())
}
)