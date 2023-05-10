import express from "express";
const app = express();
const port = 9000;

app.use(express.json());

const articleInfo = [
	{
		name: "learn-react",
		upvote: 0,
		comment: [],
	},
	{
		name: "learn-node",
		upvote: 0,
		comment: [],
	},
	{
		name: "mongodb",
		upvote: 0,
		comment: [],
	},
];

app.get("/api/:name/upvote", (req, res) => {
	const { name } = req.params;
	const article = articleInfo.find((d) => d.name === name);

	if (article) {
		article.upvote += 1;
		res.send(
			`Upvote added in article: ${article.name} Upvote: ${article.upvote}`
		);
	} else {
		res.status(404).send(`No Article found`);
	}
});

//comment
app.post("/api/:name/comment", (req, res) => {
	const { name } = req.params;
	const { postBy, comment } = req.body;

	const article = articleInfo.find((d) => d.name === name);

	if (article) {
		console.log(postBy, comment);
		article.comment.push({ postBy: postBy, comment: comment });
		res.json(article.comment);
	} else {
		res.status(404).send(`No Article found`);
	}
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});
