 //dataService.js
  function dataService($http, Backand) {
    var self = this;
    //get the object name and optional parameters
    self.getList = function(name, sort, filter) {
      return $http({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/objects/' + name,
        params: {
          filter: filter || '',
          sort: sort || ''
        }
      });
    }
  }