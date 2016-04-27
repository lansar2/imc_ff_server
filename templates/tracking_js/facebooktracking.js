/*

Insert this snippet between the <head> tags. The 'PIXEL_ID' value will need to be modified (both as passed into fbq() and in the src= value). 

For more info, visit this page:

https://www.facebook.com/business/a/online-sales/conversion-tracking

*/

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','//connect.facebook.net/en_US/fbevents.js');

fbq('init', 'PIXEL_ID');
fbq('track', "PageView");</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->


