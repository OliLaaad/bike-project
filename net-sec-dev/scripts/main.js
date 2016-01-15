

    var msnry = new Masonry('.grid', {
        itemSelector: '.grid-item'
    });



// media query event handler
if (matchMedia) {
    var mq = window.matchMedia("(min-width: 992px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  
  
}

