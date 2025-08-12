document.addEventListener("DOMContentLoaded",async function(){

    const n1=document.getElementById("n1");
    const n2=document.getElementById("n2");

    const newsapi=await fetch("https://newsapi.org/v2/everything?q=Apple&sortBy=publishedAt&apiKey=811622623d8f4b0cb025c119f0dffcdd");
    const newsres=await newsapi.json();
    const article=newsres.articles[0];
    const article2=newsres.articles[1];
    n1.innerHTML=`
        <div class="bg-white shadow-lg p-4 rounded-lg">
            <h2 class="text-xl font-bold mb-2">📰 News</h2>
            <h3 class="font-semibold">${article.title}</h3>
            <p class="text-gray-700 mt-2">${article.description}</p>
            <p class="text-sm text-gray-500 mt-1">Published: ${new Date(article.publishedAt).toLocaleString()}</p>
        </div>
    `;
    n2.innerHTML=`
    <div class="bg-white shadow-lg p-4 rounded-lg">
        <h3 class="font-semibold">${article2.title}</h3>
        <p class="text-gray-700 mt-2">${article2.description}</p>
        <p class="text-sm text-gray-500 mt-1">Published: ${new Date(article2.publishedAt).toLocaleString()}</p>
    </div>
    `;

});