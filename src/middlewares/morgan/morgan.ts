import morgan from "morgan";

export const morganConfig = morgan(
	":method :url :status - :response-time ms - :res[error]",
);
