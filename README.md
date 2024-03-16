# Tadarus Group

Welcome to Tadarus Group repository!

## Development Guide

You need to set up OAuth for Google and Github first before using the repository.

[Guide to set up OAuth for Google](https://support.google.com/cloud/answer/6158849?hl=en)
[Guide to set up OAuth for Github](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app)

You will also need to generate your own NextAuth secret - it can be a random string, or you can generate yourself by running this command in your preferred terminal:

```bash
openssl rand -base64 32
```

After setting up, put all the Client ID and Client Secret into your `.env.local`. All the keys needed can be obtained from `.env.example`.

Now, you can run your app!

---

## MVP
Listing all the features I aim to create -

1. User need to have account, so they are able to share
2. User able to create the group. This might need simple roles to check.
3. In the group, user are able to invite people to join.
4. Group is only to ease the user to assign tadarus group. "Group" here is different from "tadarus group". We might need to rename it to something more proper, like "tadarus goal"?
5. So, one tadarus goal should only be mapped to a user or a group.
6. In the tadarus goal, user can set the range of tadarus. It can be specific ayah, maqra', juz, or pages.
7. User are able to set the period too. Probably just a lifetime goal (without setting any time restriction), or set the time.
8. If no restriction, as the tadarus going along, we will display the percentage of completion.
9. If yes, the percentage of completion will display the percentage of completion, the expected.
10. After creating the tadarus goal, then the system should distribute evenly. The mechanism can be crafted later. Start with simple mechanism.
11. User may be able to archive, finish early, or just delete the goal, in case user feels like they need to change things.
12. For now, only for the tadarus management, not the quran app.

## Future Considerations
1. Able to create subgroups - this will allow bigger organisations to have more structured group within the organisation to assign tadarus goals.
2. Reference to the quran directly. This will ease process of people to read quran straight from the tadarus goals.
3. Dashboard - to see how well you track your tadarus goals overall.
4. Have talaqqi system - someone validate your tadarus - can be someone who check your reading, or someone who are involved in your tadarus process.