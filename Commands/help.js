module.exports = {
    name: 'help',
    description: "says ping!",
    execute(message, args) {
        message.channel.send(`Hello, I am Potato. Heres what I can do:
            
        1. Mute.
        2. Kick
        3. Ban 
        4. Clear
        5. Send Newds
        6. Sad Boi Vibes
        7. Idk man, did u expect this much out of me?`);
    }
}