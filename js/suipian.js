window.onload = function () {
    var oTxt = document.getElementById("txt");
    var oBtn = document.getElementById("btn1");
    var oUl1 = document.getElementById("ul1");
    oBtn.onclick = function () {
        var oBox = document.createElement("div");
        oBox.className = "box";
        //创建头像
        var oDiv = document.createElement("div");
        oDiv.className = "touxiang";
        oBox.appendChild(oDiv);
        var oDiv = document.createElement("div");
        oDiv.className = "nicheng";
        oDiv.innerHTML = "17730197189";
        oBox.appendChild(oDiv);
        var oDiv = document.createElement("div");
        oDiv.className = "pinglun";
        oDiv.innerHTML = oTxt.value;
        oBox.appendChild(oDiv);
        var oDiv = document.createElement("div");
        oDiv.className = "shijian";
        var oDate = new Date();
        //oDate.getFullYear
        oDiv.innerHTML = "发表时间  " + oDate.getFullYear() + "年" + (oDate.getMonth() + 1) + "月" + oDate.getDate() + "日";
        oBox.appendChild(oDiv);
        oUl1.appendChild(oBox);
        /*oBox.insertBefore(oUl1,oDiv[0]);*/
        var aA = oDiv.getElementsByTagName("a");
        for (var i = 0; i < aA.length; i++) {
            aA[i].onclick = function () {
                oDiv.removeChild(this.parentNode);
            }
        }
    }
}