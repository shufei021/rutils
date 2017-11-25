(function(win) {
    var doc = win.document,
        html = doc.documentElement,
        option = html.getAttribute('data-rem');

    if (option === null) {
        return;
    }

    // defaut baseWidth : 640px；
    var baseWidth = parseInt(option).toString() === 'NaN' ? 640 : parseInt(option);
    //默认 1rem == 100px
    var grids = baseWidth / 100; //转换成类似rem
    var clientWidth = html.clientWidth || 320; //clientWidth = width + padding
    // set rem first
    html.style.fontSize = clientWidth / grids + 'px';

    // create testDom
    var testDom = document.createElement('div');
    var testDomWidth = 0;
    var adjustRatio = 0;
    testDom.style.cssText = 'height:0;width:1rem;';
    doc.body.appendChild(testDom);

    var calcTestDom = function() {
        testDomWidth = testDom.offsetWidth;
        if (testDomWidth !== Math.round(clientWidth / grids)) {
            adjustRatio = clientWidth / grids / testDomWidth;
            var reCalcRem = clientWidth * adjustRatio / grids;
            html.style.fontSize = reCalcRem + 'px';
        } else {
            doc.body.removeChild(testDom);
        }
    };

    // detect if rem calc is working directly
    // if not , recalc and set the rem value
    setTimeout(calcTestDom, 20);

    var reCalc = function() {
        var newCW = html.clientWidth;
        if (newCW === clientWidth) {
            return;
        }
        clientWidth = newCW;
        html.style.fontSize = newCW * (adjustRatio ? adjustRatio : 1) / grids + 'px';
        // if( testDom ) setTimeout(calcTestDom, 20);
    };

    // Abort if browser does not support addEventListener
    if (!doc.addEventListener) {
        return;
    }

    var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';

    win.addEventListener(resizeEvt, reCalc, false);
    // detect clientWidth is changed ?
    doc.addEventListener('DOMContentLoaded', reCalc, false);

})(window);