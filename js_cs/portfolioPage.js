(function() {
  const baseURL = "https://api.github.com";
  // console.log(baseURL);

    return fetch(`${baseURL}/users/carinaschutte`)
      .then(response => response.json())
      .then(result => {
        const firstInfoGit = result;
        // console.log(firstInfoGit);
      });
})();

(function() {
  const baseURL = "https://api.github.com";
  // console.log(baseURL);
      return fetch(`${baseURL}/users/carinaschutte/repos`)
        .then(response => response.json())
        .then(repositories => {
          // haal overkoepelend div element met id "repositories" op
          const repositoriesDiv = document.getElementById("repositories")


          // voor elke repo in de repositories array`
          for(let repo of repositories){

            const repoElement = embrace.DOMify(`
              <div class="githubrepository">
                <div id="nameRepo"><a href="${repo.svn_url}" target ="_blank"><h3>${repo.name}</a></h3></div>
                <div id="description"><p>${repo.description}</p></div>
                <div id="language"><p>${repo.language}</p></div>
              </div>
            `)

            //     voeg het aangemaakte element toe aan de div met id "repositories"
            
            repositoriesDiv.appendChild(repoElement);
          }
        })
  
    // EVENT LISTENERS
    const tabSwitchAnimationDuration = 750
    document.addEventListener("DOMContentLoaded", function() {
      $("[data-toggle='tooltip']").tooltip()
  
      // scrollspy
      $("body").scrollspy({target: "#spy"})
  
      $(".cv").show(tabSwitchAnimationDuration, function() {
        $(this).animate({opacity: 1.0})
      })
    })
  
    const cvTab = document.getElementById("tab-cv")
    const portfolioTab = document.getElementById("tab-portfolio")
  
    const tabListener = event => {
      const toShowClass = event.target.id === "tab-cv"
        ? "cv"
        : "portfolio"
  
      const toHideClass = event.target.id === "tab-cv"
        ? "portfolio"
        : "cv"
  
      $(`.${toHideClass}`)
        .animate({opacity: 0.0})
        .hide(tabSwitchAnimationDuration, function() {
          $(`.${toShowClass}`).show(tabSwitchAnimationDuration, function() {
            $(this).animate({opacity: 1.0})
        })
      })
    }
  
    cvTab.addEventListener("click", tabListener)
    portfolioTab.addEventListener("click", tabListener)
  
    for (let tab of document.getElementsByClassName("tab")) {
      tab.addEventListener("click", event => {
        const element = event.target
    
        if (!element.classList.contains("active")) {
          Array
            .from(document.getElementsByClassName("tab active"))
            .forEach(t => t.classList.remove("active"))
          
    
        element.classList.add("active")
        }
      })
    }
  })();

  // function borderYesNo(repo){
  //   if(repo.index("repo.name", "repo.description", "repo.language") >= 0){ 
  //     return true
  //   }
  //   return false
  // }