// hamburgerIconというidで要素を取得する
const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerLineOne = document.getElementById('hamburgerLineOne');
const hamburgerLineTwo = document.getElementById('hamburgerLineTwo');
const hamburgerLineThree = document.getElementById('hamburgerLineThree');

// ハンバーガー押すとこういうアクションを起こす
hamburgerIcon.addEventListener('click' ,
    () => {
        // このidがついている要素にクラスを toggle((トグル)＝ついてたら外す、なかったらつける) する
        hamburgerIcon.classList.toggle('hamburger-icon--open');
        // hamburgerLineOne に hamburger-icon__line--left のクラスを付与
        hamburgerLineOne.classList.toggle('hamburger-icon__line--left');
        hamburgerLineTwo.classList.toggle('hamburger-icon__line--none');
        hamburgerLineThree.classList.toggle('hamburger-icon__line--right');
    }
)


$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});