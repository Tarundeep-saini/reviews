const reviews=[
    {
        id:"1",
        img:"man1.jpg",
        author:"mike",
        job:"web dev",
        text:"Thank you for putting this together. It's been immensely helpful and really well done. Coming from having done the HTML/CSS/JavaScript course on FCC this has been a great next step to learn how one actually puts it all together and practise the same patterns over and over again to really make you remember the principles.",

    },
    {
        id:"2",
        img:"man2.jpg",
        author:"Tom",
        job:"Game dev",
        text:"Thank you for putting this together. It's been immensely helpful and really well done. Coming from having done the HTML/CSS/JavaScript course on FCC this has been a great next step to learn how one actually puts it all together and practise the same patterns over and over again to really make you remember the principles.",

    },
    { 
        id:"3",  
        img:"man3.jpg",
        author:"Jake",
        job:"software dev",
        text:"Thank you for putting this together. It's been immensely helpful and really well done. Coming from having done the HTML/CSS/JavaScript course on FCC this has been a great next step to learn how one actually puts it all together and practise the same patterns over and over again to really make you remember the principles.",

    }
];
//select items
const img= document.getElementById("img");
const author= document.getElementById("name");
const job= document.getElementById("edu");
const text= document.getElementById("their-review");

const nextBtn = document.querySelector('#next-btn');
const preBtn = document.querySelector('#pre-btn');

let currentitem = 0;
window.addEventListener('DOMContentLoaded',function(){
    change(currentitem)
});
nextBtn.addEventListener("click",function(){
    if (currentitem<reviews.length-1){
        currentitem++
        change(currentitem)
    }
    else{
        currentitem=0
        change(currentitem)

    }
})
preBtn.addEventListener("click",function(){
    if (currentitem>0){
        currentitem--
        change(currentitem)
    }
    else{
        currentitem=reviews.length-1
        change(currentitem)

    }
    change(currentitem)
})
function change()
{
    const item= reviews[currentitem]
    img.src=item.img
    author.textContent=item.author
    job.textContent=item.job
    text.textContent=item.text
}