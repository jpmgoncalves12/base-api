import express from "express";

import GenerateAuthController from "../Domains/Auth/Http/Controllers/GenerateAuthController";

const router = express.Router();

router.get('/generate', (req, res) => {
	return new GenerateAuthController().process(req, res)
});

export default router;
