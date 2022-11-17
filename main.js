let jikkopoint = 0

function shirokumarorikon(event) {
    if(event.key == `Enter`){
        document.getElementById(`textzikkou`).value = ``
    }
    document.getElementById('shirokuma_misyou').style.width = "200px";
    if (document.querySelector(`#textzikkou`).value == `shirokumajikko` || document.querySelector(`#textzikkou`).value == `shirokumazikko`) {
        jikkopoint = jikkopoint + 1
        document.querySelector(`#textzikkou`).value = ''
        document.querySelector(`#shirokumasiskon`).innerHTML = jikkopoint + `ポイント`
    }
    else {

    }
}
document.querySelector(`.saisyujikko`).addEventListener(`onkeyup`, shirokumajipo())
function shirokumajipo() {
    let time = 10
    setInterval(() => {
        time -= 1
        if (time == 0) {
            score_jikko();
            clearInterval;
        }
    }, 1000)
}
function score_jikko() {
    document.querySelector(`.zikko`).innerHTML = `
        <div id="scorejikko" class="scorejikko">${jikkopoint}じっこポイント</div>
        <div class="rankjikko">
          <div>0〜10ポイント---なにそれFランじゃん</div>
          <div>11〜30ポイント---じっこくて草</div>
          <div>31〜60ポイント---そこそこかも</div>
          <div>61〜100ポイント---じっこ中毒</div>
          <div>100〜∞ポイント---じっこ依存症</div>
        </div>`
}

function sizechange() {
    document.getElementById('shirokuma_misyou').style.width = "180px";

}
