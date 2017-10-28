/**
 * Created by babafemi on 9/24/2017.
 */

app.controller('contactCon', function ($scope,$http, $state,$sce) {
    var vm = this;
    var path='https://esslclients.herokuapp.com/';
    $scope.lead={};

    $(".alert-dismissible").fadeTo(2000, 500).slideUp(500, function(){
        $(".alert-dismissible").alert('close');
    });

    vm.addCon = function () {
        //var url ='sendemail.php';
        var url = path+'api/support/prestige/new';
        $scope.lead.subject = 'Contact Us Form From prestige-ipc Site'
        $http.post(url,$scope.lead)
            .success(function (data) {
                $scope.success= 'Thank you for contact us, a member of staff will contact you shortly';
                $scope.lead = {};
            })
            .error(function (data) {
                if(data != null && data != 'undefined'){
                    $scope.error = data.message;
                } else {
                    $scope.error = '<strong>Ooopss!!!</strong> <p>something went wrong. Pls try again.</p>'
                }

            })
    };
})
