(function(){
    document.addEventListener('DOMContentLoaded', () => {
        const mainMenu = document.querySelector('.menu');
        const mainMenuContent = document.querySelector('.menu-content');
        const menuButton = document.querySelector('.menu-btn');
        const menuContentButton = document.querySelector('.menu-button');
        
        if(!mainMenu || !mainMenuContent || !menuButton || !menuContentButton) {
            console.error('Cannot find main menu, main menu content or menu button node');
            return;
        }

        menuButton.addEventListener('click', showMainMenu);
        menuContentButton.addEventListener('click', hideMainMenu);

        mainMenu.addEventListener('click', (e) => {
            if(e.target != mainMenu) {
                return;
            }
            hideMainMenu();
        });

        function showMainMenu() {
            mainMenu.classList.add('active');
        }

        function hideMainMenu() {
            mainMenu.classList.remove('active');
        }

    });
})();