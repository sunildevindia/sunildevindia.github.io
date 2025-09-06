# Modern Resume Website

A clean, responsive resume website that can be hosted on GitHub Pages.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Modern UI with smooth animations
- Easy to customize with your own information
- Lightweight and fast loading
- Dark/light mode toggle

## Setup Instructions

1. **Fork or Clone this Repository**
   ```
   git clone https://github.com/yourusername/resume-site.git
   ```

2. **Customize the Content**
   - Edit `index.html` to add your personal information
   - Update the profile picture in the `images` folder
   - Modify the styles in `css/styles.css` if needed
   - Update any JavaScript functionality in `js/script.js`

3. **Deploy to GitHub Pages**
   - Create a new repository on GitHub
   - Push your code to the repository
   - Go to Settings > Pages
   - Select the main branch as the source
   - Your site will be published at `https://yourusername.github.io/repository-name`

## Customization Guide

### Personal Information
Update the following sections in `index.html`:
- Name and professional title
- Contact information (email, phone, location)
- Social media links
- Professional summary
- Work experience
- Education
- Skills
- Projects

### Profile Picture
Replace the `images/profile.jpg` file with your own photo. For best results, use a square image (400x400 pixels minimum).

### Colors
Modify the color scheme by updating the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #2563eb;    /* Main accent color */
    --secondary-color: #1e40af;  /* Darker accent color */
    --accent-color: #f97316;     /* Secondary accent color */
    /* ... other colors */
}
```

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript
- Font Awesome for icons

## Browser Support

This website works on all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own resume. If you have suggestions for improvements, please open an issue or submit a pull request.