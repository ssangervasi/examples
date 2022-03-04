import * as React from "react";
import * as d3 from "d3";

export const Circles: React.FC = () => {
  const [clicks, setClicks] = React.useState(0);

  const svgRef = React.useRef<SVGSVGElement>(null);
  const circlerRef = React.useRef(new Circler({ color: "red", radius: 10 }));

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

  return (
    <svg
      ref={svgRef}
      onClick={() => setClicks(clicks + 1)}
      style={{ backgroundColor: "gray" }}
    />
  );
};

/**
 * Class noun intentionally bad for comedic effect.
 */
class Circler {
  private svg?: d3.Selection<SVGSVGElement, unknown, null, unknown>;

  /**
   * The constructor is for configuration options, *not* for items that
   * can change between lifecycle steps.
   */
  constructor(public options: { color: string; radius: number }) {}

  /**
   * Name indicates a clear start of the lifecycle.
   */
  connect(el: SVGSVGElement) {
    this.svg = d3.select(el);
  }

  /**
   * Name indicates a clear end of the lifecycle.
   */
  disconnect() {
    this.clear();
    this.svg = undefined;
  }

  /**
   * Your public API can have other actions you deam necessary.
   */
  draw(n: number) {
    if (!this.svg) {
      // If you want to be strict, this could throw an error.
      return;
    }

    // Remove any existing circles.
    this.clear();

    // Draw all circles from scratch.
    for (let i = 1; i <= n; i++) {
      this.svg
        .append("circle")
        .attr("stroke", this.options.color)
        .attr("cx", i * this.options.radius * 2)
        .attr("cy", this.options.radius)
        .attr("r", this.options.radius);
    }
  }

  /**
   * Private API for reusing logic within the lifecycle.
   */
  private clear() {
    if (!this.svg) {
      return;
    }

    this.svg.selectAll("circle").remove();
  }
}
