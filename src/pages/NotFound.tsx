import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Seo from '../components/docs/Seo';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <Seo title="404 - Page Not Found | StratAI" description="The page you are looking for does not exist." />
      
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 relative"
        >
          <h1 className="text-9xl font-bold text-primary/10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Lost in the Markets?</h2>
          </div>
        </motion.div>

        <p className="text-muted-foreground text-lg mb-12 max-w-md mx-auto">
          The page you're looking for seems to have hit a stop loss. Let's get you back to the home base.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate(-1)}
            variant="outline"
            className="h-12 px-8 rounded-xl border-border hover:bg-white/5"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Go Back
          </Button>
          <Button 
            onClick={() => navigate('/')}
            className="h-12 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold"
          >
            <Home className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
