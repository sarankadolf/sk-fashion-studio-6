import React from 'react';
import {Box,Button} from '@material-ui/core';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';

// const textColor = {
//     max: '#303AB2',
//     babyshop: '#1eb9e3',
//     mothercare: '#1eb9e3',
//     centrepoint: '#1eb9e3',
//     lifestyle: '#242428',
//     shoemart: '#242428',
//     splash: '#242428',
//     homebox: '#242428'
// };
  
const useStyles = makeStyles(() => ({
    headerWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        ["@media (min-width:450px)"]: {
            display: "block",
        },
        ["@media (max-width:450px)"]:{
            display: "none",
        },
        background: "rgb(247, 248, 247)",
    },
    navBarDepartments:{
        width: "100%",
        display: "inline-flex",
        listStyle: "none",
        gap: "20px",
        alignItems: "center",
    },
    navBarLeft:{
        display: "inline-flex",
        alignItems: "center",
        gap: '5%'
    },
    navBarRight:{
        display: "inline-flex",
        alignItems: "center"
    },
    navBarWrapper:{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%"
    },
    navTitleLink:{
        textDecoration: "none",
        color: "Black",
        "&:hover":{ 
            color: "#303ab2",
        }
    },
    searchBox:{
        border: "none",
        width: "250px",
        height: "40px",
        padding: "0 10px",
        "&:focus-visible":{
            outline: "none"
        }
    },
    SiginOr:{
        padding: "0 10px"
    },
    navBarRight:{
        display: "flex",
        gap: "16px",
        alignItems: "center"
    }
}));

const Header = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <>
    <Box className={classes.headerWrapper}>
        <Box className={classes.navBarWrapper}>
            <Box className={classes.navBarLeft}>
                <Box className={classes.logo}>
                    <a href="">
                        <Image alt="" src="https://i1.lmsin.net/website_images/ae/logos/header/logo-max.svg" width="100" height="100"/>
                    </a>
                </Box>
                <ul className={classes.navBarDepartments}>
                    <li>
                        <a href="/ae/en/department/women" title="women" data-title="women" className={classes.navTitleLink}>Women</a>
                    </li>
                    <li >
                        <a href="/ae/en/department/mxkids" title="kids" data-title="kids" className={classes.navTitleLink}>Kids</a>
                    </li>
                    <li >
                        <a href="/ae/en/department/men" title="men" data-title="men" className={classes.navTitleLink}>Men</a>
                    </li>
                    <li >
                        <a href="/ae/en/department/beauty" title="beauty" data-title="beauty" className={classes.navTitleLink}>Beauty</a>
                    </li>
                    <li className={classes.navTitleLink} onClick={() => router.push('/studio/feed')}>
                        Studio
                    </li>
                </ul>
                <Box>
                    <input className={classes.searchBox} type="text" id="js-site-search-input" class="form-control" name="q" maxlength="100" placeholder="What are you looking for?" autocomplete="off" data-options="{&quot;autocompleteUrl&quot; : &quot;/ae/en/search/autocomplete/SearchBox&quot;,&quot;minCharactersBeforeRequest&quot; : &quot;
                    3&quot;,&quot;waitTimeBeforeRequest&quot; : &quot;500&quot;,&quot;displayProductImages&quot; : true}"></input>
                </Box>
            </Box>       
            <Box className={classes.navBarRight}>
                <span className={classes.accountActions} id="account-actions">
                    <a className={classes.navTitleLink} id="account-actions-signup" href="#" data-href="/ae/en/register" class="signin new" data-initiatedby="signup">Sign Up</a>
                    <span className={classes.SiginOr}>or</span>
                    <a className={classes.navTitleLink} id="account-actions-signin" href="#" data-href="/ae/en/login" class="signin flip-enable new" data-initiatedby="signin">Sign In</a>
                </span>

                <Button class="MuiButtonBase-root MuiButton-root MuiButton-text jss150" tabindex="0" type="button">
                    <span class="MuiButton-label">
                        <div class="MuiBox-root jss154">Basket</div>
                        <Image alt="" src="https://i1.lmsin.net/website_images/static-pages/brand_exp/images/basket-black-24.svg" width="16" height="16"/>
                    </span>
                </Button>
            </Box>
        </Box>
    </Box>
    </>
  )
}


export default Header;