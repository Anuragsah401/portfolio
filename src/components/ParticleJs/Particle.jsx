import React from 'react'
import Particles from "react-tsparticles";

const Particle = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes
        // or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div>
            <Particles
                init={particlesInit}
                className="-z-50 fixed"
                loaded={particlesLoaded}
                options={{
                fpsLimit: 120,
                background: {
                    color: "#151931"
                },
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "pop"
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                            parallax: {
                                enable: true,
                                force: 30,
                                smooth: 10
                            }
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 10
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#ffffff"
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: "out",
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        animation: {
                            enable: false,
                            speed: 0.05,
                            sync: true,
                            startValue: "max",
                            count: 1,
                            destroy: "min"
                        },
                        value: {
                            min: 0,
                            max: 0.5
                        }
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 5
                        }
                    }
                }
            }}/>
        </div>
    )
}

export default Particle
