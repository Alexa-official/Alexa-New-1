//════════════(◇■◇)══════════════════════════════════//
//New Version//
//════════════(◇■◇)════════════════//

const fs = require('fs');
const chalk = require('chalk');
if (fs.existsSync('settings.env')) require('dotenv').settings({ path: './settings.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `\n\n*👩‍🦰Queen Alexa*\n*💫🧚‍♀️Hey There Im Alive Now*\n\n*◉Version :► 8.5.1 (Public Release)*\n*◉Branch  :► Awsh*\n*◉About :► Amazone Alexa Is a Powerfull Bot For Whatsapp.*\n*◯●Github Link :►https://tinyurl.com/yhq3c6ms-\n\n*💫©Join Our Group*\n*▷📑News & Update Report*\n_◈https://chat.whatsapp.com/JdNWV3viiGKGINYNrb5oy8*\n▷⚡Official Pluggins Group* \n ◈https://chat.whatsapp.com/JJs2iwfF0VKL3IWrIyr7AT\n*🛡️Support Community*\n https://t.me/Queen_Alexa_Neotrox_Support💞` //Costomize Alive Message (type your message in `` )

global.owner = ['+94702256963'] //Owner number in aive msg
global.premium = ['+94702256963'] //Owner Number info
global.ownernomer = '+94702256963' //Owner Number <<<
global.alive_logo = 'https://raw.githubusercontent.com/ChamodKeshan/Alexa-New/main/Alexa-New/media/main.jpg?token=GHSAT0AAAAAABXCNRVWU72ZQMJRKQ2Z5522YX3YTSA'
global.ownername = 'En*cuzier' 
global.botname = '*Queen👸Alexa*' 

global.button = '◇alexa◇'
global.myweb = 'github.com/ChamodKeshan'
global.sc = 'https://github.com/ChamodKeshan'
global.script = 'https://github.com/ChamodKeshan'
global.btnurl = 'https://github.com' 

global.region = 'India, South India, Kerala'
global.language = 'en'
global.packname = 'Queen-Alexa'
global.author = 'En*cuzier' 
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session'
global.sp = '⭔'
ALIVEMSG = 'default'

global.ig = 'https://github.com/Queen-Alexa'
global.footer = '©_Queen_Alexa.' // DO NOT CHANGE!
SESSION: process.env.NEUTRO_SESSION === undefined ? '' : process.env.NEUTRO_SESSION
ANTILINK: process.env.ANTI_LINK === undefined ? 'false' : process.env.ANTI_LINK
AUTOBIO: process.env.AUTO_BIO === undefined ? 'false' : process.env.AUTO_BIO
GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE
LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase()
ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE
KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE
BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT
ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE
MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE
NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG
BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE
UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE
UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE
WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE
PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE
DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE
BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE
AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE
HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS
SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ)
BIO: process.env.BIO === undefined ? 'ɪ ᴀᵐ ⁿᵒᵗ ᵖᵉʳᶠᵉᶜᵗ ʙᵘᵗ ɪ  ᴀᵐ ʟⁱᵐⁱᵗᵉᵈ ᴇᵈⁱᵗⁱᵒⁿ👀🔥' : process.env.BIO
    ANTI_BAD: process.env.ANTI_BAD === undefined ? 'false' : process.env.ANTI_BAD
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN
    BAD_KICK: process.env.BAD_KICK === undefined ? 'false' : process.env.BAD_KICK
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK
    ALIVE_LOGO: process.env.ALIVE_LOGO === undefined ? 'https://telegra.ph/file/e8f3e419b3dafe9fe8153.jpg' : process.env.ALIVE_LOGO
    CAPTIONS: process.env.CAPTIONS === undefined ? 'Made By 👩‍🦰Amazone' : process.env.CAPTIONS
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? false : process.env.DISABLE_JID_BGM_FILTER
    STICKERP: process.env.AUTO_STICKER === undefined ? true : convertToBool(process.env.AUTO_STICKER)
    DISSTICKER: process.env.DISABLE_STICKER === undefined ? false : process.env.DISABLE_STICKER
    BOT_NAME: process.env.BOT_NAME === undefined ? '👩‍🦰Amazone' : process.env.BOT_NAME
    THERI_KICK: process.env.THERI_KICK === undefined ? 'true' : process.env.THERI_KICK
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU
    TALKING_PINKY: process.env.TALKING_PINKY === undefined ? 'false' : process.env.TALKING_PINKY
    WELCOME_GIF: process.env.WELCOME_GIF === undefined ? 'https://telegra.ph/file/d969f3365028c88c7719f.mp4' : process.env.WELCOME_GIF
    BYE_GIF: process.env.BYE_GIF === undefined ? 'https://telegra.ph/file/794ec421c157f4cb1cd27.mp4' : process.env.BYE_GIF
    AI_BOT: process.env.AI_BOT === undefined ?'true' : process.env.AI_BOT
    INBOX_BLOCK: process.env.INBOX_BLOCK === undefined ?'false' : process.env.INBOX_BLOCK
    ANTI_BAD: process.env.ANTI_BAD === undefined ?'true' : process.env.ANTIBAD
    FULL_ALEXA: process.env.FULL_ALEXA === undefined ?'false' : process.env.FULL_ALEXA
    WHATS_LINK_BLOCK: process.env.WHATS_LINK_BLOCK === undefined ?'false' : process.env.WHATS_LINK_BLOCK
    MENU_LOGO: process.env.MENU_LOGO === undefined ?'https://telegra.ph/file/e8f3e419b3dafe9fe8153.jpg' : process.env.MENU_LOGO
    PKGPS: process.env.PKGPS === undefined ?'=xnxcom' : process.env.PKGPS
    ADULT_MODE: process.env.ADULT_MODE === undefined ? 'on' : process.env.ADULT_MODE
    AMAZONE: process.env.AMAZONE === undefined ? 'Amazone Alexa' : process.env.AMAZONE
    KTB: process.env.TAG_HEADER === undefined ? 'Amazone' : process.env.TAG_HEADER
    FAKE_REMOVER: process.env.FAKE_REMOVER === undefined ? 'true' : process.env.FAKE_REMOVER
    OWN: process.env.OWN === undefined ? '94766598862,0' : process.env.OWN
    EMOJI_COMMAND: process.env.EMOJI_COMMAND === undefined ? '🛡️' : process.env.EMOJI_COMMAND
    EMOJI_DESCRIPTION: process.env.EMOJI_DESCRIPTION === undefined ? '⚙️' : process.env.EMOJI_DESCRIPTION
    EMOJI_EXAMPLE: process.env.EMOJI_EXAMPLE === undefined ? '💬' : process.env.EMOJI_EXAMPLE
    EMOJI_WARNING: process.env.EMOJI_WARNING === undefined ? '⚠️' : process.env.EMOJI_WARNING
    PANEL_COMMAND: process.env.PANEL_COMMAND === undefined ? 'alexa' : process.env.PANEL_COMMAND
    BUG_COMMAND: process.env.BUG_COMMAND === undefined ? 'bug' : process.env.BUG_COMMAND
    TIME_ZONE: process.env.TIME_ZONE === undefined ? 'Asia/Colombo' : process.env.TIME_ZONE
    HTTPS: process.env.HTTPS === undefined ? 'https://' : process.env.HTTPS
    SUP_HEROKU: process.env.SUP_HEROKU === undefined ? 'herokuapp.com/' : process.env.SUP_HEROKU
    HLOCK: process.env.HLOCK === undefined ? 'zeks.me.' : process.env.HLOCK
    ENCRYPTION: process.env.ENCRYPTION === undefined ? 'scrapers' : process.env.EYENCRYPTION
    TOXIC_P: process.env.TOXIC_P === undefined ? 'photoxy/' : process.env.TOXIC_P
    TOXIC_T: process.env.TOXIC_T === undefined ? 'textpro/' : process.env.TOXIC_T
    DECODE: process.env.DECODE === undefined ? 'TEENU-VIP-API' : process.env.DECODE
    SITE1: process.env.SITE1 === undefined ?'https://api.dapuhy.ga/api/' : process.env.SITE1
    SITE12: process.env.SITE12 === undefined ?'https://yuzzu-api.herokuapp.com/api/' : process.env.SITE12
    SITE14: process.env.SITE14 === undefined ?'https://tyz-api.herokuapp.com/randomimg/akaneko?param=' : process.env.SITE14
    FBS2: process.env.FBS2 === undefined ?'snapsave?url' : process.env.FBS2
    BAPIS: process.env.BAPIS === undefined ?'https://bx-hunter.herokuapp.com/api/' : process.env.BAPIS
    JAPIS: process.env.JAPIS === undefined ?'https://docs-jojo.herokuapp.com/api/' : process.env.JAPIS
    RSITE: process.env.RSITE === undefined ?'https://rei-api.herokuapp.com/api/dl/' : process.env.RSITE
    SPDFAPI: process.env.SPDFAPI === undefined ?'EHbew2GJGOzI5qCldC5Oiu7yVgcVuH39VvmOQGPNQE7Ap7EHKyaqA9ziEn1SRSj5' : process.env.SPDFAPI
    HSITE: process.env.HSITE === undefined ?'hunter' : process.env.HSITE
    VID1: process.env.VID1 === undefined ?'https://zenzapi.xyz/api/downloader/' : process.env.VID1
    VID2: process.env.VID2 === undefined ?'RDMMiI1VlXspMp8&index=2' : process.env.VID2
    SITE10: process.env.SITE10 === undefined ?'https://zenzapi.xyz/api/' : process.env.SITE10
    LOL_API: process.env.LOL_API === undefined ?'default' : process.env.LOL_API
    MENU_INFO: process.env.MENU_INFO === undefined ?'ᴀᴍᴀᴢᴏɴᴇ ᴀʟᴇxᴀ ɪꜱ ᴀ ᴘᴏᴡᴇʀꜰᴜʟʟ ʙᴏᴛ ꜰᴏʀ ᴡʜᴀᴛꜱᴀᴘᴘ. ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ᴛᴇᴇɴᴜ Use ᴇᴀꜱʏ ᴀɴᴅ ᴡᴏʀᴋɪɴɢ ᴘᴇʀᴇᴄᴛʟʏ..ꜱᴏ ᴀᴍᴀᴢᴏɴᴇ ᴀʟᴇxᴀ ɪꜱ ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ!!' : process.env.MENU_INFO
    BRANCH: 'master'
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU)
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    global.mess = { // Don't change
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = 'https://raw.githubusercontent.com/ChamodKeshan/Alexa-New/main/Alexa-New/media/main.jpg?token=GHSAT0AAAAAABXCNRVWU72ZQMJRKQ2Z5522YX3YTSA'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
