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
