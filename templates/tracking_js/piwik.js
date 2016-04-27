/*

This tag should be inserted just after the opening <body> tag (or within the <head> section). The {$PIWIK_URL} should be replaced by the Piwik URL and {$IDSITE} should be replaced by the idsite of the tracked website. This info can be found in the management dashboard of your Piwik account.

For more info, visit this page:

developer.piwik.org/guides/tracking-javascript-guide

*/

<!-- Piwik -->
<script type="text/javascript">
  var _paq = _paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//{$PIWIK_URL}/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', {$IDSITE}]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Piwik Code -->


