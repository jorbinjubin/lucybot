const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bong')
		.setDescription('test command'),
	async execute(interaction) {
		await interaction.reply('bing!');
	},
};