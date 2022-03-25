function fetchImages(img, numberPage) {
    return fetch(`https://pixabay.com/api/?q=${img}&page=${numberPage}&key=25365543-10c6f0b59c93e8af6e85743b2&image_type=photo&orientation=horizontal&per_page=12`)
}
        
export default  fetchImages 