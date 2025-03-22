import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ChevronRight, Search } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample blog data that would come from a database
const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with React and Node.js",
    excerpt: "Learn the best practices for building high-performance web applications that can scale to millions of users.",
    date: "March 15, 2023",
    readTime: "8 min read",
    author: "Ezekiel Gwamna",
    category: "Web Development",
    tags: ["React", "Node.js", "Architecture", "Performance"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Implementing Authentication and Authorization in Modern Web Apps",
    excerpt: "A comprehensive guide to implementing secure authentication and authorization systems in your applications.",
    date: "February 22, 2023",
    readTime: "12 min read",
    author: "Ezekiel Gwamna",
    category: "Security",
    tags: ["Authentication", "JWT", "Security", "OAuth"],
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Advanced State Management Patterns in React Applications",
    excerpt: "Explore different state management solutions beyond Redux and when to use each approach.",
    date: "January 10, 2023",
    readTime: "10 min read",
    author: "Ezekiel Gwamna",
    category: "React",
    tags: ["React", "State Management", "Context API", "Recoil"],
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Optimizing Database Performance in High-Traffic Applications",
    excerpt: "Learn techniques to optimize your database queries and structure for handling high traffic loads.",
    date: "December 5, 2022",
    readTime: "15 min read",
    author: "Ezekiel Gwamna",
    category: "Database",
    tags: ["PostgreSQL", "Optimization", "Indexing", "Performance"],
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Implementing CI/CD Pipelines for Modern Web Applications",
    excerpt: "A step-by-step guide to setting up continuous integration and deployment for web projects.",
    date: "November 18, 2022",
    readTime: "9 min read",
    author: "Ezekiel Gwamna",
    category: "DevOps",
    tags: ["CI/CD", "GitHub Actions", "Jenkins", "DevOps"],
    imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Building Accessible Web Interfaces: WCAG Compliance Guide",
    excerpt: "How to ensure your web applications meet accessibility standards and provide an inclusive experience.",
    date: "October 30, 2022",
    readTime: "11 min read",
    author: "Ezekiel Gwamna",
    category: "Accessibility",
    tags: ["Accessibility", "WCAG", "a11y", "Inclusive Design"],
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80"
  }
];

// Get all unique categories and tags
const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter blog posts based on search, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || 
      post.category === selectedCategory;
    
    const matchesTag = selectedTag === null || 
      post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Blog & Articles
            </motion.h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Insights, tutorials, and thoughts on web development, software engineering, and technology trends.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-10">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(category => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(
                        selectedCategory === category ? null : category
                      )}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 10).map(tag => (
                    <Badge
                      key={tag}
                      variant={selectedTag === tag ? "default" : "secondary"}
                      className="cursor-pointer"
                      onClick={() => setSelectedTag(
                        selectedTag === tag ? null : tag
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {(selectedCategory || selectedTag || searchQuery) && (
                <div className="pt-2">
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="aspect-video relative">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-3 right-3" variant="secondary">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">
                      <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <Link href={`/blog/${post.id}`} className="flex items-center">
                        Read more <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-500 text-lg mb-4">No blog posts found matching your criteria.</p>
                <Button onClick={clearFilters}>View all posts</Button>
              </div>
            )}
          </div>
          
          {/* Newsletter Signup */}
          <motion.div
            className="mt-16 bg-primary/5 rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get notified about new articles, tutorials, and exclusive content delivered straight to your inbox.
              No spam, unsubscribe at any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow"
              />
              <Button type="submit">Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;