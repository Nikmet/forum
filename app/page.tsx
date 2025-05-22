import { Container } from "@/components/container";
import { Cta } from "@/components/cta";
import { Slider } from "@/components/slider";
import { Sponsors } from "@/components/sponsors";
import { What } from "@/components/what";
import { Where } from "@/components/where";
import { Who } from "@/components/who";

export default function HomePage() {
    return (
        <Container>
            <Slider className="mb-8" />
            <Who className="mb-8" />
            <What className="mb-8" />
            <Sponsors className="mb-8" />
            <Where className="mb-8" />
            <Cta className="mb-8" />
        </Container>
    );
}
