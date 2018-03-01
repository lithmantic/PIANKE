require.config({
	baseUrl:'js/lib'
});
require(['diantaiquanbuone'],function(Factory){
	// 今日限定
	let today = document.getElementsByClassName('today_list')[0];
    let grass = document.getElementsByClassName('grass_list')[0];
    let ban = document.getElementsByClassName('rose')[0];
    let cui = document.getElementsByClassName('trave')[0];
    let ke = document.getElementsByClassName('kaer')[0];
    let ka = document.getElementsByClassName('music')[0];
    let day = document.getElementsByClassName('dream')[0];
    let nin = document.getElementsByClassName('night')[0];
    let ruguo = document.getElementsByClassName('listen')[0];
    let lu = document.getElementsByClassName('luming')[0];
    let ren = document.getElementsByClassName('fengjing')[0];
    let wu = document.getElementsByClassName('wusir')[0];
    let ying = document.getElementsByClassName('xueying')[0];
    let hui = document.getElementsByClassName('live')[0];
    let ye = document.getElementsByClassName('coffee')[0];
    let nan = document.getElementsByClassName('nanxia')[0];
    let nian = document.getElementsByClassName('suisui')[0];
    let wei = document.getElementsByClassName('weiqingxu')[0];
    let mian = document.getElementsByClassName('shimian')[0];
	let bei = document.getElementsByClassName('xiaobei')[0];
	let ls1 = new Factory(today,'ls1','image/ls1.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls2 = new Factory(today,'ls2','image/ls2.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls3 = new Factory(today,'ls3','image/ls3.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let ls4 = new Factory(grass,'ls4','image/ls4.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls5 = new Factory(grass,'ls5','image/ls5.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls6 = new Factory(grass,'ls6','image/ls6.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    let ls7 = new Factory(ban,'ls7','image/ls7.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls8 = new Factory(ban,'ls8','image/ls8.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls9 = new Factory(ban,'ls9','image/ls9.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let ls10 = new Factory(cui,'ls10','image/ls10.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls11 = new Factory(cui,'ls11','image/ls11.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls12 = new Factory(cui,'ls12','image/ls12.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    let ls13 = new Factory(ke,'ls13','image/ls13.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls14 = new Factory(ke,'ls14','image/ls14.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls15 = new Factory(ke,'ls15','image/ls15.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let ls16 = new Factory(ka,'ls16','image/ls16.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls17 = new Factory(ka,'ls17','image/ls17.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls18 = new Factory(ka,'ls18','image/ls18.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    let ls19 = new Factory(day,'ls19','image/ls19.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls20 = new Factory(day,'ls20','image/ls20.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls21 = new Factory(day,'ls21','image/ls21.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let ls22 = new Factory(nin,'ls22','image/ls22.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls23 = new Factory(nin,'ls23','image/ls23.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls24 = new Factory(nin,'ls24','image/ls24.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    let ls25 = new Factory(ruguo,'ls25','image/ls25.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls26 = new Factory(ruguo,'ls26','image/ls26.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls27 = new Factory(ruguo,'ls27','image/ls27.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let ls28 = new Factory(lu,'ls28','image/ls28.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let ls29 = new Factory(lu,'ls29','image/ls29.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let ls30 = new Factory(lu,'ls30','image/ls30.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    let ls1 = new Factory(ren,'ls1','image/ls1.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list2 = new Factory(ren,'list2','image/list2.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list3 = new Factory(ren,'list3','image/list3.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let list4 = new Factory(wu,'list4','image/list4.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list5 = new Factory(wu,'list5','image/list5.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list6 = new Factory(wu,'list6','image/list6.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    let ls1 = new Factory(ying,'ls1','image/ls1.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list2 = new Factory(ying,'list2','image/list2.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list3 = new Factory(ying,'list3','image/list3.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let list4 = new Factory(hui,'list4','image/list4.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list5 = new Factory(hui,'list5','image/list5.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list6 = new Factory(hui,'list6','image/list6.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    let ls1 = new Factory(ye,'ls1','image/ls1.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list2 = new Factory(ye,'list2','image/list2.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list3 = new Factory(ye,'list3','image/list3.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let list4 = new Factory(nan,'list4','image/list4.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list5 = new Factory(nan,'list5','image/list5.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list6 = new Factory(nan,'list6','image/list6.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    let ls1 = new Factory(nian,'ls1','image/ls1.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list2 = new Factory(nian,'list2','image/list2.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list3 = new Factory(nian,'list3','image/list3.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let list4 = new Factory(wei,'list4','image/list4.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list5 = new Factory(wei,'list5','image/list5.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list6 = new Factory(wei,'list6','image/list6.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    let ls1 = new Factory(mian,'ls1','image/ls1.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list2 = new Factory(mian,'list2','image/list2.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
	let list3 = new Factory(mian,'list3','image/list3.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
	let list4 = new Factory(bei,'list4','image/list4.jpg',{name:'最新发声',infor:'主播&nbsp;/&nbsp;pianketing',price:'12228726次播放'});
	let list5 = new Factory(bei,'list5','image/list5.jpg',{name:'汶霖FM',infor:'主播&nbsp;/&nbsp;汶霖FM',price:'1200758次播放'});
    let list6 = new Factory(bei,'list6','image/list6.jpg',{name:'药物青春唱片馆',infor:'主播&nbsp;/&nbsp;夏阳的药物青春',price:'689415次播放'});
    
});