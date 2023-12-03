function performSearch() {

    var searchTerm = document.getElementById('searchInput').value;

    document.getElementById('searchResults').innerHTML = '<p>Search results for: ' + searchTerm + '</p>';
}