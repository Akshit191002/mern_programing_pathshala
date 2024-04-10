// console.log('...App Started...');
function callAPI() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fa4c852311934aee945f5fd405f7d134")
        .then((res) => res.json())
        .then((data) => renderUI(data))
}

function renderUI(data) {
    const root = document.getElementById('root');
    const articles = data.articles;
    // console.log(articles);
    for (let i = 0; i < articles.length; i++) {
        const ar = articles[i];
        // console.log(ar)
        const div = document.createElement('div');
        div.setAttribute("class", "news-card");

        const h3 = document.createElement('h3');
        h3.innerText = ar.title;
        div.appendChild(h3)

        
        const img = document.createElement('img');
        img.src = ar.urlToImage;
        div.appendChild(img)
        
        const des = document.createElement('p');
        des.textContent = ar.description;
        div.appendChild(des)

        const br = document.createElement('br');
        div.appendChild(br)
        

        
        const a = document.createElement('a');
        a.setAttribute("class", "lin");
        a.innerHTML='Read More....'
        a.href = ar.url;
        a.target="_blank";
        div.appendChild(a)

        root.appendChild(div)
    }
}
callAPI();




