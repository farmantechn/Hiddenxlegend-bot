const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BUbzErYm4wc1lCYW1Ob0ZGa2NVRFNjOTI3eW9VNEJyUmJYUHU2b2ZsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGFSS2VUT2tjanNxVXYyZ2d0SWVNT1A3YUMxZWlrMDBhdU5vOEFQd0RBVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSHhIVXEwRzJSazRRazczemUzRExwbFpBVWdYN2dzcEw3RWFUZm1NS2xFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpcGtvVWhLNDcrMlJ0cFZqOHVmYXlNdXNZWG1wcGJEUXB0dEdDamRiU2trPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJKUFBjMktzT2VpOXlTY0lGSFV4dEhVekhnaFdnSkVJK0hYQlR6QklYWFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFUOHpERVN4cndiSCt5U1lBUHVVRUY5b3JMdVpyUzlSejZmNWY4TkM1elE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUh4YS91U2RmN25BQXRwVjFadmxWdFFPdWcyRW14WjNaM1l6U3ZSb3NYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0pOT1ZRTzlJWnN4NXMxcmpZYjVXTmdnQlIzb3dzUk55UlBhOUJ1R2NVRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFUdEFiMWtFcWdEY3hrZEx1Z0FudUlzTEk3cHRUR1g2OWFWN3VkSTlySlEvNEc3Mmh0VWJ0YjRtTjBZRHJPUkhwU0V5THM1ZUFVRTQzNldjVFAyZmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoicHZhYVFhRkQ5bWxFK0FzS0ZXVEt6aWJPMVE1WFlxTW5HUHl0c1pDZlZ4WT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyOTk3MzYwODZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDUyNDEwQTc5MTRDRkE4OTdBRTVERURBMUUxQkFDODYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTc0ODk0OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjk5NzM2MDg2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNCMDQzMTBDQzExM0MxREQzODcxMTQ4QTlFN0E3OTE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU3NDg5NTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijk1MkxSOFcyIiwibWUiOnsiaWQiOiI5MjMyOTk3MzYwODY6MjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5ODA2NzU1ODcyNzg4ODoyMkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lUYThKVUVFTSswbXNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikl4V29tU1YvQmV1QmwzVWc2c0MzZXphUis4MVRzQ0JOMU9WYzh6TjdCaG89IiwiYWNjb3VudFNpZ25hdHVyZSI6InFibk4yZXcwU1NTMUl3ZUgrb3hPVFJDeVFqRXV6TE81QTNJVzNub3ZPVmFWUndNdlNTVWxiVHJrYmthanZscDZJanRTc0FBWEhidks0UlE1ZTlzdkJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDaWl4MXJiaWtjTk1XbDczdXRmb29RWUE1Q3BCczRaVzYwRFdXc1Zodm43N25KZUZ5RVUwaEMwVS85MFI2NU5OaW9pbjRJaVZ6S2JoM29yNEtYNGxnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI5OTczNjA4NjoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTTVZxSmtsZndYcmdaZDFJT3JBdDNzMmtmdk5VN0FnVGRUbFhQTXpld1lhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU3NDg5NDYsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1NJIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY HIDDENXLEGEND-BOT*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yj7zp0.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "HIDDENXLEGEND-BOT",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "HIDDENXLEGEND-BOT",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923305153963",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "HIDDENXLEGEND-BOT",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 HIDDENXLEGEND*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ibb.co/pB4cqsXC",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive hiddenxlegend-bot",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923305153963",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
