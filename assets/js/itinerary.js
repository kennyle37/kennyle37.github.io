(function($) {

  var	$window = $(window),
    $body = $('body'),
    $wrapper = $('#page-wrapper'),
    $banner = $('#banner'),
    $header = $('#header'),
    $oldie1 = $('#oldie1'),
    $oldie2 = $('#oldie2');

  // Breakpoints.
  breakpoints({
    xlarge:   [ '1281px',  '1680px' ],
    large:    [ '981px',   '1280px' ],
    medium:   [ '737px',   '980px'  ],
    small:    [ '481px',   '736px'  ],
    xsmall:   [ null,      '480px'  ]
  });

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Mobile?
  if (browser.mobile)
    $body.addClass('is-mobile');
  else {

    breakpoints.on('>medium', function() {
      $body.removeClass('is-mobile');
    });

    breakpoints.on('<=medium', function() {
      $body.addClass('is-mobile');
    });

  }

  // Scrolly.
  $('.scrolly')
  .scrolly({
    speed: 1500,
    offset: $header.outerHeight()
  });

  // Menu.
  $('#menu')
  .append('<a href="#menu" class="close"></a>')
  .appendTo($body)
  .panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: 'right',
    target: $body,
    visibleClass: 'is-menu-visible'
  });

  // Header.
  if ($banner.length > 0 &&	$header.hasClass('alt')) {
    console.log($banner, $banner.length, "banner reached")
    $window.on('resize', function() { $window.trigger('scroll'); });

    $banner.scrollex({
      bottom:		$header.outerHeight() + 1,
      terminate:	function() { $header.removeClass('alt'); },
      enter:		function() {
        $header.addClass('alt');
        $oldie1.removeClass('oldie-nav');
        $oldie2.removeClass('oldie-nav');
      },
      leave:		function() {
        $header.removeClass('alt');
        $oldie1.addClass('oldie-nav');
        $oldie2.addClass('oldie-nav');
      }
    });
  }

})(jQuery);