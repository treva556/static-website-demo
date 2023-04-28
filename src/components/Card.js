import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
  import image from '../pngs/soccer.png'
   
  function Card1() {
    return (
      <Card className="w-102">
        <CardHeader color="blue" className="relative h-96">
          <img
            src= {image}
            alt="img-blur-shadow"
            className="h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
             Football
          </Typography>
          <Typography>
          football, also called association football or soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle the ball and may do so only within the penalty area surrounding the goal. The team that scores more goals wins.
          </Typography>
        </CardBody>
        
      </Card>
    );
  }

  export default Card1