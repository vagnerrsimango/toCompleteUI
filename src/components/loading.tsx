/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XNdmEYIpJyL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Loading() {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full border-4 border-primary border-t-transparent h-12 w-12" />
          <p className="text-lg font-medium text-white">Loading...</p>
        </div>
      </div>
    )
  }