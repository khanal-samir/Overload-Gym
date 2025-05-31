import { Logo } from '@/components/Logo';
import { GoogleSignInButton } from '@/components/GoogleSignInButton';
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-background z-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />

        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-20">
            {/* Header */}
            <div className="space-y-6 mb-12">
              <Logo />
              <div className="inline-block bg-primary/10 backdrop-blur-sm rounded-full px-5 py-2 border border-primary/20">
                <span className="text-primary font-medium flex items-center gap-2">
                  <span className="text-lg">🏆</span>
                  <span>#1 Workout Tracking App</span>
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
                Transform Your <br />
                <span className="text-primary relative inline-block">
                  Fitness
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
                </span>{' '}
                Journey
              </h1>
            </div>

            {/* Main Content */}
            <div className="space-y-10">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Track your progress, smash your goals, and achieve the results
                you&#39;ve always wanted with our powerful workout tracking
                platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GoogleSignInButton className="px-8 py-4 h-12 rounded-full text-base font-semibold hover:shadow-xl cursor-pointer" />
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">10K+</span>{' '}
                  active users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '1M+', label: 'Workouts Tracked' },
              { number: '50K+', label: 'Goals Achieved' },
              { number: '4.9', label: 'User Rating' },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-4xl font-bold text-primary">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Overload?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Track Progress',
                description:
                  'Monitor your weights, reps, and sets with precision. Watch your strength grow over time.',
                icon: '📈',
              },
              {
                title: 'Smart Analytics',
                description:
                  'Get insights into your performance with detailed analytics and progress tracking.',
                icon: '📊',
              },
              {
                title: 'Workout Plans',
                description:
                  'Access customizable workout plans designed for progressive overload.',
                icon: '💪',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Reviews Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Fitness Enthusiast',
                review:
                  "Overload has completely transformed my training. The progress tracking is incredible, and I've never been more consistent with my workouts.",
                rating: '⭐⭐⭐⭐⭐',
              },
              {
                name: 'Mike Chen',
                role: 'Powerlifter',
                review:
                  'As a competitive powerlifter, I need precise tracking. Overload delivers exactly what I need to push my limits.',
                rating: '⭐⭐⭐⭐⭐',
              },
              {
                name: 'Emma Davis',
                role: 'Personal Trainer',
                review:
                  'I recommend Overload to all my clients. The analytics help them stay motivated and see their progress clearly.',
                rating: '⭐⭐⭐⭐⭐',
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-background p-8 rounded-xl shadow-lg"
              >
                <div className="text-yellow-400 mb-4">{review.rating}</div>
                <p className="text-muted-foreground mb-6 italic">
                  &quot;{review.review}&quot;
                </p>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Create Account',
                description: 'Sign up and set your fitness goals',
              },
              {
                step: '02',
                title: 'Choose Plan',
                description: 'Select or customize your workout plan',
              },
              {
                step: '03',
                title: 'Track Progress',
                description: 'Log your workouts and monitor gains',
              },
              {
                step: '04',
                title: 'Achieve Goals',
                description: 'Watch your progress and celebrate wins',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-xl">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Overload. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
