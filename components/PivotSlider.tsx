"use client";

import { useState } from "react";
import { ArrowRight } from "react-feather";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";

type Transformation = {
  before: string;
  after: string;
};

export type PivotSection = {
  tabLabel: string;
  title: string;
  summary: string;
  howToReframe: string[];
  transformations: Transformation[];
};

export function PivotSlider({ sections }: { sections: PivotSection[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = sections[activeIndex];

  return (
    <div className="space-y-6">
      <div className="rounded-[5px] bg-[#BAD6EB]/50 px-3">
        <div className="flex flex-wrap items-stretch gap-6 overflow-x-auto px-3">
          {sections.map((section, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={section.tabLabel}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "flex h-10 items-center border-b-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors",
                  isActive
                    ? "border-[#334EAC] text-[#334EAC]"
                    : "border-transparent text-[#081F5C]/50 hover:text-[#081F5C]/50",
                ].join(" ")}
              >
                {section.tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      <Card className="bg-meteor">
        <div className="text-xl font-semibold text-galaxy">{activeSection.title}</div>
        <p className="mt-2 text-sm text-[#090814]">{activeSection.summary}</p>
        <div className="mt-4 text-sm text-[#090814]">
          <div className="font-semibold text-galaxy">How to Reframe</div>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            {activeSection.howToReframe.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 text-sm text-[#090814]">
          <div className="font-semibold text-galaxy">Example Transformations</div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
              <Badge className="w-fit">Before</Badge>
              <div className="hidden lg:block" aria-hidden="true" />
              <Badge className="w-fit">After</Badge>
            </div>
            <div className="space-y-4">
              {activeSection.transformations.map((item) => (
                <div
                  key={`row-${item.before}`}
                  className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch"
                >
                  <div className="flex h-full flex-col justify-between rounded-[18px] bg-[#BAD6EB]/50 p-5 text-[#334EAC]">
                    <p>{item.before}</p>
                  </div>
                  <div className="hidden lg:flex items-center justify-center">
                    <ArrowRight size={20} />
                  </div>
                  <div className="flex h-full flex-col justify-between rounded-[18px] bg-[#BAD6EB]/50 p-5 text-[#334EAC]">
                    <p>{item.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
