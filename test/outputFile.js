var passLenLessThan8;
var o = {passLenLessThan8: false};
with (o) {
	if (pwd.length < 8) {
		passLenLessThan8 = true;
	}
}

