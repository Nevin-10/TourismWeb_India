import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import image0 from './Images/0.jpg'
import image1 from './Images/1.jpg'
import image2 from './Images/2.jpg'
import image3 from './Images/3.jpg'
import image4 from './Images/4.jpg'
import image5 from './Images/5.jpg'
import image6 from './Images/6.jpg'
import image7 from './Images/7.jpg'
import image8 from './Images/8.jpg'
import image9 from './Images/9.jpg'




const images = [image0,image1,image2,image3,image4,image5,image6,image7,image8,image9];







const Card1 = ({id,name,desc,link}) =>
{
 let linked = {link}
 let linking = linked.link

 
  // const [buttonClicked, setButtonClicked] = useState(false);

  // const handleClick = () => {
  //   setButtonClicked(true);
  // }

  // if(buttonClicked)
  // {
  //   window.location.href = linking

  // }


 function handleClick() {

  window.location.href = linking
  // window.open(linking , '_blank');
}





 
  
    return(
      
       
        <div className='tc bg-light-green dib br3 ma2 grow bw2 shadow-5'>
          <Card sx={{ maxWidth: 400 }}>
         
                    <CardMedia
                      
                        sx={{height: 150}}
                        image={images[id]}
                        
                    ></CardMedia>
              
         <CardContent>
          <Typography  gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{fontFamily:"monospace",fontWeight:'bold'}}>
            {desc}
          
        </Typography>




         </CardContent>

         <CardActions>
         
          <Button variant='outlined' size='medium' color='primary' onClick={handleClick}>Visit</Button>
          
          {/* { console.log({link}) */} 
          
          
         </CardActions>














          </Card>
          
       

        </div>
    );
}

export default Card1;