define([],function(){
	function Factory(parent,className,imgPath,json){
		this.parent = parent;
		this.className = className;
        this.path = imgPath;
        
        // 单个整体
        this.box = document.createElement('div');
        // 图片
        this.img = document.createElement('img');
        // 文字部分
        this.infor_box = document.createElement('div');
        
        this.zuixin = json.name;		
		this.zhubo = json.infor;		
        this.bofang = json.price;

        // 调用init方法
		this.init();
	}
	Factory.prototype = {
		constructor:Factory,
		init:function(){
            // 文字第一行
            let name = document.createElement('div');
            // 文字第二行
            let infor = document.createElement('div');
            // 文字第三行
			let price = document.createElement('div');
			
            // 可变的数据
			name.innerHTML = this.zuixin;
            infor.innerHTML = this.zhubo;
            price.innerHTML = this.bofang;
            
            // 设置样式
			name.style.cssText = 'width:242px;height:24px;text-align:center;line-height:22px;font-size:24px;position:absolute;';
			infor.style.cssText = 'width:242px;height:13px;text-align:center;line-height:13px;font-size:13px;position:absolute;top:36px;';
			price.style.cssText = 'display:block;width:242px;height:12px;text-align:center;font-size:12px;position:absolute;bottom:0px;';
			
            // 单个整体的box
            this.box.style.cssText = 'width:242px;height:354px;position:absolute;top:0;';
            // 图片设置
            this.img.style.cssText = 'width:242px;height:242px;position:absolute;';
            // 文字部分
			this.infor_box.style.cssText = 'width:242px;height:70px;position:absolute;top:285px;';
            // 图片部分
			this.img.src = this.path;
			
            // 文字部分
            this.infor_box.appendChild(name);
			this.infor_box.appendChild(infor);
            this.infor_box.appendChild(price);
            // 单个整体部分
			this.box.appendChild(this.infor_box);
            this.box.appendChild(this.img);
            
			this.box.className = this.className;                 
			this.parent.appendChild(this.box);
		},
	};
	return Factory;
});