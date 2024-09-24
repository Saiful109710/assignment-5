// card 1

   
    const showModal = document.getElementById("my_modal_1")
  document.getElementById("card1-donation-btn").addEventListener("click",function(){
    const donationWalletValue = getWalletValue("donation-wallet");
   
    const donatedAmountWalletValue = getWalletValue("card1-donated-amount-wallet")
   const donationAmountInputValue = document.getElementById("card1-donation-amount-input").value;
   console.log(donationAmountInputValue)
    if(isNaN(donationAmountInputValue)){
        alert("You provide wrong input")
    }else{
        const donationAmountInputNumber = getInputFieldValue("card1-donation-amount-input")
        const updateDonationWalletValue = donationWalletValue - donationAmountInputNumber;
        document.getElementById("donation-wallet").innerText = updateDonationWalletValue;
        const updateDonatedAmountWalletValue = donatedAmountWalletValue + donationAmountInputNumber;
        document.getElementById("card1-donated-amount-wallet").innerText = updateDonatedAmountWalletValue; 
        showModal.showModal();
    }


    
})

// card 2

document.getElementById("card2-donation-btn").addEventListener("click",function(){
    const donationWalletValue = getWalletValue("donation-wallet");

    const donatedAmountWalletValue = getWalletValue("card2-donated-amount-wallet")
    const donationAmountInputValue = document.getElementById("card2-donation-amount-input").value;
   
    if(isNaN(donationAmountInputValue)){
        alert("You provide wrong input")
    }else{
        const donationAmountInputNumber = getInputFieldValue("card2-donation-amount-input")
        const updateDonationWalletValue = donationWalletValue - donationAmountInputNumber;
        document.getElementById("donation-wallet").innerText = updateDonationWalletValue;
        const updateDonatedAmountWalletValue = donatedAmountWalletValue + donationAmountInputNumber;
        document.getElementById("card2-donated-amount-wallet").innerText = updateDonatedAmountWalletValue; 
        showModal.showModal();
    }
 
    
})

// card-3

document.getElementById("card3-donation-btn").addEventListener("click",function(){
    const donationWalletValue = getWalletValue("donation-wallet");
   

    const donatedAmountWalletValue = getWalletValue("card3-donated-amount-wallet")
    console.log(donatedAmountWalletValue)
    const donationAmountInputValue = document.getElementById("card3-donation-amount-input").value;
   
    if(isNaN(donationAmountInputValue)){
        alert("You provide wrong input")
    }else{
        const donationAmountInputNumber = getInputFieldValue("card3-donation-amount-input")
        const updateDonationWalletValue = donationWalletValue - donationAmountInputNumber;
        document.getElementById("donation-wallet").innerText = updateDonationWalletValue;
        const updateDonatedAmountWalletValue = donatedAmountWalletValue + donationAmountInputNumber;
        document.getElementById("card3-donated-amount-wallet").innerText = updateDonatedAmountWalletValue;
        showModal.showModal();
    }
    
    
})


