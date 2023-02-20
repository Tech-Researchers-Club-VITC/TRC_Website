const body = document.body;
const galleryTabs = document.querySelectorAll('.gallery_tabs li');
const galleryItems = document.querySelectorAll('.gallery_item');
const galleryImgs = document.querySelectorAll('.gallery_item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox_img');
const lightboxCloseBtn = document.querySelector('.lightbox_close');
galleryTabs.forEach((currTab) => {
  currTab.addEventListener('click', (e) => {
    e.target.parentElement.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    let filterValue = e.target.getAttribute('data-filter');
    galleryItems.forEach((currItem) => {
      if (filterValue === 'all' || currItem.classList.contains(filterValue)) {
        currItem.classList.remove('hide');
        currItem.classList.add('show');
      }
      else {
        currItem.classList.remove('show');
        currItem.classList.add('hide');
      }
    });
  });
});
galleryImgs.forEach((currImg) => {
  currImg.addEventListener('click', (e) => {
    let imgSrc = e.target.getAttribute('src');
    lightboxImg.setAttribute('src', imgSrc);
    lightbox.classList.add('open');
    body.classList.add('overflow_hide');
  });
});
const lightboxClose = () => {
  lightbox.classList.remove('open');
  body.classList.remove('overflow_hide');
};
lightboxCloseBtn.addEventListener('click', lightboxClose);
window.addEventListener('click', (e) => {
  if (e.target.className === 'lightbox_wrapper') {
    lightboxClose();
  }
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightboxClose();
  }
});
