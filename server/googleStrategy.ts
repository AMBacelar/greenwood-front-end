import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_CALLBACK_URL,
      accessType: 'offline',
      userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    },
    (
      req: any,
      _accessToken: String,
      _refreshToken: String,
      profile: any,
      cb: (error: any, user?: any) => void
    ) => {
      console.log(req.path);
      return cb(null, profile);
    }
  )
);
