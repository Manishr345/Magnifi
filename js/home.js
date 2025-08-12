document.addEventListener("DOMContentLoaded", function() {

    const s1=document.getElementById("s1");
    const s2=document.getElementById("s2");

    const homeapitest=async()=>{

        const sportsapi=await fetch("https://www.thesportsdb.com/api/v1/json/123/latestsoccer.php");
        const sportsres=await sportsapi.json();
        const match=sportsres.teams.Match[0];

        s1.innerHTML=`
            <div class="bg-white shadow-lg p-4 rounded-lg">
                <h2 class="text-xl font-bold mb-2">⚽ Sports</h2>
                <p><strong>Date:</strong> ${new Date(match.Date).toLocaleString()}</p>
                <p><strong>League:</strong> ${match.League}</p>
                <p><strong>Round:</strong> ${match.Round}</p>
                <p><strong>Stadium:</strong> ${match.Stadium}</p>
                <p class="mt-2 font-semibold text-lg">${match.HomeTeam} vs ${match.AwayTeam}</p>
            </div>
        `;

        const newsapi=await fetch("https://newsapi.org/v2/everything?q=Apple&sortBy=publishedAt&apiKey=811622623d8f4b0cb025c119f0dffcdd");
        const newsres=await newsapi.json();
        const article=newsres.articles[0];
        s2.innerHTML=`
            <div class="bg-white shadow-lg p-4 rounded-lg">
                <h2 class="text-xl font-bold mb-2">📰 News</h2>
                <h3 class="font-semibold">${article.title}</h3>
                <p class="text-gray-700 mt-2">${article.description}</p>
                <p class="text-sm text-gray-500 mt-1">Published: ${new Date(article.publishedAt).toLocaleString()}</p>
            </div>
        `;
        
    }
    homeapitest();

});
