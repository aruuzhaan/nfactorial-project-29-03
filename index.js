const articlesFromAPI = [
    {
        id: 0,
        title: "7 Practical CSS Tips",
        summary: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
        src: "./assets/first.png"
    },
    {
        id: 1,
        title: "7 Practical CSS Tips",
        summary: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        src: "./assets/second.png"
    },
    {
        id: 2,
        title: "7 Practical CSS Tips",
        summary: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
        src: "./assets/third.png"
    }
];

let article = ` <div class="m-5 d-flex flex-row justify-content-between">
<div>
    <div class="d-flex flex-row">
        <figure>
            <img src="./assets/Img.png" class="img-fluid" alt="avatar">
        </figure>
        <p>Authors Name in Topics Name</p>
    </div>
    <div class="me-5 mt-5 d-flex flex-column">
    <a class="text" href="article.html"><h4 id="title"></h4></a>
    <p class="mt-3" id="summary"></p>
    </div>
</div>
<img class="w-25" src="" alt="article_img"/>
</div>`;

const articles = document.getElementById("articles");

articlesFromAPI.forEach((item) => {
    let newArticle = article.replace('id="title">', `id="title">${item.title}`);
    newArticle = newArticle.replace('id="summary">', `id="summary">${item.summary}`);
    newArticle = newArticle.replace('src=""', `src="${item.src}"`)

    articles.innerHTML += newArticle;
});