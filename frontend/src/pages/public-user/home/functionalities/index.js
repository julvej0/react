export const getPublicationsContributors = (publications) => {
    let result = [];
    let counts = {};
    publications.forEach((data) => {
      const authors = data.authors.split(", ");

      authors.forEach((author) => {
        result.push(author);
      });
    });

    result.forEach((author) => {
      counts[author] = (counts[author] || 0) + 1;
    });
    
    const countedAuthors = Object.entries(counts);
    countedAuthors.sort((a, b) => b[1] - a[1]);
    return countedAuthors;
};

export const getMostViewedPapers = (publications) => {
    let result = {}

    publications.forEach((publication) => {
        result[publication.title_of_paper] = publication.number_of_citation
    })

    const countedPapers = Object.entries(result);
    countedPapers.sort((a, b) => b[1] - a[1]);
    return countedPapers
}

export const getRecentPublications = (publications) => {
    let result = {}

    publications.forEach(publication => {
        result[publication.title_of_paper] = new Date(publication.date_published).toLocaleDateString()
    })
    
    const datePublished = Object.entries(result)
    datePublished.sort((a, b) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
    return datePublished
}

