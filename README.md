# dex-by-daylight
A reference website for identifying and learning about perks in the game *Dead by Daylight*. Written with Next.js, redux, framer-motion, and tailwindcss.

You can find a running demo [here](https://ericmchoi.github.io/dex-by-daylight/).


![preview](https://user-images.githubusercontent.com/21096047/152268342-b60e3855-4996-42ce-8ff4-7b829b69e086.png)

## Motivation

In the game *Dead by Daylight*, you are able to choose up to four *perks* to enhance your abilities in-game. They are displayed on the bottom-right corner of the screen like so:

![perks](https://user-images.githubusercontent.com/21096047/152268564-baed71b9-6ac8-4f09-bf9f-3298cc364821.png)

From just these symbols, it can be confusing for newer players to tell what perks were selected, let's say, from footage of their favorite YouTuber. So they would need to browse through a list of 191 total perks from the game wiki to find information about them.

*Dex by Daylight* is a site that simplifies this by allowing users to search for perks based on keywords found in the icon, as well as in the perk's description.

**Example**
![search preview](https://user-images.githubusercontent.com/21096047/152269673-a382e2f1-ef77-4b51-9cc1-f1c8ca7d567f.jpeg)

## Installation
You will first need to deploy the API the site uses, found at https://github.com/ericmchoi/dex-by-daylight-api.

Next, clone the repository and install dependencies, like so:
```bash
git clone git@github.com:ericmchoi/dex-by-daylight-api.git
cd dex-by-daylight
npm install
```
Create a [environment file](https://nextjs.org/docs/basic-features/environment-variables) in the root folder, with the url to your api:
```
# .env.local

API_URL=https://url.to.your.api/
```
Then, you can start a development server running the site at [http://localhost:3000](http://localhost:3000).
```bash
npm run dev
```