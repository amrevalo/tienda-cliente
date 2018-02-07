$scope.add = function() {
    var f = document.getElementById('file').files[0],
        r = new FileReader();

    r.onloadend = function(e) {
      var data = e.target.result;
      //send your binary data via $http or $resource or do anything else with it
    }

    r.readAsBinaryString(f);
}

/**
<!--<input type="file" id="file" name="file"/>
<button ng-click="add()">Add</button>-->
*/