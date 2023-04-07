import React from "react";

export default function AboutUs() {
  return (
    <div className="w-full px-[30px] xl:w-fit xl:p-0 mx-auto">
      <h2 className="text-primary pb-[50px] font-medium text-4xl text-center">
        Om oss
      </h2>
      <div className="xl:w-[600px] flex flex-col gap-[25px]">
        <p>
          Velkommen til{" "}
          <span className="font-bold">Herstad Vaktmesterfirma</span>!
        </p>
        <p>
          Vi er en bedrift som tilbyr vaktmestertjenester til både private og
          bedrifter. Vårt mål er å tilby pålitelige og profesjonelle tjenester
          til konkurransedyktige priser. Vårt team består av dedikerte og
          hardtarbeidende vaktmestere som er klare til å ta på seg oppgavene
          dine, uansett størrelse og kompleksitet.{" "}
        </p>
        <p>
          Vi utfører alt fra daglig renhold og vedlikehold til snømåking og graving. Vi tar ansvar for oppgavene våre og
          sørger for at alle jobber utføres med høy kvalitet og til avtalt tid.
          Vi tilbyr skreddersydde løsninger for å imøtekomme behovene og
          budsjettet til hver enkelt kunde. Ta kontakt med oss i dag for å
          diskutere dine vaktmesterbehov og hvordan vi kan hjelpe deg!
        </p>
      </div>
    </div>
  );
}
