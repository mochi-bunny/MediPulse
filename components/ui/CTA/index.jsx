import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/cta-image.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
<div className="custom-screen">
    <div className="flex justify-center items-center gap-x-12 lg:flex">
        <div className="flex-1 sm:hidden lg:flex justify-center">
            <Image src={ctaImage} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
        </div>
    </div>
</div>

        </SectionWrapper>
    )
}

export default CTA