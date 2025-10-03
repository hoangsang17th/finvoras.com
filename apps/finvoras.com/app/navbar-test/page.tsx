import { Navbar } from "@/components/navbar";

export default function ResponsiveTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      
      <main className="pt-32 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Responsive Navbar Test
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-red-600">Mobile (&lt; 768px)</h2>
              <ul className="space-y-2 text-sm">
                <li>• Logo + compact CTA icons in top nav</li>
                <li>• Menu items in bottom navigation</li>
                <li>• Icons + labels for menu items</li>
                <li>• CTA buttons as icon-only</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-yellow-600">Tablet (768px - 1024px)</h2>
              <ul className="space-y-2 text-sm">
                <li>• Logo + compact CTA icons in top nav</li>
                <li>• Menu items as icon-only in top nav</li>
                <li>• No bottom navigation</li>
                <li>• Compact CTA components</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-green-600">Desktop (&gt; 1024px)</h2>
              <ul className="space-y-2 text-sm">
                <li>• Logo in top nav</li>
                <li>• Menu items with icons + text</li>
                <li>• Full CTA buttons</li>
                <li>• Traditional horizontal layout</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Resize your browser window to test different responsive breakpoints:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded">
                <div className="text-2xl font-bold text-red-600">📱</div>
                <div className="font-semibold">Mobile</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">&lt; 768px</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                <div className="text-2xl font-bold text-yellow-600">📺</div>
                <div className="font-semibold">Tablet</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">768px - 1024px</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded">
                <div className="text-2xl font-bold text-green-600">🖥️</div>
                <div className="font-semibold">Desktop</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">&gt; 1024px</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Current viewport width: <span id="viewport-width" className="font-mono font-bold"></span>
            </p>
          </div>
        </div>
      </main>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          function updateViewportWidth() {
            const width = window.innerWidth;
            const element = document.getElementById('viewport-width');
            if (element) {
              element.textContent = width + 'px';
              
              // Add color coding
              if (width < 768) {
                element.className = 'font-mono font-bold text-red-600';
              } else if (width < 1024) {
                element.className = 'font-mono font-bold text-yellow-600';
              } else {
                element.className = 'font-mono font-bold text-green-600';
              }
            }
          }
          
          updateViewportWidth();
          window.addEventListener('resize', updateViewportWidth);
        `
      }} />
    </div>
  );
}