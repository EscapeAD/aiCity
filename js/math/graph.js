class Graph {
    constructor(points = [], segments = []){
        this.points = points;
        this.segments = segments;
    }
    
    addPoint(point){
        this.points.push(point)
    }
    
    addSegment(segment){
        this.segments.push(segment)
    }
    removeSegment(seg){
        this.segments.splice(this.segments.indexOf(seg), 1)
    }
    removePoint(point){
        this.points.splice(this.points.indexOf(point), 1)
    }
    containsPoint(point){
        return this.points.find(p=> p.equals(point))
    }

    containsSegment(segment){
        return this.segments.find(p=> p.equals(segment))
    }

    tryAddPoint(point){
        if(!this.containsPoint(point)){
            this.addPoint(point)
            return true;
        }
        return false;
    }

    tryAddSegment(segment){
        if(!this.containsSegment(segment)){
            this.addSegment(segment)
            return true;
        }
        return false;
    }

    draw(ctx){
        for (const seg of this.segments) {
            seg.draw(ctx)
        }
        for (const point of this.points){
            point.draw(ctx)
        }
    }
}