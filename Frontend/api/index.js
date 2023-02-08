import express from "express"
import authRoutes from "./routes/auth.js"
import movieRoutes from "./routes/movies.js"

const app = express()

app.use(express.json())
app.use("/api/movies", movieRoutes)
app.use("/api/auth", authRoutes)


app.listen(8800, () => {
    console.log("Connected!")
})