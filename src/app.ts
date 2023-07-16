import express from "express";
import cors from "cors";
import { morganConfig } from "./middlewares";

export const startServer = () => {
	const app = express();
	const PORT = process.env["PORT"] ?? "";

	app.use(cors());
	app.use(express.json());

	app.use(morganConfig);

	app.get("/", (req, res) => {
		return res.status(200).json({
			success: true,
			message: "Hello from fanic API",
		});
	});

	app.listen(PORT, () => console.log(`App is running at port: ${PORT}`));
};
