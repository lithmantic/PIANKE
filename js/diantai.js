require.config({
	baseUrl:'js/lib'
});
require(['diantaione'],function(Factory){
	// 今日限定
	let today = document.getElementsByClassName('tuijian')[0];
	let grass = document.getElementsByClassName('top')[0];
	let buyds = document.getElementsByClassName('remen')[0];
	let grdg = document.getElementsByClassName('zuixin')[0];
	let list_1 = new Factory(today,'list_1','image/list_1.gif',{name:'珍惜眼前人',infor:'主播&nbsp;/&nbsp;NJ文柯',price:'2.2k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:36'});
	let list_2 = new Factory(today,'list_2','image/list_2.jpeg',{name:'拜个晚年',infor:'主播&nbsp;/&nbsp;徐琳',price:'1.3k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:22'});
	let list_3 = new Factory(today,'list_3','image/list_3.jpg',{name:'其实我一个朋友也没有',infor:'主播&nbsp;/&nbsp;半岛玫瑰',price:'8.7k次播放&nbsp;|&nbsp;评论:220&nbsp;|&nbsp;喜欢:435'});
	let list_4 = new Factory(grass,'list_4','image/list_4.jpg',{name:'这四种人可能要单身',infor:'主播&nbsp;/&nbsp;安夏Ukki',price:'4.0k次播放&nbsp;|&nbsp;评论:60&nbsp;|&nbsp;喜欢:146'});
	let list_5 = new Factory(grass,'list_5','image/list_5.jpg',{name:'Make you feel my ',infor:'主播&nbsp;/&nbsp;Zoe Xu',price:'385k次播放&nbsp;|&nbsp;评论:6&nbsp;|&nbsp;喜欢:78'});
	let list_6 = new Factory(grass,'list_6','image/list_6.jpg',{name:'自在听吧~早去早回',infor:'主播&nbsp;/&nbsp;活力音乐台',price:'648次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:7'});
	let list_7 = new Factory(buyds,'list_7','image/list_7.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12.3m次播放'});
	let list_8 = new Factory(buyds,'list_8','image/list_8.jpg',{name:'七夜电台',infor:'主播&nbsp;/&nbsp;pianketing',price:'45.8m次播放'});
	let list_9 = new Factory(buyds,'list_9','image/list_9.jpg',{name:'片刻翻唱',infor:'主播&nbsp;/&nbsp;pianketing',price:'15.3m次播放'});
	let list_10 = new Factory(grdg,'list_10','image/list_10.jpg',{name:'女生的幸福取决于自己',infor:'主播&nbsp;/&nbsp;贰玖故事',price:'4k次播放&nbsp;|&nbsp;评论:452&nbsp;|&nbsp;喜欢:609'});
	let list_11 = new Factory(grdg,'list_11','image/list_11.jpg',{name:'你一定要找这样的人',infor:'主播&nbsp;/&nbsp;DJ程一',price:'669次播放&nbsp;|&nbsp;评论:3&nbsp;|&nbsp;喜欢:56'});
	let list_12 = new Factory(grdg,'list_12','image/list_12.jpg',{name:'翻唱 白羊',infor:'主播&nbsp;/&nbsp;李瑶瑶瑶瑶瑶',price:'123次播放&nbsp;|&nbsp;评论:45&nbsp;|&nbsp;喜欢:56'});

});