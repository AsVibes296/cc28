class Sling{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB
            //stiffness:0.04,
           // length:1
        }
        this.pointB=pointB
        this.chain=Constraint.create(options)
        World.add(world, this.chain)
        
    }
    fly(){
        this.chain.bodyA=null
    }
    display(){
        if(this.chain.bodyA!==null){
        var point1=this.chain.bodyA.position
        var point2=this.pointB
        strokeWeight(4)
         line (point1.x,point1.y,point2.x,point2.y)
    }
}
}

