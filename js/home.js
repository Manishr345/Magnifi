document.addEventListener("DOMContentLoaded", function() {

    const homeapitest=async()=>{

        const sportsapi=await fetch("https://www.thesportsdb.com/api/v1/json/123/latestsoccer.php");
        const sportsres=await sportsapi.json();
        console.log("Latest Soccer");
        console.log(sportsres.teams.Match[0].Date);
        console.log(sportsres.teams.Match[0].League);
        console.log(sportsres.teams.Match[0].Round);
        console.log(sportsres.teams.Match[0].Stadium);
        console.log(`${sportsres.teams.Match[0].HomeTeam} vs ${sportsres.teams.Match[0].AwayTeam}`);

        

        const newsapi=await fetch("https://newsapi.org/v2/everything?q=Apple&sortBy=publishedAt&apiKey=811622623d8f4b0cb025c119f0dffcdd");
        const newsres=await newsapi.json();
        console.log("Latest news");
        console.log(newsres.articles[0].title);
        console.log(newsres.articles[0].description);
        console.log(newsres.articles[0].publishedAt);
        
    }
    homeapitest();

});
