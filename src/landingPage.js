import React from 'react';
import animateScrollTo from 'animated-scroll-to';

import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import {
  Tabs, Icon, Carousel, Card, Row, Col, Collapse,
  Button, Modal, TreeSelect, Divider, Typography, Popover,
  BackTop, Tooltip
} from 'antd';
import Triangulation from './activities/vaporTriangulation'
import AboutMe from './activities/aboutMe'
import {BlogDrawer} from './activities/blogDrawer'

function Landing() {
  return (
    <div className="App">
      <BackTop />

      <center>
        <Typography.Title
          style={{
            color: 'white',
            paddingTop: '7%'
          }}
        >DOUTOURY</Typography.Title>
        <div>

        <BlogDrawer />
          <Divider type="vertical" />
          <Icon style={{ color: 'white' }} type="github"></Icon><a style={{ marginLeft: '10px' }} href="https://github.com/doutoury" target="_blank">github</a>
          <br></br>
          <br></br>
          <AboutMe />
        </div>
      </center>
      <Triangulation />
    </div>
  );
}

export default Landing;
