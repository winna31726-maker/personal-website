# 鲁泽彤 (Luze Tong) - Personal Website

A distinctive, creative personal website showcasing architecture, design, photography, and AIGC work.

## 🎨 Features

### Four Major Portfolio Showcase Areas
1. **AIGC Innovation** - Showcase of AI-generated content and creative coding work
2. **Architectural Projects** - Design proposals, 3D renderings, and construction documentation
3. **Content Creation** - WeChat Official Account highlights and daily stories
4. **Hobbies & Lifestyle** - Yoga, photography, pottery, calligraphy, and personal creative pursuits

### Additional Sections
- **Hero Section** - Eye-catching introduction with animated shapes
- **About Me** - Personal introduction and quick info
- **Education Timeline** - Academic background and honors
- **Experience Timeline** - Professional internships and roles
- **Design Projects** - Detailed project cards with descriptions
- **Skills & Tools** - Organized by category (Design, Creative, AIGC, Languages)
- **Volunteer & Community** - Service and leadership activities
- **Contact** - Multiple ways to get in touch

## 📁 File Structure

```
personal-website/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and animations
├── script.js           # JavaScript interactivity
├── README.md           # This file
├── images/             # Image folder (to create)
│   ├── profile.jpg
│   ├── aigc-poster.jpg
│   ├── project-poster.jpg
│   ├── wechat-poster.jpg
│   └── hobbies-poster.jpg
└── videos/             # Video folder (to create)
    ├── aigc-work.mp4
    ├── projects.mp4
    ├── wechat-content.mp4
    └── hobbies-lifestyle.mp4
```

## 🚀 How to Use

### 1. Clone or Download
```bash
git clone https://github.com/winna31726-maker/personal-website.git
cd personal-website
```

### 2. Add Your Media Files

**Create folders:**
```bash
mkdir images
mkdir videos
```

**Add images to `images/` folder:**
- `profile.jpg` - Your profile photo
- `aigc-poster.jpg` - AIGC section poster/thumbnail
- `project-poster.jpg` - Projects section poster
- `wechat-poster.jpg` - WeChat content poster
- `hobbies-poster.jpg` - Hobbies section poster

**Add videos to `videos/` folder:**
- `aigc-work.mp4` - AIGC work showcase (max recommended: 50MB)
- `projects.mp4` - Architectural projects showcase
- `wechat-content.mp4` - WeChat Official Account highlights
- `hobbies-lifestyle.mp4` - Personal hobbies and lifestyle

### 3. Open in Browser
Simply open `index.html` in any modern web browser:
- Double-click the file, or
- Right-click → Open with Browser, or
- Drag to browser window

### 4. Deploy Online (GitHub Pages)

**Option A: Using GitHub Pages**
1. Go to repository settings
2. Scroll to "GitHub Pages" section
3. Select branch: `main`
4. Save
5. Your site will be available at: `https://winna31726-maker.github.io/personal-website/`

**Option B: Other Hosting**
- Upload all files to Netlify, Vercel, or any web host
- Ensure folder structure is maintained

## 🎬 Video Guidelines

### Recommended Specifications:
- **Format:** MP4 (H.264 codec, AAC audio)
- **Resolution:** 1920×1080 (Full HD) or 1280×720 (HD)
- **Frame Rate:** 30fps or 60fps
- **File Size:** 10-50MB per video (optimal for web)
- **Aspect Ratio:** 16:9 (widescreen)

### Video Content Tips:
1. **AIGC Innovation Video:**
   - Showcase AI tools in action (Codex, OpenEval, etc.)
   - Show before/after results
   - Include design thinking process
   - Duration: 1-3 minutes

2. **Architectural Projects Video:**
   - 3D model walkthroughs
   - Rendering presentations
   - Site survey highlights
   - CAD documentation clips
   - Duration: 2-4 minutes

3. **WeChat Content Video:**
   - Highlight reel of best posts
   - Daily story compilations
   - Follower engagement moments
   - Content creation process
   - Duration: 1-2 minutes

4. **Hobbies & Lifestyle Video:**
   - Yoga practice clips
   - Photography behind-the-scenes
   - Pottery/calligraphy sessions
   - Travel or nature moments
   - Duration: 1-3 minutes

## 🎨 Customization

### Edit Content
1. Open `index.html` in a text editor
2. Find sections marked with comments (e.g., `<!-- About Section -->`)
3. Update text, dates, and descriptions
4. Save and refresh browser

### Modify Colors
Edit the `:root` section in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... other colors ... */
}
```

### Add Dark Mode
The website includes dark mode support. Toggle with:
```javascript
PersonalWebsite.toggleDarkMode();
```

## 🔧 Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px and above)
- Tablet (768px - 1199px)
- Mobile (below 768px)

## ✨ Interactive Features

- **Smooth Scrolling** - Elegant navigation between sections
- **Fade-in Animations** - Elements animate as they come into view
- **Hover Effects** - Interactive cards and buttons
- **Active Navigation** - Current section highlighted in navbar
- **Video Player** - Built-in HTML5 video controls
- **Lazy Loading** - Images load on demand
- **Keyboard Navigation** - Quick access with keyboard
- **Dark Mode** - Toggle for comfortable viewing
- **Analytics Ready** - Track user engagement

## 🎯 Next Steps

1. ✅ Add your profile photo to `images/profile.jpg`
2. ✅ Prepare and add your four showcase videos
3. ✅ Add poster/thumbnail images for each video
4. ✅ Update contact information
5. ✅ Customize colors and content as needed
6. ✅ Deploy to GitHub Pages or your hosting platform
7. ✅ Share your website with the world!

## 📊 Performance Tips

- Optimize video files before uploading (use tools like HandBrake)
- Compress images (use TinyPNG, ImageOptim)
- Use modern video codecs (H.264, VP9)
- Consider using a CDN for faster loading
- Enable browser caching

## 🔐 Privacy & SEO

### Add Meta Tags (in `index.html` head):
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="architecture, design, photography, AIGC">
<meta name="author" content="鲁泽彤">
```

### Open Graph for Social Sharing:
```html
<meta property="og:title" content="鲁泽彤 - Personal Website">
<meta property="og:description" content="Your description">
<meta property="og:image" content="images/og-image.jpg">
```

## 📞 Contact & Support

**Email:** Winna31726@outlook.com  
**Phone:** 19061628378  
**Location:** Baoding, Hebei

## 🎓 Credits

Built with:
- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (no frameworks needed!)
- Modern web standards

## 📄 License

© 2024 鲁泽彤 (Luze Tong). All rights reserved.

---

**Enjoy your distinctive personal website! 🎨✨**