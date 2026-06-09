type BlogLayoutProps = {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-0">
      <div className="mx-auto mt-[96px] max-w-4xl px-4 py-8 sm:px-8 sm:py-12">{children}</div>
    </div>
  );
}
