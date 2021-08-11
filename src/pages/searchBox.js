const searchBox =  () => {

            setTimeout(()=> {
                const form = document.getElementById('search');        
                const button = document.querySelector('#buttonSearch')
                button.disabled = false;

                form.addEventListener('submit',(e) => {
                e.preventDefault(); 
                const searchTerm = document.querySelector('#searchBox').value;
                location.assign(`#/${searchTerm}`)                
            });
            }, 500)
            
        
        
        const view = `
        <div>
            <form id="search">
                <input type="text" placeholder="Busca tu pokemón favorito" id="searchBox">
                <button id="buttonSearch" disabled type="submit">
                    <img src="./assets/search.svg">
                </button>
            </form>
        </div>`
        return view;





}

export default searchBox;