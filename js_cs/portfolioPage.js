(function() {
  const baseURL = "https://api.github.com"
  // console.log(baseURL);

    return fetch(`${baseURL}/users/carinaschutte`)
      .then(response => response.json())
      .then(result => {
        const firstInfoGit = result;
        // console.log(firstInfoGit);
      })
})();

(function() {
  const baseURL = "https://api.github.com"
  // console.log(baseURL);
      return fetch(`${baseURL}/users/carinaschutte/repos`)
      .then(response => response.json())
      .then(result => {
        const allRepos = result;

        const createDiv = document.createElement("div");
        
        for (let repo of allRepos) {
          repoParagraph = document.createElement ("p")
          repoParagraph.innerText = repo.name
          createDiv.appendChild(repoParagraph)
        }
        for (let repo of allRepos) {
          repoParagraph = document.createElement ("p")
          repoParagraph.innerText = repo.description
          createDiv.appendChild(repoParagraph)
        }
        for (let repo of allRepos) {
          repoParagraph = document.createElement ("p")
          repoParagraph.innerText = repo.language
          createDiv.appendChild(repoParagraph)
        }

        function showRepo (repo) {
          innerInfo = []
          innerInfo.push(repo.name);
          innerInfo.push(repo.description);
          innerInfo.push(repo.language);

          
          return innerInfo
          // do stuff with repo
        }

        // <h3><p class="nameRepo">naam repo</p></h3>
        //                       <p class="description">naam omschrijving</p>
        //                       <p class="language">naam taal</p>
        
        // alle array uit 1 array halen
        // per array 3 waardes meegeven
        // 

      

        

        const portfolios = document.getElementById("creativeDiv")

        // const createDiv = document.createElement("div");
        // console.log(createDiv)
    
        // const createText = document.createTextNode(allRepos);
        // console.log(createText)

        // createDiv.appendChild(createText);
        document.body.appendChild(createDiv);
        
        // console.log(createDiv)
        
        
       

        
      })

    
    
        
        {
        tweedeIets.name
        tweedeIets.description
        tweedeIets.language

        const bla = []
        for(i = 0; i < result.length; i++) {

        }
        // todo: add repos to site
      }
    

  // const iets = (`${baseURL}/users/carinaschutte`)
  //     .then(response => response.json())
  //     .then(result => {
  //       document.write(iets.public_repos)
  //     })


  //     console.log("hoi")

  //     // TODO: load CV tab
  //     const currentPage = "cv" 
  //     console.log(currentPage)
  //     // TODO: load portfolio tab


  //   const tweedeIets = (`${baseURL}/users/carinaschutte/repos`)
  //     .then(response => response.json())
  //     .then(result => {
  //       tweedeIets.name
  //       tweedeIets.description
  //       tweedeIets.language

  //       const bla = []
  //       for(i = 0; i < result.length; i++) {

  //       }
  //       // todo: add repos to site
  //     })


// append child enzo

  
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