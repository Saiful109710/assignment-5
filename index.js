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
        if(donationAmountInputNumber<0  ){
            alert("You provide wrong input")
        }else if(donationAmountInputNumber> donationWalletValue){
            alert("Insufficient Balance")
        }else{
            const updateDonationWalletValue = donationWalletValue - donationAmountInputNumber;
            document.getElementById("donation-wallet").innerText = updateDonationWalletValue;
            const updateDonatedAmountWalletValue = donatedAmountWalletValue + donationAmountInputNumber;
            document.getElementById("card1-donated-amount-wallet").innerText = updateDonatedAmountWalletValue; 
            showModal.showModal();

            const donationHistory = document.getElementById("donation-history");
            const date = new Date();
            document.getElementById("transaction-empty-text").classList.add("hidden");
            donationHistory.innerHTML += `
                <div class="p-7 border-2 border-gray-200 outline-none rounded-2xl space-y-5">
                    <p>${donationAmountInputNumber} Taka is donated for Donate for Flood at Noakhali, Bangladesh</p>
                    <p>${date}</p>
                </div>
            `

        }
       
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
        if(donationAmountInputNumber<0  ){
            alert("You provide wrong input")
        }else if(donationAmountInputNumber> donationWalletValue){
            alert("Insufficient Balance")
        }else{
            const updateDonationWalletValue = donationWalletValue - donationAmountInputNumber;
            document.getElementById("donation-wallet").innerText = updateDonationWalletValue;
            const updateDonatedAmountWalletValue = donatedAmountWalletValue + donationAmountInputNumber;
            document.getElementById("card2-donated-amount-wallet").innerText = updateDonatedAmountWalletValue; 
            showModal.showModal();

            const donationHistory = document.getElementById("donation-history");
            const date = new Date();
            donationHistory.innerHTML += `
                <div class="p-7 border-2 border-gray-200 outline-none rounded-2xl space-y-5">
                    <p>${donationAmountInputNumber} Taka is donated for Donate for Flood Relief in Feni,Bangladesh</p>
                    <p>${date}</p>
                </div>
            `
        }
       
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
        if(donationAmountInputNumber<0  ){
            alert("You provide wrong input")
        }else if(donationAmountInputNumber> donationWalletValue){
            alert("Insufficient Balance")
        }else{
            const updateDonationWalletValue = donationWalletValue - donationAmountInputNumber;
            document.getElementById("donation-wallet").innerText = updateDonationWalletValue;
            const updateDonatedAmountWalletValue = donatedAmountWalletValue + donationAmountInputNumber;
            document.getElementById("card3-donated-amount-wallet").innerText = updateDonatedAmountWalletValue;
            showModal.showModal();

            const donationHistory = document.getElementById("donation-history");
            const date = new Date();
            donationHistory.innerHTML += `
                <div class="p-7 border-2 border-gray-200 outline-none rounded-2xl space-y-5">
                    <p>${donationAmountInputNumber} Taka is donated for Aid for Injured in the Quota Movement</p>
                    <p>${date}</p>
                </div>
            `
        }
     
    }
    
    
})


const blog = document.getElementById("blog")
blog.addEventListener("click",function(){
    window.location.href = "blogs.html"
})