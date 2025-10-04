import FinvorasNavbar from "@/components/finvoras-navbar";

export default function ResponsiveTestV2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <FinvorasNavbar />
      
      <main className="pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Responsive Navbar Test v2
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Test all breakpoints and behaviors
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Mobile Instructions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📱</div>
                <h2 className="text-xl font-bold text-red-600">Mobile (&lt; 768px)</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Top Navigation:</h3>
                  <ul className="space-y-1">
                    <li>• Logo bên trái</li>
                    <li>• CTA icons bên phải (compact)</li>
                    <li>• z-index: 50 (cao nhất)</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Bottom Navigation:</h3>
                  <ul className="space-y-1">
                    <li>• Menu items với icon + text</li>
                    <li>• Fixed bottom position</li>
                    <li>• z-index: 40 (thấp hơn top nav)</li>
                    <li>• Active state highlighting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tablet Instructions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📺</div>
                <h2 className="text-xl font-bold text-yellow-600">Tablet (768px - 1024px)</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Top Navigation:</h3>
                  <ul className="space-y-1">
                    <li>• Logo bên trái</li>
                    <li>• Menu items CHỈ ICON (không text)</li>
                    <li>• CTA compact icons bên phải</li>
                    <li>• Không có bottom navigation</li>
                  </ul>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="space-y-1">
                    <li>• Hover effects cho icons</li>
                    <li>• Tooltips hiển thị tên menu</li>
                    <li>• Compact layout</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Desktop Instructions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">🖥️</div>
                <h2 className="text-xl font-bold text-green-600">Desktop (&gt; 1024px)</h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Top Navigation:</h3>
                  <ul className="space-y-1">
                    <li>• Logo bên trái</li>
                    <li>• Menu items: ICON + TEXT (ngang)</li>
                    <li>• CTA buttons đầy đủ</li>
                    <li>• Traditional horizontal layout</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h3 className="font-semibold mb-2">Features:</h3>
                  <ul className="space-y-1">
                    <li>• Spacious layout</li>
                    <li>• Full button text</li>
                    <li>• Hover animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time viewport info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Live Viewport Info</h2>
            <div className="text-center">
              <div className="text-4xl font-mono font-bold mb-2" id="viewport-width">
                Loading...
              </div>
              <div className="text-lg" id="breakpoint-info">
                Determining breakpoint...
              </div>
            </div>
          </div>

          {/* Test content with scroll */}
          <div className="mt-12 space-y-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold mb-3">Test Section {i + 1}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This is test content to check scrolling behavior with fixed navigation. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          function updateViewportInfo() {
            const width = window.innerWidth;
            const widthElement = document.getElementById('viewport-width');
            const infoElement = document.getElementById('breakpoint-info');
            
            if (widthElement && infoElement) {
              widthElement.textContent = width + 'px';
              
              let breakpoint, color, description;
              
              if (width < 768) {
                breakpoint = 'Mobile';
                color = 'text-red-600';
                description = 'Top nav + Bottom nav active';
              } else if (width < 1024) {
                breakpoint = 'Tablet';
                color = 'text-yellow-600'; 
                description = 'Top nav with icon-only menu';
              } else {
                breakpoint = 'Desktop';
                color = 'text-green-600';
                description = 'Top nav with icon + text menu';
              }
              
              widthElement.className = 'text-4xl font-mono font-bold mb-2 ' + color;
              infoElement.textContent = breakpoint + ': ' + description;
              infoElement.className = 'text-lg ' + color;
            }
          }
          
          updateViewportInfo();
          window.addEventListener('resize', updateViewportInfo);
        `
      }} />
    </div>
  );
}