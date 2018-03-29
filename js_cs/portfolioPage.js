/* all info of github*/
(function() {
  const baseURL = "https://api.github.com";

    return fetch(`${baseURL}/users/carinaschutte`)
      .then(response => response.json())
      .then(result => {
        const firstInfoGit = result;
      });
})();

/* all info of repositories */
(function() {
  const baseURL = "https://api.github.com";

      return fetch(`${baseURL}/users/carinaschutte/repos`)
        .then(response => response.json())
        .then(repositories => {
          // haalt div element met de verschillende "repositories" op
          const repositoriesDiv = document.getElementById("repositories")

          // Ga elke repositorie langs in de array met repositories
          for(let repo of repositories){

            // maakt voor elke repositorie html element aan met onderstaande items
            const repoElement = embrace.DOMify(`
              <div class="githubrepository">
                <div id="nameRepo"><a href="${repo.svn_url}" target ="_blank"><h3>${repo.name}</a></h3></div>
                <div id="description"><p>${repo.description}</p></div>
                <div id="language"><p>${repo.language}</p></div>
              </div>
            `)

            // voeg het html element toe aan de div met id "repositories"
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
