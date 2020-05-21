import Link from 'next/link';
import React, { useState } from 'react';

import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import * as Example from '../ducks/example';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
});

const AppBarX = styled(AppBar)`
  position: unset;
  color: yellow;
`;

const Index: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const classes = useStyles();
  const list = useSelector(Example.selectors.list);

  return (
      <div className={classes.root}>
        <Dialog open={opened} onClose={() => setOpened(false)}>
          <DialogTitle>Dialog Sample</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Easy to use Material UI Dialog.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
                color="primary"
                onClick={() => setOpened(false)}
            >
              OKだよ
            </Button>
          </DialogActions>
        </Dialog>
        <AppBarX>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              TypeScript + Next.js + Material UI Sample
            </Typography>
          </Toolbar>
        </AppBarX>
        <Typography variant="h2" gutterBottom={true}>
          Material-UI
        </Typography>
        <Typography variant="h3" gutterBottom={true}>
          example project
        </Typography>
        <Typography variant="h4" gutterBottom={true}>
          (mode: {process.env.EXAMPLE_MODE})
        </Typography>
        <ul>
          {
            list && list.map((item, key) => <li key={key}>[{item.id}] {item.name}</li>)
          }
        </ul>
        <Typography gutterBottom={true}>
          <Link href="/about">
            <a>Go to the about page</a>
          </Link>
        </Typography>
        <Button
            variant="contained"
            color="secondary"
            onClick={() => setOpened(true)}
        >
          Open Dialog
        </Button>
        <style
            jsx={true}>{`
               .root {
                   text-align: center;
               }
           `}</style>
      </div>
  );
};

export default Index;
