// select document element
const myText=document.getElementById("text_btn");
const myCheckbutton=document.getElementById("check_button");
myCheckbutton.addEventListener("click",()=>{
  if(myText.value==""){
      notice.textContent=`Please enter a word or phrase`
  }else{
      notice.textContent="";
    isPalindrome(myText.value);
  }
    


})
const myMessage=document.getElementById("message");
const notice=document.getElementById("error")
















function isPalindrome(moses){
const myWord=moses.toLowerCase();

const splitString=moses.split("");

const reverseString=splitString.reverse();

const joinString=reverseString.join("")

const lowString=joinString.toLowerCase();
if (myWord==lowString){
myMessage.textContent=(`${myWord},is a Palindrome`)
myMessage.classList.add("success")
myMessage.classList.remove("error")

} else{
    myMessage.textContent=(`${myWord},is not a Palindrome`);
    myMessage.classList.add("error")
    myMessage.classList.remove("sucess")


}

}
