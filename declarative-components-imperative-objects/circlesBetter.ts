const Circles: React.FC = () => {
  const [clicks, setClicks] = React.useState(0);

  const svgRef = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Draw a red circle for each click.
    for (let i = 1; i <= clicks; i++) {
      svg
        .append("circle")
        .attr("stroke", "#D00000")
        .attr("cx", i * 20)
        .attr("cy", 10)
        .attr("r", 10);
    }
  }, [clicks]);

  return <svg ref={svgRef} onClick={() => setClicks(clicks + 1)} />;
};
