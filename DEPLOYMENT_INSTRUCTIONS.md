# Deployment Instructions for GitHub Pages

Follow these steps to deploy your professional resume website to GitHub Pages:

## Prerequisites

1. A GitHub account (create one at https://github.com if you don't have one)
2. Git installed on your computer

## Step 1: Create a New Repository on GitHub

1. Go to https://github.com and log in to your account
2. Click the "New" button (green button on the left side) to create a new repository
3. Name your repository:
   - For a personal website: use `[your-username].github.io`
   - For a project website: use any name you prefer (e.g., `resume`, `portfolio`)
4. Set the repository to "Public" (required for GitHub Pages)
5. **Do NOT** initialize with a README
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

In your terminal/command prompt, navigate to your resume website folder:

```bash
cd d:\vibecode\resume_site
```

Then run these commands (replace `your-username` with your actual GitHub username and `repository-name` with your repository name):

```bash
git init
git add .
git commit -m "Initial commit: Professional resume website"
git remote add origin https://github.com/your-username/repository-name.git
git branch -M main
git push -u origin main
```

If you're using SSH (recommended for security):

```bash
git remote add origin git@github.com:your-username/repository-name.git
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. In the left sidebar, scroll down and click "Pages"
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Wait a minute or two for GitHub to build your site
8. Your site will be published at:
   - For personal website: `https://your-username.github.io/`
   - For project website: `https://your-username.github.io/repository-name/`

## Step 4: Customizing Your Resume

To update your resume content:

1. Edit `index.html` to update your personal information
2. Replace `images/profile.jpg` with your actual profile picture
3. Modify `css/styles.css` to change colors or styling
4. Update `js/script.js` if you want to add any interactive features

After making changes, commit and push them to GitHub:

```bash
git add .
git commit -m "Update resume content"
git push
```

Your changes will automatically be deployed to GitHub Pages within a minute!

## Troubleshooting

### If your changes aren't showing up:
- It may take up to 1-2 minutes for GitHub Pages to rebuild your site
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check that your changes were pushed successfully with `git log`

### If you see a 404 error:
- Make sure you've committed and pushed your files
- Verify that your `index.html` file is in the root of your repository
- Check that GitHub Pages is properly configured in your repository settings

### For a custom domain (optional):
1. Purchase a domain name from a registrar
2. In your repository settings, go to Pages
3. Under "Custom domain", enter your domain name
4. Follow GitHub's instructions to configure DNS records with your domain registrar

## Updating Your Resume

To keep your resume up to date:

1. Make changes to your files locally
2. Test locally by running a local server:
   ```bash
   npx serve
   ```
3. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Your resume will automatically update on GitHub Pages

## Need Help?

If you encounter any issues:
1. Check GitHub's official documentation: https://docs.github.com/en/pages
2. Review the GitHub Community Forum: https://github.community/
3. Contact GitHub Support if needed