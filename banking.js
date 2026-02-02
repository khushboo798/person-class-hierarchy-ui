let balance = 1000;

function deposit() {
    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        showMessage("Invalid amount!");
        return;
    }

    balance += amount;
    updateBalance();
    showMessage("");
}

function withdraw() {
    let amount = Number(document.getElementById("amount").value);

    if (amount <= 0 || amount > balance) {
        showMessage("Invalid amount!");
        return;
    }

    balance -= amount;
    updateBalance();
    showMessage("");
}

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

function showMessage(msg) {
    document.getElementById("message").innerText = msg;
}
