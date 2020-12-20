require('dotenv').config();

const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
const Extra = require('telegraf/extra');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const response_time = new Date() - start;
	console.log(`(Response Time: ${response_time})`);
});

bot.hears('Assalamualaikum', (ctx) => ctx.reply('Waalaikumsalam'));
bot.hears('Hello', (ctx) => {
	ctx.reply(
		'<b>Hello</b>. <i>What is your name?</i>',
		Extra.HTML().markup(
			Markup.inlineKeyboard([
				Markup.callbackButton('Eileen', 'not bad'),
				Markup.callbackButton('Not Eileen', 'all right'),
			]),
		),
	);
});

bot.hears('hello', (ctx) => {
	ctx.reply(
		'<b>Hello</b>. <i>What is your name?</i>',
		Extra.HTML().markup(
			Markup.inlineKeyboard([
				Markup.callbackButton('Eileen', 'not bad'),
				Markup.callbackButton('Not Eileen', 'all right'),
			]),
		),
	);
});

bot.action('not bad', (ctx) => {
	ctx.editMessageText("<i>OMG you're so cute 😊</i>", Extra.HTML());
});
bot.action('all right', (ctx) => {
	ctx.editMessageText('<i>Ewwwwwwwwww</i>', Extra.HTML());
});
bot.launch();
