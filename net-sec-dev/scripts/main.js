


var cols = document.getElementsByClassName('grid-item');

  

document.addEventListener('DOMContentLoaded', function () {

        var x = 0;
        var big = 0;

        WidthMidChange();
        var msnry = new Masonry('.grid', {
            itemSelector: '.grid-item'
        });

    });

if (matchMedia) {

    var mqsm = window.matchMedia("(min-width: 992px)");
    var mq = window.matchMedia("(min-width: 992px)");
    var mqlg = window.matchMedia("(min-width: 1200px)");
    mq.addListener(WidthMidChange);
    mqlg.addListener(WidthMidChange);
    mqsm.addListener(WidthMidChange);
}


    function WidthMidChange() {

        if(window.outerWidth <= 767 )
        {            
            for (i = 0; i < cols.length; i++) {

                cols[i].style.height = "0px";
                cols[i].style.height = "auto";
            }
        }
        else if (window.outerWidth <= 991) {
            setHeight(2, 'grid-item');
        }
        else if (window.outerWidth <= 1199) {
            setHeight(3, 'grid-item');
        }
        else {
            setHeight(4, 'grid-item');
        }
    }




    function setHeight(colNo, colClass) {
        x = 0;
        big = 0;

        for (i = 0; i < cols.length; i++) {

            cols[i].style.height = "auto";
        }
       


        for (i = 0; i < cols.length; i++) {

            if (cols[i].clientHeight >= big) {
                big = cols[i].clientHeight;
            }

            if (i % colNo == 0 && i != 0) {

                for (t = 0; t <= colNo; t++) {
                    c = i - t;
                    cols[c].style.height = big + "px";
                }

            }

        }
     
        

    }

    window.onresize = function(event) {
        WidthMidChange();
        };