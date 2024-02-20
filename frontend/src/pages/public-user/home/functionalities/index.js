export const getTopContributions = (array) => {
  let result = [];
  let counts = {};

  array.forEach((data) => {
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
  let result = {};

  publications.forEach((publication) => {
    result[publication.title_of_paper] = publication.number_of_citation;
  });

  const countedPapers = Object.entries(result);
  countedPapers.sort((a, b) => b[1] - a[1]);
  return countedPapers;
};

export const getTopCampus = (ipassets) => {
  let result = [];
  let counts = {};
  ipassets.forEach((ipasset) => {
    const campus = ipasset.campus

    result.push(campus)
  });

  result.forEach((campus) => {
    counts[campus] = (counts[campus] || 0) + 1;
  });

  const countedCampus = Object.entries(counts);
  countedCampus.sort((a, b) => b[1] - a[1]);
  return countedCampus;
};

export const getRecentDatePublished = (array) => {
  let result = {};

  array.forEach((data) => {
    result[data.title_of_paper] = new Date(
      data.date_published
    ).toLocaleDateString();
  });

  const datePublished = Object.entries(result);
  datePublished.sort(
    (a, b) => new Date(b[1]).getTime() - new Date(a[1]).getTime()
  );
  return datePublished;
};

export const getRecentDateRegistered = (array) => {
  let result = {};

  array.forEach((data) => {
    result[data.title_of_work] = new Date(
      data.date_registered
    ).toLocaleDateString();
  });

  const datePublished = Object.entries(result);
  datePublished.sort(
    (a, b) => new Date(b[1]).getTime() - new Date(a[1]).getTime()
  );
  return datePublished;
};
