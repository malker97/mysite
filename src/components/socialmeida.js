import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum,faBattleNet,faTwitter, faWeibo, faWeixin, faGithub, faFacebook, faBilibili} from '@fortawesome/free-brands-svg-icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './socialmeida.css';
import { Button } from '@mui/material';

const icons = [
    {id: 1, name: faTwitter, color:'#1DA1F2', link:'https://twitter.com/MallkerZ'},
    {id: 2, name: faGithub, color:'#171515', link:'https://github.com/malker97'},
    {id: 3, name: faWeibo, color:'#DF2029'},
    {id: 4, name: faWeixin, color:'#09B83E'},
    {id: 5, name: faFacebook, color:'#1877F2'},
    {id: 6, name: faBilibili, color:'#4eabe6', link :'https://space.bilibili.com/99589773'},
    {id: 7, name: faBattleNet, color:'#ace5ee'},
    {id: 8, name: faEthereum, color:'#c99d66', link:'https://etherscan.io/address/0x3343b5CA4BC8086acf984f3E2ace6f7d885Cd58d'},
];
const SocialMedia = (props) => {
    return(
        <main>
            <div style={{maxWidth: 600,
            margin: '0 auto',
            }}>
            <Typography component="h1" variant="h2" align="center" style={{color:"white"}} gutterBottom>
              Social Media List:
            </Typography>
            <Grid container spacing={2}>
            {icons.map(icon => (
                <Grid item xs={3}>
                    <Button href={icon.link} >
                    <Typography align='center'>
                    <FontAwesomeIcon 
                    className='superlink-link-wrapper'
                    icon={icon.name}
                    color={icon.color}/>
                    </Typography>
                    </Button>
                </Grid>
            ))}
            </Grid>
            </div>
        </main>
    );
};

export default SocialMedia;