const express = require("express")
const uuid = require("uuid")

const UserModel = require("../models/User")

const router = express.Router()

router.post("/createUser", (req, res) => {
	const { name, userName, lastName } = req.body

	const data = new UserModel({
		name,
		id: uuid.v4(),
		userName,
		lastName,
	})

	try {
		data.save()
		res.status(201).send("User created")
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
})

module.exports = router
