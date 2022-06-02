import * as React from 'react';
//import {useEffect } from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
//import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import { Container } from '@mui/system';
//import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import image2 from './Image/image2.jpg';
import image1 from './Image/image1.jpg';
import logo from './Image/logo.jpg';
import logo2 from './Image/logo2.jpg';

console.log(image2);
console.log(image1);
console.log(logo);
console.log(logo2);




export default function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  
  

  

  

 
  return (
    
   
    <Container maxWidth="sm">
<br></br>
        
            <Card sx={{ maxWidth: 345,}}>
              <CardHeader
                 avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={logo}>
                        B
                    </Avatar>
                }
                action={
                  <div>
                    <IconButton

                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    >
                        
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                  </div>
                }
                title="Bhaktesh Patel"
                subheader="October 05, 2000"
            />
            
            <CardMedia
                component="img"
                height="194"
                src={image1} alt="Tiger"
            />
     

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Comment">
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                'Tiger King.' They are absolutely gone with the fairies, they're all absolutely raving out of the box, the lot of them. 
                All those people with animals like tigers, who've got their own zoos in America, 
                and one guy's got something like 2,000 tigers in his back garden. It's absolutely mad.
                </Typography>
            </CardContent>

    </Card>
    <br></br>
    
    <Card sx={{ maxWidth: 345,}}>
              <CardHeader
                 avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={logo2}>
                        B
                    </Avatar>
                }
                action={
                  <div>
                  <IconButton

                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  >
                      
                      <MoreVertIcon />
                  </IconButton>
                  <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                </div>
                }
                title="Kevin Systrom"
                subheader="December 30, 1983"
            />
            <CardMedia
                component="img"
                height="194"
                src={image2} 
                alt='Flower'
            />
     

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Comment">
                    <CommentIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                A flower cannot blossom without sunshine, and a man cannot live without love.
                </Typography>
            </CardContent>

    </Card>
    </Container >

       
  );
}