function loading(obj) {

    var data = obj.data;
    var progressFun = obj.progress;
    var doneFun = obj.done;

    // 记录图片总个数
    var allCount = 0;
    for (var key in data) {
        allCount++;
    }

    // 创建数组，用于存放所有加载好的图片对象
    var imgsObj = {};

    // 遍历对象
    for (var key in data) {
        var value = data[key];

        // 创建Image对象
        var img = new Image();
        img.src = value;

        // 不能直接使用.的方式添加属性，因为那样无法替换key的值
        imgsObj[key] = img;

        // 记录完成加载的图片的个数
        var doneCount = 0;
        img.onload = function () {
            doneCount++;

            // 计算当前的进度
            var v = doneCount / allCount * 100;
            if (progressFun) {
                progressFun(v);
            }

            // 如果全部加载完成，则需要进行回调
            if (doneCount == allCount) {
                if (doneFun) {
                    doneFun(imgsObj);
                }
            }
        };
    }

}
