type Weather = {
	publicTime: string;
	title: string;
	forecasts: {
		date: string;
		telop: string;
		detail: {
			weather: string;
		};
	}[];
};

type CityCode = {
	title: string;
	city: { id: string; title: string }[];
};
