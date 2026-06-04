import React from 'react';
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { IoChevronDown } from 'react-icons/io5'; // Аккуратная стрелочка вниз

// 1. МАССИВ ДАННЫХ ДЛЯ FAQ
const faqData = [
    {
        id: 'panel1',
        question: "Можно ли использовать материнский капитал для первоначального взноса?",
        answer: `Да, возможно. Если средств материнского капитала не хватает для первоначального взноса, то вы можете добавить собственные средства.

После рассмотрения пакета документов банк рассчитывает сумму кредита, который он может выдать на данных условиях. После этого возможны два варианта:

— увеличение максимальной суммы кредита на величину материнского капитала с автоматическим уменьшением первоначального взноса;
— использование материнского капитала для первоначального взноса без увеличения суммы кредита.`
    },
    {
        id: 'panel2',
        question: "Нужно ли привозить бумажные документы или все можно отправить электронно?",
        answer: "Для подачи заявки на ипотеку достаточно сканов или фото всех документов. Анкету на кредит также можно подписать дистанционно."
    },
    {
        id: 'panel3',
        question: "Есть ли требование к гражданству?",
        answer: "По стандартным программам требования к гражданству нет. Ипотека с Господдержкой и Семейная ипотека распространяется только на граждан РФ."
    },
    {
        id: 'panel4',
        question: "Я работаю неофициально. У меня есть шанс получить ипотеку?",
        answer: "Да, ипотеку получить возможно. Практически все наши банки-партнеры могут рассмотреть заявку на ипотечный кредит по двум документам, без предоставления документов о трудоустройстве. Для этого необходимо заполнить анкету, паспорт и СНИЛС."
    }
];

export default function FaqSection() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                maxWidth: '80%',
                margin: '0 auto',
                padding: { xs: '40px 0', md: '80px 0' },
                backgroundColor: '#FFFFFF'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 5,
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: '20px',
                    textAlign: { xs: 'center', sm: 'left' }
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        color: '#000000',
                        fontSize: { xs: '28px', md: '42px' }
                    }}
                >
                    Ответы на <span style={{ color: '#E89F56' }}>вопросы</span>
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#E89F56',
                        color: '#FFFFFF',
                        borderRadius: '0px',
                        textTransform: 'none',
                        padding: '10px 24px',
                        fontWeight: '500',
                        boxShadow: 'none',
                        fontSize: '14px',
                        '&:hover': { backgroundColor: '#d48f45', boxShadow: 'none' }
                    }}
                >
                    Перезвоните мне
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {faqData.map((item) => (
                    <Accordion
                        key={item.id}
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                        disableGutters
                        elevation={0}
                        sx={{
                            backgroundColor: '#F4F4F4',
                            borderRadius: '0px',
                            '&:before': { display: 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={
                                <Box
                                    sx={{
                                        backgroundColor: '#FFFFFF',
                                        borderRadius: '50%',
                                        width: '36px',
                                        height: '36px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0px 2px 8px rgba(0,0,0,0.05)'
                                    }}
                                >
                                    <IoChevronDown size={18} color="#000000" />
                                </Box>
                            }
                            sx={{
                                padding: { xs: '15px 20px', md: '25px 40px' },
                                '& .MuiAccordionSummary-content': { margin: 0 }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#000000',
                                    fontSize: { xs: '16px', md: '20px' },
                                    lineHeight: 1.4,
                                    maxWidth: '90%'
                                }}
                            >
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                padding: { xs: '0 20px 25px 20px', md: '0 40px 35px 40px' },
                                backgroundColor: '#F4F4F4'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#333333',
                                    fontSize: { xs: '14px', md: '15px' },
                                    lineHeight: 1.7,
                                    whiteSpace: 'pre-line'
                                }}
                            >
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

        </Box>
    );
}