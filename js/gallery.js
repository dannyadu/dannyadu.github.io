/* Activates the image gallery.
The main task is to attach an event listener to each image in the gallery
and respond appropriately on click. */

function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");

  let infoTitle = document.querySelector("#gallery-info > .title");
  let infoDescription = document.querySelector("#gallery-info > .description");

  thumbnails.forEach(function(thumbnail) {
    let newImageSrc = thumbnail.dataset.largeVersion;
    let newImageAlt = thumbnail.alt;

    let newImageTitle = thumbnail.dataset.title;
    let newImageDescription = thumbnail.dataset.description;

    thumbnail.addEventListener("click", function() {
      // Highlight clicked thumbnail.
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Set clicked thumbnail as main image.
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);

      // Update info column.
      infoTitle.innerHTML = newImageTitle;
      infoDescription.innerHTML = newImageDescription;

    });
  });
}
