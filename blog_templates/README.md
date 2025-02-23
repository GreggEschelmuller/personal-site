# Adding a New Blog Post

This guide will help you add new blog posts to your personal website. The template for blog posts is provided in `understanding-motor-control.html`.

## Step 1: Create a New Blog Post

1. Create a new HTML file in the `/blog` directory
   - Use a descriptive name with hyphens (e.g., `my-research-insights.html`)
   - Copy the content from `blog_templates/understanding-motor-control.html` as a starting point

2. Update the metadata in the `<head>` section:
   ```html
   <meta name="description" content="Your post description here">
   <meta name="keywords" content="keyword1, keyword2, keyword3">
   <title>Your Post Title - Gregg Eschelmuller</title>
   ```

## Step 2: Write Your Content

1. Update the header section:
   ```html
   <header class="blog-post-header">
       <h1>Your Post Title</h1>
       <div class="blog-post-meta">
           <time datetime="YYYY-MM-DD">Month DD, YYYY</time>
           <div class="blog-card-tags">
               <span class="tag">Tag1</span>
               <span class="tag">Tag2</span>
           </div>
       </div>
   </header>
   ```

2. Write your content in the `blog-post-content` section:
   - Use `<h2>` for main sections
   - Use `<p>` for paragraphs
   - Use `<ul>` or `<ol>` for lists
   - Add images using the `<img>` tag with proper alt text

## Step 3: Update the Blog Listing

Once you're ready to publish, update `blog.html`:

1. Remove the "Coming Soon" section
2. Restore the blog grid structure:
   ```html
   <section class="blog-filters">
       <div class="search-box">
           <input type="text" id="blog-search" placeholder="Search posts...">
       </div>
       <div class="tag-filters" id="tag-filters">
           <!-- Tags will be dynamically populated -->
       </div>
   </section>

   <section class="blog-grid" id="blog-posts">
       <!-- Your blog post cards go here -->
   </section>
   ```

3. Add your blog post card:
   ```html
   <article class="blog-card">
       <div class="blog-card-image">
           <img src="images/blog/your-image.jpg" alt="Post image description" class="lazy-load">
       </div>
       <div class="blog-card-content">
           <div class="blog-card-tags">
               <span class="tag">Tag1</span>
               <span class="tag">Tag2</span>
           </div>
           <h2><a href="blog/your-post-file.html">Your Post Title</a></h2>
           <p class="blog-date">Month DD, YYYY</p>
           <p class="blog-excerpt">A brief excerpt from your post...</p>
           <a href="blog/your-post-file.html" class="read-more">Read More →</a>
       </div>
   </article>
   ```

## Best Practices

1. **Images**
   - Store blog images in `/images/blog/`
   - Use descriptive filenames
   - Optimize images for web (compress them)
   - Always include alt text for accessibility

2. **Tags**
   - Use consistent tags across posts
   - Keep tags relevant to your research areas
   - Use 2-4 tags per post

3. **Writing Style**
   - Use clear, concise language
   - Break long content into sections
   - Include relevant examples or diagrams
   - Link to related research or papers when relevant

4. **SEO Best Practices**
   - Write descriptive meta descriptions
   - Use relevant keywords
   - Include proper heading hierarchy
   - Use descriptive URLs

## File Structure
```
personal-site/
├── blog/
│   └── your-new-post.html
├── images/
│   └── blog/
│       └── your-post-images/
├── css/
│   └── styles.css
└── blog.html
```

## Testing

Before publishing:
1. Check that all links work correctly
2. Verify images load properly
3. Test the post in both light and dark mode
4. Check the layout on mobile devices
5. Validate that the search and tag filtering work with your new post

Remember to keep a backup of your posts and regularly commit changes to version control if you're using it.
