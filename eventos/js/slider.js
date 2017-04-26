  (function() {
      overlayClose = document.getElementById('overlay-close'),
      toggleBtnn = function() {
        if( slideshow.isFullscreen ) {
          classie.add( switchBtnn, 'view-maxi' );
        }
        else {
          classie.remove( switchBtnn, 'view-maxi' );
        }
      },
      toggleCtrls = function() {
        if( !slideshow.isContent ) {
          classie.add( header, 'hide' );
        }
      },
      toggleCompleteCtrls = function() {
        if( !slideshow.isContent ) {
          classie.remove( header, 'hide' );
        }
      },
      slideshow = new DragSlideshow( document.getElementById( 'slideshow' ), {
        onToggle : toggleBtnn,
        onToggleContent : toggleCtrls,
        onToggleContentComplete : toggleCompleteCtrls
      }),
      toggleSlideshow = function() {
        slideshow.toggle();
        toggleBtnn();
      },
      closeOverlay = function() {
        classie.add( overlay, 'hide' );
      };

    overlayClose.addEventListener( 'click', closeOverlay );

  }());
