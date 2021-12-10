 class Led {
    constructor(num, color,points,radius, width) {
      this.num = num;
      this.color = color;
      this.points=points;
      this.radius=radius;
      
    }
    calcPointx(width) {
      return this.points[0]*(width/100)
    }
    calcPointy(height) {
      return this.points[1]*(height/100)
    }
  }
  export default Led
