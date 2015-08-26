$(document).ready( function() {
  // do we need to worry about which file plays?
  // ie: mp3, fx: mp3 ogg, c: mp3 ogg, op: ogg, sfr: ogg, mpg

  $(".note").click( function(event) {
    play(event.target.id);
  });

  var NOTE_LETTERS = ["a", "s", "d", "f", "g", "h", "j"];
  $("html").keypress(function(event) {
    var letter = String.fromCharCode(event.which);
      console.log("I'm being run!");
    if (NOTE_LETTERS.indexOf(letter) > -1) {
      var note = translateKey(letter);
      play(note); // play the note

      // add a style for 0.1 seconds
      $("#" + note).addClass("active");
      setTimeout(function() {
        $(".note").removeClass("active");
      }, 350);
    }
  });

  function play(note) {
    var audio_tag = document.getElementById(note + "Audio"); // eg, "aAudio"
    audio_tag.currentTime = 0;
    audio_tag.play();
  }

  function translateKey(letter) {
    switch (letter) {
      case "a":
        return "c";
      case "s":
        return "d";
      case "d":
        return "e";
      case "f":
        return "f";
      case "g":
        return "g";
      case "h":
        return "a";
      case "j":
        return "b";
    }
  }
});
