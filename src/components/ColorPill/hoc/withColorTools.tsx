import { Button } from "@/components/ui/button";
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from "lucide-react";

export function withColorTools<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> {
  // This component receives props and returns another component
  return function withColorTools(props: P) {
    // Render the original component with its props
    return (
      <div className="relative group">
        <Component {...props} />
        <div className="absolute w-full items-center bg-white bg-opacity-60 rounded-sm p-1 hidden justify-between top-full  group-hover:flex z-10">
          <Button size="sm" variant="outline" className="h-6 w-6 p-0">
            <ArrowRightFromLineIcon size={10} />
          </Button>
          <Button size="sm" variant="outline" className="h-6 w-6 p-0">
            <ArrowLeftFromLineIcon size={10} />
          </Button>
        </div>
      </div>
    );
  };
}
