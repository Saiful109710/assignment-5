function getInputFieldValue(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}

function getWalletValue(id){
    const  walletValue = document.getElementById(id).innerText;
    const walletNumber = parseFloat(walletValue);
    return walletNumber;
}

function showSectionId(id){

    document.getElementById("donation-card").classList.add("hidden")
    document.getElementById("donation-history").classList.add("hidden")
    document.getElementById(id).classList.remove("hidden");
}