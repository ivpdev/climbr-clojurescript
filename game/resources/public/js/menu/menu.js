$(document).ready(function() {
    function loadLevel() {
        var $input = $(".level-code-input");
        var code = $input.val();

        if (code) {
            window.location = "game.html?l=" + code; }}

    $("#level-from-code").on('click', loadLevel);
    $(".level-code-input").on('keyup', function(e) {
        if (e.keyCode === 13) {
            loadLevel(); }}); });