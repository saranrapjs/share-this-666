// window.addEventListener('load', function() {
(function () {
  function walk (node, n) {
  	// gripped from https://github.com/BenWard/cloud-to-moon

    var child, next;

    switch (node.nodeType) {
      case 1:
      case 9:
      case 11: // Document, element and fragment
        child = node.firstChild;
        while (child) {
          walk(child, n);
          child = child.nextSibling;
        }
        break;
      case 3: // Text node
        handleText(node, n);
        break;
      default:
        break;
    }
  }

  function handleText (textNode, n) {
    textNode.nodeValue = n;
  }
  function doRun(n) {
  	var selectElements = document.querySelectorAll([
  		'.pluginConnectButtonLayoutRoot', // facebook
  		'.count-o #count', // twitter
  		'#aggregateCount', // google plus
  		'.fb-share-count'
  	].join(','))
	for (var i in selectElements) {
	  walk(selectElements[i], n);  	
	}  	
  }
  function doRuns(n) {
	doRun(n)
	setTimeout(function() { // something about chrome document_end means that for some widgets, we wait a little bit
		doRun(n)
	}, 2000)  	
  }

	if (window.chrome) {
		chrome.storage.local.get('use_420', function(items) {
			var use_420 = items.use_420;
			var n = (use_420 === "true") ? 420 : 666
			doRuns(n);
		});
	} else {
		doRuns(666)
	}
})();
// })