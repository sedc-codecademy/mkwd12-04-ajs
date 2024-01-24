let header = document.getElementById('header');
header.innerText = 'Weather Alert';

let greeting = document.getElementById('greeting');
greeting.innerText = 'Welcome to the Weather Alert App';

let navbarService = {
    navigationLink: document.getElementsByClassName('nav-link'),
    pages: document.getElementsByClassName('page'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    displayPage : function(index) {
        for(let page of this.pages){
            page.style.display = 'none';
        }
        this.pages[index].style.display = 'block'
    },
    pageClickHandler : function(){
        for (let i = 0; i < this.navigationLink.length; i++) {
            this.navigationLink[i].addEventListener('click', function(){
                navbarService.displayPage(i);
            })        
        }

        this.searchBtn.addEventListener('click', function(){
            console.log(`City name: ${navbarService.searchInput.value}`)
        })
    }
}

navbarService.pageClickHandler();