(function() {
    function Portfolio() {
        this.openInfoTriggers = document.querySelectorAll('.projects .project .project__info-open');
        this.closeInfoTriggers = document.querySelectorAll('.projects .project .project__info-close');
        this.addEventListeners();
    }

    Portfolio.fn = Portfolio.prototype;

    Portfolio.fn.addEventListeners = function() {
        this.openInfoTriggers.forEach(
            trigger => trigger.addEventListener(
                'click', this.onOpenInfoClick.bind(this)
            )
        );
        this.closeInfoTriggers.forEach(
            trigger => trigger.addEventListener(
                'click', this.onCloseInfoClick.bind(this)
            )
        );
    }

    Portfolio.fn.onOpenInfoClick = function(e) {
        const infoEl = document.getElementById(e.currentTarget.dataset.trigger);
        this.openInfo(infoEl);
    }

    Portfolio.fn.onCloseInfoClick = function(e) {
        const infoEl = e.currentTarget.parentElement;
        this.closeInfo(infoEl);
    }

    Portfolio.fn.openInfo = function(infoEl) {
        const previewEl = infoEl.previousElementSibling;
        const projectEl = infoEl.parentElement;
        previewEl.style.transform = `translateX(-${previewEl.offsetWidth}px)`;
        previewEl.style.visibility = 'hidden';
        infoEl.style.transform = `translateX(0px)`;
        infoEl.style.visibility = 'visible';
        if (infoEl.scrollHeight > projectEl.offsetHeight) {
            projectEl.style.height = `${infoEl.scrollHeight}px`;
        }
    }

    Portfolio.fn.closeInfo = function(infoEl) {
        const previewEl = infoEl.previousElementSibling;
        previewEl.style.visibility = 'visible';        
        previewEl.style.transform = null;
        const projectEl = infoEl.parentElement;
        projectEl.style.height = '200px';
        infoEl.style.transform = `translateX(${previewEl.offsetWidth}px)`;
        infoEl.style.visibility = 'hidden';
    }

    window.addEventListener('DOMContentLoaded', function() {
        var portfolio = new Portfolio();
    });
}());