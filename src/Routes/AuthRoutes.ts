import express from "express";

import LoginAuthController from "../Domains/Auth/Http/Controllers/LoginAuthController";

const router = express.Router();

router.post('/login', (req, res) => {
	return new LoginAuthController().process(req, res)
});

export default router;
