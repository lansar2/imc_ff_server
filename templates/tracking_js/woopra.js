/*

This tag should be inserted between the <head> </head> tags. Modify the 'mybusiness.com' value with the tracked domain.

For more info, visit this page:

https://www.woopra.com/docs/setup/javascript-tracking/

*/

<script>
!function(){var a,b,c,d=window,e=document,f=arguments,g="script",h=["config","track","trackForm","trackClick","identify","visit","push","call"],i=function(){var a,b=this,c=function(a){b[a]=function(){return b._e.push([a].concat(Array.prototype.slice.call(arguments,0))),b}};for(b._e=[],a=0;a<h.length;a++)c(h[a])};for(d.__woo=d.__woo||{},a=0;a<f.length;a++)d.__woo[f[a]]=d[f[a]]=d[f[a]]||new i;b=e.createElement(g),b.async=1,b.src="//static.woopra.com/js/w.js",c=e.getElementsByTagName(g)[0],c.parentNode.insertBefore(b,c)}("woopra");
 
// configure tracker
woopra.config({
 domain: "mybusiness.com"
});
 
// track pageview
woopra.track();
</script>

