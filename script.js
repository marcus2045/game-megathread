const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".game-card");
const sections = document.querySelectorAll("section");
const searchResults = document.getElementById("searchResults");
const noResults = document.getElementById("noResults");

searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();

    // Reset results
    searchResults.innerHTML = "";
    noResults.style.display = "none";

    if (query.length === 0) {
        // Show normal layout
        searchResults.style.display = "none";
        noResults.style.display = "none";

        sections.forEach(section => {
            section.style.display = "block";
        });

        return;
    }

    // Hide all sections during search
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show results container
    searchResults.style.display = "grid";

    let matchCount = 0;

    // Find matches and move them into the results area
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
            const clone = card.cloneNode(true);
            searchResults.appendChild(clone);
            matchCount++;
        }
    });

    // If no matches, show message
    if (matchCount === 0) {
        noResults.style.display = "block";
        searchResults.style.display = "none";
    }
});
