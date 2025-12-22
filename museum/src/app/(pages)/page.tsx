import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/container";
import HeroBaner from "@/components/section/hero-baner";

export default function Home() {
  return (
    <div className="">
      <main>
          <Container>
              <HeroBaner />
          </Container>

      </main>
    </div>
  );
}
