// hamburgerIconというidで要素を取得する
const hamburgerIcon = document.getElementById('hamburgerIcon');
const hamburgerLineOne = document.getElementById('hamburgerLineOne');
const hamburgerLineTwo = document.getElementById('hamburgerLineTwo');
const hamburgerLineThree = document.getElementById('hamburgerLineThree');
const navSp = document.getElementById('navSp');


// ハンバーガー押すとこういうアクションを起こす
hamburgerIcon.addEventListener('click',
    () => {
        // このidがついている要素にクラスを toggle((トグル)＝ついてたら外す、なかったらつける) する
        hamburgerIcon.classList.toggle('hamburger-icon--open');
        // hamburgerLineOne に hamburger-icon__line--left のクラスを付与
        hamburgerLineOne.classList.toggle('hamburger-icon__line--left');
        hamburgerLineTwo.classList.toggle('hamburger-icon__line--none');
        hamburgerLineThree.classList.toggle('hamburger-icon__line--right');

        // add(読み方:あっど)
        // navSpにnav-sp--slideというクラスを付与します
        navSp.classList.add('nav-sp--slide');
        navSp.classList.toggle('nav-sp--sab');
    }
)


// スクロールを禁止にする関数
function disableScroll(event) {
    event.preventDefault();
}
// スクロール禁止
hamburgerIcon.onclick = function () {
    const hamburgerIconOpen = document.querySelector('hamburger-icon--open')

    // if() else(ifではない時)
    if (hamburgerIconOpen) {
        document.addEventListener('touchmove', disableScroll, { passive: false });
        document.addEventListener('wheel', disableScroll, { passive: false });
    } else {
        document.removeEventListener('touchmove', disableScroll, { passive: false });
        document.removeEventListener('wheel', disableScroll, { passive: false });
    }
}