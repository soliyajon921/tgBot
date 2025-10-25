import TelegramBot from "node-telegram-bot-api";




const TOKEN = "8347274799:AAE6lJwAk1g0j12GG0BFmLsfA9yMKI1OEbM"

const bot =new TelegramBot(TOKEN , {polling:true});
 

bot.on("message" , function(msg){
    const chatId= msg.chat.id;
    const text = msg.text;


    bot.sendMessage(chatId , `Assalomu aleykum ==> ` )
})