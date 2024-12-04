const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Inicializa o cliente com autenticação local
const client = new Client({
    authStrategy: new LocalAuth(),
});

// Função para saudar o cliente de acordo com o horário
function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
}

// Mensagem inicial
const mainMenu = `
${getGreeting()}, bem-vindo ao atendimento ao *Provedor Net*!

Por favor, selecione uma opção digitando o número correspondente:

1️⃣ - JÁ SOU CLIENTE

2️⃣ - AINDA NÃO SOU CLIENTE  

Ou digite *#sair* para encerrar o atendimento.
`;

// Submenu para clientes existentes
const submenuCliente = `
Olá, seja bem-vindo ao *Provedor Net*!  
Para ser atendido, por favor escolha uma das opções abaixo:

1️⃣ - 2a via de Boleto

2️⃣ - Suporte técnico 

3️⃣ - Desbloqueio em confiança

4️⃣ - Planos e preços
  
5️⃣ - Falar com atendente  

Digite *#menu* a qualquer tempo para retornar ao menu principal.
`;

// Evento para exibir o QR Code
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR Code gerado. Escaneie com o WhatsApp.');
});

// Evento de conexão
client.on('ready', () => {
    console.log('Bot conectado com sucesso!');
});

// Evento para tratar mensagens recebidas
client.on('message', async (msg) => {
    const chatId = msg.from;
    const userMessage = msg.body.trim().toLowerCase();

    // Responder saudações iniciais
    const saudacoes = ['oi', 'olá', 'bom dia', 'boa tarde', 'boa noite'];
    if (saudacoes.some((saudacao) => userMessage.includes(saudacao))) {
        await client.sendMessage(chatId, `${getGreeting()}, bem-vindo ao atendimento ao *Provedor Net*!`);
        await client.sendMessage(chatId, mainMenu);
        return;
    }

    // Resposta ao menu principal
    if (userMessage === '1') {
        await client.sendMessage(chatId, submenuCliente);
    } else if (userMessage === '2') {
        await client.sendMessage(
            chatId,
            `📝 *FICHA DE CADASTRO*\n\n▪️ *Plano escolhido:* \n▪️ *Como conheceu a online-fibra:*\n\n📋 *DADOS PESSOAIS*\n▪️ *Nome:* \n▪️ *CPF:* \n▪️ *RG:* \n▪️ *Data de Nascimento:* \n▪️ *E-mail:* \n\n📪 *ENDEREÇO COMPLETO*\n▪️ *Rua:* \n▪️ *Número:* \n▪️ *Complemento:* \n▪️ *Bairro:* \n▪️ *Cidade:* \n▪️ *CEP:* \n▪️ *Ponto de referência:* \n\n📞 *TELEFONES DE CONTATO*\n▪️ 1° Número do WhatsApp: \n▪️ 2° Telefone para recado: \n\n🗓 *DATA DE VENCIMENTO*\n▪️ 5 / 20: \n\n📸 *Foto do documento legível, frente e verso e a selfie segurando o documento ao lado do rosto:*`
        );
    } else if (userMessage.startsWith('#menu')) {
        await client.sendMessage(chatId, mainMenu);
    } else if (userMessage.startsWith('#sair')) {
        await client.sendMessage(chatId, '✅ Atendimento encerrado. Caso precise, estamos à disposição.');
    }

    // Resposta ao submenu
    if (userMessage === '1.1') {
        await client.sendMessage(chatId, 'Por favor, acesse nosso site para emitir a 2a via do seu boleto: https://www.netpremier.net');
    } else if (userMessage === '1.2') {
        await client.sendMessage(chatId, 'Por favor, aguarde um momento enquanto transferimos para um de nossos atendentes.');
    } else if (userMessage === '1.3') {
        await client.sendMessage(chatId, 'Acesse o site: https://financeirobsc.com.br/ para desbloqueio de confiança.');
    } else if (userMessage === '1.4' || userMessage === '1.5') {
        await client.sendMessage(chatId, 'Por favor, aguarde um momento enquanto transferimos para um de nossos atendentes.');
    } else {
        // Mensagem inválida
        await client.sendMessage(chatId, '⚠️ Opção inválida. Por favor, escolha uma das opções do menu.');
    }
});

// Inicializa o cliente
client.initialize();
