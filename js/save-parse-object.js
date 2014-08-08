$(document).ready(function(){

  var parseApplicationID = "UR5O55W9prxCEH2lWy7ZvUaj7REtBgE0bbMNRG7y";
  var parseJavaScriptKey = "OglhmfRyWd5XcZ3Iub9wenPy2hnfifqgTBuk1Gfi";

  Parse.initialize(parseApplicationID, parseJavaScriptKey);
  var Test = Parse.Object.extend("Test");
  var test = new Test();

  test.save({
    name: "John",
    text: "hi"}, {
    success: function(object) {
      console.log("Parse.com object is saved: " + object);
    },
    error: function(object) {
      console.log("There was an error saving your object: " + object);
    }
  });

});