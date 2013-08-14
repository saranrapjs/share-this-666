window.onload = function() {
   chrome.storage.local.get('use_420', function(items) {
       var use_420 = items.use_420;
       document.getElementById('use_420').checked = (use_420 === "true")
   });
	function save_options() {
	   var use_420 = document.getElementById('use_420').checked,
	   	value = (use_420 === true) ? "true" : "false"
	   chrome.storage.local.set({
	       use_420: value
	   });
	}
	document.querySelector('#save').addEventListener('click', save_options);
}