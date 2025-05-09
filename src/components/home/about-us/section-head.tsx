export const SectionHead = ({ label }: { label: string }) => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-productsans  font-bold text-black leading-tight">
        {label}
      </h2>
    </>
  );
};
