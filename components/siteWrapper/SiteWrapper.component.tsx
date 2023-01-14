import React from "react";

export default function SiteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-[10vw] xl:px-[20vw]">
      {React.Children.map(children, (child) => (
        <div className="py-20" key={Math.random()}>{child}</div>
      ))}
    </main>
  );
}
