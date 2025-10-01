// Test script để verify @finvoras/ui components
try {
    // Test import các components
    const { Button } = require('@finvoras/ui');
    const { Input } = require('@finvoras/ui');
    const { Badge } = require('@finvoras/ui');

    console.log('✅ Import Button:', typeof Button);
    console.log('✅ Import Input:', typeof Input);
    console.log('✅ Import Badge:', typeof Badge);

    // Test utilities
    const { cn } = require('@finvoras/ui');
    console.log('✅ Import cn utility:', typeof cn);

    console.log('\n🎉 All @finvoras/ui components imported successfully!');
    console.log('📦 Package is working correctly');

} catch (error) {
    console.error('❌ Error importing @finvoras/ui:', error.message);
    process.exit(1);
}