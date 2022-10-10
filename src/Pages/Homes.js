import React, { useState } from 'react'
import { Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "../Pages/Homee.css"
import Datacard from './Datacard';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Countdown from 'react-countdown';
import Remote from "../img/remote.png"
import callduty from "../img/callduty.png"
import freefire from "../img/freefire.png"
import csgo from "../img/csgo.png"
import apex from "../img/apex.png"
import valorent from "../img/valorent.png"
// import gameLogo from "./Datacard"
import FilledInput from '@mui/material/FilledInput';



import { useTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

// grid item 
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
// end grid item 

// card 
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

//   end card 




const gameLogo = [
    {
        id: "1",
        img: callduty,
    },
    {
        id: "2",
        img: freefire,
    },

    {
        id: "3",
        img: csgo,
    },

    {
        id: "4",
        img: apex,
    },

    {
        id: "5",
        img: valorent,
    },




]


export const Homes = (props) => {


    const [noelement, setNoofelement] = useState(4)
    const Loadmore = () => {
        setNoofelement(noelement + noelement);
    }
    const slice = Datacard.slice(0, noelement);
    const theme = useTheme();
    return (
        <>
            <CssBaseline />
            <Box className="home-sec-one" >
                <Box sx={{ flexGrow: 1, marginTop: "10%", justifyContent: "center" }}>

                    <Grid container >
                        <Grid md={1} xs={8}></Grid>
                        <Grid md={4} xs={12} sx={{ textAlign: "center" }}>
                            <Box className="filterr" ></Box>
                            <img src={Remote} height={240} />
                        </Grid>
                        <Grid md={6} sx={{ padding: "38px" }} xs={12}>
                            <Typography variant="h4" >
                                <span className="h4-home">Your fans. Your platform.</span>
                            </Typography>
                            <Typography variant="text" >
                                <span className='text-home' >
                                    Reach 100% of your fans, sell content &
                                    subscriptions, and take control of your fanbase.
                                    <br />
                                    Fangage is the all-in-one solution to create
                                    your own fan platform.</span>
                            </Typography>
                            <Grid container sx={{ marginTop: "10px" }}>
                                <Grid md={6} xs={12}>
                                    <TextField className="inputs" placeholder='enter email' />
                                    {/* <input className="inputs" sx={{ marginRight: "2px" }} placeholder="enter email.." /> */}
                                </Grid>
                                <Grid md={5} xs={12}>
                                    <Button size="small" variant="contained" className='button-bg' > Get Started</Button>
                                </Grid>
                            </Grid>


                        </Grid>

                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, marginTop: "10%", justifyContent: "center" }}>
                    {/*  count css   */}
                    <Grid container className='gaping' >
                        <Grid xs={12} md={2} sx={{ textAlign: "center" }}></Grid>
                        <Grid xs={12} md={3} sx={{ textAlign: "center" }}>
                            <Grid conatiner >
                                <Grid md={9} xs={12}>
                                    <Card className="countt" >
                                        <Typography className='count-text' variant="text">
                                            150 k+
                                        </Typography><br />
                                        <Typography className="countt-text" variant="text">
                                            Creators
                                        </Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} md={3} sx={{ textAlign: "center", padding: "5px" }}>
                            <Grid conatiner >
                                <Grid md={9} xs={12}>
                                    <Card className="countt" >
                                        <Typography className='count-text' variant="text">
                                            150 k+
                                        </Typography><br />
                                        <Typography className="countt-text" variant="text">
                                            in Gifts/yr
                                        </Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid xs={12} md={3} sx={{ textAlign: "center", padding: "5px" }}>
                            <Grid conatiner >
                                <Grid md={9} xs={12}>
                                    <Card className="countt" >
                                        <Typography className='count-text' variant="text">
                                            150 k+
                                        </Typography><br />
                                        <Typography className="countt-text" variant="text">
                                            Gifts Added
                                        </Typography>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/*  end count css   */}






                    {/* game-we-love css */}
                    <Grid container className='card-game-gap' sx={{ marginTop: "7%" }}>
                        <Grid xs={12} md={3} ></Grid>
                        <Grid xs={12} md={4} >
                            <Card className="card-game-we-love"><Typography variant="text" className="game-we-love" >  Games We love</Typography></Card>
                        </Grid>
                    </Grid>
                    {/* game-we-love css */}
                </Box>

            </Box>
            {/* game logo  */}
            <Box sx={{ flexGrow: 1, justifyContent: "center", marginTop: "10%" }}>
                <Grid container className='grid-coulumn-gapp'   >
                    {gameLogo.map((items) => {
                        return (
                            <Grid xs={12} md={2} sx={{ textAlign: "center", paddingLeft: "25px" }}>

                                <img height="140px" src={items.img} />

                            </Grid>
                        )
                    })}


                </Grid>
            </Box>

            {/* end game logo  */}


            <Box className="game-proud-sec">
                <Box sx={{ flexGrow: 1, justifyContent: "center" }}>

                    <Grid container >
                        <Grid className="ellipse2" md={12} xs={12}>

                            <Typography variant="h4" sx={{ textAlign: "center", padding: "3px",marginTop:"1%"}} className="h4-home">
                                Win. Win. When you spend through SABER.

                            </Typography>
                            <Box sx={{ textAlign: "center",marginBottom:"2%"  }}> <Typography variant="text"  >
                                <span className='text-home' >
                                    Earn 4X reward points for gaming spends. Redeem for your favourite game currency and other cool merchandise.</span>
                            </Typography></Box>

                        </Grid>

                    </Grid>

                    <Grid container sx={{ padding: "30px 10px 0px 10px " }} >
                        <Grid md={1} ></Grid>
                        <Grid md={6} >
                            <Card sx={{ display: 'flex', border: "2px solid white", borderRadius: "28px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151, backgroundColor: "rgba(102, 101, 101, 1)" }}
                                    image="/static/images/cards/live-from-space.jpg"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', backgroundColor: "black", width: "100%" }}>
                                    <CardContent>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Typography className="h4-home" variant="h5">
                                                #GameProud
                                            </Typography>
                                        </Box>
                                        <Box><Typography variant="text" className='text-home' sx={{ textAlign: "center", lineHeight: "3px", fontSize: "12px" }}  >
                                            Get access to the most exclusive gaming community in the country.
                                            Get cool free drops, offers on your favorite games, and much more
                                            as you interact with other gaming champions on our discord.
                                        </Typography></Box>

                                    </CardContent>

                                </Box>

                            </Card>
                        </Grid>
                        <Grid md={5}></Grid>
                    </Grid>
                    <Grid container sx={{ padding: "0px 10px 0px 10px " }} >
                        <Grid md={5} ></Grid>
                        <Grid md={6} sx={{ paddingTop: "15px" }}>
                            <Card sx={{ display: 'flex', border: "2px solid white", borderRadius: "28px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151, backgroundColor: "rgba(102, 101, 101, 1)" }}
                                    image="/static/images/cards/live-from-space.jpg"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', backgroundColor: "black", width: "100%" }}>
                                    <CardContent>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Typography className="h4-home" variant="h5">
                                                Exclusive Gaming Deals
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="text" className='text-home' sx={{ textAlign: "center", lineHeight: "3px", fontSize: "12px" }}  >
                                                Get access to a variety of gaming deals ranging from - Free
                                                Ingame currencies, Discounts on gaming gears, Exclusive
                                                Giveaways, and many more.
                                            </Typography>
                                        </Box>

                                    </CardContent>

                                </Box>

                            </Card>
                        </Grid>

                    </Grid>

                    <Grid container sx={{ padding: "0px 10px 0px 10px " }}  >
                        <Grid md={1} ></Grid>
                        <Grid md={6} sx={{ paddingTop: "15px" }}  >
                            <Card sx={{ display: 'flex', border: "2px solid white", borderRadius: "28px" }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151, backgroundColor: "rgba(102, 101, 101, 1)" }}
                                    image="/static/images/cards/live-from-space.jpg"
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', backgroundColor: "black", width: "100%" }}>
                                    <CardContent>
                                        <Box sx={{ textAlign: "center" }}>
                                            <Typography className="h4-home" variant="h5">
                                                Gamified Experience
                                            </Typography>
                                        </Box>
                                        <Box><Typography variant="text" className='text-home' sx={{ textAlign: "center", lineHeight: "3px", fontSize: "12px" }}  >
                                            SABER has made your spending even more rewarding than before.
                                            Our gamified mobile app takes your Payment and money
                                            management experience to a completely new level.
                                        </Typography></Box>

                                    </CardContent>

                                </Box>

                            </Card>
                        </Grid>
                        <Grid md={5} ></Grid>
                    </Grid>

                </Box>
               <Grid md={12} className="ellipse3" ></Grid>
            </Box>

            <Box sx={{ marginTop: "100%" }}>

                <Grid className='play-grid-gap' sx={{ padding: "20px" }} container>
                    <Grid md={1} ></Grid>
                    <Grid md={4} >
                        <Box >
                            <Typography variant="text" className='text-home'  >
                                <span style={{ fontSize: "15px", textAlign: "center", lineHeight: "3px", fontSize: "12px" }}>
                                    PLAY / EARN / REPEAT with
                                </span>
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant="h5">
                                <span className="h4-home">#GameProud</span>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="text" className='text-home'  >
                                <span style={{ fontSize: "15px", textAlign: "center", lineHeight: "9px", }}>
                                    A great way for gamers to level up their credit scores.</span>
                            </Typography></Box>
                    </Grid>
                    <Grid md={6}>
                        <Grid container >
                            <Grid md={8} xs={12}>
                                <TextField className="inputs" placeholder='enter email' />

                            </Grid>
                            <Grid md={4} xs={12}>

                                <Button size="small" variant="contained" className='button-bg' > Get Started</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </Box>









            <Box>
                <Box sx={{ flexGrow: 1, padding: "9%", paddingTop: "20%", justifyContent: "center" }}>
                    <Grid container spacing={2}>
                        {slice.map((item, index) => {
                            return (
                                <Grid key={index} xs={12} md={3} sx={{ padding: "4px" }}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>

                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                                {item.para}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                {item.head}
                                            </Typography>
                                            <Typography variant="body2">
                                                {item.para2}
                                                <br />

                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                            )
                        })}
                    </Grid>
                </Box>
            </Box>
            <Button variant="contained" onClick={() => Loadmore()}> Load more</Button>
        </>



    );
};