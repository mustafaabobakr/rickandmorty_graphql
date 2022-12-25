import { createBrowserRouter } from "react-router-dom";
// import routes from pages
import Home from "../pages/Home";
import CharacterPage from "../pages/CharacterPage";

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			{
				path: "/:id",
				element: <Home />,
			},
		],
	},
	{
		path: "/character/:id",
		element: <CharacterPage />,
	},
]);

export default Router;
