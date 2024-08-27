
 var _0x4b76 = ["dGFpcnl1", "value", "getElementById", "keyInput", "Invalid key!"];
 var loginKey = atob(_0x4b76[0]);

 function authenticate() {
     var inputKey = document[_0x4b76[2]](_0x4b76[3])[_0x4b76[1]];
     if (inputKey === loginKey) {
         document.getElementById('loginForm').style.display = 'none';
         document.getElementById('content').style.display = 'block';
     } else {
         alert(_0x4b76[4]);
     }
 }

 function openTab(tabName) {
     const tabs = document.querySelectorAll('.tab-content');
     tabs.forEach(tab => {
         tab.classList.remove('active');
     });

     const buttons = document.querySelectorAll('.tab-button');
     buttons.forEach(button => {
         button.classList.remove('active');
     });

     document.getElementById(tabName).classList.add('active');
     document.querySelector(`button[onclick="openTab('${tabName}')"]`).classList.add('active');
 }

 function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    document.querySelector(`button[onclick="openTab('${tabName}')"]`).classList.add('active');
}

//カスタムスピード
function HighSpeedcustom(){
var customspeedvalue = parseFloat(document.getElementById('customspeed').value);

h5gg.clearResults();
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('2139095040', 'I32', '0x4');
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'F32', '0x64');
h5gg.searchNumber('1', 'F32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x8')
h5gg.searchNumber('1', 'F32', '0x000000000', '0x200000000');
h5gg.editAll(customspeedvalue, 'F32');
};

//スクリプトーーー

//順番にTP
function redice1() {
// redice1の処理
}

function redice2() {
// redice2の処理
}

function Base3icecream() {
// Base3icecreamの処理
}

function whiteice2() {
// whiteice2の処理
}

function whiteice1() {
// whiteice1の処理
}

function whitewall() {
// whiteice1の処理
}

function whiteBossice() {
// whiteice1の処理
}

function executeRediceFunctions() {
var functions = [redice1, redice2, Base3icecream, whiteice2, whiteice1, whitewall, whiteBossice, redice1,];

functions.forEach(function(fn, index) {
setTimeout(fn, index * 500);  // 0.5秒ごとに関数を順番に実行するやつ
});
}

// ボタンのクリックイベントに関数を関連付ける
document.getElementById('startButtonred').onclick = executeRediceFunctions;


//白用順番にTP

function redice1() {
// redice1の処理
}

function redice2() {
// redice2の処理
}

function Base3icecream() {
// Base3icecreamの処理
}

function whiteice2() {
// whiteice2の処理
}

function whiteice1() {
// whiteice1の処理
}

function redwall() {
// whiteice1の処理
}

function redbossice() {
// whiteice1の処理
}

function whiteexecuteRediceFunctions() {
var functions = [redice1, redice2, Base3icecream, whiteice2, whiteice1, redwall, redbossice, whiteice1,];

functions.forEach(function(fn, index) {
setTimeout(fn, index * 500);  // 0.5秒ごとに関数を順番に実行するやつ
});
}

// ボタンのクリックイベントに関数を関連付ける
document.getElementById('startButtonwhite').onclick = whiteexecuteRediceFunctions;

//最強Tp
function whiteBossice() {
// whiteice1の処理
}

function whitewall() {
// whiteice1の処理
}

function whiteiceTPrepeat() {
var functions = [whitewall, whiteBossice, whitewall, whiteBossice, whitewall, whiteBossice, whitewall, whiteBossice, ];

functions.forEach(function(fn, index) {
setTimeout(fn, index * 100);  // 0.5秒ごとに関数を順番に実行するやつ
});
}

//最強Tp２
function redBossice() {
// whiteice1の処理
}

function redwall() {
}

document.getElementById('rediceTPrepeat').onclick = rediceTPrepeat;

function rediceTPrepeat() {
var functions = [redwall, redbossice, redwall, redbossice, redwall, redbossice, redwall, redbossice, redwall, redbossice, redwall, ];

functions.forEach(function(fn, index) {
setTimeout(fn, index * 100);  
});
}


// ボタンのクリックイベントに関数を関連付ける
document.getElementById('whiteiceTPrepeat').onclick = whiteiceTPrepeat;
//順番に拠点にTP用

function redice1() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, -127.577278, "F32"); // X座標
h5gg.setValue(addresses - 8, 1.21, "F32");  // Y座標
h5gg.setValue(addresses - 4, -1.918596, "F32");  // Z座標
}
}

function redice2() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, -100.013695, "F32"); // X座標
h5gg.setValue(addresses - 8, 1.21, "F32");  // Y座標
h5gg.setValue(addresses - 4, 108.077263, "F32");  // Z座標
}
}

function Base3icecream() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, 0.161374, "F32"); // X座標
h5gg.setValue(addresses - 8, 1.21, "F32");  // Y座標
h5gg.setValue(addresses - 4, 153.086731, "F32");  // Z座標
}
}

function whiteice2() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, 100.013695, "F32"); // X座標
h5gg.setValue(addresses - 8, 1.21, "F32");  // Y座標
h5gg.setValue(addresses - 4, 108.078178, "F32");  // Z座標
}
}

function whiteice1() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, 127.577278, "F32"); // X座標
h5gg.setValue(addresses - 8, 1.21, "F32");  // Y座標
h5gg.setValue(addresses - 4, -1.918596, "F32");  // Z座標
}
}

//精子

function whitewall() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, 127.361992, "F32"); // X座標
h5gg.setValue(addresses - 8, 1.21, "F32");  // Y座標
h5gg.setValue(addresses - 4, -120.180000, "F32");  // Z座標
}
}

function whiteBossice() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, 127.361992, "F32"); // X座標
h5gg.setValue(addresses - 8, 1.21, "F32");  // Y座標
h5gg.setValue(addresses - 4, -142.180000, "F32");  // Z座標
}
}

//赤おっきいアイス

function redwall() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, -127.361992, "F32"); // X座標
h5gg.setValue(addresses - 8, 1.21, "F32");  // Y座標
h5gg.setValue(addresses - 4, -120.180000, "F32");  // Z座標
}
}

function redbossice() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, -127.361992, "F32"); // X座標
h5gg.setValue(addresses - 8, 1.21, "F32");  // Y座標
h5gg.setValue(addresses - 4, -142.180000, "F32");  // Z座標
}
}

//座標表示
function showCurrentCoordinates() {
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);

if (results.length > 0) {
var addresses = results[0].address;
var x = h5gg.getValue(addresses - 12, "F32"); // X座標
var y = h5gg.getValue(addresses - 8, "F32");  // Y座標
var z = h5gg.getValue(addresses - 4, "F32");  // Z座標

alert(`現在の座標:\nX: ${x}\nY: ${y}\nZ: ${z}`);
} else {
alert("座標が見つかりませんでした。");
}
}

//TPカスタム
function tpcustom() {
var xValue = parseFloat(document.getElementById('xInput').value);
var yValue = parseFloat(document.getElementById('yInput').value);
var zValue = parseFloat(document.getElementById('zInput').value);

h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for (var i = 0; i < results.length; i++) {
var addresses = results[i].address;
h5gg.setValue(addresses - 12, xValue, "F32"); // X座標
h5gg.setValue(addresses - 8, yValue, "F32");  // Y座標
h5gg.setValue(addresses - 4, zValue, "F32");  // Z座標
}
}
//無重力
function ZeroGravity(){
h5gg.clearResults();
h5gg.searchNumber('-28', 'F32', '0x000000000', '0x200000000');
h5gg.editAll('0', 'F32');
};

//無敵とか
function werewolfinvincible(){
h5gg.clearResults();
h5gg.searchNumber('-524801', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('200', 'I32', '0x100');
h5gg.searchNumber('200', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('1', 'I32', '0x5');
h5gg.searchNumber('1', 'I32', '0x000000000', '0x300000000');
h5gg.editAll('200', 'F32');
};
//市民無敵
function Citizeninvincible(){
h5gg.clearResults();
h5gg.searchNumber('-524801', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('100', 'I32', '0x100');
h5gg.searchNumber('100', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('1', 'I32', '0x5');
h5gg.searchNumber('1', 'I32', '0x000000000', '0x300000000');
h5gg.editAll('100', 'F32');
};

function airjump(){
h5gg.clearResults();
h5gg.searchNumber('-524801', 'I32', '0x000000000', '0x200000000');
h5gg.editAll('-1', 'I32');
};
//パンチ連射
function rapidfirepunch(){
h5gg.clearResults();
h5gg.searchNumber('-1402908826', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('25', 'F32', '0x60');
h5gg.searchNearby('0.5', 'F32', '0x60');
h5gg.searchNumber('0.5', 'F32', '0x000000000', '0x200000000');
h5gg.editAll('0', 'F32');
};
//ラケット人狼棒連射
function rapidfireB1(){
h5gg.clearResults();
h5gg.searchNumber('1314932810', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('0.80', 'F32', '0x100');
h5gg.searchNumber('0.80', 'F32', '0x000000000', '0x200000000');
h5gg.editAll('0', 'F32');
h5gg.clearResults();
h5gg.searchNumber('-1214323991', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1061997773', 'I32', '0x100');
h5gg.searchNearby('25', 'F32', '0x100');
h5gg.searchNumber('1061997773', 'I32', '0x000000000', '0x200000000');
h5gg.editAll('0', 'I32');
};
//連射グレネード
function Rapidfiregrenade(){
h5gg.clearResults();
h5gg.searchNumber('1524757721', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('0.5', 'F32', '0x64');
h5gg.searchNumber('0.5', 'F32', '0x000000000', '0x300000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for(var i=0; i<results.length; i++){
var addresses = results[i].address
h5gg.setValue(addresses, '0', 'F32');
h5gg.setValue(addresses - 52, '0', 'F64');
if(h5gg.setValue(addresses - 36, '0', 'F64')==true){
}}}
//全武器連射
function test03189275(){
h5gg.clearResults();
h5gg.searchNumber('1824920568', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('0.5', 'F32', '0x64');
h5gg.searchNumber('0.5', 'F32', '0x000000000', '0x300000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for(var i=0; i<results.length; i++)
var addresses = results[i].address
h5gg.setValue(addresses, '0', 'F32');
if(h5gg.setValue(addresses - 20, '0', 'F64')==true)
h5gg.clearResults();
h5gg.searchNumber('1702189254', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('1', 'F32', '0x76');
h5gg.searchNumber('1', 'F32', '0x000000000', '0x300000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for(var i=0; i<results.length; i++){
var addresses = results[i].address
h5gg.setValue(addresses, '0', 'F32');
h5gg.setValue(addresses - 20, '0', 'I32');
h5gg.setValue(addresses - 60, '0', 'I32');
}
h5gg.searchNearby('0.5', 'F32', '0x8');
h5gg.searchNumber('0.5', 'F32', '0x000000000', '0x300000000');
if(h5gg.editAll('0', 'I32')>0)
h5gg.clearResults();
h5gg.searchNumber('1402080075', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'I32', '0x5');
h5gg.searchNearby('2', 'I32', '0x5');
h5gg.searchNumber('1', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'F32', '0x100');
h5gg.editAll('0', 'I32');
h5gg.clearResults();
h5gg.searchNumber('1673215173', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'I32', '0x5');
h5gg.searchNearby('2', 'I32', '0x5');
h5gg.searchNumber('1', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'F32', '0x100');
h5gg.editAll('0', 'I32');
h5gg.clearResults();
h5gg.searchNumber('1319234658', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'I32', '0x5');
h5gg.searchNearby('3', 'I32', '0x5');
h5gg.searchNumber('1', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'F32', '0x100');
h5gg.editAll('0', 'I32');
h5gg.clearResults();
h5gg.searchNumber('1249736853', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'I32', '0x5');
h5gg.searchNearby('5', 'I32', '0x5');
h5gg.searchNumber('1', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('0.50', 'F32', '0x100');
h5gg.editAll('0', 'I32');
};
//ばね連射
function Springrapidfire(){
h5gg.clearResults();
h5gg.searchNumber('1657047120', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('0.5', 'F32', '0x64');
h5gg.searchNumber('0.5', 'F32', '0x000000000', '0x300000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for(var i=0; i<results.length; i++){
var addresses = results[i].address
h5gg.setValue(addresses, '0', 'F32');
h5gg.setValue(addresses - 52, '0', 'F64');
if(h5gg.setValue(addresses - 36, '0', 'F64')==true){
}}}
//5vs5チート
function Warp0(){
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for(var i=0; i<results.length; i++){
var addresses = results[i].address
h5gg.setValue(addresses - 12, "127", "F32");//X座標
h5gg.setValue(addresses - 8, "0", "F32");//Y座標
h5gg.setValue(addresses - 4, "-117", "F32");//Z座標
}}

function Warp1(){
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for(var i=0; i<results.length; i++){
var addresses = results[i].address
h5gg.setValue(addresses - 12, "-127", "F32");//X座標
h5gg.setValue(addresses - 8, "0", "F32");//Y座標
h5gg.setValue(addresses - 4, "-117", "F32");//Z座標
}}

function Warp2(){
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for(var i=0; i<results.length; i++){
var addresses = results[i].address
h5gg.setValue(addresses - 12, "138.9782257080078", "F32");
h5gg.setValue(addresses - 8, "23.340545654296875", "F32");
h5gg.setValue(addresses - 4, "-109.0199966430664", "F32");
}}

function Warp3(){
h5gg.clearResults();
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x16');
h5gg.searchNumber('17170436', 'I32', '0x000000000', '0x200000000');
var count = h5gg.getResultsCount();
var results = h5gg.getResults(count, 0);
for(var i=0; i<results.length; i++){
var addresses = results[i].address
h5gg.setValue(addresses - 12, "-138.9782257080078", "F32");
h5gg.setValue(addresses - 8, "23.340545654296875", "F32");
h5gg.setValue(addresses - 4, "109.0199966430664", "F32");
}}

function test55(){
h5gg.clearResults();
h5gg.searchNumber('-1402908826', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('25', 'F32', '0x60');
h5gg.searchNearby('0.5', 'F32', '0x60');
h5gg.searchNumber('0.5', 'F32', '0x000000000', '0x200000000');
h5gg.editAll('0', 'F32');
h5gg.clearResults();
h5gg.searchNumber('-524801', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('100', 'I32', '0x100');
h5gg.searchNumber('100', 'I32', '0x000000000', '0x300000000');
h5gg.searchNearby('1', 'I32', '0x5');
h5gg.searchNumber('1', 'I32', '0x000000000', '0x300000000');
h5gg.editAll('0', 'I32');
};

function test55v(){
h5gg.clearResults();
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('2139095040', 'I32', '0x4');
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'F32', '0x64');
h5gg.searchNumber('1', 'F32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x8')
h5gg.searchNumber('1', 'F32', '0x000000000', '0x200000000');
h5gg.editAll('6','F32');
hj = 2;
};

function idou0(){
h5gg.clearResults();
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('2139095040', 'I32', '0x4');
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'F32', '0x64');
h5gg.searchNumber('1', 'F32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x8')
h5gg.searchNumber('1', 'F32', '0x000000000', '0x200000000');
h5gg.editAll('3','F32');
hj = 2;
};

function HighSpeedx1(){
h5gg.clearResults();
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('2139095040', 'I32', '0x4');
h5gg.searchNumber('-1082130432', 'I32', '0x000000000', '0x200000000');
h5gg.searchNearby('1', 'F32', '0x64');
h5gg.searchNumber('1', 'F32', '0x000000000', '0x200000000');
h5gg.searchNearby('1065353216', 'I32', '0x8')
h5gg.searchNumber('1', 'F32', '0x000000000', '0x200000000');
h5gg.editAll('1.5','F32');
};
//おわり