var rover = { 
  direction:"N",
  x: 0,
  y: 0,
  travelLog: []
};

function turnLeft(rover){
  switch(rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
    default:
    console.log("This direction doesn't exist");
    break;
  }
  console.log("turnLeft was called!");
  console.log("Rover is now facing: " + rover.direction);
}

function turnRight(rover){
  switch(rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
    default:
    console.log("This direction doesn't exist");
    break;
  }
  console.log("turnRight was called!");
  console.log("Rover is now facing: " + rover.direction);
}

function moveForward(rover){
  var movementDone = false;
  switch(rover.direction){
    case "N":
    if(rover.y>0){
      rover.y-=1;
      movementDone = true;
    }
    break;
    case "E":
    if(rover.x<9){
      rover.x+=1;
      movementDone = true;
    }
    break;
    case "S":
    if(rover.y<9){
      rover.y+=1;
      movementDone = true;
    }
    break;
    case "W":
    if(rover.x>0){
      rover.x-=1;
      movementDone = true;
    }
    break;
  }

  if(movementDone){
    console.log("moveForward was called!");
    console.log("Rove is now in the position: x="+rover.x+" y="+rover.y);
    console.log("Rover is facing: " + rover.direction);
    rover.travelLog.push("x: "+rover.x,"y: "+rover.y)
  } else {
    console.log("You will roam off the map!");
    console.log("moveForward was cancelled.");
    console.log("Rover is in the position: x="+rover.x+" y="+rover.y);
  }
}

function moveBackward(rover){
  var movementDone = false;
  switch(rover.direction){
    case "N":
    if(rover.y<9){
      rover.y+=1;
      movementDone = true;
    }
    break;
    case "E":
    if(rover.x>0){
      rover.x-=1;
      movementDone = true;
    }
    break;
    case "S":
    if(rover.y>0){
      rover.y-=1;
      movementDone = true;
    }
    break;
    case "W":
    if(rover.x<9){
      rover.x+=1;
      movementDone = true;
    }
    break;
  }

  if(movementDone){
    console.log("moveBackward was called!");
    console.log("Rover is now in the position: x="+rover.x+" y="+rover.y);
    console.log("Rover is facing: " + rover.direction);
    rover.travelLog.push("x: "+rover.x,"y: "+rover.y)
  } else {
    console.log("You will roam off the map!");
    console.log("moveBackward was cancelled.");
    console.log("Rover is in the position: x="+rover.x+" y="+rover.y);
  }
}

function commandList(commands){
  for(var i=0; i<commands.length; i++){
    if(commands[i] === "f"){
      moveForward(rover);
    }else if(commands[i] === "r"){
      turnRight(rover);
    }else if(commands[i] === "l"){
      turnLeft(rover);
    }else if(commands[i] === "b"){
      moveBackward(rover);
    }else{
      console.log("Command not found");
    }
  }
  for(var i=0; i<rover.travelLog.length; i++){
    console.log(rover.travelLog[i]);
  }
}
