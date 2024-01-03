const generateMemeBtn = document.querySelector(".meme-generator .meme-button")

const memeImage = document.querySelector(".meme-generator img")

const memeTitle = document.querySelector(".meme-generator .meme-title")
  
const memeAuthor = document.querySelector(".meme-generator .meme-author")
 const memelink = document.querySelector(".meme-generator .meme-postLink")
const updateDetails = (url,title,author,link)=>{
  memeImage.setAttribute("src",url)
  memeTitle.innerHTML=title
  memeAuthor.innerHTML=author
memelink.innerHTML= `<a href=${link}> original-post</a>`
}

const generateMeme = ()=>{
  fetch(" https://meme-api.com/gimme/wholesomememes").then((res)=> res.json()).then(data=>{
    updateDetails(data.url,data.title,data.author,data.postLink)
  })
}

generateMemeBtn.addEventListener("click",generateMeme)
