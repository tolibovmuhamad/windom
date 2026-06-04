import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import img from '../../assets/image copy 19.png'

export default function SectionIpoteka1() {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '550px',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#4A5568',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: {
                    xs: '140px 20px 40px 20px', 
                    md: '140px 0 80px 0'       
                }
            }}
        >
            <Box
                sx={{
                    maxWidth: '80%',
                    width: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#FFFFFF'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: { xs: '10px', sm: '20px' },
                        mb: 3
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontSize: { xs: '42px', sm: '60px', md: '80px' },
                            lineHeight: 1
                        }}
                    >
                        Ипотека от
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: '#FFFFFF',
                            padding: { xs: '5px 20px', md: '10px 30px' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: '900',
                                color: '#E89F56',
                                fontSize: { xs: '42px', sm: '60px', md: '80px' },
                                lineHeight: 1
                            }}
                        >
                            4%
                        </Typography>
                    </Box>
                </Box>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'normal',
                        maxWidth: '750px',
                        fontSize: { xs: '16px', md: '20px' },
                        lineHeight: 1.5,
                        mb: 1
                    }}
                >
                    Уникальные ипотечные программы на специальных условиях.
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'normal',
                        maxWidth: '750px',
                        fontSize: { xs: '16px', md: '20px' },
                        lineHeight: 1.5,
                        mb: 1
                    }}
                >
                    Просто заполните анкету и получите одобрение...
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '18px', md: '22px' },
                        mb: 5
                    }}
                >
                    Всего шаг — до дома вашей мечты!
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#E89F56',
                        color: '#FFFFFF',
                        padding: '14px 40px',
                        borderRadius: '0px',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: '500',
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: '#d48f45',
                            boxShadow: 'none'
                        }
                    }}
                >
                    Рассчитать платёж
                </Button>

            </Box>
        </Box>
    );
}