import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1694153273644-68a821119e2e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjBza3l8ZW58MHx8MHx8fDA%3D";
   
     const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
     const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
     const RAIN_URL = "https://media.istockphoto.com/id/1053791954/photo/open-black-umbrella-in-wet-weather-autumn-rain-deep-sorrow-wet-umbrella-against-backdrop-of.webp?b=1&s=170667a&w=0&k=20&c=MUAgWEoZv83cEpOthggtCeFLXM5owhQC_gHbOKrM9_s=";

    return (
        <div className="InfoBox"> 
        
            <div className='cardContainer'>
           
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 
          ? RAIN_URL
          : info.temp > 15 
          ? HOT_URL
          : COLD_URL
        }
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80 
          ? <ThunderstormIcon/>
          : info.temp > 15 
          ? <WbSunnyIcon/>
          : <AcUnitIcon/>
        }
        
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
           <p>Temperature = {info.temp}&deg;C</p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}&deg;C</p>
           <p>Max Temp = {info.tempMax}&deg;</p>
           <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}.</p>
           <p></p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    );
}