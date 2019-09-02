import React from "react";
import { graphql } from 'gatsby';

function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  let storeHTML = '';

  if (typeof window !== `undefined`) {
    document.onkeydown = keyCheck;
    let divRandom = document.createElement('div'),
        divContainer = document.createElement('div');
    divContainer.className = "markdownContainer";
    divRandom.appendChild(divContainer);
    divContainer.innerHTML = data.markdownRemark.html;
    let imgTags = Array.from(divContainer.querySelectorAll('p > img'));

    if (imgTags.length !== 0) {
      divContainer.innerHTML = '';
      let ilength = imgTags.length;
      for (let i = 0; i < imgTags.length; i++) {
        ((imgTags[i].alt === 'null') && (imgTags[i].alt = ''));
        divContainer.innerHTML = divContainer.innerHTML + `
          <div class="markdownImage imagePost" id="${i}">
            <div class="lightbox-post">
              <a href="#${i + 1}" class="arrow">
                <img src="https://i.imgur.com/o7Fiap8.png"/>
              </a>
              <div class='link'>
                <img src="${imgTags[i].src}" >
                <div class="descriptionBox"><p>${imgTags[i].alt}</p></div>
              </div>
              <a href="#${i - 1}" class="arrow-invert">
                <img src="https://i.imgur.com/o7Fiap8.png"/>
              </a>
            </div>
          </div>
        `;
        ilength =- 1;
      }
      data.markdownRemark.html = divRandom.innerHTML;
    }


    function keyCheck(e) {
      var keyID = (window.event) ? e.keyCode : e.keyCode;

      switch (keyID) {
        case 39:
          if (window.location.href.includes('#') === true && window.location.href.includes('#_') === false && window.location.href.includes('#-1') === false){
            let num = window.location.href.split("#").pop();
            let arrows = Array.from(document.querySelectorAll('.arrow'));
            arrows[num].click();
          }
          break;
  
        case 37:
          if (window.location.href.includes('#') === true && window.location.href.includes('#_') === false && window.location.href.includes('#-1') === false) {
            let numIn = window.location.href.split("#").pop();
            let arrowsInvert = Array.from(document.querySelectorAll('.arrow-invert'));
            arrowsInvert[numIn].click();
          }
          break;
      }
    }

    storeHTML = data.markdownRemark.html;
    divRandom.remove();

  }
  
  storeHTML = data.markdownRemark.html;

  return (
    <div className="project-container">
      <div className="post">
        <div className="top">
        <h1 className="pageTitle">{frontmatter.title}</h1>
        {frontmatter.description !== '' && 
          <div className='dbutton'>
            <a href={'#' + frontmatter.title}>
              <h2>Descrição</h2>
            </a>

          <a href="#_" className="lightbox text-box" id={frontmatter.title}>
              <p className="project-description">{frontmatter.description}</p>
              <img className="close" src="https://i.imgur.com/fkhylMC.png" />
            </a>
          </div>
        }
        </div>
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
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        templateKey
        date(formatString: "MMMM DD, YYYY")
        path
        title
        image
        description
      }
    }
  }
`;