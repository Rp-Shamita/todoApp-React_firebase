import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Tasks(props){
    const cards = props.array.map(task => {
        return(
            <div key={task.date} className="eachcard">
                <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        {/*<CardMedia>
          <img src="todo.jpg" alt="todo-app" />
        </CardMedia>*/}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {task.task}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            -task date
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </div>
        )
    })
    return(
        <div className="cards">
            {cards}
        </div>
    )
}

/*import * as React from 'react';


export default function ActionAreaCard() {
  return (
    
  );
}*/