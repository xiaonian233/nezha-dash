"use client";

//import { NetworkChartClient } from "@/app/(main)/ClientComponents/NetworkChart";
import ServerDetailChartClient from "@/app/(main)/ClientComponents/ServerDetailChartClient";
import ServerDetailClient from "@/app/(main)/ClientComponents/ServerDetailClient";
import TabSwitch from "@/components/TabSwitch";
import { Separator } from "@/components/ui/separator";
import { use, useState } from "react";

export default function Page(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params);
  const tabs = ["Detail"];
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <div className="mx-auto grid w-full max-w-5xl gap-2">
      <ServerDetailClient server_id={Number(params.id)} />
      <section className="flex items-center my-2 w-full">
        <Separator className="flex-1" />
        <div className="flex justify-center w-full max-w-[200px]">
          <TabSwitch
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>
        <Separator className="flex-1" />
      </section>
      <div style={{ display: currentTab === tabs[0] ? "block" : "none" }}>
        <ServerDetailChartClient
          server_id={Number(params.id)}
          show={currentTab === tabs[0]}
        />
      </div>
    </div>
  );
}
