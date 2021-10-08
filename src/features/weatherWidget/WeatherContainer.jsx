import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import cx from "classnames";
import React from "react";
import SliderWrapper from "../../components/shared/sliderWrapper";
import styles from "./weatherCard.module.css";

import suncon from "../../images/suncon.png";
import cloudcon from "../../images/cloudycon.png";
import lightraincon from "../../images/lightraincon.png";
import lightningcon from "../../images/lightningcon.png";
import heavyraincon from "../../images/heavyraincon.png";
import smokecon from "../../images/smokecon.png";

const weathericons = {
  Clouds: cloudcon,
  Clear: suncon,
  Drizzle: lightraincon,
  Rain: heavyraincon,
  Thunderstorm: lightningcon,
  Smoke: smokecon,
};

export default function WeatherContainer(props) {
  return (
    <Container>
      <SliderWrapper>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
            Today
          </Typography>
          <CardMedia
            className={styles.image}
            component="img"
            alt="Sun"
            image={suncon}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            component="p"
          >
            23
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            09 -Oct
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
           Clear
          </Typography>
        </CardContent>


        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
            Tomorrow 
          </Typography>
          <CardMedia
            className={styles.image}
            component="img"
            alt="Sun"
            image={suncon}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            component="p"
          >
            23
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            09 -Oct
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
           Clear
          </Typography>
        </CardContent>


        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
            Wednesday  
          </Typography>
          <CardMedia
            className={styles.image}
            component="img"
            alt="Sun"
            image={suncon}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            component="p"
          >
            23
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            09 -Oct
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
           Clear
          </Typography>
        </CardContent>


        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
            Wednesday  
          </Typography>
          <CardMedia
            className={styles.image}
            component="img"
            alt="Sun"
            image={suncon}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            component="p"
          >
            23
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            09 -Oct
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
           Clear
          </Typography>
        </CardContent>


        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
            Wednesday  
          </Typography>
          <CardMedia
            className={styles.image}
            component="img"
            alt="Sun"
            image={suncon}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            component="p"
          >
            23
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            09 -Oct
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
           Clear
          </Typography>
        </CardContent>


        


        
      </SliderWrapper>
    </Container>
  );
}
