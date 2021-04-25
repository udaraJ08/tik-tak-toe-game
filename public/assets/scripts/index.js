let one = 100;
let three = 100;
let two = 100;
let four = 100;
let five = 100;
let six = 100;
let seven = 100;
let eight = 100;
let nine = 100;

let playerDis = 1
const tileColor = ['#e74c3c', '#3498db']

function catchTile(num) {
    switch (num) {
        case 1:
            if (one == 100) {
                // buttonClick()
                if (playerChoose() == 1) {
                    $('#one').css("background-color", tileColor[0])
                    playerDis = 2
                    one = 1
                } else {
                    $('#one').css("background-color", tileColor[1])
                    playerDis = 1;
                    one = 2
                }
            }

            break
        case 2:
            if (two == 100) {
                // buttonClick()
                if (playerChoose() == 1) {
                    $('#two').css("background-color", tileColor[0])
                    playerDis = 2
                    two = 1
                } else {
                    $('#two').css("background-color", tileColor[1])
                    playerDis = 1;
                    two = 2
                }
            }
            break
        case 3:
            if (three == 100) {
                // buttonClick()
                if (playerChoose() == 1) {
                    $('#three').css("background-color", tileColor[0])
                    playerDis = 2
                    three = 1
                } else {
                    $('#three').css("background-color", tileColor[1])
                    playerDis = 1;
                    three = 2
                }
            }
            break
        case 4:
            if (four == 100) {
                // buttonClick()
                if (playerChoose() == 1) {
                    $('#four').css("background-color", tileColor[0])
                    playerDis = 2
                    four = 1
                } else {
                    $('#four').css("background-color", tileColor[1])
                    playerDis = 1;
                    four = 2
                }
            }
            break
        case 5:
            if (five == 100) {
                // buttonClick()
                if (playerChoose() == 1) {
                    $('#five').css("background-color", tileColor[0])
                    playerDis = 2
                    five = 1
                } else {
                    $('#five').css("background-color", tileColor[1])
                    playerDis = 1;
                    five = 2
                }
            }
            break
        case 6:
            if (six == 100) {
                // buttonClick()
                if (playerChoose() == 1) {
                    $('#six').css("background-color", tileColor[0])
                    playerDis = 2
                    six = 1
                } else {
                    $('#six').css("background-color", tileColor[1])
                    playerDis = 1;
                    six = 2
                }
            }
            break
        case 7:
            if (seven == 100) {
                // buttonClick()
                if (playerChoose() == 1) {
                    $('#seven').css("background-color", tileColor[0])
                    playerDis = 2
                    seven = 1
                } else {
                    $('#seven').css("background-color", tileColor[1])
                    playerDis = 1;
                    seven = 2
                }
            }
            break
        case 8:
            if (eight == 100) {
                // buttonClick()
                if (playerChoose() == 1) {
                    $('#eight').css("background-color", tileColor[0])
                    playerDis = 2
                    eight = 1
                } else {
                    $('#eight').css("background-color", tileColor[1])
                    playerDis = 1;
                    eight = 2
                }
            }
            break
        case 9:
            if (nine == 100) {
                // buttonClick()
                if (playerChoose() == 1) {
                    $('#nine').css("background-color", tileColor[0])
                    playerDis = 2
                    nine = 1
                } else {
                    $('#nine').css("background-color", tileColor[1])
                    playerDis = 1;
                    nine = 2
                }
            }
            break
        default: break;
    }

    if (!playerOneDetector()) {
        playerTwoDetector()
    }
}

function playerOneDetector() {

    if (one == 1 && two == 1 && three == 1) {
        won()
    }
    else if (four == 1 && five == 1 && six == 1) {
        won()
    }
    else if (seven == 1 && eight == 1 && nine == 1) {
        won()
    }
    else if (one == 1 && four == 1 && seven == 1) {
        won()
    }
    else if (two == 1 && five == 1 && eight == 1) {
        won()
    }
    else if (three == 1 && six == 1 && nine == 1) {
        won()
    }
    else if (one == 1 && five == 1 && nine == 1) {
        won()
    }
    else if (seven == 1 && five == 1 && three == 1) {
        won()
    }
    else if (one != 100 && two != 100 && three != 100 && four != 100 && five != 100 && six != 100 && seven != 100 && eight != 100 && nine != 100)
        draw()
    else {
        buttonClick()
    }
}

function playerTwoDetector() {

    if (one == 2 && two == 2 && three == 2) {
        won()
    }
    else if (four == 2 && five == 2 && six == 2) {
        won()
    }
    else if (seven == 2 && eight == 2 && nine == 2) {
        won()
    }
    else if (one == 2 && four == 2 && seven == 2) {
        won()
    }
    else if (two == 2 && five == 2 && eight == 2) {
        won()
    }
    else if (three == 2 && six == 2 && nine == 2) {
        won()
    }
    else if (one == 2 && five == 2 && nine == 2) {
        won()
    }
    else if (seven == 2 && five == 2 && three == 2) {
        won()
    } else {
        buttonClick()
    }
}


function playerChoose() {

    switch (playerDis) {
        case 1: return 1
        case 2: return 2
        default: return;
    }
}

function won() {

    switch (playerDis) {
        case 1:
            playerDis = 2;
            alert(`player Blue won`)
            break;
        case 2:
            playerDis = 1;
            alert('player Red won')
            break;
    }
    setTimeout(() => {
        cleaner()
    }, 500)
    return true;
}

function draw() {
    setTimeout(() => {
        cleaner()
    }, 500)
}

function buttonClick() {
    const clickAudio = new Audio('/public/assets/audio/save.mp3')
    clickAudio.play()
}

function buttonUpdate() {
    const updateAudio = new Audio('/public/assets/audio/update.mp3')
    updateAudio.play()
}

function cleaner() {

    buttonUpdate()

    $('#one').css("background-color", "transparent")
    $('#two').css("background-color", "transparent")
    $('#three').css("background-color", "transparent")
    $('#four').css("background-color", "transparent")
    $('#five').css("background-color", "transparent")
    $('#six').css("background-color", "transparent")
    $('#seven').css("background-color", "transparent")
    $('#eight').css("background-color", "transparent")
    $('#nine').css("background-color", "transparent")

    one = 100
    three = 100
    two = 100
    four = 100
    five = 100
    six = 100
    seven = 100
    eight = 100
    nine = 100
}




