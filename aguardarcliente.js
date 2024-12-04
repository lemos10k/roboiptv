const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client({puppeteer: {executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',}});

// Leitura do qrcode
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// Após conectar no qrcode, teste o robô
client.on('ready', () => {
    console.log('WhatsApp conectado. Vá no seu whatsapp e teste o robô');
});
// Iniciar
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Delay

// Fluxo de mensagens

// ... (seu código anterior)

let waitForResponse = 0; // 0 - Não esperar, 1 - Esperar após audio1, 2 - Esperar após audio2

client.on('message', async msg => {
    const chat = await msg.getChat();

    if (msg.body.match(/(sim|informação|quero|como|funciona|interessado|informações|mais informações|consorcio|manda|saber|ok|aceito|pode|simulação)/i) && msg.from.endsWith('@c.us')) {
        await delay(5000);
        await chat.sendStateRecording();
        await delay(5000);
        const audio1 = MessageMedia.fromFilePath('./audio1.ogg');
        await client.sendMessage(msg.from, audio1, { sendAudioAsVoice: true });

        waitForResponse = 1; // Agora esperamos por uma resposta antes de enviar o próximo áudio
    } else if (waitForResponse === 1 && msg.from.endsWith('@c.us')) {
        waitForResponse = 2; // Agora esperamos por uma resposta antes de enviar o próximo áudio
        await delay(15000);
        await chat.sendStateRecording();
        await delay(3000);
        const audio2 = MessageMedia.fromFilePath('./audio2.ogg');
        await client.sendMessage(msg.from, audio2, { sendAudioAsVoice: true });
    } else if (waitForResponse === 2 && msg.from.endsWith('@c.us')) {
        waitForResponse = 0; // Resetamos o estado para não esperar mais por uma resposta
        await delay(10000);
        await chat.sendStateRecording();
        await delay(4000);
        const audio3 = MessageMedia.fromFilePath('./audio3.ogg');
        await client.sendMessage(msg.from, audio3, { sendAudioAsVoice: true });

        await delay(10000);

        await delay(3000);
        await chat.sendStateTyping();
        await client.sendMessage(msg.from, 'Mensagem de texto aqui');
    }
});
