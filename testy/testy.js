function mojaFunkcja(){
    let one = document.getElementById("testy");
    one = one.innerText;
    let second = document.getElementById("testy");
    second = second.innerText;
    console.log(one);

    if (one == "tak"){
        document.getElementById("testy").innerHTML = "nie";
    }

    if (second == "nie"){
        document.getElementById("testy").innerHTML = "tak";
    }
    one = document.getElementById("testy");
    one = one.innerText;
    console.log(one);
}