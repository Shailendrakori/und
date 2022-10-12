import React, { useState, useEffect } from 'react'
import { Card, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import "../Pages/Homee.css"
import Datacard from "../Pages/Datacard"
import Button from '@mui/material/Button';
import axios from "axios";





const Cardd = () => {

    const [noelement, setNoofelement] = useState(4)
    const Loadmore = () => {
        setNoofelement(noelement + noelement);
    }
    const slice = Datacard.slice(0, noelement);

    const [myData, setMydata] = useState([]);
    const [isError, setIserror]= useState("");


    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                // console.log(res.data)
                setMydata(res.data)
            })
            // .catch((error) => {
            //     setIserror(error.message)
            // })

    }, []);
    return (
        <>
{isError !=== "" && <h2>{isError}</h2>}

            <Box>

                <Box sx={{ flexGrow: 1, padding: "9%", paddingTop: "20%", justifyContent: "center" }}>
                    <Grid container spacing={2}>
                        {myData.map((item, index) => {
                            return (
                                <Grid key={index} xs={12} md={3} sx={{ padding: "4px" }}>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>

                                            <Typography sx={{ fontSize: 24, }} color="text.secondary" gutterBottom>
                                                {item.title.slice(0, 5).toUpperCase()}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                {item.body.slice(0, 50)}
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
}

export default Cardd;
