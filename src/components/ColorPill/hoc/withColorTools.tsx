import { ScaleSetterButton } from "../components/ScaleSetterButton";

export function withColorTools<P extends { color: string }>(
  Component: React.ComponentType<P>
): React.FC<P> {
  // This component receives props and returns another component
  return function WithColorTools(props: P) {
    return (
      <div className="relative group">
        <Component {...props} />
        <ScaleSetterButton color={props.color} scaleType="from" />
        <ScaleSetterButton color={props.color} scaleType="to" />
      </div>
    );
  };
}
