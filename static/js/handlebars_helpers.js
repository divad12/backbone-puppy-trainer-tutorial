Handlebars.registerHelper('multiply', function(numDone, options) {
  var multiplier = options.hash.multiplier || 200;
  return numDone * multiplier;
});
