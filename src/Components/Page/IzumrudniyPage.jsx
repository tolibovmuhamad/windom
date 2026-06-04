import SectionIzumrud1 from "../IzumrudniyPage/SectionIzumrud1";
import SectionIzumrud2 from "../IzumrudniyPage/SectionIzumrud2";
import SectionIzumrud3 from "../IzumrudniyPage/SectionIzumrud3";
import SectionIzumrud4 from "../IzumrudniyPage/SectionIzumrud4";
import SectionIzumrud5 from "../IzumrudniyPage/SectionIzumrud5";
import img from '../../assets/image copy 22.png'
import img2 from '../../assets/image copy 23.png'
import img3 from '../../assets/image copy 26.png'
import SectionIzumrud6 from "../IzumrudniyPage/SectionIzumrud6";
import SectionIzumrud7 from "../IzumrudniyPage/SectionIzumrud7";
import SectionIzumrud8 from "../IzumrudniyPage/SectionIzumrud8";
import SectionIzumrud9 from "../IzumrudniyPage/SectionIzumrud9";
import SectionIzumrud10 from "../IzumrudniyPage/SectionIzumrud10";
import img4 from '../../assets/image copy 27.png'
import img5 from '../../assets/image copy 28.png'
import img6 from '../../assets/image copy 31.png'
import SectionHome10 from '../HomePage/SectionHome10'

export default function IzumrudniyPage() {
    return (
        <>
            <SectionIzumrud1 img={img} name={"Коттеджный посёлок бизнес-класса"} name1={"ИЗУМРУДНЫЙ VILLAGE"}/>
            <SectionIzumrud2 img={img2}/>
            <SectionIzumrud3 />
            <SectionIzumrud4 />
            <SectionIzumrud5 img={img3}/>
            <SectionIzumrud6 img={img4}/>
            <SectionIzumrud7 img={img5}/>
            <SectionIzumrud8 />
            <SectionIzumrud9 />
            <SectionIzumrud10 img={img6}/>
            <SectionHome10/>
        </>
    )
}
