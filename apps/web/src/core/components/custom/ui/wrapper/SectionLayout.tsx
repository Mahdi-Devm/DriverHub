import PagesContainer from "./PagesContainer";
import type { ReactNode } from "react";

function SectionLayout({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return (
    <section className={`section-layout ${classname ? classname : ""}`}>
      <PagesContainer>{children}</PagesContainer>
    </section>
  );
}
export default SectionLayout;
