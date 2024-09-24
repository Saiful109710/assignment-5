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