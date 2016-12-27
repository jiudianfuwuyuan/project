$(function () {
    
    // parseInt 转化为整数
    // Math.ceil 向上取整
    // Math.round 四舍五入
    // Math.floor 向下取整
    // toFlter 保留几位小数点
    var width = 1620;
    var height = 486;
    // 一行几个
    var row = 10;
    // 一列几个
    var colle = 3;
    // 总共个数
    var all = row * colle;
    var boxWidth = 1620 / row;
    // $('#header-images').width(width).height(height);
    var ones = []; var twos = []; var therrs = []; var fours = []; var fives = [];

    for (var i = 0; i < all; i++) {
        var spanBox = $('<span class="one" id="one-' + i + '"></span>');
        var spanBoxBgX = (i % row) * boxWidth;
        var spanBoxBgY = Math.floor(i / row) * boxWidth;
        spanBox.css({
            top: spanBoxBgY,
            left: spanBoxBgX
        })
       
        spanBox.css('background-position', '-' + spanBoxBgX + 'px -' + spanBoxBgY + 'px');
        $('#header-images').append(spanBox);
        ones.push(spanBox);
    }
    for (var i = 0; i < all; i++) {
        var spanBox = $('<span class="two" id="two-' + i + '"></span>');
        var spanBoxBgX = (i % row) * boxWidth;
        var spanBoxBgY = Math.floor(i / row) * boxWidth;
        spanBox.css({
            top: spanBoxBgY,
            left: spanBoxBgX
        })
        spanBox.css('background-position', '-' + spanBoxBgX + 'px -' + spanBoxBgY + 'px');
        $('#header-images').append(spanBox);
        twos.push(spanBox);
    }
    for (var i = 0; i < all; i++) {
        var spanBox = $('<span class="therr" id="therr-' + i + '"></span>');
        var spanBoxBgX = (i % row) * boxWidth;
        var spanBoxBgY = Math.floor(i / row) * boxWidth;
        spanBox.css({
            top: spanBoxBgY,
            left: spanBoxBgX
        })
        spanBox.css('background-position', '-' + spanBoxBgX + 'px -' + spanBoxBgY + 'px');
        $('#header-images').append(spanBox);
        therrs.push(spanBox);
    }
    for (var i = 0; i < all; i++) {
        var spanBox = $('<span class="four" id="four-' + i + '"></span>');
        var spanBoxBgX = (i % row) * boxWidth;
        var spanBoxBgY = Math.floor(i / row) * boxWidth;
        spanBox.css({
            top: spanBoxBgY,
            left: spanBoxBgX
        })
        spanBox.css('background-position', '-' + spanBoxBgX + 'px -' + spanBoxBgY + 'px');
        $('#header-images').append(spanBox);
        fours.push(spanBox);
    }
    for (var i = 0; i < all; i++) {
        var spanBox = $('<span class="five" id="five-' + i + '"></span>');
        var spanBoxBgX = (i % row) * boxWidth;
        var spanBoxBgY = Math.floor(i / row) * boxWidth;
        spanBox.css({
            top: spanBoxBgY,
            left: spanBoxBgX
        })
        spanBox.css('background-position', '-' + spanBoxBgX + 'px -' + spanBoxBgY + 'px');
        $('#header-images').append(spanBox);
        fives.push(spanBox);
    }

    // for (var i = 0; i < all; i++) {
    //     var spanBox = $('<span class="two" id="two-' + i + '"></span>');
    //     var spanBoxBgX = (i % row) * boxWidth;
    //     var spanBoxBgY = Math.floor(i / row) * boxWidth;
    //     spanBox.css('background-position', '-' + spanBoxBgX + 'px -' + spanBoxBgY + 'px');
    //     $('#header-images').append(spanBox);
    //     elements.push(spanBox);
    // }

    // 左右
    // var arr = [
    //     { one: [] },
    //     { two: [] },
    //     { therr: [] }
    // ];
    // for (var i = 0; i < all; i++) {
    //     var spanBox = $('<span class="hover" id="hover-' + i + '"></span>');
    //     var spanBoxBgX = (i % row) * boxWidth;
    //     var spanBoxBgY = Math.floor(i / row) * boxWidth;
    //     spanBox.css('background-position', '-' + spanBoxBgX + 'px -' + spanBoxBgY + 'px');
    //     $('#header-images').append(spanBox);
    //     switch (Math.floor(i / row)) {
    //         case 0: {
    //             arr[0].one.push(spanBox)
    //         }
    //             break;
    //         case 1: {
    //             arr[1].two.push(spanBox)
    //         }
    //             break;
    //         case 2: {
    //             arr[2].therr.push(spanBox)
    //         }
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // var arr1 = 9;
    // function toggleDisplay() {
    //     // var tempEl = elements[count];
    //     // console.log(arr[0].one)
    //     var tempEl0 = arr[0].one[arr1]
    //     var tempEl1 = arr[1].two[arr1]
    //     var tempEl2 = arr[2].therr[arr1]

    //     var opacity0 = tempEl0.css('opacity');
    //     var opacity1 = tempEl1.css('opacity');
    //     var opacity2 = tempEl2.css('opacity');
    //     if (opacity0 == 0 && opacity1 == 0 && opacity2 == 0) {
    //         $(tempEl0).animate({ opacity: 1 })
    //         $(tempEl1).animate({ opacity: 1 })
    //         $(tempEl2).animate({ opacity: 1 })
    //     }
    //     else {
    //         $(tempEl0).animate({ opacity: 0 })
    //         $(tempEl1).animate({ opacity: 0 })
    //         $(tempEl2).animate({ opacity: 0 })
    //     }
    //     // 从右到左
    //     arr1--;
    //     if (arr1 < 0) {
    //         arr1 = 9;
    //     }
    //     // 从做到右
    //     // arr1 = (arr1 + 1) % arr[0].one.length;
    // }




    // 从头到尾
    var elementPrevs = fives;
    var elementNexts = fours;

    var timer;
    var count = 0;
    var countPrevs = 4;
    var countNexts = 3;
    timer = setInterval(toggleDisplay, 300);

    function toggleDisplay() {
        var tempPrev = elementPrevs[count];
        var opacityPrev = tempPrev.css('opacity');

        var tempNext = elementNexts[count];
        tempNext.css('opacity', 0);
        var opacityNext = tempNext.css('opacity');

        var x = tempPrev.css('background-position-x');
        x = x.split('p')[0] * 1;
        var y = tempPrev.css('background-position-y');
        y = y.split('p')[0] * 1;

        if (opacityPrev == 1) {
            $(tempPrev).animate({
                // 'background-position-y': y - boxWidth + 'px',
                opacity: "0",
            })
        }
        if (opacityNext == 0) {
            $(tempNext).animate({
                // 'background-position-y': y - boxWidth + 'px',
                opacity: "1",
            })
        }
        count++;
        var array = [ones, twos, therrs, fours, fives];
        if (count > 29) {
            count = 0;
            clearInterval(timer);

            elementPrevs = [];
            elementNexts = [];
            countPrevs--;
            countNexts--;
            if (countPrevs < 0) {
                countPrevs = 4;
            }
            if (countNexts < 0) {
                countNexts = 4;
            }
            elementNexts = array[countNexts];
            elementPrevs = array[countPrevs];
            setTimeout(function () {
                timer = setInterval(toggleDisplay, 300);
            }, 5000);
        }
    }
    $('.one').width(boxWidth).height(boxWidth);
    $('.two').width(boxWidth).height(boxWidth);
    $('.therr').width(boxWidth).height(boxWidth);
    $('.four').width(boxWidth).height(boxWidth);
    $('.five').width(boxWidth).height(boxWidth);
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
})
