var pass = "temp1234";

//var obj = {};

function foo() {
	console.log("Password Size is 8");
}

function bar() {
	console.log("Password Size is NOT equal to 8");
}

function outerfunction() {
	if (pass.length == 8) {
		return function () {
			foo();
		}

	} else {
		return function () {
			bar();
		}

	}
};

outerfunction()();

