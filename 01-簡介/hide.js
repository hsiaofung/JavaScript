//第16章 : 使用JS操作CSS, 這常透過HTML屬性style, class來達成。
function hide(e, reflow) { //藉由操作樣式隱藏元素e
    if (reflow) { //如果第二個引數為true
        e.style.display = "none" //隱藏元素並收回它原本佔去的空間
    } else { //若不為true
        e.style.visibility = "hidden" //讓e隱形，但保留其所占空間
    }
}

function highlight(e) { //藉由設定一個css類別來標明(highlight)元素e
    //只要定義或附加至HTML class屬性
    //這裡假設有個css樣式表(stylesheet)已經定義hilite類別
    if (!e.className) e.className = "hilite";
    else e.className += " hilite";
}