
const textarea = document.querySelector('.Post_area_wrap_right textarea');

textarea.addEventListener('input', function() {
    this.style.height = 'auto'; // Reset height
    this.style.height = this.scrollHeight + 'px'; // Set to content height
});
