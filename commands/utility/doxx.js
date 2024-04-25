const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('doxxme')
		.setDescription('i spy on you.'),
	async execute(interaction) {
		await interaction.reply(`Your name is ${interaction.user.username}, and you joined on ${interaction.member.joinedAt}.`);
	},
};