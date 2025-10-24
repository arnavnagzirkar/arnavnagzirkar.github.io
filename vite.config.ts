import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A small plugin to strip version suffixes from bare import specifiers like
// "@radix-ui/react-slot@1.1.2" -> "@radix-ui/react-slot"
function stripVersionSpecifier() {
  return {
    name: 'strip-version-specifier',
    enforce: 'pre' as const,
    resolveId(this: any, id: string, importer?: string) {
      // Ignore relative/absolute/URL imports
      if (id.startsWith('.') || id.startsWith('/') || id.startsWith('http')) return null
      const atIndex = id.lastIndexOf('@')
      if (atIndex > 0) {
        const suffix = id.slice(atIndex + 1)
        // If the suffix starts with a digit, it's likely a version like 1.2.3
        if (/^[0-9]/.test(suffix)) {
          const stripped = id.slice(0, atIndex)
          return this.resolve(stripped, importer, { skipSelf: true })
        }
      }
      return null
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [stripVersionSpecifier(), react()],
})
