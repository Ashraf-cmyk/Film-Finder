//NavBar //////////////////////////////////////////////////////

let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "300px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.width = "50px";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    toggleNavStatus = false;
  }
};

//addMoviesToDom //////////////////////////////////////////////////////

let films = document.querySelector("#films");

addMoviesToDom = (movies) => {
  let movieList = movies.map((movie) => {
    let listitem = document.createElement("li");
    let movieLink = function () {
      let pageId = movie.imdbID;
      return "https://www.imdb.com/title/" + pageId;
    };

    let href = document.createElement("a");
    href.href = movieLink();
    href.target = "_blank";

    let moviePoster = document.createElement("img");
    moviePoster.setAttribute("src", movie.poster);
    moviePoster.setAttribute("alt", movie.title);

    listitem.appendChild(href);
    href.appendChild(moviePoster);
    return listitem;
  });

  while (films.firstChild) {
    films.removeChild(films.lastChild);
  }
  movieList.forEach((node) => {
    films.appendChild(node);
  });
};
addMoviesToDom(movies);

//radioButtons //////////////////////////////////////////////////////

let radioBtn = document.querySelectorAll('[name = "filter_film"]');

handleOnChange = (event) => {
  switch (event.target.value) {
    case "latest":
      console.log("latest");
      filterLatestMovies(2014);
      toggleNav();
      break;

    case "avengers":
      console.log("avengers");
      filterMovies("Avengers");
      toggleNav();
      break;

    case "x_men":
      console.log("x_men");
      filterMovies("X-Men");
      toggleNav();
      break;

    case "princess":
      console.log("princess");
      filterMovies("Princess");
      toggleNav();
      break;

    case "batman":
      console.log("im_batman");
      filterMovies("Batman");
      toggleNav();
      break;
  }
};

radioBtn.forEach((radio) => {
  radio.addEventListener("change", handleOnChange);
});

//filterFunction //////////////////////////////////////////////////////

function filterMovies(wordInMovie) {
  let filterMovies = movies.filter((movie) => {
    if (movie.title.includes(wordInMovie)) {
      return movie;
    }
  });
  addMoviesToDom(filterMovies);
}

function filterLatestMovies(year) {
  let filterYearMovies = movies.filter((movie) => {
    if (movie.year >= year) {
      return movie;
    }
  });
  addMoviesToDom(filterYearMovies);
}

//Searchbar/////////////////////////////////////////////////////////////

/*function myFunction() {
  var value = document.getElementById("search").value;
  var results = [];
  if (value) {
    movies.forEach((movie) => {
      movies.forEach((itemString) => {
        if (itemString.toLowerCase().includes(value.toLowerCase())) {
          results.push(`${value} found in ${itemString} in block ${movie}`);
        }
      });
    });
    console.log(results);
  }
}*/
