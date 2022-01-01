const TelegramApi = require('node-telegram-bot-api')


const token = '2109353714:AAFUMcRT_rCZtIvVWmJ9TwRTqE_vlXm2hOo'


const bot = new TelegramApi(token, {polling: true})



bot.setMyCommands([
        {command: '/start', description: 'Начальное представление'},
        {command: '/info', description: 'Плучить информацию о пользователя'},
        {command: '/my_id', description: 'Узнать свой id'},

    ])

    bot.on('message', async msg => {

        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start') {
            await bot.sendSticker(chatId, `https://tlgrm.ru/_/stickers/b50/063/b5006369-8faa-44d7-9f02-1ca97d82cd49/1.webp`)
             await bot.sendMessage(chatId, `Добро пожаловать в телеграм бот от Нура `)

        }
        if (text === '/info') {
            return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.username}`)

        }
        if (text === '/my_id') {
            return bot.sendMessage(chatId, `Твой id: ${msg.from.id}` )
        }



        })


