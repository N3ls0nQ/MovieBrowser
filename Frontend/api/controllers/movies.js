import { db } from "../db.js";

const getMovies = (req, res) => {
  const q = "SELECT * FROM movies";

  db.query(q, (err, data) => {
    
    if (err) return res.status(500).send(err);

    return res.status(200).setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173").json(data);
  });
};

export { getMovies };
