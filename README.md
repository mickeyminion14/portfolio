# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js, TypeScript, Framer Motion, and shadcn/ui.

## 🚀 Features

- ⚡ **Modern Stack**: Built with Next.js 16, React 19, and TypeScript
- 🎨 **Beautiful UI**: Styled with Tailwind CSS and shadcn/ui components
- ✨ **Smooth Animations**: Powered by Framer Motion for engaging interactions
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🌙 **Dark/Light Mode**: Manual theme toggle with system preference support
- 🎯 **SEO Optimized**: Built-in SEO best practices
- ⚡ **Fast Performance**: Optimized for speed and performance
- 🎭 **Interactive Sections**:
  - Hero section with animated background
  - About section with feature cards
  - Tech stack showcase with categorized skills
  - Projects gallery with live demos
  - Contact section with social links

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes (Dark/Light mode)

### Development
- **Package Manager**: npm
- **Linting**: ESLint
- **Type Checking**: TypeScript

## 📦 Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **app/layout.tsx**: Update metadata (title, description)
2. **components/Hero.tsx**: Update name, title, and social links
3. **components/About.tsx**: Update bio and feature descriptions
4. **components/TechStack.tsx**: Add/remove technologies
5. **components/Projects.tsx**: Add your actual projects
6. **components/Contact.tsx**: Update contact information and social links

### Colors and Theme

The project uses shadcn/ui's theming system. To customize colors:

1. Edit `app/globals.css` to modify CSS variables
2. Change the base color scheme in `components.json`
3. Rebuild components if needed

### Adding More Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Available components: https://ui.shadcn.com/docs/components

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## 📱 Sections Overview

### Navigation
- Fixed header with smooth scroll navigation
- Responsive mobile menu
- Animated on scroll

### Hero Section
- Eye-catching headline with gradient text
- Animated background elements
- Call-to-action buttons
- Social media links

### About Section
- Personal introduction
- Feature cards highlighting strengths
- Smooth reveal animations

### Tech Stack
- Categorized technology badges
- Interactive hover effects
- Organized by Frontend, Backend, and Tools

### Projects
- Grid layout of project cards
- Project descriptions and tech stacks
- Links to GitHub and live demos
- Responsive design

### Contact
- Contact information cards
- Social media links
- Email button
- Professional presentation

### Footer
- Copyright information
- Tech stack acknowledgment
- Animated heart icon

## 🎯 Best Practices Implemented

- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Responsive design
- ✅ Accessibility features
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Clean code structure
- ✅ Modern UI/UX patterns

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

For any questions or suggestions, feel free to reach out through the contact section of the portfolio.

---

Made with ❤️ using Next.js, TypeScript, and Framer Motion
