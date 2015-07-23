function censor(text) {
  return text.replace(/cameron wong/ig, "Cam")
}

Discourse.Dialect.postProcessText(function(text) {
  text = [].concat(text);
  for (var i = 0 ; i < text.length ; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = censor(text[i]);
    }
  }
  return text;
});

