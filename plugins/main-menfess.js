import fs from 'fs'
let handler = async (m, { conn, number, text, usedPrefix, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender] 
  
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
 
let id = + new Date
let tek = `╔═══════ ≪ °❈° ≫ ═══════╗\n⌘ нᴀι κᴀκ @${data.jid.split('@')[0]}, κᴀмu мᴇɴᴇʀιмᴀ ᴘᴇsᴀɴ мᴇɴғᴇss ɴιн κᴀκ\n╚═══════ ≪ °❈° ≫ ═══════╝`.trim();
let logs = `ᴘᴇsᴀɴ: ${pesan}\n╚════════ ≪ °❈° ≫ ════════╝\n\n`

let ssn = `〠 Dᴀʀɪ : ${name}\n╔══════ ≪ °❈° ≫ ══════╗\n\n⎙ Pᴇsᴀɴ : ${pesan}\n\n╚══════ ≪ °❈° ≫ ══════╝`
        let imgr = fla.getRandom()
        //Created By AL? Offc
       await conn.send3ButtonDoc(data.jid, tek, ssn, 'Balas', '.balasmenfess', 'Owner', '.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: '',
    mediaType: 2, 
    description: ,
    title: "𒈞sнuʀᴀɴʙoтz𒈞",
    body: wm,
    thumbnail: fs.readFileSync('./media/menfess.jpg'),
    sourceUrl: sgc
   }}}).then(() => {
           conn.send3ButtonDoc(m.chat, `╔════════ ≪ °❈° ≫ ════════╗\nBᴇʀʜᴀsɪʟ Mᴇɴɢɪʀɪᴍ Pᴇsᴀɴ Kᴇ @${jid.replace(/@.+/, '')}`, logs, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: '',
    mediaType: 2, 
    description: sgc,
    title: "𒈞sнuʀᴀɴʙoтz𒈞",
    body: wm,
    thumbnail: fs.readFileSync('./media/menfess.jpg'),
    sourceUrl: sgc
   }}})
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    
    }
handler.tags = ['main']
handler.help = ['menfess'].map(v => v + ' <nomor|nama|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true

export default handler

/* Made By FokusDotId (Fokus ID)
 * https://github.com/FokusDotId
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * Jangan lupa bawa udut minimal sukun🗿
 
 *Nᴜᴍᴘᴀɴɢ Nᴀᴍᴀ
 *Kᴀɴɢ Rᴇᴄᴏᴅᴇ : Aʟᴅɪ Lᴇsᴍᴀɴᴀ
 *Cʜᴀɴɴᴇʟ : AL? Offc
 
 *Minimal Jangan Di Hapos Anj
*/
