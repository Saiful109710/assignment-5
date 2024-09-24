document.getElementById("donation-btn").addEventListener("click",function(){
    showSectionId("donation-card")
    document.getElementById("donation-btn").classList.add("bg-primary-btn-color","hover:bg-primary-btn-color");
    document.getElementById("history-btn").classList.remove("bg-primary-btn-color","hover:bg-primary-btn-color");
})

document.getElementById("history-btn").addEventListener("click",function(){
    showSectionId("donation-history");
    document.getElementById("donation-btn").classList.remove("bg-primary-btn-color","hover:bg-primary-btn-color");
    document.getElementById("history-btn").classList.add("bg-primary-btn-color","hover:bg-primary-btn-color");
    
})