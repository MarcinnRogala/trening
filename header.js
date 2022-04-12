(function(){
    document.addEventListener('DOMContentLoaded', updateBodyClass);

    window.addEventListener('scroll', updateBodyClass);
    window.addEventListener('resize', updateBodyClass);

    function updateBodyClass() {
        if(isScrolled()) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }
        
    }

    function isScrolled() {
        return window.pageYOffset > 50;
    }
})();