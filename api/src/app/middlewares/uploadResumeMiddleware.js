import fs from "fs";
import path from "path";
import multer from "multer";
import { v4 } from "uuid";
import Erro400 from "../errors/Erro400.js";

const resumesDir = path.resolve(process.cwd(), "uploads", "resumes");
fs.mkdirSync(resumesDir, { recursive: true });

const ALLOWED_MIME_TYPES = new Set(["application/pdf"]);

const storage = multer.diskStorage({
	destination: (_req, _file, cb) => {
		cb(null, resumesDir);
	},
	filename: (_req, file, cb) => {
		const extension = path.extname(file.originalname || "") || ".pdf";
		cb(null, `${Date.now()}-${v4()}${extension}`);
	},
});

export const uploadResume = multer({
	storage,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB
	},
	fileFilter: (_req, file, cb) => {
		if (!ALLOWED_MIME_TYPES.has(file.mimetype)) {
			cb(new Erro400("Currículo inválido. Envie apenasPDF."));
			return;
		}

		cb(null, true);
	},
});
