import { useState } from 'react';
import { Box, Typography, Button, MenuItem, Select, Slider, InputAdornment, OutlinedInput } from '@mui/material';

const initialBanks = [
  { id: 1, name: 'АО "Альфа банк"', rate: 4.1, payment: 4000, program: 'Семейная', type: 'family' },
  { id: 2, name: 'Банк ВТБ (ПАО)', rate: 6.0, payment: 4000, program: 'Господдержка', type: 'state' },
  { id: 3, name: 'ПАО Сбербанк', rate: 4.0, payment: 4000, program: 'IT специалистам', type: 'it' },
  { id: 4, name: 'ПАО "Совкомбанк"', rate: 4.0, payment: 4000, program: 'Семейная', type: 'family' },
];

export default function SectionIpoteka2() {
  const [propertyType, setPropertyType] = useState('all');
  const [project, setProject] = useState('all');
  const [mortgageType, setMortgageType] = useState('all');
  
  const [cost, setCost] = useState(3000000);
  const [initialFee, setInitialFee] = useState(2000000);
  const [monthlyPayment, setMonthlyPayment] = useState(60000);

  const filteredBanks = initialBanks.filter(bank => {
    if (mortgageType === 'all') return true;
    return bank.type === mortgageType;
  });

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log({ propertyType, project, mortgageType, cost, initialFee, monthlyPayment });
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
      <Typography variant="h3" sx={{ fontWeight: 'bold', textTransform: 'uppercase', mb: 5, color: '#000' }}>
        Ипотека
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '40px', alignItems: 'flex-start' }}>
        <Box component="form" onSubmit={handleCalculate} sx={{ flex: '0 1 40%', width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: '500', mb: 1 }}>Вид недвижимости</Typography>
              <Select fullWidth size="small" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} sx={{ borderRadius: '0px', backgroundColor: '#F8FAFC' }}>
                <MenuItem value="all">Все</MenuItem>
                <MenuItem value="flat">Квартира</MenuItem>
                <MenuItem value="townhouse">Таунхаус</MenuItem>
              </Select>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: '500', mb: 1 }}>Проект</Typography>
              <Select fullWidth size="small" value={project} onChange={(e) => setProject(e.target.value)} sx={{ borderRadius: '0px', backgroundColor: '#F8FAFC' }}>
                <MenuItem value="all">Все</MenuItem>
                <MenuItem value="izumrud">Изумрудный Village</MenuItem>
                <MenuItem value="iq">IQ CLUB</MenuItem>
              </Select>
            </Box>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: '500', mb: 1 }}>Вид ипотеки</Typography>
            <Select fullWidth size="small" value={mortgageType} onChange={(e) => setMortgageType(e.target.value)} sx={{ borderRadius: '0px', backgroundColor: '#F8FAFC' }}>
              <MenuItem value="all">Все</MenuItem>
              <MenuItem value="family">Семейная ипотека</MenuItem>
              <MenuItem value="state">Господдержка</MenuItem>
              <MenuItem value="it">IT ипотека</MenuItem>
            </Select>
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: '500', mb: 1 }}>Стоимость</Typography>
            <OutlinedInput
              fullWidth
              size="small"
              type="number"
              value={cost}
              onChange={(e) => setCost(Number(e.target.value))}
              endAdornment={<InputAdornment position="end">₽</InputAdornment>}
              sx={{ borderRadius: '0px', backgroundColor: '#F8FAFC' }}
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: '500', mb: 1 }}>Первоначальный взнос</Typography>
            <OutlinedInput
              fullWidth
              size="small"
              type="number"
              value={initialFee}
              onChange={(e) => setInitialFee(Number(e.target.value))}
              endAdornment={<InputAdornment position="end">₽</InputAdornment>}
              sx={{ borderRadius: '0px', backgroundColor: '#F8FAFC', mb: 1 }}
            />
            <Slider 
              value={initialFee} 
              min={0} 
              max={cost} 
              step={50000}
              onChange={(e, val) => setInitialFee(val)}
              sx={{ color: '#E89F56', padding: '0px' }} 
            />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: '500', mb: 1 }}>Ежемесячный платёж</Typography>
            <OutlinedInput
              fullWidth
              size="small"
              type="number"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(Number(e.target.value))}
              endAdornment={<InputAdornment position="end">₽</InputAdornment>}
              sx={{ borderRadius: '0px', backgroundColor: '#F8FAFC', mb: 1 }}
            />
            <Slider 
              value={monthlyPayment} 
              min={10000} 
              max={200000} 
              step={5000}
              onChange={(e, val) => setMonthlyPayment(val)}
              sx={{ color: '#E89F56', padding: '0px' }} 
            />
          </Box>
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth
            sx={{ backgroundColor: '#E89F56', color: '#FFF', borderRadius: '0px', padding: '12px 0', textTransform: 'none', fontWeight: 'bold', fontSize: '16px', boxShadow: 'none', '&:hover': { backgroundColor: '#d48f45', boxShadow: 'none' } }}
          >
            Рассчитать платёж
          </Button>
        </Box>
        <Box sx={{ flex: '0 1 60%', width: '100%', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {filteredBanks.length > 0 ? (
            filteredBanks.map((bank) => (
              <Box 
                key={bank.id}
                sx={{ 
                  flex: { xs: '1 1 100%', sm: '0 1 48%' }, 
                  border: '1px solid #E2E8F0',
                  padding: '30px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '220px',
                  backgroundColor: bank.name.includes('Сбербанк') ? '#F8FAFC' : '#FFFFFF' 
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '18px', color: '#000' }}>
                  {bank.name}
                </Typography>
                <Box sx={{ my: 2 }}>
                  <Typography variant="caption" sx={{ color: '#718096', display: 'block' }}>Ставка</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#000', mb: 1 }}>
                    {bank.rate} %
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: '500', color: '#000' }}>
                    от {bank.payment.toLocaleString()} ₽ / мес
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#718096', display: 'block' }}>Программа</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000' }}>
                    {bank.program}
                  </Typography>
                </Box>
              </Box>
            ))
          ) : (
            <Typography sx={{ color: '#A0AEC0', mt: 4, width: '100%', textAlign: 'center' }}>
              Нет доступных банков для выбранных условий.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}