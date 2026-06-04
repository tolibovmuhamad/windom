import SectionOdno1 from "../OdnoPage/SectionOdno1";
import img from '../../assets/image copy 54.png'
import SectionIzumrud9 from '../IzumrudniyPage/SectionIzumrud9'
import SectionHome10 from '../HomePage/SectionHome10'
import SectionVse1 from "../VsedomaPage/SectionVse1";
import SectionVse2 from "../VsedomaPage/SectionVse2";

export default function VsedomaPage() {
    return (
        <>
            <SectionOdno1 img={img} />
            <SectionVse1/>
            <SectionVse2/>
            <SectionIzumrud9 />
            <SectionHome10 />
        </>
    )
}
