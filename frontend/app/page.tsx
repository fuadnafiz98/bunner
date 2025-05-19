import { Dropzone } from "@/components/dropzone";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-zinc-50 py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-zinc-900">
              File Upload System
            </h1>
            <p className="mt-2 text-zinc-600">
              Upload multiple files with real-time progress tracking
            </p>
            <p className="mt-2 text-zinc-600">Built with Next.js & Bun</p>
          </div>
          <Dropzone />
        </div>
      </main>
    </>
  );
}
