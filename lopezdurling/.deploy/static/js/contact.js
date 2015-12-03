function sendMail(){
    
//Lee contenido de los difrenetes campos del formulario y los asigna a variables

var name = document.getElementById("name").value; 
var email = document.getElementById("email").value;
var comment = document.getElementById("comment").value;

//Validación de los campos requeridos (Nombre, Email)

if (name == '' || !validateEmail(email)){
    $("#name").addClass( "required" );
    $("#email").addClass( "required" );
    $("#notmailerror").css("display", "block");
}else {
  
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
                'email': 'gregesf@bluetideconsulting.com', //Destinatario del correo
                'name': 'Contacto López Durling', //Nombre del Remitente
                'type': 'to'
              }
            ],
            'subject': 'Contacto vía Website', //Titulo del correo
            'html': '<h3>Nuevo contacto López | Durling</h3><p>Nombre: ' + name + '</p><p>Email: ' + email + '</p><p>Comentario: ' + comment + '</p><p><h5>Datos de contacto recibidos desde el formulario de contacto de lopezdurling.com</h5></p>'
          }
        }
      });
    
    /*Se ejecuta cuando el correo ya ha sido enviado*/

    $("#notmail").css("display", "block");
    $("#notmailerror").css("display", "none");
    $("#submit").css("display", "none");
    $("#name").removeClass( "required" );
    $("#email").removeClass( "required" );
    $("#contact-form :input").prop("disabled", true);
    
    }

}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
    
}