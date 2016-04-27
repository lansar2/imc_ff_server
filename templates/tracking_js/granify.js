/*

Insert this snippet into the <head> section. Will need to modify the 'GRANIFY_SITE_ID' value to own site id.

For more info, visit this page:

http://help.granify.com/install/javascript/step-1/

*/

<script type="text/javascript">
// ** Replace with your actual Granify Site ID **
var GRANIFY_SITE_ID=0;
 
!function(e,t,o){var n,r,i;try{i=new RegExp("(?:^|\\W)_gr_ep=([^;]*)"),r=document.cookie.match(i),r||(document.cookie="_gr_ep_sent=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/",document.cookie="_gr_er_sent=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path=/",window.location.origin||(window.location.port?port=":"+window.location.port:port="",window.location.origin=window.location.protocol+"//"+window.location.hostname+port),path=window.location.toString().replace(window.location.origin,""),referrer=document.referrer,n=new Date(+new Date+18e5),document.cookie="_gr_ep="+path+";expires="+n.toGMTString()+";path=/",document.cookie="_gr_er="+referrer+";expires="+n.toGMTString()+";path=/")}catch(a){}a=new Date,a=""+a.getUTCFullYear()+(a.getUTCMonth()+1)+a.getUTCDate(),e=e+"?id="+t+"&v="+a,window.Granify=o,o._stack=[],o.init=function(e,t,n){function r(e,t){e[t]=function(){Granify._stack.push([t].concat(Array.prototype.slice.call(arguments,0)))}}var i=o;for(h=["on","identify","addTag","trackPageView","trackCart","trackOrder"],a=0;a<h.length;a++)r(i,h[a])},o.init();var c,p=document.createElement("script");p.src=e,p.async=!0,c=document.getElementsByTagName("script"),c=c[c.length-1],c.parentNode.insertBefore(p,c)}("//cdn.granify.com/assets/javascript.js",GRANIFY_SITE_ID,[]);
</script>

