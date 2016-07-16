function sendReport(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var n = 0;
  for(var i = 1;i<=sheet.getLastRow();i++){
  if(sheet.getRange(i, 2).getValue()>= 70){n++;}
  }
  //MailApp.sendEamilで{}内の内容を最初の""内で指定したアドレスにそれ以下の内容を送信する
  //二回目の""ではメールのタイトル
  MailApp.sendEmail(
  "isshintakatsusaido@gmail.com",
  "合格者の数",
  n + "名合格しました");
}

//onedit(e)でスプレッドシートの中のセルが編集されたときに動作する
//e.range.setCommentで編集してそのセルを選択したときに何を表示するか決める
function onEdit(e){
  e.range.setComment("Edited by:" + e.user);
}
//onOpenを使うことで開くたびに実行する手間が省ける
//開いたときに、実行する関数がonOpen
function onOpen(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menu = [
    {name:"初期化",functionName:"initSheet"},
    {name:"判定",functionName:"getResults"}
  ];
  ss.addMenu("処理メニュー", menu);
}



//function hello() {
  //ログを出力
  //Logger.log("hello,world");
  //スプレッドシートにアラートを表示させる
  //Browser.msgBox("hello,world");
  
//}


//関数を作ってスプレッドシートで使うことができる
//function getDouble(n){
  //return n * 2;
//}

//function setdata(){
  //getActivespreadsheetは紐付けされているスプレッドシートの事
  //var ss = SpreadsheetApp.getActiveSpreadsheet();
  //そのスプレッドシートの中のデータをsheetに入れている(ss.getActiveSheet())
  //var sheet = ss.getActiveSheet();
  //そしてその中のrange(範囲)を選択
  //var range = sheet.getRange("A1");
  //(low,cloum)を設定
  //var range = sheet.getRange(1, 2);
  //そしてその中にデータを入れる(set.Value)
  //range.setValue(100);
  //range.setBackground("skyblue");
//}

function initsheet(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var names = ["taguchi","isshin","dotinstall"];
  
  sheet.clear();
  
  for(var i = 1;i < 20;i++){
    //( Math.random() * records.length ) ]で配列からランダムに要素を指定する
    //Math.randomでランダム(乱数),*の後に続くところに最大値をセット(例:*6,*records.length)
    sheet.getRange(i, 1).setValue(names[Math.random()*names.length]);
    //+1したのは最小値がこのままだと0になるので()の外に+することで最小値を増やす
    sheet.getRange(i, 2).setValue(Math.floor(Math.random()*100)+ 1);
  }
}

function getresult(){
var sheet = SpreadsheetApp.getActiveSheet();
  for(var i = 1;i < sheet.getLastRow();i++){
    if(sheet.getRange(i, 2).getValue()>=20){
      sheet.getRange(i, 3).setValue("合格").setBackground("red");
    }
    else{
      sheet.getRange(i, 3).setValue("不合格").setBackground("blue");
    }
  }
}




