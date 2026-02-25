export const sessionConfig = {
	secret: process.env.SESSION_SECRET || "fallback-key",
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 15, // 15 min
		secure: false,
		httpOnly: true,
		sameSite: "lax",
	},
};
