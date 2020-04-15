module.exports = {
    name: 'Clear',
    description: "Clears chat",
    execute(message, args){

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof");
        if(!args[2]) return message.channel.send("input number of lines");
        message.channel.bulkDelete(args[2]);   
        }
}