import React from 'react';
import Card from 'react-bootstrap/Card';
import img from './../picture/pexels-pixabay-209841.jpg';

const SectionCard = () => {
    return (
        <Card className="bg-dark text-white">
      <Card.Img src={img} />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        Football (also known as association football or soccer) is a team sport played between two teams of 11 players each. It is widely considered to be the most popular sport in the world. A ball game, it is played on a rectangular grass field, or occasionally an artificial turf, with a goal at each end of the field. The object of the game is to score by manoeuvring the ball into the opposing goal; only the goalkeepers may use their hands or arms to propel the ball in general play. The team that scores the most goals by the end of the match wins. If the score is tied at the end of the game, either a draw is declared or the game goes into extended time, depending on the format of the competition.

      The modern game was codified in England following the formation of the Football Association, whose 1863 Laws of the Game created the foundations for the way the sport is played today. Football is governed internationally by Fédération Internationale de Football Association (FIFA). The most prestigious international football competition is the World Cup, held every four years. This event, the most widely viewed and famous in the world, boasts twice the audience of the Summer Olympics.
        </Card.Text>
        <Card.Text>See All</Card.Text>
      </Card.ImgOverlay>
    </Card>
    );
};

export default SectionCard;




