
// if (name == "") {
//     $('#name').blur(
//         function () {
//             $(this).addClass('invalid');
//         }
//         return false;
// }


$(document).ready(function () {
  $("#phone").mask("+380 (999)-999999");
  $("#phone2").mask("+380 (999)-999999");
});


function validateForm(form) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // var reName = /^[а-яА-Я]{30}|[a-zA-Z]{30}$/
  var status = $(form).find('.status');


  if (form.name.value == "") {
    var status = status.text("Ведіть будь ласка ваше імя");
    $(form.name).addClass("invalid")
    return false;
  }
  // if (!reName.test(form.name.value)) {
  //   var status = status.text("Некоректне імя");
  //   return false;
  // }

  if (form.email.value == "") {
    var status = status.text("Будь ласка введіть вашу пошту");
    $(form.email).addClass("invalid")
    return false;

  }
  else if (!re.test(form.email.value)) {
    var status = status.text("Пошта введена не коректно");
    return false;
  }


  if (form.phone.value == "") {
    $(form.phone).addClass("invalid")
    var status = status.text("Введіть ваш номер телефону");
    return false;
  }

  // if (form.message.value == "") {
  //   var status = status.text("Введіть ваше повідомлення");
  //   return false;
  // }


  status.text("Відправка форми...")

  formData = {
    'name': form.name.value,
    'email': form.email.value,
    'phone': form.phone.value,
    'message': form.message.value,

  };
  $.ajax({
    url: "mail.php",
    type: "POST",
    data: formData,

    success: function (data, textStatus, jqXHR) {
      status.text(data.message);
      if (data.code) {
        $('#sendMail').attr("disabled", true);
        $('#sendMail2').attr("disabled", true);
        function close() {
          $(".modal").modal("hide")
          status.text("")
          $('#modalForm')[0].reset();
          $('#form2')[0].reset();

          $('#sendMail').attr("disabled", false);
          $('#sendMail2').attr("disabled", false);

        }
        setTimeout(close, 2000)
      }

    },
    error: function (jqXHR, textStatus, errorThrown) {
      var status = form.status.text(jqXHR);
    }
  });

}

// function validateForm2() {
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // var name2 = document.getElementById('name2').value;
    // if (name2 == "") {
    //     document.querySelector('#status2').innerHTML = "Ведіть будь ласка ваше імя";
    //     return false;
    // }
    // var email2 = document.getElementById('email2').value;
    // if (email2 == "") {
    //     document.querySelector('#status2').innerHTML = "Будь ласка введіть вашу пошту";
    //     return false;

    // }

    // else if (!re.test(email2)) {
    //     document.querySelector('#status2').innerHTML = "Пошта введена не коректно";
    //     return false;
    // }

    // var phone2 = document.getElementById('phone2').value;

    // if (phone2 == "") {
    //     document.querySelector('#status2').innerHTML = "Введіть ваш номер телефону";
    //     return false;
    // }



    // var message2 = document.getElementById('message2');
    // if (message2 == "") {
    //     document.querySelector('#status2').innerHTML = "Введіть ваше повідомлення";
    //     return false;
    // }


//     document.querySelector('#status2').innerHTML = "Відправка форми...";
//     document.getElementById('status2').innerHTML = "Відправка форми...";
//     formData = {
//         'name2': $('input[name=name2]').val(),
//         'email2': $('input[name=email2]').val(),
//         'phone2': $('input[name=phone2]').val(),
//         'message2': $('textarea[name=message2]').val()
//     };


//     $.ajax({
//         url: "mail.php",
//         type: "POST",
//         data: formData,

//         success: function (data, textStatus, jqXHR) {
//             $('#status2').text(data.message);
//             if (data.code) {
//                 $('#sendMail2').attr("disabled", true);
//                 $('#contact-form2')[0].reset();
//             }

//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             $('#status2').text(jqXHR);
//         }
//     });

// }



 //     $('#modalContactForm').removeClass('modal fade show')
                //     $('body').removeClass('modal-open')
                //     $('.modal-backdrop').removeClass('modal-backdrop fade show')



    // var reNum = /\(/\+/380\(/\d{3}\-/\d{2}\d{2}\d{2}$/;



  // else if (!reNum.test(phone)) {
    //     document.querySelector('#status').innerHTML = "номер введено не коректно";
    //     return false;
    // }
