export const ironOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: "iron-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};
