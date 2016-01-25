/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and where you
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  bearer: {
    strategy: require('passport-http-bearer').Strategy
  },

  twitter: {
    name: 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options: {
      consumerKey: '8RRkwuOGVTCJW8ZBpnKJlkaqN',
      consumerSecret: 'GN0G3Hl0yO8NLgqoyj6ekWhej7Rb5VhFq1A68KfPQ2oeWQN4x5'
    }
  },

  github: {
    name: 'GitHub',
    protocol: 'oauth2',
    strategy: require('passport-github').Strategy,
    options: {
      clientID: '06c0e7d57e820ad0de55',
      clientSecret: 'a0ebf00678e6541f95fb88622c4344417a85e88d'
    }
  },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: '892603514191908',
      clientSecret: '7fd8ddf27151bb9cc44d05da3fb30c52',
      callbackURL: "http://localhost:1337/auth/facebook/callback",
      profileFields: ['id', 'emails', 'name'],
      scope : ['email']
       /* email is necessary for login behavior */
    }
  },

  google: {
    name: 'Google',
    protocol: 'oauth2',
    strategy: require('passport-google-oauth').OAuth2Strategy,
    options: {
      clientID: '44410448354-g2r58jt8h54m1lp66i466cb4mmnp68si.apps.googleusercontent.com',
      clientSecret: '71xI9sAveszGX4KWQQ_6cQgf',
      callbackURL: "http://localhost:1337/auth/google/callback",
      scope: ['email']
    }
  },

  cas: {
    name: 'CAS',
    protocol: 'cas',
    strategy: require('passport-cas').Strategy,
    options: {
      ssoBaseURL: 'http://your-cas-url',
      serverBaseURL: 'http://localhost:1337',
      serviceURL: 'http://localhost:1337/auth/cas/callback'
    }
  }
};
