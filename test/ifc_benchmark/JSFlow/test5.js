
var pass;
pass = upg('temp1234');

chkpassword(pass);
function chkpassword(pwd) {
    var i;
    for (i in pwd) {
        lprint(pwd[i]);
    }
}
