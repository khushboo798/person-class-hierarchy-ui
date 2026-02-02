function updateCount() {
    const textarea = document.getElementById("message");
    const counter = document.getElementById("counter");

    let length = textarea.value.length;
    counter.innerText = length + "/150";

    if (length === 150) {
        counter.style.color = "red";
    } else {
        counter.style.color = "#94a3b8";
    }
}
