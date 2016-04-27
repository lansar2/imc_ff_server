/*

Insert this snippet into the <head> section. 

For more info, visit this page:

http://support.kissmetrics.com/getting-started/quickstart-install-kissmetrics.html

*/

<!-- Kissmetrics tracking snippet -->
<script type="text/javascript">var _kmq = _kmq || [];
var _kmk = _kmk || 'a9006d209bebfc43cec19fcccb008f2de3411041';
function _kms(u){
  setTimeout(function(){
    var d = document, f = d.getElementsByTagName('script')[0],
    s = d.createElement('script');
    s.type = 'text/javascript'; s.async = true; s.src = u;
    f.parentNode.insertBefore(s, f);
  }, 1);
}
_kms('//i.kissmetrics.com/i.js');
_kms('//scripts.kissmetrics.com/' + _kmk + '.2.js');
</script>

