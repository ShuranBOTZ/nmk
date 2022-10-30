let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ok.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": -, 
"productId": "-",
"title": `Jasa Sewa ShuranBotz`,
"description": `HALO BANG`,
"currencyCode": "-",
"bodyText": wm,
"footerText": wm,
"priceAmount1000": "-",
"productImageCount": -,
"firstImageId": -,
"salePriceAmount1000": "-",
"retailerId": wm,
"url": "-"
},
"businessOwnerJid": "-",
}
}), { userJid: m.chat, quoted: ftroli })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

handler.limit = true

export default handler
