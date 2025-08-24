export const layout = "layout.tsx";
export const title = "Blog Posts";

export default ({ search }: Lume.Data) => {
  const posts = search.pages("type=post", "date=desc");

  return (
    <div class="container mx-auto px-6 md:px-12 py-8">
      <h1 class="text-4xl font-bold mb-8">Blog Posts</h1>
      <div class="space-y-8">
        {posts.map((post) => (
          <article class="bg-[#161B22] p-6 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold text-accent-blue mb-2">
              <a href={post.url}>{post.title}</a>
            </h2>
            {post.date && (
              <p class="text-sm text-gray-400">
                {post.date.toLocaleDateString()}
              </p>
            )}
            <p class="text-medium-text">{post.description || post.excerpt}</p>
            <a href={post.url} class="text-accent-green hover:underline mt-4 inline-block">Read More &rarr;</a>
          </article>
        ))}
      </div>
    </div>
  );
};