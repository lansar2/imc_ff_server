/*

This snippet should be inserted between the <body> tags.

The values that must be modified are:
 'http://yourdomain/path/to/owa/'
 'baseUrl'
 'yoursiteidgoeshere'

These values can be found in the admin interface of your OWA account.

For more info, visit this page:

demo.openwebanalytics.com/jstracker.php 

*/

<!-- Start Open Web Analytics Tracker -->
<script type="text/javascript" src="http://yourdomain/path/to/owa/modules/base/js/owa.tracker-combined-min.js"></script>
<script type="text/javascript">
//<![CDATA[
// Set base URL
OWA.setSetting('baseUrl', 'http://yourdomain/path/to/owa/');
// Create a tracker
OWATracker = new OWA.tracker();
OWATracker.setSiteId('yoursiteidgoeshere');
OWATracker.trackPageView();
OWATracker.trackClicks();
OWATracker.trackDomStream();
//]]>
</script>
<!-- End Open Web Analytics Code -->

