(async function () {

  const response = await fetch('./files/api/pages.json');
  const pages = await response.json();
  renderPage(pages);

  function renderPage(pages) {
    const pageContainer = document.querySelector(".web-page-container");
    pageContainer.innerHTML = "";

    for (const page of pages) {
      pageContainer.innerHTML += `
      <article class="web-page-wrapper">
        <a class="web-page-link" href="${page.pageLink}">
        <img class="web-page-image" src="${page.imageUrl}" alt="shop ilustration">
        <p class="web-page-description">${page.title} <br> ${page.description}</p>
        </a>
      </article>
      `;
    }
  }

})();