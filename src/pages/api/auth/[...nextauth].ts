import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { OAuthUserConfig } from "next-auth/providers/oauth";

const providers = ["github", "google"] as const;
type Provider = typeof providers[number];

const providerConfig: Record<Provider, Partial<OAuthUserConfig<any>>>  = {
  github: {
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    authorization: {
      params: {
        scope: "(no scope)",
      },
    }
  },
  google: {
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    authorization: {
      params: {
        scope: "https://www.googleapis.com/auth/userinfo.profile",
      },
    }
  }
};

// check if any of the providers client id or secret is missing
(Object.keys(providerConfig) as Provider[]).forEach((provider) => {
  if (!providerConfig[provider].clientId || !providerConfig[provider].clientSecret) {
    return console.log(`Missing clientId or clientSecret for ${provider}`);
  }
});

export default NextAuth({
  providers: [
    GithubProvider(providerConfig.github as OAuthUserConfig<any>),
    GoogleProvider(providerConfig.google as OAuthUserConfig<any>),
  ],
})
