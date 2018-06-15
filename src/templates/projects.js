import React from "react";

function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  let storeHTML = '';
  console.log(html);

  if (typeof window !== `undefined`) {
    let divRandom = document.createElement('div');
    let divContainer = document.createElement('div');
    divContainer.className = "markdownContainer";
    divRandom.appendChild(divContainer);
    divContainer.innerHTML = data.markdownRemark.html;
    let imgTags = Array.from(divContainer.querySelectorAll('p > img'));
    console.log(imgTags.length);
    if (imgTags.length !== 0) {
      divContainer.innerHTML = '';
      for (let i = 0; i < imgTags.length; i++) {
        ((imgTags[i].alt === 'null') && (imgTags[i].alt = ''));
        divContainer.innerHTML = divContainer.innerHTML + `
          <div class="markdownImage" class="hide" onload="this.classList.remove('hide')">
            <a href="${'#' + i}" class='small-img'>
              <div class="container">
                  <div class="image">
                    <img src="${imgTags[i].src}" alt="" class="hide" onload="this.classList.remove('hide')" />
                  </div>

                  <div class="text imagePostBox">
                    <div class="descriptionBox"><p>${imgTags[i].alt}</p></div>
                  </div>
              </div>
            </a>
            <div class="lightbox" id="${i}"">
              <a href='#_' class='link'>
                <img src="${imgTags[i].src}" class="hide" onload="this.classList.remove('hide')" >
                <div class="descriptionBox"><p>${imgTags[i].alt}</p></div>
              </a>
              <a href="#${i+1}" class="arrow" id="${i}">
                <img src="https://i.imgur.com/o7Fiap8.png"/>
              </a>
              <a href="#${i - 1}" class="arrow-invert" id="${i}">
                <img src="https://i.imgur.com/o7Fiap8.png"/>
              </a>
            </div>
          </div>
        `;
      }
      data.markdownRemark.html = divRandom.innerHTML;
    }

    storeHTML = data.markdownRemark.html;
    divRandom.remove();
  }

  storeHTML = data.markdownRemark.html;

  return (
    <div className="project-container">
      <div className="post">
        <h1 className="pageTitle">{frontmatter.title}</h1>
        {frontmatter.description !== '' && 
          <div className='dbutton'>
            <a href={'#' + frontmatter.title}>
              <h2>Descrição</h2>
            </a>

          <a href='#_' class='lightbox text-box' id={frontmatter.title}>
              <p className="project-description">{frontmatter.description}</p>
            </a>
          </div>
        }
        <div
          className="blog-post-content image-content"
          dangerouslySetInnerHTML={{ __html: storeHTML }}
        />
      </div>
    </div>
  );
}

export default Template;

export const pageQuery = graphql`
  query ProjectPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
        description
      }
    }
  }
`;