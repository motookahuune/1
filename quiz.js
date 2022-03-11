var quiz=[
    ["実業家の大立者の羽柴壮太郎の邸宅には喜びと恐怖がやってきました。喜びは、十年前に家出をした（1）・壮一が帰ってくることです。","次男","長男","次女","長女",2],
    ["一方、恐怖は最近世間を騒がしている｢(2）｣からロマノフ王家の宝石を狙った予告状が届いたことでした。","怪獣二十面相","怪人三十面相","怪人二十面相","怪奇面相",3],
    ["そして宝石は奪われてしまいました。さらには、次男・（3）が誘拐されてしまいました。","壮ニ","壮一","一郎","次郎",1],
    ["そこで、名探偵・明智小五郎に依頼したのですが、出張中の明智の補佐をしている小林（4）が依頼を受けました。","太郎","春也","谷井","芳雄",4],
];
var counter = 0;
var score = 0;
var end = false;

function set(){
  var order = document.getElementById("order");
  var question = document.getElementById("question");
  order.innerHTML = "【第" + (counter + 1) + "問】";
  question.innerHTML = quiz[counter][0];

  for(var i = 1; i < 5; i ++){
    var answer = document.getElementById("answer" + i);
    answer.innerHTML = quiz[counter][i];
  }
}

function judge(num){
  if(end){
    return;
  }
  var result = document.getElementById("result");
  var answer = quiz[counter][5];
  if(answer == num){
    result.innerHTML = "正解！";
    score += 1;
  }
  else{
    result.innerHTML = "不正解...";
  }
  if(counter == quiz.length - 1){
    result.innerHTML += quiz.length + "問中" + score + "問正解！";
    end = true;
  }
  else{
    counter += 1;
    set();
  }
}

