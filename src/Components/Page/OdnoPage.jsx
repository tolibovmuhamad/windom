import SectionHome10 from "../HomePage/SectionHome10";
import SectionIzumrud9 from "../IzumrudniyPage/SectionIzumrud9";
import SectionOdno1 from "../OdnoPage/SectionOdno1";
import SectionOdno2 from "../OdnoPage/sectionOdno2";
import img from '../../assets/image copy 49.png'
import img1 from '../../assets/image copy 50.png'


export default function OdnoPage() {
  return (
    <>
      <SectionOdno1 img={img}/>
      <SectionOdno2 img={img1} name={"ОдноЭтажний"}/>
      <SectionIzumrud9/>
      <SectionHome10/>
    </>
  )
}
