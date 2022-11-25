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


