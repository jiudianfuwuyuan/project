$(function () {
    var width = 1620;
    var height = 480;
    var row = 10;
    var colle = 3;
    var all = row * colle;
    var boxWidth = width / row;
    var arr1 = [
        { one: [] },
        { two: [] },
        { therr: [] }
    ];
    var arr2 = [
        { one: [] },
        { two: [] },
        { therr: [] }
    ];
    for (var i = 0; i < all; i++) {
        var spanBox = $('<span class="one" id="one-' + i + '"></span>');
        var spanBoxBgX = (i % row) * boxWidth;
        var spanBoxBgY = Math.floor(i / row) * boxWidth;
        spanBox.css({ top: spanBoxBgY, left: spanBoxBgX });
        spanBox.css('background-position', '-' + spanBoxBgX + 'px -' + spanBoxBgY + 'px');
        $('#header-images').append(spanBox);
        switch (Math.floor(i / row)) {
            case 0: {
                arr1[0].one.push(spanBox);
            };
                break;
            case 1: {
                arr1[1].two.push(spanBox);
            };
                break;
            case 2: {
                arr1[2].therr.push(spanBox);
            };
                break;
            default:
                break;
        };
    };
    for (var i = 0; i < all; i++) {
        var spanBox = $('<span class="two" id="two-' + i + '"></span>');
        var spanBoxBgX = (i % row) * boxWidth;
        var spanBoxBgY = Math.floor(i / row) * boxWidth;
        spanBox.css({ top: spanBoxBgY, left: spanBoxBgX });
        spanBox.css('background-position', '-' + spanBoxBgX + 'px -' + spanBoxBgY + 'px');
        $('#header-images').append(spanBox);
        switch (Math.floor(i / row)) {
            case 0: {
                arr2[0].one.push(spanBox);
            };
                break;
            case 1: {
                arr2[1].two.push(spanBox);
            };
                break;
            case 2: {
                arr2[2].therr.push(spanBox);
            };
                break;
            default:
                break;
        };
    };
    var arrCount = 0;
    var elementPrevs = arr1;
    var elementNexts = arr2;
    var timer;
    var index = 2;
    var countPrevs = 0;
    var countNexts = 1;
    timer = setInterval(toggleDisplay, 500);
    function toggleDisplay() {
        var arr1TempEl0 = elementPrevs[0].one[arrCount];
        var arr1TempEl1 = elementPrevs[1].two[arrCount];
        var arr1TempEl2 = elementPrevs[2].therr[arrCount];
        var arr2TempEl0 = elementNexts[0].one[arrCount];
        var arr2TempEl1 = elementNexts[1].two[arrCount];
        var arr2TempEl2 = elementNexts[2].therr[arrCount];
        $(arr1TempEl0).fadeIn(1000);
        $(arr1TempEl1).fadeIn(1000);
        $(arr1TempEl2).fadeIn(1000);
        $(arr2TempEl0).fadeOut(1000);
        $(arr2TempEl1).fadeOut(1000);
        $(arr2TempEl2).fadeOut(1000);
        arrCount++;
        var array = [arr1, arr2];
        if (arrCount > 9) {
            arrCount = 0;
            clearInterval(timer);
            sort = 1;
            elementPrevs = [];
            elementNexts = [];
            countPrevs--;
            countNexts--;
            if (countPrevs < 0) { countPrevs = 1; };
            if (countNexts < 0) { countNexts = 1; };
            elementPrevs = array[countPrevs];
            elementNexts = array[countNexts];
            index++;
            var classStr = '.' + $(elementPrevs[0].one[0]).attr('class');
            var imageStr = "url('images/header/" + index + ".jpeg')";
            if (index == 5) { index = 0; };
            setTimeout(function () {
                $(classStr).css('background-image', imageStr);
            }, 500);
            setTimeout(function () {
                timer = setInterval(toggleDisplay, 500);
            }, 2000);
        };
    };
    $('.one').width(boxWidth).height(boxWidth);
    $('.two').width(boxWidth).height(boxWidth);

    // 从头开始
    // var count = 0;
    // var elementPrevs = twos;
    // var elementNexts = ones;
    // function statrDisplay() {
    //     var tempPrev = elementPrevs[count];
    //     var opacityPrev = tempPrev.css('opacity');

    //     var tempNext = elementNexts[count];
    //     tempNext.css('opacity', 0);
    //     var opacityNext = tempNext.css('opacity');

    //     var x = tempPrev.css('background-position-x');
    //     x = x.split('p')[0] * 1;
    //     var y = tempPrev.css('background-position-y');
    //     y = y.split('p')[0] * 1;

    //     if (opacityPrev == 1) {
    //         $(tempPrev).animate({
    //             // 'background-position-y': y - boxWidth + 'px',
    //             opacity: "0",
    //         });
    //     };
    //     if (opacityNext == 0) {
    //         $(tempNext).animate({
    //             // 'background-position-y': y - boxWidth + 'px',
    //             opacity: "1",
    //         });
    //     };
    //     count++;
    //     var array = [ones, twos];
    //     if (count > 29) {
    //         count = 0;
    //         clearInterval(timer);
    //         elementPrevs = [];
    //         elementNexts = [];
    //         countPrevs--;
    //         countNexts--;
    //         if (countPrevs < 0) { countPrevs = 1; };
    //         if (countNexts < 0) { countNexts = 1; };
    //         elementNexts = array[countNexts];
    //         elementPrevs = array[countPrevs];
    //         index++;
    //         var classStr = '.' + elementNexts[0].attr('class');
    //         var imageStr = "url('images/header/" + index + ".jpeg')";
    //         if (index == 5) { index = 0; };
    //         setTimeout(function () {
    //             $(classStr).css('background-image', imageStr);
    //         }, 300);
    //         setTimeout(function () {
    //             timer = setInterval(statrDisplay, 100);
    //         }, 2000);
    //     };
    // };

})
