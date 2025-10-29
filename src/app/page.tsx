import Counter from "@/components/Counter";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Mini-Project: Client Components & Hooks
        </h1>
        <p className="text-lg text-gray-600">
          Đây là Server Component đang render một Client Component.
        </p>
      </div>
      
      {/* Import và sử dụng component Counter */}
      <Counter />
    </main>
  );
}
