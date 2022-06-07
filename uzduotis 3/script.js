window.onload = function() {
    let a = 10;
    let b = 8;
    let rezultatas;
    let rezultatas2;

    rezultatas = apskaiciavimas (a);
    rezultatas2 = apskaiciavimas2 (b);

    console.log(rezultatas);
    console.log(rezultatas2);
}

function apskaiciavimas (a) {
    return a * 2;
}

function apskaiciavimas2 (b) {
    return b * 2;
}