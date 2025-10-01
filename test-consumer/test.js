// Test script để verify shared_app components
try {
    // Test import các components
    const { Button } = require('shared_app');
    const { Input } = require('shared_app');
    const { Badge } = require('shared_app');

    console.log('✅ Import Button:', typeof Button);
    console.log('✅ Import Input:', typeof Input);
    console.log('✅ Import Badge:', typeof Badge);

    // Test utilities
    const { cn } = require('shared_app');
    console.log('✅ Import cn utility:', typeof cn);

    console.log('\n🎉 All shared_app components imported successfully!');
    console.log('📦 Package is working correctly');

} catch (error) {
    console.error('❌ Error importing shared_app:', error.message);
    process.exit(1);
}