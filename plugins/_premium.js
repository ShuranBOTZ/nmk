let handler = m => m

handler.before = async function (m) {
    let user = db.data.users[m.sender]                              
    if (new Date() - user.premiumTime > 0) {
            user.premiumTime = 9999998
            user.premium = true
        }
    }

export default handler
