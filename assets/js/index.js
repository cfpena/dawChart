$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#download-button').click(function(){
      console.log("holi estoy adentro");
       swal.withForm({
         title: 'Login',
         showCancelButton: true,
         confirmButtonColor: '#DD6B55',
         confirmButtonText: 'Get form data!',
         closeOnConfirm: true,
         formFields: [
             { name: 'identifier', placeholder: 'Email or Username' },
             { name: 'password', placeholder: 'password' }
         ]
       }, function (isConfirm) {
       // do whatever you want with the form data
        console.log(this.swalForm) // { name: 'user name', nickname: 'what the user sends' }
      });
    });
});
