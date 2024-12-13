export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-white">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="block text-gray-400 hover:text-white">GitHub</a>
              <a href="#" className="block text-gray-400 hover:text-white">Twitter</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Atharva Shirke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}