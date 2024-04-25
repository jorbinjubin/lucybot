const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('information'),
	async execute(interaction) {
		await interaction.reply(`https://github.com/jorbinjubin/lucybot/`);
	},
};