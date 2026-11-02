# Your portfolio: beginner guide

Open `index.html` by double-clicking it. That's your site. All your text lives in **js/content.js**. Edit it with any text editor (Notepad, TextEdit in plain-text mode, or the free VS Code), save, and refresh the browser.

Folders: `index.html` (the page) | `css/style.css` (colours, fonts, layout) | `js/content.js` (YOUR CONTENT) | `js/main.js` (the machinery, leave alone) | `images/` (all pictures)

## 1. Change my name
Open `js/content.js`. Find `name: "YOUR NAME",` and replace the text between the quotes. Also change `siteTitle` (the browser tab text), `city`, `timezone`, `email`, `bio`, `tagline`. Save and refresh.

## 2. Change my social links
In `content.js`, find `socials:`. Each line looks like:
`{ label: "IG", link: "https://instagram.com/myusername" },`
- Change `link` to your real profile address (copy it from your browser's address bar).
- Change `label` to change the text shown.
- To ADD TikTok: copy a whole line, paste it under another, change to `{ label: "TT", link: "https://tiktok.com/@you" },`
- To REMOVE one: delete its whole line.
Every line except the last must end in a comma. Links open in a new tab. Your email also works as a mailto link and has a COPY button.

## 3. Add a new project
In `content.js`, find `projects:`. Copy one full block from `{` to `},`, paste it right after another block, and change the title, category, year, role, description and image names. Numbers (01, 02...) and the scattered layout are automatic. The Works page scrolls for as many projects as you add.

## 4. Replace images
1. Put your picture in the `images` folder (JPG, PNG or WebP; keep each under about 500 KB for speed. Tools like squoosh.app shrink them free).
2. In `content.js`, change the file name, e.g. `image: "images/my-logo-work.jpg"`.
The file name in `content.js` must match exactly, including capitals. Your portrait is `photo:` (it's shown black and white automatically).

## 5. Change colours and fonts
Open `css/style.css`. The very top has a section marked COLOURS and FONTS with a comment beside each one. Change the `#hex` code (find one with any "colour picker" website). For fonts, pick a font on fonts.google.com, change its name in the `--font-...` line, and update the `<link>` fonts line in `index.html`.

## 6. Set up the contact form (free)
**Option A: Web3Forms (easiest)**
1. Go to web3forms.com, type your email, and press "Create Access Key".
2. Check your inbox, and copy the access key.
3. In `content.js` set `formService: "web3forms",` and `formKey: "paste-the-key-here",`.

**Option B: Formspree**
1. Sign up at formspree.io and create a new form with your email.
2. Copy the code at the end of the form address (the `abcdwxyz` in `https://formspree.io/f/abcdwxyz`).
3. In `content.js` set `formService: "formspree",` and `formKey: "abcdwxyz",`.

Test it after publishing (some services block form sending from a double-clicked local file). The form checks that every field is filled and the email looks valid, then shows a success message.

## 7. Publish free
**Netlify (easiest):** go to app.netlify.com/drop, sign up, and drag your whole portfolio FOLDER onto the page. You get a live link instantly. To update, drag the folder in again.

**GitHub Pages:** 1) Make a free account at github.com. 2) New repository, name it `portfolio`, set it to Public. 3) "Upload files", drag in everything inside the folder (including the `css`, `js` and `images` folders), then commit. 4) Settings > Pages > Source: "Deploy from a branch", Branch `main`, folder `/ (root)`, Save. Your site appears at `https://YOURUSERNAME.github.io/portfolio` in a minute or two.

## Troubleshooting
- Blank page or nothing changes: you probably deleted a quote, comma or bracket in `content.js`. Undo your last edit.
- Image missing: check the file name and capitals match exactly.
- Fonts look different offline: the Google Fonts need internet; fallback fonts show otherwise.
