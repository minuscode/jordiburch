import React from "react";

function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  if (typeof window !== `undefined`) {
    let divRandom = document.createElement('div');
    let divContainer = document.createElement('div');
    divContainer.className = "markdownContainer";
    divRandom.appendChild(divContainer);
    divContainer.innerHTML = data.markdownRemark.html;
    let imgTags = Array.from(divContainer.querySelectorAll('p > img'));
    console.log(imgTags);
    if (imgTags.length !== 0) {
      divContainer.innerHTML = '';
      for (let i = 0; i < imgTags.length; i++) {
        ((imgTags[i].alt === 'null') && (imgTags[i].alt = 'No description.'));
        divContainer.innerHTML = divContainer.innerHTML + `
          <div class="markdownImage">
            <a href="${'#' + imgTags[i].src}" class='small-img'>
              <div class="container">
                  <div class="image">
                    <img src="${imgTags[i].src}" alt="" />
                  </div>

                  <div class="text imagePostBox">
                    <div class="descriptionBox"><p>${imgTags[i].alt}</p></div>
                  </div>
              </div>
            </a>
            <a href='#_' class='lightbox' id="${imgTags[i].src}">
              <img src="${imgTags[i].src}" />
              <div class="descriptionBox"><p>${imgTags[i].alt}</p></div>
            </a>
          </div>
        `;
      }
      data.markdownRemark.html = divRandom.innerHTML;
    }
    divRandom.remove();
  }

  return (
    <div className="project-container">
      <div className="post">
        <h1 className="pageTitle">{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </div>
  );
}

export default Template;

export const pageQuery = graphql`
  query ExhibitionPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
      }
    }
  }
`;