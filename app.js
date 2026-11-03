import "dotenv/config";
import express from "express";
import path from "node:path";
import ejsMate from "ejs-mate";
import session from "express-session";
import MongoStore from "connect-mongo";
import methodOverride from "method-override";
import connectDB from "./src/config/db.config.js";
import flash from "./src/middleware/flash.middleware.js";
import { loadCurrentUser } from "./src/middleware/auth.middleware.js";
import { notFound, errorHandler } from "./src/middleware/errorHandler.middleware.js";
import authRouter from "./src/routes/auth.route.js";
import userRouter from "./src/routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.use(express.static(path.join(import.meta.dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  session({
    store: MongoStore.create({ mongoUrl: process.env.MONGO_DB_URL }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  }),
);
app.use(loadCurrentUser);
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.get("/", (req, res) => {
  res.render("home/home");
});

app.use(authRouter);
app.use(userRouter);

app.use(errorHandler);
app.use(notFound);

connectDB();

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
