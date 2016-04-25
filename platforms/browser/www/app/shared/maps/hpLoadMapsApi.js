'use strict';

app.directive('hpLoadMapsApi', function () {
  return {
    restrict: 'A',
    link: function () {
      setTimeout(function(){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.9&callback=callback';
        document.body.appendChild(script);
      }, 3600);
    }
  };
});
