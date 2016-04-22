app.factory('4AllWebService', function() {
  return $resource('http://dev.4all.com:3003/tarefa/:id');
});
