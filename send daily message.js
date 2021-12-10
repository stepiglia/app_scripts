function EmailHiDotCom() {
  var emailAddress = ["stefano.pigliafreddo@gmail.com","pigliafreddo@google.com"];
  var arrayLength = emailAddress.length;
  var message =  'Remember to get reward from hi.com'; 
  var subject = 'Remember to get reward from hi.com';
  for (var i = 0; i < arrayLength; i++){
    MailApp.sendEmail(emailAddress[i], subject, message);
    //console.log(emailAddress[i]); check if iteration over logs is okay
  }
}
