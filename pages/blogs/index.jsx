import Link from "next/link";

const matter = require("gray-matter");

const BlogsHome = ({ blogs }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="min-h-screen">
        <h1 className="text-7xl my-20 text-center text-custom-color-2 font-bold">
          Blog
        </h1>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <Link href={"/blogs/" + blog.id} key={blog.id} className="">
              <div className="rounded overflow-hidden shadow-lg cursor-pointer">
                <div className="text-center">
                  <img
                    width={500}
                    height={500}
                    src={blog.frontmatter.imageURL}
                    alt=""
                    className="w-full h-96"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {blog.frontmatter.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {blog.frontmatter.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:1337/blogs/");
  const data = await res.json();

  const blogs = data.map((blog) => {
    const blogContent = blog.blogContent;
    // Get front matter from markdown
    const id = blog.id;
    const { data: frontmatter } = matter(blogContent);

    return {
      frontmatter,
      id,
    };
  });

  return {
    props: {
      blogs: blogs,
    },
  };
}

export default BlogsHome;
