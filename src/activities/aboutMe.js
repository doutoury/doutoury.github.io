import React from 'react';
import {
    Tabs, Icon, Carousel, Card, Row, Col, Collapse,
    Button, Modal, TreeSelect, Divider, Typography
} from 'antd';

export default class AboutMe extends React.Component {
    render() {

        return (
            <div class='AboutMe' id="AboutMe">
                <center>
                    <Typography.Paragraph
                        style={{
                            color: 'white' ,
                            maxWidth:'350px'
                        }}
                    >Studying machine learning, reinforcement learning, datascience, and web application for service. Main interests are trading in the ficance and visual-information analysis in the computer vision.</Typography.Paragraph>
                </center>
            </div>
        )
    }
}