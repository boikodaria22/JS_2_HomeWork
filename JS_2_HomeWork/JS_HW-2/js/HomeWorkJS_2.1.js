var user = {
	name: 'Daria',
	sayHello: function(wellcome = 'Good day') {
		if (typeof(this.name) === 'string' && typeof(this.name) !== undefined && this.name.length !== 0) {
			return (`${wellcome}` + ',' + `${this.name}!`);
		} else {
			return ('User name is not defined');
		}
	}
};
user.sayHello('Hi');