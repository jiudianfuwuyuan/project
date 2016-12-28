$(function () {
    ShowMap('113.32404,23.124901', '北京', '123', '021-888888888', '021-888888888', '20');
})
function getInfo(id) {
    $.ajax({
        type: "POST",
        url: "WebUserControl/Contact/GetInfo.ashx",
        cache: false,
        async: false,
        data: { ID: id },
        success: function (data) {
            data = eval(data);
            var length = data.length;
            if (length > 0) {
                ShowMap(data[0]["Image"], data[0]["NewsTitle"], data[0]["Address"], data[0]["Phone"], data[0]["NewsTags"], data[0]["NewsNum"]);
            }
        }
    });
}
function ShowMap(zuobiao, name, addrsee, phone, chuanzhen, zoom) {
    var arrzuobiao = zuobiao.split(',');
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(arrzuobiao[0], arrzuobiao[1]), zoom);
    map.addControl(new BMap.NavigationControl());
    var marker = new BMap.Marker(new BMap.Point(arrzuobiao[0], arrzuobiao[1]));
    map.addOverlay(marker);    
}