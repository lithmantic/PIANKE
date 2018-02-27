require.config({
	baseUrl:'js/lib'
});
require(['diantaione'],function(Factory){
	// 今日限定
	let today = document.getElementsByClassName('tuijian')[0];
	let grass = document.getElementsByClassName('top')[0];
	let buyds = document.getElementsByClassName('remen')[0];
	let grdg = document.getElementsByClassName('zuixin')[0];
	let list_1 = new Factory(today,'list_1','image/list_1.jpg',{name:'mystery&nbsp;of&nbsp;love(翻唱)',infor:'主播&nbsp;/&nbsp;罗伊德',price:'3.9k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:107'});
	let list_2 = new Factory(today,'list_2','image/list_2.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'3.9k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:107'});
	let list_3 = new Factory(today,'list_3','image/list_3.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'3.9k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:107'});
	let list_4 = new Factory(grass,'list_4','image/list_4.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'3.9k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:107'});
	let list_5 = new Factory(grass,'list_5','image/list_5.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'3.9k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:107'});
	let list_6 = new Factory(grass,'list_6','image/list_6.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'3.9k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:107'});
	let list_7 = new Factory(buyds,'list_7','image/list_7.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12.3m次播放'});
	let list_8 = new Factory(buyds,'list_8','image/list_8.jpg',{name:'七夜电台',infor:'主播&nbsp;/&nbsp;pianketing',price:'45.8m次播放'});
	let list_9 = new Factory(buyds,'list_9','image/list_9.jpg',{name:'片刻翻唱',infor:'主播&nbsp;/&nbsp;pianketing',price:'15.3m次播放'});
	let list_10 = new Factory(grdg,'list_10','image/list_10.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'3.9k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:107'});
	let list_11 = new Factory(grdg,'list_11','image/list_11.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'3.9k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:107'});
	let list_12 = new Factory(grdg,'list_12','image/list_12.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'3.9k次播放&nbsp;|&nbsp;评论:16&nbsp;|&nbsp;喜欢:107'});

});