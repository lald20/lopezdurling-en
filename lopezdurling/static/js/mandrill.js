function sendContact(){
    var name = $("#contactForm #name").val();
    var tlf = $("#contactForm #phone").val();
    var email = $("#contactForm #email").val();
    var msg = $("#contactForm #comments").val();
    var html_datos;
    var html_final;

    if (validateText(name) && validateEmail(email)){
        html_datos = '<h2>Nueva Contacto vía Website<h3><h4>Datos Personales</h2><p>Nombre Cliente: ' +  name + '</p><p>Email: ' + email + '</p><p>Teléfono: ' + tlf + '</p><p>Mensaje: ' + msg + '</p>';
        html_final = html_datos + '<br><h5>Sistema contacto de lopezdurling.com</h5>';
        /*alert (html_final);*/
        sendMail(email, name, html_final);
        $("#notmail").css("display", "block");
        $("#notmailerror").css("display", "none");
        $("#name").removeClass('required_field');
        $("#email").removeClass('required_field');
        $("#submit").css("display", "none");
        $("#contactForm :input").prop("disabled", true);
        
    }
    else{
        $("#notmailerror").css("display", "block");
        $("#name").addClass('required_field');
        $("#email").addClass('required_field');
        
    }

}
function sendContactFooter(){
    var name = $("#name_footer").val();
    var email = $("#email_footer").val();
    var msg = $("#comments_footer").val();
    var html_datos;
    var html_final;

    if (validateText(name) && validateEmail(email)){
        html_datos = '<h2>Nueva Contacto vía Website (Footer)<h3><h4>Datos Personales</h2><p>Nombre Cliente: ' +  name + '</p><p>Email: ' + email + '</p><p>Mensaje: ' + msg + '</p>';
        html_final = html_datos + '<br><h5>Sistema contacto de lopezdurling.com</h5>';
        /*alert (html_final);*/
        sendMail(email, name, html_final);
        $("#notmail_footer").css("display", "block");
        $("#notmailerror_footer").css("display", "none");
        $("#name_footer").removeClass('required_field');
        $("#email_footer").removeClass('required_field');
        $("#submit_footer").css("display", "none");
        $("#contactFooter :input").prop("disabled", true);
        
    }
    else{
        $("#notmailerror_footer").css("display", "block");
        $("#name_footer").addClass('required_field');
        $("#email_footer").addClass('required_field');
        
    }

}


function sendMail(email, name, html_final){
    var dest = "info@lopezdurling.com"; /*Email destino para todos los formularios*/

    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
            'key': '9tNZBN-19KKIaCycj3ITQQ', //API Key asiganada
            'message': {
              'from_email': email,
              "from_name": name,
              'to': [
                {
                  'email': dest, //Destinatario del correo
                  'name': 'L&D Website', //Nombre del Remitente
                  'type': 'to'
                }
              ],
              'subject': 'Nuevo contacto vía website', //Titulo del correo
              'html': html_final
            }
        }
    }) 
}

function validateText(text){
    if (text == '') {
      return false;
    }
    else{
        return true;
    }
}
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);

}