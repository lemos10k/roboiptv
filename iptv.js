// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();

// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Após isso, ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

// Inicializa tudo
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função para criar o delay entre ações

// Funil
client.on('message', async msg => {
    if (msg.body.match(/(menu|Tudo bem|Menu|Bom dia|Boa tarde|Boa noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        const contact = await msg.getContact();
        const name = contact.pushname;

        // Menu inicial atualizado para IPTV
        await client.sendMessage(
            msg.from,
            `Olá ${name.split(" ")[0]}! Sou o assistente virtual da nossa Loja de IPTV.
            
            Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n` +
            "\n" +
            "\n" +
            `1 - Planos e preços\n` +
            "\n" +
            "\n" +
            `2 - Como funciona\n` +
            "\n" +
            "\n" +
            `3 - Teste grátis\n` +
            "\n" +
            "\n" +
            `4 - Suporte técnico\n` +
            "\n" +
            "\n" +
            `5 - Outras dúvidas`
        );
    }

    // Respostas para o menu de IPTV
    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(
            msg.from,
            `📺 *Planos de IPTV:*\n\n` +
            "\n" +
            "\n" +
            `✅ Plano Mensal: R$ 30,00\n` +
            "\n" +
            "\n" +
            `✅ Plano Trimestral: R$ 80,00\n` +
            "\n" +
            "\n" +
            `✅ Plano Anual: R$ 250,00\n\n` +
            "\n" +
            "\n" +
            `Aproveite acesso a mais de 10.000 canais, filmes e séries!\n\n` +

            `🔗 *Link para adquirir*: https://site.com`
        );
    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(
            msg.from,
            `🛠️ *Como funciona o IPTV?*\n\n` +
            "\n" +
            "\n" +
            `1️⃣ Você escolhe um plano adequado às suas necessidades.\n` +
            "\n" +
            "\n" +
            `2️⃣ Faz o pagamento via Pix ou cartão.\n` +
            "\n" +
            "\n" +
            `3️⃣ Recebe acesso imediato ao nosso catálogo exclusivo com instruções de instalação.\n\n` +
            "\n" +
            "\n" +
            `É simples e rápido! 🔗 Para começar: https://site.com`
        );
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(
            msg.from,
            `🎯 *Teste grátis disponível!*\n\n` +
            `✅ Receba 24 horas de acesso grátis para experimentar nosso serviço sem compromisso.\n\n` +
            `Para solicitar, envie:\n*#testegrátis*`
        );
    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(
            msg.from,
            `🔧 *Suporte técnico*\n\n` +
            `Se você está enfrentando problemas com seu IPTV, envie uma mensagem explicando o que está acontecendo.\n\n` +
            `Nossa equipe está pronta para ajudar!`
        );
    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(
            msg.from,
            `📩 *Outras dúvidas*\n\n` +
            `Se você tem perguntas ou precisa de mais informações, por favor, entre em contato diretamente aqui ou visite nosso site: https://site.com`
        );
    }
});
