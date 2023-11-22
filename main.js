function weather() {

    let temp = document.getElementById("input").value

    let result = ""

    switch (true) {

        case temp < 0:
            result = " too cold dont go outside"
            break;
        case temp >= 40:
            result = " gharmi boht hai"
            break;
        case (temp >= 30):
            result = " Suhana weather"
            break;
        case temp >= 20:
            result = " mosaam axha hai "
            break;
        case temp >= 10:
            result = " cold weather"
            break;
        default:
            result = "too cold"
    }
    let output = document.getElementById("result")
    output.innerText = result
}