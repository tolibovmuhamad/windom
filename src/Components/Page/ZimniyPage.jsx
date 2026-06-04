import img from '../../assets/image copy 42.png'
import img1 from '../../assets/image copy 42.png'
import img2 from '../../assets/image copy 43.png'
import img3 from '../../assets/image copy 43.png'
import SectionHome10 from "../HomePage/SectionHome10";
import SectionIzumrud1 from '../IzumrudniyPage/SectionIzumrud1';
import SectionIzumrud2 from '../IzumrudniyPage/SectionIzumrud2';
import SectionIzumrud5 from '../IzumrudniyPage/SectionIzumrud5';
import SectionIzumrud9 from '../IzumrudniyPage/SectionIzumrud9';
import SectionIzumrud10 from '../IzumrudniyPage/SectionIzumrud10';


export default function ZimniyPage() {
    return (
        <>
            <SectionIzumrud1 img={img} name={"Построенные “код ключ” дома"} name1={"ЗИМНЯЯ ГОРКА"} />
            <SectionIzumrud2 img={img1} />
            <SectionIzumrud5 img={img2} />
            <SectionIzumrud9 img={img2} />
            <SectionIzumrud10 img={img3} />
            <SectionHome10 />
        </>
    )
}
