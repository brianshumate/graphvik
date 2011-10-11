$(document).ready(function() {
    var w = 810
    , h = 480

    var vis = d3.select("#gv").append("svg:svg")
    .attr("width", w)
    .attr("height", h);

    d3.json("js/gv.min828.json",
    function(json) {
        var nodename = function(d) {
            return d.name
        };
        var force = self.force = d3.layout.force()
        .nodes(json.nodes)
        .links(json.links)
        .linkDistance(10)
        .gravity(.24)
        .charge( -48)
        .size([w, h])
        .start();

        var link = vis.selectAll("line.link")
        .data(json.links)
        .enter().append("svg:line")
        .attr("class", "link")
        .attr("x1",
        function(d) {
            return d.source.x;
        })
        .attr("y1",
        function(d) {
            return d.source.y;
        })
        .attr("x2",
        function(d) {
            return d.target.x;
        })
        .attr("y2",
        function(d) {
            return d.target.y;
        });

        var node = vis.selectAll("g.node")
        .data(json.nodes)
        .enter().append("svg:g")
        .attr("class", "node")
        .call(force.drag);

        node.append("svg:image")
        .attr("class", "circle")
        .attr("xlink:href",
        function(d, val) {
            var val = d.name
          , rand = Math.floor(Math.random() * 2)
          , prefix = "http://cdn"
          , url = ".brianshumate.com/graphvik/";
            return prefix + rand + url + val;
        })
        .attr("x", "-8px")
        .attr("y", "-8px")
        .attr("width", "13px")
        .attr("height", "13px");

        node.append("svg:text")
        .attr("class", "nodetext")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(function(d) {
            return d.name
        });

        force.on("tick",
        function() {
            link.attr("x1",
            function(d) {
                return d.source.x;
            })
            .attr("y1",
            function(d) {
                return d.source.y;
            })
            .attr("x2",
            function(d) {
                return d.target.x;
            })
            .attr("y2",
            function(d) {
                return d.target.y;
            });

            node.attr("transform",
            function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        });
    });
});