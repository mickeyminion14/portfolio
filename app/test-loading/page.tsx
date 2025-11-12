// Async component to simulate slow loading
async function SlowContent() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Content Loaded! ✅</h1>
        <p className="text-muted-foreground mb-8">
          You should have seen the loading spinner for 3 seconds.
        </p>
        <a 
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default function TestLoadingPage() {
  return <SlowContent />;
}

