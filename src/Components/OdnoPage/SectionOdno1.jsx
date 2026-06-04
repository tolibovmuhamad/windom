import { Box } from '@mui/material'
import img from '../../assets/image copy 49.png'

export default function SectionOdno1(props) {
    const {img} = props
  return (
    <Box>
        <img style={{width: "100%", height: "604px", paddingTop: "104px"}} src={img} alt="" />
    </Box>
  )
}
