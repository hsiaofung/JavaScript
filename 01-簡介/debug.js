//第15章 : 使用JS操作文件
//在文件中的一個特殊除錯輸出區段顯示訊息
//如果文件中沒有這個區段，就建立一個。
function debug(msg) {
    //藉由查看HTML id屬性，找尋文件的除錯輸出區段
    var log = document.getElementById("debuglog");

    //如果沒有任何元素的id是debuglog，那就建立一個
    if (!log) {
        log = document.createElement("div"); //創建一個新的<div>元素
        log.id = "debuglog"; //設定HTML id 屬性
        log.innerHTML = "<h1>Debug Log</h1>"; //定義初始內容
        document.body.appendChild(log) //加到文件末端
    }
    //現在將訊息包在<pre>中，並附加至log
    var pre = document.createElement("pre"); //創建一個pre標記
    var text = document.createTextNode(msg); //將msg包在文字節點(text node)中
    pre.appendChild(text); //將文字加至<pre>
    log.appendChild(pre); //將<pre>加至log
}