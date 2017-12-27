require.config({
	baseUrl:'js/lib'
});
require(['indexone'],function(Factory){
	// 今日限定
	let today = document.getElementsByClassName('today_list')[0];
	let grass = document.getElementsByClassName('grass_list')[0];
	let list_1 = new Factory(today,'list_1','image/list_1.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list_2 = new Factory(today,'list_2','image/list_2.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list_3 = new Factory(today,'list_3','image/list_3.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let list_4 = new Factory(grass,'list_4','image/list_4.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list_5 = new Factory(grass,'list_5','image/list_5.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list_6 = new Factory(grass,'list_6','image/list_6.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});

});