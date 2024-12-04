// Invocamos o leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // MudanÃ§a Buttons
const client = new Client();
// entao habilitamos o usuario a acessar o serviÃ§o de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certin
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo para fazer a nossa magica =)
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // FunÃ§Ã£o que usamos para criar o delay entre uma aÃ§Ã£o e outra

// Funil Base Projeto

client.on('message', async msg => {

    if (msg.body === 'Gostaria de informações sobre a Quiropraxia'|| msg.body === 'Quiropraxia'|| msg.body === '0'|| msg.body === 'teste'|| msg.body === 'teste') {
        const chat = await msg.getChat();
        client.sendMessage(msg.from, 'Clínica da Coluna Seja bem-vindo(a) a Clínica da Coluna. 🤗🤗🤗\n\n1. Especialidades\n2. Consulta Clínica\n3. Sessão Quiropráxica\n4. Sessão Osteopática\n5. Sessão Pasicanálitica\n6. Valores de pacotes\n7. Redes Sociais\n8. Agendamento\n9. Dias de atendimento\n10. Falar com o atendente.\n11. Finalizar\n\nA Clínica da Coluna agradece o seu contato.');



    }

    if (msg.body !== null && msg.body === '1'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, 'Clínica da Coluna\nQuiropraxia Clínica, Naturologia Clínica, Osteopatia Clínica e Psicanálise Clínica.\n\n1. Tratamento da Coluna Vertebral.  Tratamento de saúde com métodos naturais. Tratamento miofascial. Tratamento dos transtornos emocionais.\n\n0. Menu principal\n\nA Clínica da Coluna agradece o seu contato.');


       

    }

    if (msg.body !== null && msg.body === '2'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, '*Clínica da Coluna*\nDr Emanuel Linoan\nVALOR DA CONSULTA CLÍNICA:\nR$300,00.\n\nA Clínica da Coluna agradece o seu contato.');


       

    }

    if (msg.body !== null && msg.body === '3'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, '*Clínica da Coluna*\nDr Emanuel Linoan\nValor da sessão de quiropraxia:\nR$150,00.\n\nA Clínica da Coluna agradece o seu contato.');

    }

    if (msg.body !== null && msg.body === '4'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, '*Clínica da Coluna*\nDr Emanuel Linoan\nValor da sessão de osteopatia:\nR$150,00.\n\nA Clínica da Coluna agradece o seu contato.');

    }

    if (msg.body !== null && msg.body === '5'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, '*Clínica da Coluna*\nDr Emanuel Linoan\nValor da sessão de Psicanálise:\nR$180,00.\n\nA Clínica da Coluna agradece o seu contato.');

    }

    if (msg.body !== null && msg.body === '6'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, '*Clínica da Coluna*\nDr Emanuel Linoan\nTemos um site. Nele você acessa nosso canal do WhatsApp, agenda consulta, sessão e poderá entender melhor sobre as nossas especialidade.\n\nhttps://clinicadecoluna.com.br\n\nA Clínica da Coluna agradece o seu contato.');

    }

    if (msg.body !== null && msg.body === '7'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, '*Clínica da Coluna*\nDr Emanuel Linoan\nReserve seu horário clicando no link, logo abaixo, agendando seu horário. Lembrando que os dias de Atendimento são às Terças-feiras e quintas-feiras.\n\nhttps://baseplus.com.br/c/dremanuellinoan\n\nA Clínica da Coluna agradece o seu contato.');

    }

    if (msg.body !== null && msg.body === '8'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, 'Olá!!!\nEstamos enviando o link do aplicativo para marcação de consulta ou sessão quiropráxica com o Dr. Emanuel Linoan.\nLembrando que os dias de atendimento em Aracaju são:\nTerças-feiras das 07h às 18h.\nQuintas-feiras das 07h às 18h.\nTobias Barreto\nSegundas-feiras das13h às 17h.\nItabaianinha\nSegundas-feiras (15/15DD) das 8h às 11h.\nDeus abençoe o seu dia!!!\n\nNosso link de agendamento:\n\nhttps://baseplus.com.br/c/dremanuellinoan');

    }

    if (msg.body !== null && msg.body === '9'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, '*Clínica da Coluna*\n\nDigite o número 10 se dejesar falar com o atendimento.\n\n𝕯𝖗. 𝕰𝖒𝖆𝖓𝖚𝖊𝖑 𝕷𝖎𝖓𝖔𝖆𝖓 𝕼𝖚𝖎𝖗𝖔𝖕𝖗𝖆𝖝𝖎𝖘𝖙𝖆 𝕮𝖑í𝖓𝖎𝖈𝖔\n\n79 99958-3444\n79 3142-1159\n\nA Clínica da Coluna agradece o seu contato.');

    }

    if (msg.body !== null && msg.body === '12'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, '*Clínica da Coluna*\n\nDigite o número 10 se dejesar falar com o atendimento.\n\n𝕯𝖗. 𝕰𝖒𝖆𝖓𝖚𝖊𝖑 𝕷𝖎𝖓𝖔𝖆𝖓 𝕼𝖚𝖎𝖗𝖔𝖕𝖗𝖆𝖝𝖎𝖘𝖙𝖆 𝕮𝖑í𝖓𝖎𝖈𝖔\n\n79 99958-3444\n79 3142-1159\n\nA Clínica da Coluna agradece o seu contato.');

    }

    if (msg.body !== null && msg.body === '14'|| msg.body === 'Produtos' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos

        await client.sendMessage(msg.from, '*Clínica da Coluna*\n\nDigite o número 10 se dejesar falar com o atendimento.\n\n𝕯𝖗. 𝕰𝖒𝖆𝖓𝖚𝖊𝖑 𝕷𝖎𝖓𝖔𝖆𝖓 𝕼𝖚𝖎𝖗𝖔𝖕𝖗𝖆𝖝𝖎𝖘𝖙𝖆 𝕮𝖑í𝖓𝖎𝖈𝖔\n\n79 99958-3444\n79 3142-1159\n\nA Clínica da Coluna agradece o seu contato.');

    }
    

});    