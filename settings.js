const fs = require('fs')
const chalk = require('chalk')



//π if you need seen massage use " true "
global.READ_MASSAGE = 'false'
//π enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['265997133051'] 
//π Your Caption ( Image Video )
global.cap = 'Β© πΆπ΄π½π΄ππ°ππ΄π³ π±π πΌπ°ππ±πΎπ'
//π Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO =  'on'
//π Inbox massage block PM block
global.INBOX_BLOCK =  'off'
//π Auto react 
global.AUTO_REACT =  'false'
//π Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD =  'true'
//π Your Bot Name
global.botnma =  '*MAX-BOT-MD-V3*' 
//π Your name
global.ownernma =  '*AUSTIN MAX*' 
//π Sticker package name
global.packname =  'MAXBOT MD' 
//π Sticker Author Name
global.author =  'AUSTIN MAX' 
//π Kick And Auto Delete Group link Senders
global.antilink =  'true'
//π Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//π Owner React Imoji
global.OWNER_REACT =  'π»'
global.BAD_KICK_MSG = '*Bad word detect !*'
//π URL.button 1 name
global.BUTTON1 = 'Chat'
//π URL button 2 name
global.BUTTON2 = 'website'
//π Button 1 url 
global.BUTTON1_URL = 'https://wa.me/265997133051'
//π Button 2 url
global.BUTTON2_URL = 'https://atom.bio/maxaustin'
//π Your Add Massage 
global.ADD_MSG = '*β Success add Group*' 
//π Your Kick Massage 
global.KICK_MSG = '*β Success Remove from Group*' 
//π Song Download Massage 
global.SONG_DOWN = '```β¬οΈ Downloading Your Song...```' 
//π Song Uplode massage 
global.SONG_UP = '```β¬οΈ Uploding Your Song...```'
//π 212 Number block
global.NUMBER_212_BLOCK = 'true'
//π Menu imoji 
global.MENU_IMOJI = 'πΈ|βΉοΈ'
//π Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Africa/Blantyre'
//π Removebg Api key
global.REMOVE_BG_API = ''
//π Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'false'
//π Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/b3f17c16eedf99731a52d.jpg`
//π Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || ``
//π Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//π welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//π Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//π Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//π Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || false
//π Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//π Desable PM Block
global.NO_BLOCK = ["265997133051","265997133051"]
// Offline
global.BOT_OFFLINE = 'true'






//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/b0f1e7622f1e11f1bbd6d.jpg'
//other
global.pemilik = ['265997133051'] //Change  it , ΰΆΰΆΆΰΆ§ ΰΆΰ·ΰΆΈΰΆ­ΰ· ΰΆ±ΰΆΈΰ· ΰ·ΰ·ΰΆ±ΰ·ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ±
global.premium = ['265997133051'] //Change it ΰΆΰΆΆΰΆ§ ΰΆΰ·ΰΆΈΰΆ­ΰ·ΰΆ±ΰΆΈΰ· ΰ·ΰ·ΰΆ±ΰ·ΰ· ΰΆΰΆ»ΰΆ±ΰ·ΰΆ± 
global.pengguna = 'AUSTIN MAX' // Your name ΰΆΰΆΆΰ· ΰΆ±ΰΆΈ 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = 'π΅'


global.mess = {
    success: 'β Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*β² Please Wait MaxBot is Processing....*\n\n*βοΈ  Instagram  βοΈ*\n\n\n_While we are delivering what you want please try also to follow us on Instagram..._\n\nhttps://www.instagram.com/maxmemes.inc?r=nametag',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*β οΈ This Command is Block By Owner*',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}
global.limitawal = {
    premium: "Infinity", 
    free: 5 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Elisa.jpg')
global.alivelogo = `https://telegra.ph/file/b0f1e7622f1e11f1bbd6d.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
