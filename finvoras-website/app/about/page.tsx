import Testimonials from "@/components/testimonials";
import PageLayout from "@/components/layout/page-layout";
import ContactForm from "@/components/contact-form";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-16">
        {/* About Hero */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Finvoras
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We&apos;re on a mission to make personal finance simple, accessible, and empowering for everyone. 
            Finvoras helps you take control of your financial future with intelligent tools and educational content.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Financial literacy shouldn&apos;t be a privilege. We believe everyone deserves access to the tools and knowledge needed to build a secure financial future.
              </p>
              <p className="text-lg text-muted-foreground">
                Through Finvoras, we&apos;re democratizing financial management by providing intuitive expense tracking, budget planning, and educational resources that actually make sense.
              </p>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
                  <div className="text-sm text-muted-foreground">Money Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from people who&apos;ve transformed their financial lives with Finvoras.
            </p>
          </div>
          <Testimonials />
        </div>

        {/* Contact Form */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <ContactForm />
        </div>
      </div>
    </PageLayout>
  );
}
