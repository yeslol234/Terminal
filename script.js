$('body').terminal({
    // COMMANDS
    echo: function(text) {
        this.echo(text);
    },
    help: function() {
        this.echo('Current Commands Are:\n echo: Simply display text\n help: Help for commands.')
    }
}, {
    greetings: 'Terminal (Version 1.0)\nRepo: https://github.com/yeslol234/Terminal/tree/main'
});
