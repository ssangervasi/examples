const Circles: React.FC = () => {
  const svgRef = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Draw ten red circles
    for (let i = 1; i <= 10; i++) {
      svg
        .append("circle")
        .attr("stroke", "#D00000")
        .attr("cx", i * 20)
        .attr("cy", 10)
        .attr("r", 10);
    }
  });

  return <svg ref={svgRef} />;
};
