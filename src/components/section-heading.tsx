type SectionHeadingProps = {
  id: string;
  children: string;
};

export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="font-serif text-3xl tracking-tight text-ink sm:text-4xl print:text-[1.6rem]"
    >
      {children}
    </h2>
  );
}
