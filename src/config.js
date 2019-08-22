const dev = {
	api: {
		API_URL: "http://localhost:3001"
	}
};

const prod = {
	api: {
		API_URL: "https://trelloid-api.herokuapp.com"
	}
};

const config = process.env.REACT_APP_ENV === "production" ? prod : dev;

export default config;
