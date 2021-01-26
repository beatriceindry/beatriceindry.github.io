(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

    var elems = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elems, {
      accordion: false
  });
