let jikkopoint = 0

function shirokumarorikon() {
    if (document.querySelector(`#textzikkou`).value == `shirokumajikko` || document.querySelector(`#textzikkou`).value == `shirokumazikko`) {
        jikkopoint = jikkopoint + 1
        document.querySelector(`#textzikkou`).value = ''
    }
    else {
        document.querySelector(`#textzikkou`).value = ''
    }
}