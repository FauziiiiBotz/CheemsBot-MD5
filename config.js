const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['14144550783'] //ur owner number
global.ownername = "FauziGanz" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: FauziSlebew" //ur github or insta name
global.location = "Indonesia, Banjarmasin, Hss" //ur location

//bot bomdy 
global.owner = ['14144550783'] //ur number
global.ownernomer = "14144550783" //ur number
global.ownertag = '14144550783' //ur tag number
global.premium = [''] //ur premium number
global.botname = '𝙁𝙖𝙪𝙯𝙞 𝑩𝑶𝑻𝒁ラ' //ur bot name
global.ownername = "Fauzi Xeon"
global.linkz = "https://Instagram.com/fauzibeban__" //your theme url which will be displayed on whatsapp
global.websitex = "https://Instagram.com/fauzibeban__" //ur website to be displayed
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD5' //script link
global.themeemoji = "🔥" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "𝙁𝙖𝙪𝙯𝙞 𝑩𝑶𝑻𝒁ラ" //ur sticker watermark author
global.wm = "𝙁𝙖𝙪𝙯𝙞 𝑩𝑶𝑻𝒁ラ." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Done✓',
    admin: 'Lu Admin Bang?',
    botAdmin: 'Bot Aja Bukan Admin Kontol!',
    premime: 'Fitur Spesial Premium Jika Anda Ingin Mendaftar Jenis Sewa',
    owner: 'Khusus Owner Kontol!!!',
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    private: 'Fitur Hanya Digunakan Untuk Obrolan Pribadi!',
    bot: 'Fitur ini hanya dapat digunakan oleh bot',
    wait: 'In process...',
    linkm: 'Mana linknya Kontol?',
    endLimit: 'Batas Harian Anda Telah Kedaluwarsa, Batas Akan Direset Setiap 12 Jam',
    nsfw: 'Fitur nsfw belum di aktifkan silahkan hubungi admin untuk aktivasi',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
