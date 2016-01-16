

    var msnry = new Masonry('.grid', {
        itemSelector: '.grid-item'
    });




    window.onload = function () {


        var x = 0;
        var big = 0;


        msnry.on("layoutComplete", function () {

            WidthMidChange(mq);
            WidthLgChange(mqlg);
        });

        // media query event handler
        if (matchMedia) {
            var mq = window.matchMedia("(min-width: 992px)");
            var mqlg = window.matchMedia("(min-width: 1200px)");
            mq.addListener(WidthMidChange);
            mqlg.addListener(WidthLgChange);
            WidthMidChange(mq);
            WidthLgChange(mqlg);
        }

        // media query change
        function WidthMidChange(mq) {

            if (window.innerWidth <= 991) {
                setHeight(2, 'grid-item col-sm-6');
            }
            else {
                setHeight(3, 'grid-item col-md-4');
            }
        }

        function WidthLgChange(mqlg) {

            if (window.innerWidth <= 1199) {
                setHeight(3, 'grid-item col-md-4');
            }
            else {
                setHeight(4, 'grid-item col-lg-3');
            }


        }


        function setHeight(colNo, colClass)
        {
            cols = document.getElementsByClassName(colClass);
            x = 0;
            big = 0;

            for (i = 0; i < cols.length; i++) {

                cols[i].style.minHeight ="initial";
            }
            for (i = 0; i < cols.length; i++) {

                cols[i].style.Height = "none";
            }


            for (i = 0; i < cols.length; i++) {

                if (cols[i].clientHeight > big) {
                    big = cols[i].clientHeight;
                }

                if (i % colNo == 0 && i != 0) {

                    for (t = 1; t <= colNo; t++)
                    {
                        c = i - t;
                        console.log(cols[c]);
                        cols[c].style.minHeight = big + "px";
                        console.log('is it working');
                    }

                    console.log(big);
                    big = 0;
                }

            }

        }


    };