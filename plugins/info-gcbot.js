import fs from 'fs'
import fetch from 'node-fetch'
 let handler = async(m, { conn }) => { 

         let pp = fs.readFileSync('./thumbnail.jpg')
         let gc1 = 'https://chat.whatsapp.com/JdE67kv45hGIx3G8SL5EZI'
         let caption = `*Mʏ Gᴄ *`
         await conn.sendButtonDoc(m.chat, caption, wm, 'Owner', '.owner', m, { contextInfo: { 
             externalAdReply: {
               sourceUrl: `${gc1}`,
               title: 'My Group Official', 
               body: '𝚂𝙷𝚄𝚁𝙰𝙽𝙱𝙾𝚃𝚉-𝙼𝙳',
               thumbnail: pp
             } 
         }})
         }
 handler.help = ['gcbot']
handler.tags = ['info']
handler.command = /^gcbot$/i
 export default handler