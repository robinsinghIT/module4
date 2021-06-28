(function(window) {
	var Word = "Good Bye";
	var byee = function (name) {
  		console.log(Word + " " + name);
	}
	
	window.byee = byee;

})(window);