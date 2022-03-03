const Circles: React.FC = () => {
  const [clicks, setClicks] = React.useState(0);

  const svgRef = React.useRef<SVGSVGElement>(null);
  const circlerRef = React.useRef(new Circler());

  React.useEffect(() => {
    const circler = circlerRef.current;
    circler.connect(svgRef.current!);

    return () => {
      circler.disconnect();
    };
  }, []);

  React.useEffect(() => {
    circlerRef.current.draw(clicks);
  }, [clicks]);

  return <svg ref={svgRef} onClick={() => setClicks(clicks + 1)} />;
};
