
export default ({ title, children, search }: Lume.Data) => {
  const docs = search.pages("url^=/docs/", "url");

  return (
    <div class="flex h-screen">
      <nav class="w-64 bg-[#161B22] p-4 overflow-y-auto fixed h-full">
        <h2 class="text-xl font-bold mb-4">Documentation</h2>
        <ul>
          {docs.map((doc) => (
            <li>
              <a href={doc.url} class="block text-accent-green hover:underline p-2">
                {doc.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <main class="flex-1 p-8 overflow-y-auto ml-64">
        <div class="prose lg:prose-xl">
          <h1>{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
};
