document.addEventListener("DOMContentLoaded", function() {
    [].slice.call(document.querySelectorAll("a.dropdown")).forEach(function(elem){
        elem.addEventListener("click", function(evt) {
            evt.preventDefault();
            var a_dropdown = this;
            var dest = document.querySelector("." + a_dropdown.dataset.target);
            var invisible = dest.classList.contains("collapsed");
            document.querySelector(".collapsable-menu").classList.add("collapsed");
            if (invisible)   {
                dest.classList.remove("collapsed");
            }
        });
    });
});
/*
$(document).ready(function(){
    $('a.dropdown').click(function(e){
        e.preventDefault();
        var $dest=$('.'+$(this).data('target'));
        var invisible=$dest.hasClass('collapsed');
        $('.collapsable-menu').addClass('collapsed');
        if (invisible){
            $dest.removeClass('collapsed');
        }
    });
});
    */


