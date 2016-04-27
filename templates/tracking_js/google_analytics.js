/*

Code should be added before the closing </head> tag, and the string 'UA-XXXXX-Y' should be replaced with the propertyID (or "tracking ID") of the GA property you want to track.

For more info, see this page:
 
https://developers.google.com/analytics/devguides/collection/analyticsjs/#the_javascript_tracking_snippet

*/

<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'none');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->
