/*

This snippet should be inserted at the top or bottom of the page (head or footer sections). Modify the 'TOKEN' value to the customer token value acquired from the source setup page of your loggly account.

For more info, visit this page:

https://www.loggly.com/docs/javascript/

*/

<script type="text/javascript" src="http://cloudfront.loggly.com/js/loggly.tracker-2.1.min.js" async></script>
<script>
  var _LTracker = _LTracker || [];
  _LTracker.push({
    'logglyKey': 'TOKEN',
    'sendConsoleErrors' : true,
    'tag' : 'loggly-jslogger' 
  });
</script>

