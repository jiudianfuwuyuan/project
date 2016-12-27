$(function () {
    $('.nav').on('click', 'li', function () {
        $(this).find('a').css({
            color: "#e76f61",
            "font-size": "1.4rem"
        });
        $(this).siblings().find('a').css({
            color: "#856e44",
            "font-size": "1.2rem"
        });
    });
    var vm = [
        {
            timeCountdown: '12345789',
            day: '',
            hours: '',
            mins: '',
            secs: ''
        },
        {
            timeCountdown: '23657789',
            day: '',
            hours: '',
            mins: '',
            secs: ''
        },
    ];
    for (var i = 0; i < vm.length; i++) {
        var totalSecs = vm[i].timeCountdown;
        vm[i].days = Math.floor(totalSecs / (24 * 60 * 60));
        // if (vm.items[i].days < 10) {
        //     vm.items[i].days = '0' + vm.days;
        // }
        console.log(totalSecs)
        var totalSecs1 = (totalSecs - vm[i].days * 24 * 60 * 60);
        vm[i].hours = Math.floor(totalSecs1 / (60 * 60));
        // if (vm.items[i].hours < 10) {
        //     vm.items[i].hours = '0' + vm.items[i].hours;
        // }
        var totalSecs2 = (totalSecs1 - vm[i].hours * 60 * 60);
        vm[i].mins = Math.floor(totalSecs2 / 60);
        // if (vm.items[i].mins < 10) {
        //     vm.items[i].mins = '0' + vm.items[i].mins;
        // }
        vm[i].secs = totalSecs2 - vm[i].mins * 60;
        // if (vm.items[i].secs < 10) {
        //     vm.items[i].secs = '0' + vm.items[i].secs;
        // }

    }
    setInterval(countDown, 1000);
    var target_date = new Date(settings.date)
    console.log(target_date)
    function countDown() {
        for (var i = 0; i < vm.length; i++) {
            
            var _second = 1000,
                _minute = _second * 60,
                _hour = _minute * 60,
                _day = _hour * 24;

            var days = Math.floor(difference / _day),
                hours = Math.floor((difference % _day) / _hour),
                minutes = Math.floor((difference % _hour) / _minute),
                seconds = Math.floor((difference % _minute) / _second);

            days = (String(days).length >= 2) ? days : '0' + days;
            hours = (String(hours).length >= 2) ? hours : '0' + hours;
            minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
            seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

            // sec = sec < 10 ? '0' + sec : sec;
            console.log(days, hours, minutes, seconds)

            // if (sec < 10) {
            //     sec = '0' + sec;
            //     if (sec < '00') {
            //         sec = 59;
            //         min--;
            //         if (min < 10) {
            //             min = '0' + min;
            //             if (min < '00') {
            //                 min = 59;
            //                 hour--;
            //             }
            //             if (hour < 10) {
            //                 hour = '0' + hour;
            //                 if (hour < '00') {
            //                     hour = 24;
            //                     day--;
            //                     if (day < 10) {
            //                         day = '0' + day;
            //                         if (day == '00') {
            //                             day = '00';
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }
        }
    }
})
// for (var i = 0; i < vm.items.length; i++) {
//     var totalSecs = vm.items[i].timeCountdown;
//     vm.items[i].days = Math.floor(totalSecs / (24 * 60 * 60));
//     if (vm.items[i].days < 10) {
//         vm.items[i].days = '0' + vm.items[i].days;
//     }
//     var totalSecs1 = (totalSecs - vm.items[i].days * 24 * 60 * 60);
//     vm.items[i].hours = Math.floor(totalSecs1 / (60 * 60));
//     if (vm.items[i].hours < 10) {
//         vm.items[i].hours = '0' + vm.items[i].hours;
//     }
//     var totalSecs2 = (totalSecs1 - vm.items[i].hours * 60 * 60);
//     vm.items[i].mins = Math.floor(totalSecs2 / 60);
//     if (vm.items[i].mins < 10) {
//         vm.items[i].mins = '0' + vm.items[i].mins;
//     }
//     vm.items[i].secs = totalSecs2 - vm.items[i].mins * 60;
//     if (vm.items[i].secs < 10) {
//         vm.items[i].secs = '0' + vm.items[i].secs;
//     }
// }
// $interval(function () {
//     for (var i = 0; i < vm.items.length; i++) {
//         vm.items[i].secs--;
//         if (vm.items[i].secs < 10) {
//             vm.items[i].secs = '0' + vm.items[i].secs;
//         }
//         if (vm.items[i].secs <= 0) {
//             vm.items[i].secs = 59;
//             vm.items[i].mins--;
//             if (vm.items[i].mins < 10) {
//                 vm.items[i].mins = '0' + vm.items[i].mins;
//             }
//             if (vm.items[i].mins <= 0) {
//                 vm.items[i].mins = 59;
//                 vm.items[i].hours--;
//                 if (vm.items[i].hours < 10) {
//                     vm.items[i].hours = '0' + vm.items[i].hours;
//                 }
//                 if (vm.items[i].hours <= 0) {
//                     vm.items[i].hours = 24;
//                     vm.items[i].days--;
//                     if (vm.items[i].days < 10) {
//                         vm.items[i].days = '10' + vm.items[i].days;
//                     }
//                 }
//             }
//         }
//     }
//     if('时分秒都是0的时候'){
//         // 执行一个函数 这个函数是删除 倒计时到了的 数组中元素
//     }
// }, 1000);
