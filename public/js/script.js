const examples = {
	sum: function (a, b) {
		return a + b;
	},

	diff: function (a, b) {
		return a - b;
	},

	product: function (a, b) {
		return a * b;
	},

	division: function (a, b) {
		if (b != 0) {
			return a / b;
		} else {
			return null;
		}
	},

	game: function (gamename) {
		let playercount = 0;
		if (
			gamename == 'cricket' ||
			gamename == 'football' ||
			gamename == 'hockey'
		) {
			playercount = 11;
		} else if (gamename == 'basketball') {
			playercount = 5;
		} else {
			playercount = 'Game not available in this Area!!';
		}
		return playercount;
	},

	twice: function (a, b) {
		sum = jest.fn();
		const numberone = examples.sum(a, b);
		diff = jest.fn();
		const numbertwo = examples.diff(a, b);
		sum = jest.fn();
		const numberthree = examples.sum(b, a);
		const result = numberone + numbertwo + numberthree;
		return result;
	},

	schooldata: function (classnumber) {
		// let sport_teacher = 0;
		if (classnumber <= 5) {
			sport_teacher = 'Mimi';
		} else {
			sport_teacher = 'Teresa';
		}
		return sport_teacher;
	},

	vehicalshop: function () {
		const vehicals = {
			vehicaltype: 'car',
			music_system: true,
			material: 'steel',
			color: ['white', 'red', 'black', 'blue'],
			carbody: { wheels: 4, length: 18 },
			car_height: undefined,
		};
		return vehicals;
	},

	food: function (food_category) {
		let promo_text = 0;
		if (
			food_category == 'Tea' ||
			food_category == 'Juice' ||
			food_category == 'Coffee'
		) {
			promo_text = 'Get 10% discount on all drinks';
		} else if (food_category == 'Bread') {
			promo_text = 'Get 5% discount on all type of breads';
		}
		return promo_text;
	},

	div_Nan: function (a, b) {
		return a / b;
	},

	Car: function (make, model) {
		this.make = make;
		this.model = model;
	},

	string_test: function (teacherName) {
		if (teacherName === 'Danny') {
			return (studentName_arr = ['Sony', 'John', 'Liya']);
		} else {
			return (studentName_string = 'Isha Paul');
		}
	},

	drink: function (drink_name) {
		if (drink_name === 'Coffee') {
			let drink_details = [
				{ store: 'starbuck' },
				{ color: 'brown' },
				{ cup_size: 'large' },
				{ sugar: true },
			];
			return drink_details;
		} else if (drink_name === 'Orange Juice') {
			return (drink_details = [
				{ store: 'JuiceCorner' },
				{ color: 'orange' },
				{ cup_size: 'medium' },
				{ sugar: false },
			]);
		} else {
			return (drink_details = null);
		}
	},

	drinkFlavor: function (flavor) {
		if (flavor == 'bad') {
			throw new Error('yuck, bad flavor');
		}
	},

	students: function (class_num) {
		if (class_num == 1) {
			student_name = ['Sony', 'John', 'Liya'];
		} else {
			student_name = ['Mimi', 'Teresa', 'Sonia', 'Peter'];
		}
		return student_name;
	},

	clothing_shop: function (class_num) {
		const dresses = {
			dresstype: 'Gown',
			partywear: true,
			material: 'silk',
			color: 'red',
			sleeves: 'full sleeve',
		};
		return dresses;
	},

	promotion: function (category) {
		let promo_banner = '';
		if (category == 'Footwear' || category == 'Clothing') {
			promo_banner = 'Get 10% discount on all drinkss';
		} else if (category == 'Eyewear') {
			promo_banner = 'Get 5% discount on all type of breads';
		}
		return promo_banner;
	},

	equal_shape: function (received_shape, expected_shape) {
		if (received_shape == expected_shape) {
			return {
				message: () => 'Received shape is same as expected.',
				pass: true,
			};
		} else {
			if (received_shape != expected_shape) {
				return {
					message: () =>
						'Expected and Received shapes are not the same',
					pass: false,
				};
			}
		}
	},

	// Functions to return promise:
	sum_new: function (a, b) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const x = a + b;
				resolve(x);
			}, 1000);
		});
	},

	search_filter: function () {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve('Results are fetched successfully.');
			}, 1000);
		});
	},

	// Functions for callback:
	search_filter_callback: function (callback) {
		setTimeout(() => {
			callback(null, 'Results are fetched successfully.');
		}, 1000);
	},

	div_reject: function (a, b) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (b != 0) {
					const x = a / b;
					resolve(x);
				} else {
					reject('Error');
				}
			}, 1000);
		});
	},
};

module.exports = examples;
