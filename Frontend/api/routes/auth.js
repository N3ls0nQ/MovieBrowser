import express from "express"

const router = express.Router()

router.get("/auth", (req, res) => {
    res.json("this is auth")
})

export default router