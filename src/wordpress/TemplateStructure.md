
# WordPress Theme Conversion Guide

## File Structure Mapping

### React Components → WordPress Templates

```
src/components/Header.tsx → header.php
src/components/Footer.tsx → footer.php
src/components/Sidebar.tsx → sidebar.php
src/pages/Index.tsx → index.php (homepage)
src/components/FeaturedPost.tsx → template-parts/featured-post.php
src/components/NewsCard.tsx → template-parts/news-card.php
src/components/CategorySection.tsx → template-parts/category-section.php
src/components/AdBanner.tsx → template-parts/ad-banner.php
src/components/Newsletter.tsx → template-parts/newsletter.php
```

### Required WordPress Files to Create

```
style.css (theme stylesheet with header)
functions.php (theme functions)
index.php (main template)
header.php
footer.php
sidebar.php
single.php (single post template)
page.php (page template)
archive.php (category/archive template)
search.php (search results)
404.php (error page)
```

### WordPress Hooks Integration Points

1. **Header.php**: wp_head(), site navigation menu
2. **Footer.php**: wp_footer(), widget areas
3. **Index.php**: main loop, featured posts query
4. **Sidebar.php**: dynamic_sidebar(), widget ready areas
5. **Functions.php**: enqueue scripts/styles, register menus, add theme support

### Dynamic Content Areas

- **Featured Posts**: WP_Query with meta_key 'featured'
- **Category Sections**: get_posts() by category
- **Sidebar Content**: Trending posts, recent posts
- **Ad Placements**: Custom fields or theme options

### AdSense Integration

- Header leaderboard: get_option('adsense_header')
- Content ads: get_option('adsense_content') 
- Sidebar ads: get_option('adsense_sidebar')
- Footer ads: get_option('adsense_footer')

### SEO & Performance

- Schema.org markup for articles
- Open Graph meta tags
- Lazy loading images
- Minified CSS/JS
- Core Web Vitals optimization
```
