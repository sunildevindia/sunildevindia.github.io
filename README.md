# Professional Resume Website - Sunil Kumar

A modern, responsive resume website for Sunil Kumar, showcasing his extensive experience as a Technical Lead and Mobile Applications Expert. This website is optimized for GitHub Pages hosting.

## Features

- Fully responsive design that works on mobile, tablet, and desktop devices
- Professional UI with smooth animations and transitions
- Dark/light mode toggle for user preference
- Printable version optimized for PDF export
- Clean, modern design that highlights your professional experience
- Fast loading with minimal dependencies

## Sections Included

1. **Professional Summary** - Overview of your expertise and experience
2. **Work Experience** - Detailed timeline of your professional journey
3. **Key Projects** - Highlight of significant projects you've worked on
4. **Technical Skills** - Comprehensive list of your technical abilities
5. **Education** - Academic qualifications
6. **Certifications** - Professional certifications earned
7. **Honors & Awards** - Recognition received throughout your career

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts for typography

## Deployment to GitHub Pages

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository (e.g., `resume` or `[username].github.io`)
   - Don't initialize with a README

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Professional resume website"
   git remote add origin https://github.com/[your-username]/[repository-name].git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

4. **View Your Live Resume**
   - Your site will be available at `https://[your-username].github.io/[repository-name]/`

## Customization Guide

### Personal Information
Update the following in `index.html`:
- Name and professional title
- Contact information (email, phone, location)
- Social media links
- Professional summary
- Work experience details
- Project descriptions
- Skills and certifications

### Profile Picture
Replace `images/profile.jpg` with your own professional headshot.
- Recommended size: 400x400 pixels
- Format: JPG or PNG
- Keep file size under 100KB for optimal loading

### Adding Your Personal Website
Your personal website (https://mobihivestudio.github.io/) is linked in the contact section. 
To update this link or add additional websites:
1. Edit the social links section in `index.html`
2. Replace the href attribute with your desired URL
3. You can add additional website links by duplicating the anchor tag

### Colors
Modify the color scheme in `css/styles.css` by updating the CSS variables:
```css
:root {
    --primary-color: #2c3e50;    /* Main text color */
    --secondary-color: #3498db;  /* Accent color */
    --accent-color: #e74c3c;     /* Secondary accent */
    /* ... other colors */
}
```

## Browser Support

This website works on all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Android Chrome)

## Printing Your Resume

The website is print-optimized. To save as PDF:
1. Open the website in Chrome
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF" as the destination
4. Adjust margins and layout as needed
5. Click "Save"

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own resume. If you have suggestions for improvements, please open an issue or submit a pull request.