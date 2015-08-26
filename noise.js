$(document).ready( function() {
  // declare the notes that exist in this cruel world
  var notes = ["a", "b", "c", "d", "e", "f", "g"];

  // 1. attach a click event handler to the note buttons
  $("")
  $(".note.a").click( function() {
    play("a");
  });

  $(".note.b").click( function() {
    play("b");
  });

  $(".note.c").click( function() {
    play("c");
  });

  $(".note.d").click( function() {
    play("d");
  });

  $(".note.e").click( function() {
    play("e");
  });

  $(".note.f").click( function() {
    play("f");
  });

  $(".note.g").click( function() {
    play("g");
  });

  function play(note) {
    var audio_tag = document.getElementById(note + "Audio"); // eg, "aAudio"
    // ie: mp3, fx: mp3 ogg, c: mp3 ogg, op: ogg, sfr: ogg, mpg
    audio_tag.currentTime = 0;
    audio_tag.play();
  }

  // 2. then figure out which note to play
  // 3. then make the audio file play
});
