function jsonp(url, parameter, callback) {
	
    // 生成一个 script 节点
    var script = document.createElement("script"); // <script></script>

    // 生成一个随机字符串作为回调函数名
    var randomKey = "cbf" + new Date().getTime(); // cbf1480489641452
    // 将callback以生成的随机串为属性名添加到window对象上，这样，在页面的任意位置都能以window[randomkey]()形式访问回调函数
    window[randomKey] = callback; //     window.cbf1480489641452 = callback;
    url += "?callback=" + randomKey; // http://127.0.0.1:8888/data/data.json?callback=cbf1480489641452

    // 拼接参数
    if (parameter) {
        for (var p in parameter) {
            url += ("&" + p + "=" + parameter[p]); // http://127.0.0.1:8888/data/data.json?callback=cbf1480489641452&a=10&b=20
        }
    }

    // 设置script节点的src属性
    script.src = url; // <script src="http://127.0.0.1:8888/data/data.json?callback=cbf1480489641452&a=10&b=20"></script>
    // 拼接到dom结构中
    document.body.appendChild(script);

    // 操作完成后移除script标签
    script.onload = function () {
        document.body.removeChild(script);
    };
}
