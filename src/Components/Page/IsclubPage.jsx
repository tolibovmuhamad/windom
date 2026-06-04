import SectionHome10 from "../HomePage/SectionHome10";
import SectionIzumrud1 from "../IzumrudniyPage/SectionIzumrud1";
import SectionIzumrud2 from "../IzumrudniyPage/SectionIzumrud2";
import SectionIzumrud3 from "../IzumrudniyPage/SectionIzumrud3";
import SectionIzumrud4 from "../IzumrudniyPage/SectionIzumrud4";
import SectionIzumrud5 from "../IzumrudniyPage/SectionIzumrud5";
import SectionIzumrud8 from "../IzumrudniyPage/SectionIzumrud8";
import SectionIzumrud7 from "../IzumrudniyPage/SectionIzumrud7";
import SectionIzumrud9 from "../IzumrudniyPage/SectionIzumrud9";
import SectionIzumrud10 from "../IzumrudniyPage/SectionIzumrud10";
import img from '../../assets/image copy 32.png'
import img1 from '../../assets/image copy 33.png'
import img3 from '../../assets/image copy 35.png'
import img4 from '../../assets/image copy 36.png'
import img5 from '../../assets/image copy 37.png'

export default function IsclubPage() {
  return (
    <>
      <SectionIzumrud1 img={img} name={"Современный таунхаус-клуб в Казани"} name1={"IQ CLUB"}/>
      <SectionIzumrud2 img={img1}/>
      <SectionIzumrud3 />
      <SectionIzumrud4 />
      <SectionIzumrud5  img={img3}/>
      <SectionIzumrud8 />
      <SectionIzumrud7 img={img4}/>
      <SectionIzumrud9 />
      <SectionIzumrud10 img={img5}/>
      
      <SectionHome10/>
    </>
  )
}
