window.onload=function () {
    let x;
    let b;
    let h;

    x = 5
    b = 10
    h = 69

    rezultatas = daugyba (x,b,h)

    console.log (rezultatas)
}


function daugyba (x,b,h) {
    return x * b + h
}