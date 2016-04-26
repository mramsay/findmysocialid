Template.ads.rendered = function() {
  $.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function() {
    var ads, adsbygoogle;
    ads = '<ins class="adsbygoogle" style="display:inline-block;width:728px;height:40px" data-ad-client="ca-pub-4309852687688873" data-ad-slot="9680571142"></ins>';
    $('.ads').html(ads);
    return (adsbygoogle = window.adsbygoogle || []).push({});
  });
};
