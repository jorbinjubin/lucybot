const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bing')
		.setDescription('test command'),
	async execute(interaction) {
		await interaction.reply('bong!');
	},
};