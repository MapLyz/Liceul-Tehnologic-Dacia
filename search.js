// Javascript file
document.addEventListener('DOMContentLoaded', function() {


    const searchInput = document.getElementById("searchbar");
    
        const namesFromDOM = document.getElementsByClassName("arttt");
        const searchResultElement = document.getElementById("searchResult");
        const dataSelect = document.getElementById("Data");
    
        searchInput.addEventListener("keyup", (event) => {
            const { value } = event.target;
            
            const searchQuery = value.toLowerCase();
            
            searchResultElement.textContent = searchQuery;
    
            const selectedDate = dataSelect.value.toLowerCase();
    
            for (const nameElement of namesFromDOM) {
                const dateElement = nameElement.querySelector('.date-artz').textContent.toLowerCase();
                const shouldDisplay = (selectedDate === "all" || dateElement.includes(selectedDate)) && nameElement.textContent.toLowerCase().includes(searchQuery);
    
                if (shouldDisplay) {
                    nameElement.style.display = "block";
                    nameElement.classList.add("highlight");
                } else {
                    nameElement.style.display = "none";
                    nameElement.classList.remove("highlight");
                }
            }
        });
    
        dataSelect.addEventListener("change", (event) => {
            const selectedDate = event.target.value.toLowerCase();
    
            for (const nameElement of namesFromDOM) {
                const dateElement = nameElement.querySelector('.date-artz').textContent.toLowerCase();
                const shouldDisplay = selectedDate === "all" || dateElement.includes(selectedDate);
    
                nameElement.style.display = shouldDisplay ? "block" : "none";
                nameElement.classList.toggle("highlight", shouldDisplay);
            }
        });

    });