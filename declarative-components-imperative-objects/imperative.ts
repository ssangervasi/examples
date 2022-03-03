let path = svg.select("path");
// "size" is D3-speak for how many elements were found.
if (path.size === 0) {
  path = svg.append("path");
}
path.attr("stroke", "#D00000");
