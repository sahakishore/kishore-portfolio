import React from 'react';
import { Card, Typography } from "@material-ui/core";
import skillLogoArr from './skills';

    const handleDragStart = (e) => e.preventDefault();

    const styles = {
        cardOuter: {
                            width: 300,
                            padding: 10,
                            backgroundColor: "#263238",
        },
        cardInner: {
                                height: 250,
                                backgroundColor: "#263238",
                                border: "2px solid #37474F",
        },
        typographyInner: {
                                   fontSize: "1.6em",
                                    dontWeight: "bold",
                                    textAlign: "center",
                                    textTransform: "uppercase",
                                    color: "#fff",
                                    opacity: "0.7",
                                    marginTop: 20,
        },
        imgOuter: { display: "flex", justifyContent: "center" },
        cardImg: { height: 150, width: 300, paddingTop: 30 },

    }

    const items =
        
           skillLogoArr.map((skill, index) => (
                
                    <Card
                        index={index}
                        elevation={0}
                        onDragStart={handleDragStart}
                        style={styles.cardOuter}
                    >
                        <Card
                            style={styles.cardInner}
                        >
                            <div style={styles.imgOuter}>
                                <img
                                    alt={skill.skillAlt}
                                    src={skill.logoLocation}
                                    style={styles.cardImg}
                                />
                            </div>
                            <Typography
                                style={styles.typographyInner}
                            >
                               {skill.skillName}
                            </Typography>
                        </Card>
                    </Card>
              

            ))
            
  
export default items