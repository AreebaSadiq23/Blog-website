import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'

const blogPosts = [
  { id: '1', title: 'Introduction to Next.js: An Overview', content: 'Learn the basics of Next.js and start building awesome React applications.', imageUrl: '/images/nex.jpg', date: 'Dec 20, 2024' },
  { id: '2', title: 'Mastering Tailwind CSS', content: 'Dive deep into Tailwind CSS and create beautiful, responsive designs with ease.', imageUrl: '/images/tai.jpg', date: 'Dec 25, 2024' },
  { id: '3', title: 'The Power of TypeScript', content: 'Discover how TypeScript can improve your JavaScript development experience.', imageUrl: '/images/typescript.jpg', date: 'Dec 26, 2024' },
  { id: '4', title: 'Optimizing React Performance', content: 'Learn techniques to improve the performance of your React applications.', imageUrl: '/images/rea.png', date: 'Dec 27, 2024' },
  { id: '5', title: 'Introduction to Python', content: 'Python is a beginner-friendly, versatile programming language ideal for web development, data analysis, AI, and more.', imageUrl: '/images/python.png', date: 'Dec 28, 2024' },
  { id: '6', title: 'Responsive Design Best Practices',content: 'Master the art of creating websites that look great on any device.', imageUrl: '/images/web.jpg', date: 'Dec 29, 2024' },
]

export default function Blog() {
  return (
    <Layout>
      {/* Banner Section */}
      <div className="relative w-full h-[400] bg-cover bg-center" style={{ backgroundImage: 'url(/images/blog.jpeg)' }}>        </div>

      {/* Blog Posts Section */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Blog Posts</h1>
        <p className="text-xl text-zinc-700 dark:text-gray-400 font-semibold">Explore our latest articles and insights</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div className="max-w-xs mx-auto" key={post.id}>
            <BlogPost {...post} />
          </div>
        ))}
      </div>
    </Layout>
  )
}
