import React from "react";

export default function SiteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative top-[100px] ">
      {React.Children.map(children, (child) => (
        <div className="mb-[100px]" key={Math.random()}>{child}</div>
      ))}
    </main>
  );
}
